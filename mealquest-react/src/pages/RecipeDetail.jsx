import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeDetails } from "../api/spoonacular";
import { useFavorites } from "../state/FavoritesContext";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    getRecipeDetails(id)
      .then(setRecipe)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-8">Lade Rezept...</p>;
  if (!recipe) return <p className="p-8">Rezept nicht gefunden.</p>;

  const isFav = favorites.some((r) => r.id === recipe.id);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full rounded-md mb-6" />

      <button
        onClick={() => toggleFavorite(recipe)}
        className={`mt-4 px-4 py-2 rounded-md ${
          isFav ? "bg-red-600 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {isFav ? "❤️ Aus Favoriten entfernen" : "🤍 Zu Favoriten hinzufügen"}
      </button>

      <div className="mt-6 mb-4">
        <h2 className="text-xl font-semibold">Zutaten:</h2>
        <ul className="list-disc list-inside">
          {recipe.extendedIngredients.map((ingr) => (
            <li key={ingr.id}>{ingr.original}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Nährwerte:</h2>
        <p>
          Kalorien:{" "}
          {recipe.nutrition?.nutrients?.find((n) => n.name === "Calories")?.amount || "?"} kcal
        </p>
      </div>
    </div>
  );
}