import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchRecipes } from "../api/spoonacular";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";


export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const diet = searchParams.get("diet");
  const sort = searchParams.get("sort");

  useEffect(() => {
    if (!query && !diet && !sort) return;
    setLoading(true);
    searchRecipes(query, diet, sort)
      .then(setRecipes)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [query, diet, sort]);

  return (
    <div className="p-8">
      <SearchBar />

      {loading && <p className="mt-10 text-center text-zinc-500">Lade Rezepte...</p>}
      {!loading && recipes.length === 0 && (
        <p className="mt-10 text-center text-zinc-500">Keine Ergebnisse gefunden.</p>
      )}

      {/* 🎯 Abstand zur SearchBar hinzufügen */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
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
        ))}
      </div>
    </div>
  );
}
