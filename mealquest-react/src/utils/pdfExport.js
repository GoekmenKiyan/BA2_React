import jsPDF from "jspdf";

export const exportFavoritesAsPDF = (favorites) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("Meine Lieblingsrezepte", 20, 20);

  let y = 40;

  favorites.forEach((r, i) => {
    doc.setFontSize(12);
    doc.text(`${i + 1}. ${r.title}`, 20, y);
    y += 10;

    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save("favoriten.pdf");
};