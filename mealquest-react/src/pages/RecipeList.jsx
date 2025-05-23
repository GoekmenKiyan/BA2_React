import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
    if (!query) return;
    setLoading(true);
    searchRecipes(query, diet, sort)
      .then(setRecipes)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [query, diet, sort]);


  return (
    <div className="p-8">
      <SearchBar />

      {loading && <p>Lade Rezepte...</p>}

      {!loading && recipes.length === 0 && <p>Keine Ergebnisse gefunden.</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className="border rounded-md p-4 shadow-sm hover:shadow-md transition">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded"
                loading="lazy"
              />
              <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
