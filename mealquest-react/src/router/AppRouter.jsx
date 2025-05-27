// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-Load Pages
const Home = lazy(() => import("../pages/Home"));
const RecipeList = lazy(() => import("../pages/RecipeList"));
const RecipeDetail = lazy(() => import("../pages/RecipeDetail"));
const Favorites = lazy(() => import("../pages/Favorites"));

export default function AppRouter() {
  return (
    <>
      <Suspense fallback={<div className="text-center mt-10">Lade Inhalte...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </>
  );
}