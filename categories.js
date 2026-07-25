// categories.js – Arcángel App
// Categorías ordenadas por demanda, con palabras clave, referencias bíblicas y frases empáticas.

const categories = [
  {
    nombre: "Miedo / Ansiedad",
    keywords: ["miedo", "ansiedad", "temor", "angustia", "preocupación", "nervios", "inquietud"],
    referencias: [
      { libro: "Isaías", capitulo: 41, versiculo: 10 },
      { libro: "Salmos", capitulo: 56, versiculo: 4 },
      { libro: "Salmos", capitulo: 94, versiculo: 19 },
      { libro: "Salmos", capitulo: 27, versiculo: 1 },
      { libro: "Josué", capitulo: 1, versiculo: 9 },
      { libro: "Mateo", capitulo: 6, versiculo: 34 },
      { libro: "Filipenses", capitulo: 4, versiculo: 6 },
      { libro: "Salmos", capitulo: 34, versiculo: 5 },
      { libro: "1 Pedro", capitulo: 5, versiculo: 7 },
      { libro: "Salmos", capitulo: 118, versiculo: 6 },
      { libro: "Proverbios", capitulo: 29, versiculo: 25 },
      { libro: "Salmos", capitulo: 46, versiculo: 2 },
      { libro: "Salmos", capitulo: 23, versiculo: 4 },
      { libro: "Deuteronomio", capitulo: 31, versiculo: 6 },
      { libro: "Salmos", capitulo: 91, versiculo: 5 },
      { libro: "Lucas", capitulo: 12, versiculo: 25 },
      { libro: "Salmos", capitulo: 55, versiculo: 23 },
      { libro: "Salmos", capitulo: 112, versiculo: 7 },
      { libro: "Apocalipsis", capitulo: 1, versiculo: 17 },
      { libro: "Salmos", capitulo: 56, versiculo: 12 },
      { libro: "Salmos", capitulo: 121, versiculo: 7 },
      { libro: "Isaías", capitulo: 35, versiculo: 4 },
      { libro: "Juan", capitulo: 14, versiculo: 27 },
      { libro: "Salmos", capitulo: 138, versiculo: 7 },
      { libro: "Romanos", capitulo: 8, versiculo: 15 },
      { libro: "Salmos", capitulo: 56, versiculo: 3 },
      { libro: "Proverbios", capitulo: 3, versiculo: 24 },
      { libro: "Salmos", capitulo: 91, versiculo: 5 },
      { libro: "Isaías", capitulo: 54, versiculo: 4 },
      { libro: "Salmos", capitulo: 34, versiculo: 4 },
      { libro: "Lucas", capitulo: 12, versiculo: 7 },
      { libro: "Salmos", capitulo: 46, versiculo: 1 },
      { libro: "Romanos", capitulo: 8, versiculo: 31 }
    ],
    fraseEmpatica: [
      "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",
      "El Señor está cerca de los quebrantados de corazón.",
      "Deposita tus preocupaciones en Él, que cuida de ti.",
      "La paz de Dios, que sobrepasa todo entendimiento, guardará tu corazón.",
      "Confía en el Señor con todo tu corazón y Él enderezará tus veredas."
    ]
  },
  {
    nombre: "Tristeza / Pena",
    keywords: ["tristeza", "pena", "deprimido", "abatido", "desánimo", "llanto", "lágrimas", "dolor emocional"],
    referencias: [
      { libro: "Salmos", capitulo: 34, versiculo: 18 },
      { libro: "Salmos", capitulo: 147, versiculo: 3 },
      { libro: "Mateo", capitulo: 5, versiculo: 4 },
      { libro: "Salmos", capitulo: 30, versiculo: 5 },
      { libro: "Apocalipsis", capitulo: 21, versiculo: 4 },
      { libro: "Salmos", capitulo: 42, versiculo: 11 },
      { libro: "Isaías", capitulo: 61, versiculo: 3 },
      { libro: "Salmos", capitulo: 126, versiculo: 5 },
      { libro: "Lamentaciones", capitulo: 3, versiculo: 22 },
      { libro: "Salmos", capitulo: 56, versiculo: 8 },
      { libro: "Juan", capitulo: 16, versiculo: 20 },
      { libro: "Salmos", capitulo: 31, versiculo: 9 },
      { libro: "Romanos", capitulo: 12, versiculo: 15 },
      { libro: "Salmos", capitulo: 116, versiculo: 8 },
      { libro: "Isaías", capitulo: 53, versiculo: 4 },
      { libro: "Salmos", capitulo: 38, versiculo: 9 },
      { libro: "2 Corintios", capitulo: 1, versiculo: 4 },
      { libro: "Salmos", capitulo: 119, versiculo: 28 },
      { libro: "Jeremías", capitulo: 31, versiculo: 13 },
      { libro: "Salmos", capitulo: 34, versiculo: 6 },
      { libro: "Mateo", capitulo: 11, versiculo: 28 },
      { libro: "Salmos", capitulo: 51, versiculo: 17 },
      { libro: "Isaías", capitulo: 57, versiculo: 15 },
      { libro: "Salmos", capitulo: 73, versiculo: 26 },
      { libro: "Juan", capitulo: 14, versiculo: 1 },
      { libro: "Salmos", capitulo: 9, versiculo: 9 },
      { libro: "Filipenses", capitulo: 4, versiculo: 4 },
      { libro: "Salmos", capitulo: 62, versiculo: 8 },
      { libro: "Romanos", capitulo: 15, versiculo: 13 },
      { libro: "Salmos", capitulo: 43, versiculo: 5 },
      { libro: "1 Pedro", capitulo: 5, versiculo: 10 },
      { libro: "Salmos", capitulo: 55, versiculo: 22 },
      { libro: "Hebreos", capitulo: 4, versiculo: 16 }
    ],
    fraseEmpatica: [
      "El Señor está cerca de los quebrantados de corazón.",
      "Tus lágrimas son recogidas por Aquel que te ama.",
      "El consuelo de Dios sobrepasa toda tristeza.",
      "No estás solo en tu dolor; Él camina a tu lado.",
      "La alegría vendrá por la mañana."
    ]
  }
];

