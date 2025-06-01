# MealQuest 🍽️

MealQuest ist eine moderne Webanwendung, die es Benutzern ermöglicht, Rezepte zu durchsuchen, nach Kategorien zu filtern, zufällige oder vegetarische Gerichte zu entdecken und Lieblingsrezepte zu speichern. Das Projekt wurde im Rahmen einer Bachelorarbeit mit **React**, **Vite** und **TailwindCSS** entwickelt.

---

## 🚀 Features

- 🔍 Rezeptsuche mit der Spoonacular API
- 🍝 Zufällige Rezepte & vegetarische Empfehlungen
- 📚 Detailansicht einzelner Rezepte
- 💾 Favoriten-Management mit globalem State
- 📤 PDF-Export von Rezepten
- 📱 Responsive UI mit TailwindCSS
- 🌍 Navigation über React Router

---

## ⚙️ Tech Stack

- **Frontend**: React 19, React Router 7, TailwindCSS
- **Build Tool**: Vite
- **Styling**: TailwindCSS + Google Fonts (Playfair Display, Inter)
- **API**: [Spoonacular](https://spoonacular.com/food-api)
- **State Management**: React Context API
- **PDF-Erzeugung**: jsPDF
- **Icons**: react-icons

---

## 🧩 Projektstruktur

```txt
mealquest-react/
├── src/
│   ├── api/              # Spoonacular API Zugriff
│   ├── components/       # Wiederverwendbare UI-Komponenten
│   ├── pages/            # Seiten: Home, RecipeList, Favorites etc.
│   ├── router/           # Routing-Logik
│   ├── state/            # Favoriten-Context
│   └── utils/            # Hilfsfunktionen (z.B. PDF Export)
├── .env                  # Spoonacular API Key
├── tailwind.config.js    # Tailwind Konfiguration
├── vite.config.js        # Vite Konfiguration
├── package.json          # Abhängigkeiten
└── index.html            # Einstiegspunkt

---

## 📦 Installation

# 1. Repository klonen
git clone https://github.com/dein-benutzername/mealquest-react.git
cd mealquest-react

# 2. Abhängigkeiten installieren
npm install

# 3. .env Datei anlegen
touch .env
# und einfügen:
# VITE_SPOONACULAR_API_KEY=dein_api_key

# 4. Lokalen Server starten
npm run dev

---

## 📄 Beispiel .env

VITE_SPOONACULAR_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

---

## 📤 PDF-Export

In der Detailansicht kann ein Rezept über jsPDF als PDF-Datei exportiert werden.

---

## 👨‍🎓 Hinweis zur Bachelorarbeit

Dieses Projekt wurde im Rahmen der Bachelorarbeit von Gökmen Kiyan (myself) entwickelt und dient dem praktischen Einsatz moderner Webtechnologien.

---

## 🛡️ Lizenz

Dieses Projekt ist unter keiner öffentlichen Lizenz veröffentlicht und dient ausschließlich Studienzwecken.
