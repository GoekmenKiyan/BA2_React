import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { lazy, Suspense, useCallback } from "react";

const RandomPicks = lazy(() => import("../components/RandomPicks"));
const VegetarianPicks = lazy(() => import("../components/VegetarianPicks"));

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = useCallback((query, diet, sort) => {
    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (diet) params.append("diet", diet);
    if (sort) params.append("sort", sort);
    navigate(`/search?${params.toString()}`);
  }, [navigate]);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-extrabold mb-4">Finde dein Lieblingsgericht</h2>
      <p className="text-lg mb-10 text-zinc-600">
        Durchsuche unsere besten Gerichte nach Land oder Geschmack 🍝
      </p>

      <div className="max-w-3xl mx-auto mt-6">
        <SearchBar onSearch={handleSearch} />
        <div className="mt-10">
          <Link
            to="/favorites"
            className="inline-block bg-pink-400 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-pink-700 transition"
          >
            ❤️ Meine Favoriten anzeigen
          </Link>
        </div>
      </div>

      <Suspense fallback={<div className="mt-10">Lade Empfehlungen…</div>}>
        <RandomPicks />
        <VegetarianPicks />
      </Suspense>
    </div>
  );
}