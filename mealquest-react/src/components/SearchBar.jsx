import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [sort, setSort] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSearch === "function") {
      onSearch(query, diet, sort);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-4 justify-center"
    >
      <input
        type="text"
        placeholder="Was möchtest du kochen?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full sm:w-64 px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <select
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        className="px-4 py-2 border border-zinc-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">Alle Diäten</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarisch</option>
        <option value="gluten free">Glutenfrei</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="px-4 py-2 border border-zinc-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">Sortierung</option>
        <option value="popularity">Beliebtheit</option>
        <option value="healthiness">Gesundheit</option>
        <option value="time">Zubereitungszeit</option>
      </select>

      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 h-[42px] flex items-center gap-2 rounded-md font-semibold shadow-md transition"
      >
        <span role="img" aria-label="search">🔍</span>
        <span>Suchen</span>
      </button>
    </form>
  );
}
