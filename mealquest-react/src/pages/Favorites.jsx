import { useFavorites } from "../state/FavoritesContext";
import { Link } from "react-router-dom";
import { exportFavoritesAsPDF } from "../utils/pdfExport";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Favoriten</h1>
        <button
            onClick={() => exportFavoritesAsPDF(favorites)}
            className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
            Als PDF exportieren 📄
        </button>
        <p>Du hast noch keine Rezepte gespeichert.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Deine Favoriten ❤️</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-1 text-center">{recipe.title}</h2>
                <p className="text-sm text-zinc-500 text-center">Details anzeigen →</p>
              </div>
            </Link>

            <div className="p-4 pt-0">
              <button
                onClick={() => toggleFavorite(recipe)}
                className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Entfernen ❤️
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}