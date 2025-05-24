import jsPDF from "jspdf";

export const exportFavoritesAsPDF = (favorites) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Meine Lieblingsrezepte", 20, 20);

  let y = 30;

  favorites.forEach((recipe, index) => {
    const title = `${index + 1}. ${recipe.title}`;
    const url = `https://spoonacular.com/recipes/${recipe.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}-${recipe.id}`;

    doc.setFontSize(12);
    doc.text(title, 20, y);

    y += 6;
    doc.setTextColor(0, 0, 255);
    doc.textWithLink(url, 20, y, { url });

    y += 12;

    // Page break
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save("favoriten.pdf");
};