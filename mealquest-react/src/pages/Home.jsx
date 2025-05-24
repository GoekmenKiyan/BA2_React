import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { searchRecipes, getRandomRecipes } from "../api/spoonacular";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const navigate = useNavigate();
  const [randomPicks, setRandomPicks] = useState([]);
  const [vegetarianPicks, setVegetarianPicks] = useState([]);

  const handleSearch = (query, diet, sort) => {
    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (diet) params.append("diet", diet);
    if (sort) params.append("sort", sort);
    navigate(`/search?${params.toString()}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const random = await getRandomRecipes(4); // 🌀 echte Random API
        const vegetarian = await searchRecipes("", "vegetarian");
        setRandomPicks(random);
        setVegetarianPicks(vegetarian.slice(0, 3));
      } catch (error) {
        console.error("Fehler beim Laden der Startseite Rezepte:", error);
      }
    };
    fetchData();
  }, []);

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

      {/* 🎲 Random Picks Section */}
      <section className="mt-16 px-6 max-w-6xl mx-auto text-left">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🎲</span>
          <h3 className="text-xl font-semibold text-zinc-700">Random Picks</h3>
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          {randomPicks.map((recipe) => (
            <div key={recipe.id} className="w-[22%] min-w-[220px]">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </section>

      {/* 🥦 Vegetarian Picks Section */}
      <section className="mt-16 px-6 max-w-6xl mx-auto text-left">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🥦</span>
          <h3 className="text-xl font-semibold text-zinc-700">Our Vegetarian Picks</h3>
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          {vegetarianPicks.map((recipe) => (
            <div key={recipe.id} className="w-[31%] min-w-[220px]">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
