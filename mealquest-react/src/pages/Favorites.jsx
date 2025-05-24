import { useFavorites } from "../state/FavoritesContext";
import RecipeCard from "../components/RecipeCard";
import { exportFavoritesAsPDF } from "../utils/pdfExport";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-zinc-800">❤️ Meine Favoriten</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-zinc-500">Du hast noch keine Favoriten gespeichert.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          {/* ✅ Nur wenn Favoriten vorhanden sind */}
          <div className="text-center mt-10">
            <button
              onClick={() => exportFavoritesAsPDF(favorites)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold shadow"
            >
              📄 Als PDF exportieren
            </button>
          </div>
        </>
      )}
    </div>
  );
}
