import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
    >
        <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-52 object-cover rounded-xl"
        />
      <div className="p-4">
        <h3 className="text-md font-semibold text-zinc-800 text-center">
          {recipe.title}
        </h3>
      </div>
    </Link>
  );
}