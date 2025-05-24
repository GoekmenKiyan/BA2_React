import { useNavigate } from "react-router-dom";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

export default function CuisineNav() {
  const navigate = useNavigate();

  const handleCuisine = (cuisine) => {
    const params = new URLSearchParams();
    params.set("q", "");
    params.set("cuisine", cuisine);
    navigate(`/search?${params.toString()}`);
  };

  const buttons = [
    { icon: <FaPizzaSlice />, label: "Italian", cuisine: "italian" },
    { icon: <FaHamburger />, label: "American", cuisine: "american" },
    { icon: <GiNoodles />, label: "Thai", cuisine: "thai" },
    { icon: <GiChopsticks />, label: "Indian", cuisine: "indian" },
  ];

  return (
    <div className="flex justify-center gap-6 py-6">
      {buttons.map(({ icon, label, cuisine }) => (
        <button
          key={label}
          onClick={() => handleCuisine(cuisine)}
          className="flex flex-col items-center text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 transition"
        >
          <div className="text-2xl mb-1">{icon}</div>
          <span className="text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
}