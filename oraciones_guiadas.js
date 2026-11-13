// oraciones_guiadas.js – Arcángel App
// Oraciones para rezar paso a paso (Rosario y Coronilla)

// Función auxiliar para generar los misterios del Rosario con sus meditaciones
function generarMisterios(misterios) {
  let pasos = [];
  misterios.forEach((m, index) => {
    // Agregamos el título del misterio junto con su meditación bíblica
    pasos.push({ tipo: "titulo", titulo: `Misterio ${index + 1}: ${m.titulo}`, texto: m.meditacion });
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
      
      // ===== MISTERIOS GOZOSOS (Lunes y Sábado) =====
      { tipo: "misterios", dia: "gozosos", pasos: generarMisterios([
        { 
          titulo: "La Anunciación del Ángel a María", 
          meditacion: "El ángel Gabriel se apareció a María y le anunció que sería la Madre del Salvador. María respondió con fe: 'He aquí la esclava del Señor; hágase en mí según tu palabra'." 
        },
        { 
          titulo: "La Visitación de María a su prima Isabel", 
          meditacion: "María visitó a su prima Isabel, quien al escucharla exclamó: '¡Bendita tú entre las mujeres y bendito el fruto de tu vientre!'. María respondió con el Magnificat." 
        },
        { 
          titulo: "El Nacimiento del Niño Jesús", 
          meditacion: "María dio a luz a su hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre, porque no había lugar para ellos en el mesón. Los ángeles cantaban: '¡Gloria a Dios en el cielo!'." 
        },
        { 
          titulo: "La Presentación del Niño Jesús en el Templo", 
          meditacion: "María y José llevaron al Niño Jesús al templo. El anciano Simeón lo tomó en sus brazos y dijo: 'Ahora, Señor, puedes dejar que tu siervo muera en paz, porque mis ojos han visto tu salvación'." 
        },
        { 
          titulo: "El Hallazgo del Niño Jesús en el Templo", 
          meditacion: "Después de tres días, María y José encontraron a Jesús en el templo. Él les dijo: '¿Por qué me buscaban? ¿No sabían que yo debo ocuparme de los asuntos de mi Padre?'." 
        }
      ]) },
      
      // ===== MISTERIOS DOLOROSOS (Martes y Viernes) =====
      { tipo: "misterios", dia: "dolorosos", pasos: generarMisterios([
        { 
          titulo: "La Oración de Jesús en el Huerto", 
          meditacion: "Entonces Jesús fue con ellos a una propiedad llamada Getsemaní, y dijo a los discípulos: 'Quédense aquí, mientras yo voy allá a orar'. Y adelantándose un poco, cayó rostro en tierra, orando así: 'Padre mío, si es posible, que pase de mí esta copa, pero no sea como yo quiero, sino como quieras tú'." 
        },
        { 
          titulo: "La Flagelación del Señor", 
          meditacion: "Pilato mandó que azotaran a Jesús. Los soldados lo ataron a una columna y lo azotaron sin piedad, pero Él soportó el dolor en silencio por nuestra salvación." 
        },
        { 
          titulo: "La Coronación de Espinas", 
          meditacion: "Los soldados tejieron una corona de espinas y se la pusieron en la cabeza. Le pusieron un manto de púrpura y, burlándose de Él, decían: '¡Salve, Rey de los judíos!'." 
        },
        { 
          titulo: "Jesús con la Cruz a cuestas camino al Calvario", 
          meditacion: "Jesús, cargando su propia cruz, salió hacia el lugar llamado Calvario. En el camino, Simón de Cirene fue obligado a llevar la cruz detrás de Él." 
        },
        { 
          titulo: "La Crucifixión y Muerte de Jesús", 
          meditacion: "Cuando llegaron al lugar llamado Gólgota, lo crucificaron. Jesús dijo: 'Padre, perdónalos, porque no saben lo que hacen'. Y dando un fuerte grito, entregó el espíritu." 
        }
      ]) },

      // ===== MISTERIOS GLORIOSOS (Miércoles y Domingo) =====
      { tipo: "misterios", dia: "gloriosos", pasos: generarMisterios([
        { 
          titulo: "La Resurrección del Señor", 
          meditacion: "Al amanecer del primer día de la semana, las mujeres fueron al sepulcro y encontraron la piedra removida. Un ángel les dijo: 'No teman. Ha resucitado, como lo había dicho'." 
        },
        { 
          titulo: "La Ascensión del Señor a los Cielos", 
          meditacion: "Jesús llevó a sus discípulos a un monte y, levantando las manos, los bendijo. Mientras los bendecía, se separó de ellos y fue llevado al cielo." 
        },
        { 
          titulo: "La Venida del Espíritu Santo", 
          meditacion: "Al cumplirse el día de Pentecostés, estaban todos reunidos. De repente, vino del cielo un ruido como de un viento impetuoso, y todos quedaron llenos del Espíritu Santo." 
        },
        { 
          titulo: "La Asunción de la Virgen María a los Cielos", 
          meditacion: "Al terminar el curso de su vida terrenal, María fue llevada en cuerpo y alma a la gloria del cielo, donde su Hijo la esperaba para coronarla." 
        },
        { 
          titulo: "La Coronación de la Virgen María como Reina del Cielo y de la Tierra", 
          meditacion: "María fue coronada como Reina del cielo y de la tierra. Es nuestra Madre y Abogada ante su Hijo, y desde el cielo intercede por nosotros." 
        }
      ]) },

      // ===== MISTERIOS LUMINOSOS (Jueves) =====
      { tipo: "misterios", dia: "luminosos", pasos: generarMisterios([
        { 
          titulo: "El Bautismo de Jesús en el Jordán", 
          meditacion: "Jesús fue bautizado por Juan en el río Jordán. Al salir del agua, el cielo se abrió y el Espíritu Santo descendió sobre Él como una paloma, y una voz dijo: 'Este es mi Hijo amado'." 
        },
        { 
          titulo: "La Autorrevelación de Jesús en las Bodas de Caná", 
          meditacion: "En una boda en Caná, faltó el vino. A petición de María, Jesús convirtió el agua en vino, manifestando así su gloria y sus discípulos creyeron en Él." 
        },
        { 
          titulo: "El Anuncio del Reino de Dios", 
          meditacion: "Jesús recorría toda Galilea predicando el Evangelio del Reino y sanando a la gente. Decía: 'El tiempo se ha cumplido, el Reino de Dios está cerca. Conviértanse y crean en el Evangelio'." 
        },
        { 
          titulo: "La Transfiguración de Jesús", 
          meditacion: "Jesús subió a un monte alto con Pedro, Santiago y Juan. Allí se transfiguró delante de ellos, su rostro resplandeció como el sol y sus vestidos se volvieron blancos como la luz." 
        },
        { 
          titulo: "La Institución de la Eucaristía", 
          meditacion: "Mientras cenaban, Jesús tomó pan, lo bendijo, lo partió y se lo dio a sus discípulos, diciendo: 'Tomen y coman, esto es mi cuerpo'. Luego tomó el cáliz y dijo: 'Beban todos de él, porque esta es mi sangre'." 
        }
      ]) },

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
