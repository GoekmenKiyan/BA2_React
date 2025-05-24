import axios from "axios";

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

/**
 * Suche Rezepte basierend auf einem Suchbegriff
 */
export const searchRecipes = async (query, diet, sort,) => {
  const res = await axios.get(`${BASE_URL}/complexSearch`, {
    params: {
      apiKey: API_KEY,
      query,
      diet,
      sort,
      number: 20,
      addRecipeInformation: true,
    },
  });
  return res.data.results;
};

/**
 * Hole Details zu einem bestimmten Rezept
 */
export const getRecipeDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}/information`, {
    params: {
      apiKey: API_KEY,
    },
  });
  return res.data;
};

/**
 * Zeigt zufällige Rezepte auf der Startseite
 */
export const getRandomRecipes = async (count = 3) => {
  const res = await axios.get(`${BASE_URL}/random`, {
    params: {
      apiKey: API_KEY,
      number: count,
    },
  });
  return res.data.recipes;
};

/**
 * Zeigt zufällige vegetarische Rezepte
 */
export const getVegetarianPicks = async (count = 3) => {
  const res = await axios.get(`${BASE_URL}/complexSearch`, {
    params: {
      apiKey: API_KEY,
      number: count,
      diet: "vegetarian",
      addRecipeInformation: true,
    },
  });
  return res.data.results;
};