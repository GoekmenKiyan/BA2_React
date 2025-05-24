import { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchRecipes } from "../api/spoonacular";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q");
  const diet = searchParams.get("diet");
  const sort = searchParams.get("sort");
  const cuisine = searchParams.get("cuisine");

  const observer = useRef();
  const lastRecipeRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prev) => prev + 20);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    // Reset on new search
    setRecipes([]);
    setOffset(0);
    setHasMore(true);
  }, [query, diet, sort, cuisine]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!query && !diet && !sort && !cuisine) return;

      setLoading(true);
      try {
        const newRecipes = await searchRecipes(query, diet, sort, cuisine, offset);
        if (newRecipes.length === 0) setHasMore(false);
        setRecipes((prev) => [...prev, ...newRecipes]);
      } catch (err) {
        console.error("Fehler beim Laden der Rezepte:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query, diet, sort, cuisine, offset]);

  const handleSearch = (newQuery, newDiet, newSort) => {
    const params = new URLSearchParams();
    if (newQuery) params.set("q", newQuery);
    if (newDiet) params.set("diet", newDiet);
    if (newSort) params.set("sort", newSort);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="p-8">
      <SearchBar onSearch={handleSearch} />

      {recipes.length === 0 && !loading && (
        <p className="mt-10 text-center text-zinc-500">Keine Ergebnisse gefunden.</p>
      )}

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => {
          if (index === recipes.length - 1) {
            return (
              <Link
                to={`/recipe/${recipe.id}`}
                key={recipe.id}
                ref={lastRecipeRef}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-1 text-center">{recipe.title}</h2>
                </div>
              </Link>
            );
          } else {
            return (
              <Link
                to={`/recipe/${recipe.id}`}
                key={recipe.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-1 text-center">{recipe.title}</h2>
                </div>
              </Link>
            );
          }
        })}
      </div>

      {loading && <p className="mt-6 text-center text-zinc-400">Lade mehr...</p>}
    </div>
  );
}
