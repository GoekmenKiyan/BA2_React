// src/components/VegetarianPicks.jsx
import { useEffect, useState } from "react";
import { searchRecipes } from "../api/spoonacular";
import RecipeCard from "./RecipeCard";

const VegetarianPicks = () => {
  const [vegetarianPicks, setVegetarianPicks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vegetarian = await searchRecipes("", "vegetarian");
        setVegetarianPicks(vegetarian.slice(0, 3));
      } catch (error) {
        console.error("Fehler beim Laden der Vegetarian Picks:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="mt-16 px-6 max-w-6xl mx-auto text-left">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🥦</span>
        <h3 className="text-xl font-semibold text-zinc-700">Our Vegetarian Picks</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vegetarianPicks.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VegetarianPicks;