import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useSearchParams, useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchParams] = useSearchParams();
  const { query: paramQuery } = useParams();

  const query = searchParams.get("q") || paramQuery || "";
  const diet = searchParams.get("diet") || "";
  const sort = searchParams.get("sort") || "";

  const observer = useRef();

  const lastRecipeRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prev) => prev + 12);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setRecipes([]);
    setOffset(0);
    setHasMore(true);
  }, [query, diet, sort]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!hasMore || loading) return;
      setLoading(true);
      try {
        const params = {
          query,
          diet,
          sort,
          number: 12,
          offset,
          apiKey: import.meta.env.VITE_SPOONACULAR_KEY,
        };

        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch",
          { params }
        );

        const newResults = response.data.results || [];

        const merged = [...recipes, ...newResults];
        const unique = Array.from(new Map(merged.map(r => [r.id, r])).values());

        setRecipes(unique);
        setHasMore(newResults.length === 12);
      } catch (error) {
        console.error("Fehler beim Laden der Rezepte:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [offset, query, diet, sort]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Suchergebnisse für: <span className="text-pink-500">"{query}"</span>
      </h1>

      {recipes.length === 0 && !loading && (
        <p className="text-gray-600">Keine Rezepte gefunden.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map((recipe, index) => {
          const isLast = index === recipes.length - 1;
          return (
            <div
              key={recipe.id}
              ref={isLast ? lastRecipeRef : null}
            >
              <RecipeCard recipe={recipe} />
            </div>
          );
        })}
      </div>

      {loading && (
        <p className="text-center text-gray-500 mt-6">Rezepte werden geladen…</p>
      )}
    </div>
  );
};

export default RecipeList;
