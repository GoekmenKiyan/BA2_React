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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="border rounded-md p-4 shadow">
            <Link to={`/recipe/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
            </Link>
            <button
              onClick={() => toggleFavorite(recipe)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Entfernen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}