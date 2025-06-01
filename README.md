# MealQuest (React Version)

Eine Vergleichsanwendung im Rahmen der Bachelorarbeit, implementiert als Single Page Application (SPA) mit React. Dieses Projekt ist Teil einer Evaluierung verschiedener JavaScript-Frameworks (Angular, Vue, React) hinsichtlich ihrer Eignung zur Entwicklung moderner SPAs.

## 📑 Inhaltsverzeichnis

- [Überblick](#überblick)
- [Features](#features)
- [Technologien](#technologien)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Projektstruktur](#projektstruktur)
- [Vergleichskontext](#vergleichskontext)
- [Beispielbilder](#beispielbilder)
- [Lizenz](#lizenz)

---

## 🧭 Überblick

**MealQuest** ist eine Rezeptsuche-App, die verschiedene APIs nutzt (z. B. Spoonacular), um Rezepte nach bestimmten Kriterien zu finden, zu filtern und anzuzeigen. Die Anwendung beinhaltet Features wie Favoriten, Zufallsempfehlungen und Export-Funktionalitäten.

Dieses Repository enthält die **React**-Implementierung.

---

## ✨ Features

- 🔍 Rezeptsuche nach Stichworten
- 🥗 Anzeige vegetarischer Vorschläge
- 🌍 Navigation nach Länderküchen (Cuisines)
- ⭐ Favoritenverwaltung mit Kontext-API
- 🖨️ Export von Rezeptinformationen als PDF
- 🧭 Routing via `react-router-dom`

---

## ⚙️ Technologien

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [jsPDF](https://github.com/parallax/jsPDF)
- [Spoonacular API](https://spoonacular.com/food-api) (für Rezeptdaten)

---

## 🧪 Installation

```bash
git clone https://github.com/dein-benutzername/mealquest-react.git
cd mealquest-react
npm install
npm run dev
```

> Stelle sicher, dass du eine `.env`-Datei mit deinem API-Key für Spoonacular im Projektverzeichnis hast:

```
VITE_SPOONACULAR_API_KEY=dein_api_key
```

---

## ▶️ Verwendung

1. Starte den lokalen Dev-Server: `npm run dev`
2. Öffne im Browser `http://localhost:5173`
3. Suche nach Rezepten, navigiere durch Kategorien oder speichere Favoriten

---

## 🗂️ Projektstruktur

```text
src/
├── api/              → API-Kommunikation (Spoonacular)
├── components/       → UI-Komponenten wie Navbar, SearchBar, etc.
├── pages/            → Seiten wie Home, Favorites, RecipeDetail
├── router/           → Routing-Konfiguration
├── state/            → React Context für Favoritenverwaltung
├── utils/            → Hilfsfunktionen (z. B. PDF-Export)
```

---

## 🧪 Vergleichskontext

Dieses Projekt wurde zusätzlich in Angular und Vue implementiert. Ziel war es, Unterschiede in:
- Entwicklungsaufwand
- Performance
- Strukturierung
- Wartbarkeit
zu untersuchen und zu dokumentieren.

---

## 👨‍💻 Lizenz

MIT License

---

## 🙋‍♂️ Fragen?

Bei Fragen zur Bachelorarbeit oder zum Projekt gerne direkt melden.
