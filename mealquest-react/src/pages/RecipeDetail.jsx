import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeDetails } from "../api/spoonacular";
import { useFavorites } from "../state/FavoritesContext";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("instructions");
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    getRecipeDetails(id)
      .then(setRecipe)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-10">Lade Rezept...</p>;
  if (!recipe) return <p className="text-center mt-10">Rezept nicht gefunden.</p>;

  const isFav = favorites.some((r) => r.id === recipe.id);
  const calories =
    recipe.nutrition?.nutrients?.find((n) => n.name === "Calories")?.amount || "?";

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 text-zinc-800 font-sans">
      {/* Gerichtstyp */}
      <p className="text-sm text-orange-600 uppercase font-medium tracking-wide text-center">
        {recipe.dishTypes?.join(" • ")}
      </p>

      {/* Titel */}
      <h1 className="text-4xl font-serif font-bold tracking-tight mt-2 text-center">
        {recipe.title}
      </h1>

      {/* Bild */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-2xl mx-auto rounded-xl my-6"
      />

      {/* Favoriten Button */}
      <button
        onClick={() => toggleFavorite(recipe)}
        className={`mb-8 w-full  px-4 py-3 rounded-md font-medium text-lg transition ${
          isFav
            ? "bg-red-600 text-white hover:bg-red-700"
            : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
        }`}
      >
        {isFav ? "❤️ Aus Favoriten entfernen" : "🤍 Zu Favoriten hinzufügen"}
      </button>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => setActiveTab("instructions")}
          className={`pb-2 text-md font-medium border-b-2 transition ${
            activeTab === "instructions"
              ? "text-orange-600 border-orange-500"
              : "text-zinc-400 border-transparent"
          }`}
        >
          Instructions
        </button>
        <button
          onClick={() => setActiveTab("ingredients")}
          className={`pb-2 text-md font-medium border-b-2 transition ${
            activeTab === "ingredients"
              ? "text-orange-600 border-orange-500"
              : "text-zinc-400 border-transparent"
          }`}
        >
          Ingredients
        </button>
      </div>

      {/* Content Switch */}
      {activeTab === "instructions" && (
        <div className="prose prose-zinc max-w-none text-left">
          {/* Zusammenfassung */}
          <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />

          {/* Schritt-für-Schritt */}
          <h3 className="text-lg font-bold mt-8">Zubereitung</h3>
          {/<li>/.test(recipe.instructions) ? (
            <div
              className="prose-zinc max-w-none mt-2"
              dangerouslySetInnerHTML={{
                __html: recipe.instructions,
              }}
            />
          ) : (
            <ol className="list-decimal list-inside space-y-2 mt-2 text-zinc-700">
              {(recipe.instructions || "")
                .split(/(?<=[.?!])\s+(?=[A-Z])/)
                .filter(Boolean)
                .map((step, i) => (
                  <li key={i}>{step.trim()}</li>
                ))}
            </ol>
          )}
        </div>
      )}

      {activeTab === "ingredients" && (
        <div className="text-left mt-6">
          <h3 className="text-lg font-bold mb-4">Zutaten</h3>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            {recipe.extendedIngredients?.map((ingr) => (
              <li key={ingr.id}>{ingr.original}</li>
            ))}
          </ul>

          <h3 className="text-md font-bold mt-6">Nährwerte</h3>
          <p>Kalorien: {calories} kcal</p>
        </div>
      )}
    </div>
  );
}