import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <div className="min-h-screen bg-white bg-neutral-100 text-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <AppRouter />
      </main>
    </div>
  );
}