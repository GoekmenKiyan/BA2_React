import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import RecipeList from "../pages/RecipeList";
import RecipeDetail from "../pages/RecipeDetail";
import Favorites from "../pages/Favorites";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}