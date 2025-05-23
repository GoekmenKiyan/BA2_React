import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (diet) params.set("diet", diet);
    if (sort) params.set("sort", sort);

    navigate(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 mb-6">
      <input
        type="text"
        placeholder="Rezept suchen..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-2 border rounded-md text-black"
      />

      <select
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        className="p-2 border rounded-md text-black"
      >
        <option value="">Alle Diäten</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarisch</option>
        <option value="paleo">Paleo</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border rounded-md text-black"
      >
        <option value="">Keine Sortierung</option>
        <option value="calories">Kalorien</option>
        <option value="popularity">Beliebtheit</option>
        <option value="healthiness">Gesundheit</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Suchen
      </button>
    </form>
  );
}