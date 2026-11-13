// oraciones_guiadas.js – Arcángel App
// Oraciones para rezar paso a paso (Rosario y Coronilla)

// Función auxiliar para generar los misterios del Rosario
function generarMisterios(titulos) {
  let pasos = [];
  titulos.forEach((titulo, index) => {
    pasos.push({ tipo: "titulo", titulo: `Misterio ${index + 1}`, texto: titulo });
    pasos.push({ tipo: "padre_nuestro" });
    pasos.push({ tipo: "repeticion", titulo: "Ave María", veces: 10 });
    pasos.push({ tipo: "gloria" });
  });
  return pasos;
}

const oracionesGuiadas = [
  {
    id: "rosario",
    nombre: "Santo Rosario",
    descripcion: "Misterios del día paso a paso.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "Por la señal de la Santa Cruz, de nuestros enemigos, líbranos, Señor, Dios nuestro. En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Credo", texto: "Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre Todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia Católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén." },
      { tipo: "padre_nuestro" },
      { tipo: "repeticion", titulo: "Ave María (por la Fe)", veces: 1 },
      { tipo: "repeticion", titulo: "Ave María (por la Esperanza)", veces: 1 },
      { tipo: "repeticion", titulo: "Ave María (por la Caridad)", veces: 1 },
      { tipo: "gloria" },
      
      // La lógica en el index.html insertará aquí los misterios correspondientes al día
      { tipo: "misterios", dia: "gozosos", pasos: generarMisterios(["La Anunciación del Ángel a María", "La Visitación de María a su prima Isabel", "El Nacimiento del Niño Jesús", "La Presentación del Niño Jesús en el Templo", "El Hallazgo del Niño Jesús en el Templo"]) },
      { tipo: "misterios", dia: "dolorosos", pasos: generarMisterios(["La Oración de Jesús en el Huerto", "La Flagelación del Señor", "La Coronación de Espinas", "Jesús con la Cruz a cuestas camino al Calvario", "La Crucifixión y Muerte de Jesús"]) },
      { tipo: "misterios", dia: "gloriosos", pasos: generarMisterios(["La Resurrección del Señor", "La Ascensión del Señor a los Cielos", "La Venida del Espíritu Santo", "La Asunción de la Virgen María a los Cielos", "La Coronación de la Virgen María como Reina del Cielo y de la Tierra"]) },
      { tipo: "misterios", dia: "luminosos", pasos: generarMisterios(["El Bautismo de Jesús en el Jordán", "La Autorrevelación de Jesús en las Bodas de Caná", "El Anuncio del Reino de Dios", "La Transfiguración de Jesús", "La Institución de la Eucaristía"]) },

      { tipo: "texto", titulo: "Salve Regina", texto: "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén." },
      { tipo: "texto", titulo: "Oración Final", texto: "Oh Dios, cuyo Unigénito Hijo, con su vida, muerte y resurrección, nos otorgó los premios de la salvación eterna; concédenos, te rogamos, que meditando los misterios del Santísimo Rosario de la Virgen María, imitemos lo que contienen y consigamos lo que prometen. Por el mismo Cristo nuestro Señor. Amén." }
    ]
  },
  {
    id: "coronilla",
    nombre: "Coronilla de la Divina Misericordia",
    descripcion: "Para pedir perdón y misericordia.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "padre_nuestro" },
      { tipo: "repeticion", titulo: "Ave María", veces: 1 },
      { tipo: "texto", titulo: "Credo", texto: "Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra..." },
      
      // Decenas de la Coronilla
      { tipo: "decena_coronilla", veces: 5 }
    ]
  }
];

// Textos base para el rezo
const textosGuia = {
  padre_nuestro: "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.",
  ave_maria: "Dios te salve, María, llena eres de gracia, el Señor es contigo; bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.",
  gloria: "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.",
  coronilla_grande: "Padre Eterno, te ofrezco el Cuerpo y la Sangre, el Alma y la Divinidad de tu Amadísimo Hijo, nuestro Señor Jesucristo, como propiciación por nuestros pecados y los del mundo entero.",
  coronilla_pequena: "Por su dolorosa Pasión, ten misericordia de nosotros y del mundo entero.",
  coronilla_final: "Santo Dios, Santo Fuerte, Santo Inmortal, ten piedad de nosotros y del mundo entero."
};
