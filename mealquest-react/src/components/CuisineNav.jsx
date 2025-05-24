import { useNavigate } from "react-router-dom";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

export default function CuisineNav() {
  const navigate = useNavigate();

  const handleCuisineClick = (cuisine) => {
    const params = new URLSearchParams();
    params.set("cuisine", cuisine);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <button
        onClick={() => handleCuisineClick("italian")}
        className="px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 transition"
      >
        🇮🇹 Italienisch
      </button>
      <button
        onClick={() => handleCuisineClick("mexican")}
        className="px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 transition"
      >
        🇲🇽 Mexikanisch
      </button>
      <button
        onClick={() => handleCuisineClick("japanese")}
        className="px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 transition"
      >
        🇯🇵 Japanisch
      </button>
      <button
        onClick={() => handleCuisineClick("french")}
        className="px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 transition"
      >
        🇫🇷 Französisch
      </button>
    </div>
  );
}
