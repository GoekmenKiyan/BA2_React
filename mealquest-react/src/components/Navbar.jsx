import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-zinc-900 shadow-md py-4 mb-6">
      <div className="container mx-auto px-4 text-center">
        <Link to="/">
          <h1 className="text-3xl font-bold font-serif text-zinc-700 dark:text-white">
            MealQuest 🍽️
          </h1>
        </Link>
      </div>
    </header>
  );
}