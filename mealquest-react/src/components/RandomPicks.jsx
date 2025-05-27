// src/components/RandomPicks.jsx
import { useEffect, useState } from "react";
import { getRandomRecipes } from "../api/spoonacular";
import RecipeCard from "./RecipeCard";

const RandomPicks = () => {
  const [randomPicks, setRandomPicks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const random = await getRandomRecipes(4);
        setRandomPicks(random);
      } catch (error) {
        console.error("Fehler beim Laden der Random Picks:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="mt-16 px-6 max-w-6xl mx-auto text-left">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🎲</span>
        <h3 className="text-xl font-semibold text-zinc-700">Random Picks</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {randomPicks.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RandomPicks;