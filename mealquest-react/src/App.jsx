import AppRouter from "./router/AppRouter";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition">
      <header className="p-4 flex justify-end">
        <DarkModeToggle />
      </header>
      <main>
        <AppRouter />
      </main>
    </div>
  );
}