// ===== FUNCIONES DE BÚSQUEDA =====

// Busca la categoría más probable según el texto del usuario
function detectarCategoria(texto) {
  const textoLower = texto.toLowerCase();
  let mejorCategoria = null;
  let maxCoincidencias = 0;

  for (const categoria of categories) {
    let coincidencias = 0;
    for (const keyword of categoria.keywords) {
      if (textoLower.includes(keyword.toLowerCase())) {
        coincidencias++;
      }
    }
    if (coincidencias > maxCoincidencias) {
      maxCoincidencias = coincidencias;
      mejorCategoria = categoria;
    }
  }

  // Si no encuentra coincidencias, devuelve una categoría aleatoria
  if (!mejorCategoria) {
    mejorCategoria = categories[Math.floor(Math.random() * categories.length)];
  }

  return mejorCategoria;
}

// Obtiene el texto de un versículo a partir de su referencia
function obtenerTextoVersiculo(referencia) {
  try {
    // Buscamos en la estructura de la Biblia RVR1909
    for (const testamento in bibleData) {
      for (const libro in bibleData[testamento]) {
        if (libro.toLowerCase().includes(referencia.libro.toLowerCase())) {
          const capitulo = bibleData[testamento][libro][referencia.capitulo.toString()];
          if (capitulo && capitulo[referencia.versiculo.toString()]) {
            return capitulo[referencia.versiculo.toString()];
          }
        }
      }
    }
  } catch (e) {
    console.error("Error buscando versículo:", e);
  }
  return "El Señor es mi pastor, nada me falta."; // Versículo de respaldo
}
