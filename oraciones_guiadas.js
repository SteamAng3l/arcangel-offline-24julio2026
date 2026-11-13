// oraciones_guiadas.js – Arcángel App
// Oraciones para rezar paso a paso (Rosario, Coronilla y Fechas Especiales)

function generarMisterios(misterios) {
  let pasos = [];
  misterios.forEach((m, index) => {
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
      { tipo: "texto", titulo: "Credo", texto: "Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor..." },
      { tipo: "padre_nuestro" },
      { tipo: "repeticion", titulo: "Ave María (por la Fe)", veces: 1 },
      { tipo: "repeticion", titulo: "Ave María (por la Esperanza)", veces: 1 },
      { tipo: "repeticion", titulo: "Ave María (por la Caridad)", veces: 1 },
      { tipo: "gloria" },
      
      { tipo: "misterios", dia: "gozosos", pasos: generarMisterios([
        { titulo: "La Anunciación del Ángel a María", meditacion: "El ángel Gabriel se apareció a María y le anunció que sería la Madre del Salvador. María respondió con fe: 'He aquí la esclava del Señor; hágase en mí según tu palabra'." },
        { titulo: "La Visitación de María a su prima Isabel", meditacion: "María visitó a su prima Isabel, quien al escucharla exclamó: '¡Bendita tú entre las mujeres y bendito el fruto de tu vientre!'. María respondió con el Magnificat." },
        { titulo: "El Nacimiento del Niño Jesús", meditacion: "María dio a luz a su hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre. Los ángeles cantaban: '¡Gloria a Dios en el cielo!'." },
        { titulo: "La Presentación del Niño Jesús en el Templo", meditacion: "María y José llevaron al Niño Jesús al templo. El anciano Simeón lo tomó en sus brazos y dijo: 'Ahora, Señor, puedes dejar que tu siervo muera en paz'." },
        { titulo: "El Hallazgo del Niño Jesús en el Templo", meditacion: "Después de tres días, María y José encontraron a Jesús en el templo. Él les dijo: '¿No sabían que yo debo ocuparme de los asuntos de mi Padre?'." }
      ]) },
      
      { tipo: "misterios", dia: "dolorosos", pasos: generarMisterios([
        { titulo: "La Oración de Jesús en el Huerto", meditacion: "Jesús fue a Getsemaní y dijo: 'Padre mío, si es posible, que pase de mí esta copa, pero no sea como yo quiero, sino como quieras tú'." },
        { titulo: "La Flagelación del Señor", meditacion: "Pilato mandó que azotaran a Jesús. Los soldados lo ataron a una columna y lo azotaron sin piedad, pero Él soportó el dolor en silencio por nuestra salvación." },
        { titulo: "La Coronación de Espinas", meditacion: "Los soldados tejieron una corona de espinas y se la pusieron en la cabeza. Burlándose de Él, decían: '¡Salve, Rey de los judíos!'." },
        { titulo: "Jesús con la Cruz a cuestas", meditacion: "Jesús, cargando su propia cruz, salió hacia el Calvario. En el camino, Simón de Cirene fue obligado a llevar la cruz detrás de Él." },
        { titulo: "La Crucifixión y Muerte de Jesús", meditacion: "Lo crucificaron. Jesús dijo: 'Padre, perdónalos, porque no saben lo que hacen'. Y entregó el espíritu." }
      ]) },

      { tipo: "misterios", dia: "gloriosos", pasos: generarMisterios([
        { titulo: "La Resurrección del Señor", meditacion: "Al amanecer del primer día de la semana, las mujeres fueron al sepulcro y encontraron la piedra removida. Un ángel les dijo: 'Ha resucitado'." },
        { titulo: "La Ascensión del Señor a los Cielos", meditacion: "Jesús llevó a sus discípulos a un monte y, mientras los bendecía, se separó de ellos y fue llevado al cielo." },
        { titulo: "La Venida del Espíritu Santo", meditacion: "Estaban todos reunidos. Vino del cielo un ruido como de un viento impetuoso, y todos quedaron llenos del Espíritu Santo." },
        { titulo: "La Asunción de la Virgen María", meditacion: "Al terminar su vida terrenal, María fue llevada en cuerpo y alma a la gloria del cielo, donde su Hijo la esperaba." },
        { titulo: "La Coronación de la Virgen María", meditacion: "María fue coronada como Reina del cielo y de la tierra. Es nuestra Madre y Abogada ante su Hijo." }
      ]) },

      { tipo: "misterios", dia: "luminosos", pasos: generarMisterios([
        { titulo: "El Bautismo de Jesús en el Jordán", meditacion: "Jesús fue bautizado por Juan. Al salir del agua, el Espíritu Santo descendió sobre Él como una paloma, y una voz dijo: 'Este es mi Hijo amado'." },
        { titulo: "La Autorrevelación en las Bodas de Caná", meditacion: "En una boda en Caná, faltó el vino. A petición de María, Jesús convirtió el agua en vino, manifestando su gloria." },
        { titulo: "El Anuncio del Reino de Dios", meditacion: "Jesús predicaba el Evangelio del Reino. Decía: 'El tiempo se ha cumplido, el Reino de Dios está cerca. Conviértanse'." },
        { titulo: "La Transfiguración de Jesús", meditacion: "Jesús subió a un monte con Pedro, Santiago y Juan. Se transfiguró delante de ellos, su rostro resplandeció como el sol." },
        { titulo: "La Institución de la Eucaristía", meditacion: "Mientras cenaban, Jesús tomó pan, lo bendijo, lo partió y se lo dio a sus discípulos, diciendo: 'Esto es mi cuerpo'." }
      ]) },

      { tipo: "texto", titulo: "Salve Regina", texto: "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva..." },
      { tipo: "texto", titulo: "Oración Final", texto: "Oh Dios, cuyo Unigénito Hijo, con su vida, muerte y resurrección, nos otorgó los premios de la salvación eterna; concédenos, te rogamos, que meditando los misterios del Santísimo Rosario, imitemos lo que contienen y consigamos lo que prometen. Por Cristo nuestro Señor. Amén." }
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
      { tipo: "decena_coronilla", veces: 5 }
    ]
  },
  {
    id: "posadas",
    nombre: "Posadas Navideñas",
    descripcion: "Pedir posada y preparar el nacimiento.",
    pasos: [
      { tipo: "texto", titulo: "En el exterior", texto: "En el nombre del cielo, os pido posada, pues no puede andar mi esposa amada." },
      { tipo: "texto", titulo: "En el interior", texto: "Aquí no es mesón, sigan adelante, yo no puedo abrir, no sea algún tunante." },
      { tipo: "texto", titulo: "En el exterior", texto: "No seas inhumano, tennos caridad, que el Dios de los cielos te lo premiará." },
      { tipo: "texto", titulo: "En el interior", texto: "Ya se pueden ir y no molestar, porque si me enfado os voy a apalear." },
      { tipo: "texto", titulo: "En el exterior", texto: "Venimos rendidos desde Nazaret, yo soy carpintero de nombre José." },
      { tipo: "texto", titulo: "En el interior", texto: "No me importa el nombre, déjenme dormir, pues que ya les digo que no hemos de abrir." },
      { tipo: "texto", titulo: "En el exterior", texto: "Posada te pide, amado casero, por sólo una noche la Reina del Cielo." },
      { tipo: "texto", titulo: "En el interior", texto: "Pues si es una reina quien lo solicita, ¿cómo es que de noche anda tan solita?" },
      { tipo: "texto", titulo: "En el exterior", texto: "Mi esposa es María, es Reina del Cielo, y madre va a ser del Divino Verbo." },
      { tipo: "texto", titulo: "En el interior", texto: "¿Eres tú José? ¿Tu esposa es María? Entren, peregrinos, no los conocía." },
      { tipo: "texto", titulo: "Entrada y Bienvenida", texto: "Entren, Santos Peregrinos, reciban este rincón, que aunque es pobre la morada, os la doy de corazón. Amén." }
    ]
  },
  {
    id: "via_crucis",
    nombre: "Vía Crucis",
    descripcion: "Las 14 estaciones de la cruz.",
    pasos: [
      { tipo: "texto", titulo: "Oración Inicial", texto: "Señor Jesús, nos disponemos a recorrer contigo el camino de la cruz. Danos la gracia de comprender tu amor y de cargar nuestras propias cruces con paciencia. Amén." },
      { tipo: "texto", titulo: "Primera Estación: Jesús es condenado a muerte", texto: "Pilato se lavó las manos y entregó a Jesús para que lo crucificaran. Te adoramos, oh Cristo, y te bendecimos, porque por tu santa cruz redimiste al mundo." },
      { tipo: "texto", titulo: "Segunda Estación: Jesús carga con la cruz", texto: "Jesús, cargando su propia cruz, salió hacia el lugar llamado Calvario. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Tercera Estación: Jesús cae por primera vez", texto: "Jesús cayó por primera vez bajo el peso de la cruz, pero se levantó con valentía. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Cuarta Estación: Jesús encuentra a su Madre", texto: "En el camino, Jesús se encontró con los ojos llenos de lágrimas de su Madre, la Virgen María. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Quinta Estación: Simón ayuda a Jesús", texto: "Los soldados obligaron a Simón de Cirene a llevar la cruz detrás de Jesús. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Sexta Estación: La Verónica enjuga el rostro de Jesús", texto: "Una mujer valiente, la Verónica, se acercó a limpiar el rostro ensangrentado de Jesús. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Séptima Estación: Jesús cae por segunda vez", texto: "Jesús cae de nuevo, agotado por el dolor y el peso de nuestros pecados. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Octava Estación: Jesús consuela a las mujeres", texto: "Jesús dijo a las mujeres que lloraban: 'No lloren por mí, lloren por ustedes y por sus hijos'. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Novena Estación: Jesús cae por tercera vez", texto: "Jesús cae por tercera vez, pero reúne sus últimas fuerzas para llegar al final. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Décima Estación: Jesús es despojado de sus vestiduras", texto: "Le quitaron sus vestiduras y se las repartieron, echándolas a suerte. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Undécima Estación: Jesús es clavado en la cruz", texto: "Lo clavaron en la cruz y lo levantaron entre el cielo y la tierra. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Duodécima Estación: Jesús muere en la cruz", texto: "Después de tres horas de agonía, Jesús dijo: 'Todo está cumplido', e inclinando la cabeza, entregó el espíritu. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Decimotercera Estación: Jesús es bajado de la cruz", texto: "José de Arimatea y Nicodemo bajaron el cuerpo de Jesús y lo pusieron en brazos de su Madre. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Decimocuarta Estación: Jesús es sepultado", texto: "Pusieron el cuerpo de Jesús en un sepulcro nuevo, y colocaron una gran piedra en la puerta. Te adoramos, oh Cristo..." },
      { tipo: "texto", titulo: "Oración Final", texto: "Señor Jesús, te damos gracias por haber muerto en la cruz por nuestros pecados. Que al meditar tu pasión, aprendamos a amarte y a amar a los demás. Amén." }
    ]
  },
  {
    id: "siete_palabras",
    nombre: "Las Siete Palabras",
    descripcion: "Meditación para el Viernes Santo.",
    pasos: [
      { tipo: "texto", titulo: "Oración Inicial", texto: "Señor Jesús, en este día meditamos las últimas palabras que pronunciaste en la cruz. Abre nuestro corazón para recibir tu amor y tu perdón. Amén." },
      { tipo: "texto", titulo: "1. 'Padre, perdónalos...'", texto: "'Padre, perdónalos, porque no saben lo que hacen'. (Lucas 23, 34)" },
      { tipo: "texto", titulo: "2. 'Hoy estarás conmigo...'", texto: "'En verdad te digo que hoy estarás conmigo en el paraíso'. (Lucas 23, 43)" },
      { tipo: "texto", titulo: "3. 'Mujer, aquí tienes a tu hijo...'", texto: "'Mujer, aquí tienes a tu hijo. Hijo, aquí tienes a tu madre'. (Juan 19, 26-27)" },
      { tipo: "texto", titulo: "4. 'Dios mío, ¿por qué me has abandonado?'", texto: "'Dios mío, Dios mío, ¿por qué me has abandonado?'. (Mateo 27, 46)" },
      { tipo: "texto", titulo: "5. 'Tengo sed'", texto: "'Tengo sed'. (Juan 19, 28)" },
      { tipo: "texto", titulo: "6. 'Todo está cumplido'", texto: "'Todo está cumplido'. (Juan 19, 30)" },
      { tipo: "texto", titulo: "7. 'Padre, en tus manos...'", texto: "'Padre, en tus manos encomiendo mi espíritu'. (Lucas 23, 46)" },
      { tipo: "texto", titulo: "Oración Final", texto: "Señor Jesús, que tus siete palabras resuenen en nuestro corazón y nos ayuden a vivir con fe y esperanza. Amén." }
    ]
  },
  {
    id: "nochebuena",
    nombre: "Nochebuena",
    descripcion: "Para la noche del 24 de diciembre.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración de Nochebuena", texto: "Señor Jesús, en esta noche santa te contemplamos recién nacido en el pesebre. Viniste al mundo en la humildad y la sencillez, para mostrarnos el amor del Padre. Gracias por este regalo inefable." },
      { tipo: "texto", titulo: "Petición", texto: "Que esta Nochebuena renueve nuestra fe y nuestra esperanza. Que la paz que trajiste al mundo habite en nuestros hogares, y que la luz del Niño Dios ilumine nuestras familias. Amén." },
      { tipo: "repeticion", titulo: "Ave María", veces: 1 }
    ]
  },
  {
    id: "navidad",
    nombre: "Navidad",
    descripcion: "Para celebrar el 25 de diciembre.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración de Navidad", texto: "¡Feliz Navidad, Señor! Hoy el cielo y la tierra se llenan de alegría porque el Salvador ha nacido. Gracias por el don de tu Hijo, que vino a salvarnos y a enseñarnos a amar." },
      { tipo: "texto", titulo: "Petición", texto: "En este día de fiesta, te pedimos que la alegría de la Navidad no se quede solo en los regalos, sino que se quede en nuestros corazones. Que podamos compartir el amor y la paz de Jesús con todos los que nos rodean. Amén." },
      { tipo: "texto", titulo: "Gloria", texto: "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén." }
    ]
  },
  {
    id: "anoviejo",
    nombre: "Año Viejo",
    descripcion: "Para la noche del 31 de diciembre.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Acción de Gracias", texto: "Señor, al terminar este año, te damos gracias por todo lo vivido. Gracias por los momentos de alegría, por los retos superados y por tu compañía en cada día. Reconocemos que en todo tu mano nos ha sostenido." },
      { tipo: "texto", titulo: "Petición de Perdón", texto: "Te pedimos perdón por las faltas cometidas, por las veces que no te buscamos y por el tiempo que no aprovechamos. Lava nuestras culpas con tu misericordia." },
      { tipo: "texto", titulo: "Oración Final", texto: "Que al cerrar este ciclo, dejemos atrás lo que no nos ayuda y abracemos la esperanza de un nuevo año lleno de tu gracia. Amén." },
      { tipo: "padre_nuestro" }
    ]
  },
  {
    id: "ano_nuevo",
    nombre: "Año Nuevo",
    descripcion: "Para el 1 de enero.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración de Año Nuevo", texto: "Señor, hoy comenzamos un nuevo año. Te pedimos que camines con nosotros. Que cada día de este año sea una oportunidad para acercarnos más a ti. Bendice nuestros planes, nuestro trabajo, nuestras familias y nuestras decisiones." },
      { tipo: "texto", titulo: "Petición", texto: "Que este año no lo dejemos pasar sin buscarte, sin agradecerte y sin servirte en los demás. Que María, nuestra Madre, nos acompañe y nos guíe. Amén." },
      { tipo: "repeticion", titulo: "Ave María", veces: 1 }
    ]
  },
  {
    id: "reyes",
    nombre: "Día de Reyes",
    descripcion: "Para el 6 de enero.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración", texto: "Señor, como los Magos de Oriente, también nosotros queremos ponernos en camino para buscarte. Ellos siguieron la estrella y llegaron a Belén para adorarte y ofrecerte sus dones." },
      { tipo: "texto", titulo: "Petición", texto: "Ayúdanos a ser generosos como ellos, a compartir nuestros bienes con los necesitados, y a ofrecerte lo mejor de nosotros. Que nuestra vida sea un regalo para los demás. Amén." },
      { tipo: "padre_nuestro" }
    ]
  },
  {
    id: "candelaria",
    nombre: "Día de la Candelaria",
    descripcion: "Para el 2 de febrero.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración", texto: "Virgen María, Madre de Dios y Madre nuestra, hoy recordamos cuando llevaste a Jesús al templo y lo presentaste al Señor. Te pedimos que nos ayudes a presentar también nuestra vida a Dios." },
      { tipo: "texto", titulo: "Petición", texto: "Bendice nuestros hogares, nuestras familias y nuestros trabajos. Que la luz de Cristo, que hoy se presenta al mundo, ilumine nuestros caminos y nos guíe siempre hacia el bien. Amén." },
      { tipo: "repeticion", titulo: "Ave María", veces: 1 }
    ]
  },
  {
    id: "abuelo",
    nombre: "Día del Abuelo",
    descripcion: "Para el 28 de agosto.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Acción de Gracias", texto: "Dios nuestro, te damos gracias por el don de los abuelos. Ellos son fuente de sabiduría, de amor y de experiencia. Gracias por sus consejos, por su paciencia y por su ejemplo de fe." },
      { tipo: "texto", titulo: "Bendición", texto: "Bendice, Señor, a nuestros abuelos. Dales salud, fortaleza y alegría. Que se sientan amados por nosotros, y que la Virgen María los acompañe y cuide en todo momento." },
      { tipo: "padre_nuestro" }
    ]
  },
  {
    id: "carmen",
    nombre: "Nuestra Señora del Carmen",
    descripcion: "Para el 16 de julio.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración", texto: "Virgen del Carmen, Reina y Madre de los que esperan en ti, hoy te pedimos que nos cubras con tu manto. Tú que prometiste la salvación a quienes portan tu escapulario, protégenos de todo peligro y guíanos siempre por el camino del bien." },
      { tipo: "texto", titulo: "Petición", texto: "Ayúdanos a vivir con fe y esperanza, a confiar en tu intercesión y a ser fieles a tu Hijo Jesús. Que tu presencia nos consuele en las dificultades y nos anime a seguir adelante. Amén." },
      { tipo: "repeticion", titulo: "Ave María", veces: 3 }
    ]
  },
  {
    id: "todos_santos",
    nombre: "Solemnidad de Todos los Santos",
    descripcion: "Para el 1 de noviembre.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración", texto: "Señor, hoy celebramos la fiesta de todos los santos. Ellos son nuestros modelos de vida, de fe y de amor a ti. Algunos fueron mártires, otros humildes servidores, pero todos vivieron buscando tu voluntad." },
      { tipo: "texto", titulo: "Petición", texto: "Ayúdanos a seguir su ejemplo, a ser santos en lo cotidiano, amando a los demás y viviendo con coherencia nuestra fe. Que un día podamos unirnos a ellos en el cielo. Amén." },
      { tipo: "padre_nuestro" }
    ]
  },
  {
    id: "fieles_difuntos",
    nombre: "Fieles Difuntos",
    descripcion: "Para el 2 de noviembre.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración por los Difuntos", texto: "Señor de la vida y de la muerte, hoy recordamos a nuestros hermanos que han partido. Te pedimos que los recibas en tu reino, y que les des el descanso eterno. Que brille para ellos la luz perpetua." },
      { tipo: "texto", titulo: "Consuelo para los que quedamos", texto: "Consuela también a quienes lloramos su ausencia. Danos la esperanza de la resurrección, y fortalece nuestra fe para que vivamos en el amor y la entrega, esperando el día del reencuentro. Amén." },
      { tipo: "padre_nuestro" },
      { tipo: "repeticion", titulo: "Ave María", veces: 1 }
    ]
  },
  {
    id: "novena_guadalupe",
    nombre: "Novena a la Virgen de Guadalupe",
    descripcion: "Del 3 al 11 de diciembre.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Acto de Contrición", texto: "Señor mío Jesucristo, por ser tú tan bueno, me pesa de todo corazón haberte ofendido. Propongo firmemente no pecar más. Amén." },
      { tipo: "texto", titulo: "Oración a la Virgen", texto: "¡Oh Virgen Inmaculada, Madre del verdadero Dios y Madre de la Iglesia! Tú, que desde este lugar manifiestas tu clemencia y tu compasión a todos los que buscan tu protección..." },
      { tipo: "repeticion", titulo: "Ave María", veces: 3 },
      { tipo: "texto", titulo: "Petición", texto: "Virgen de Guadalupe, Morenita, escucha nuestra súplica y concédenos la gracia que hoy te pedimos de todo corazón. (Hacer la petición en silencio)." },
      { tipo: "texto", titulo: "Oración Final", texto: "No se turbe tu corazón, no temas. ¿No estoy yo aquí, que soy tu Madre? Amén." }
    ]
  },
  {
    id: "san_miguel",
    nombre: "San Miguel Arcángel",
    descripcion: "Para el 29 de septiembre.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración", texto: "San Miguel Arcángel, defiéndenos en la batalla. Sé nuestro amparo contra la perversidad y asechanzas del demonio. Reprímale Dios, pedimos suplicantes, y tú, Príncipe de la Milicia Celestial, arroja al infierno con el divino poder a Satanás y a los otros espíritus malignos que vagan por el mundo para la perdición de las almas. Amén." },
      { tipo: "texto", titulo: "Oración por la Protección", texto: "Glorioso San Miguel, Príncipe de las milicias celestiales, protégenos en el camino y ayúdanos a ser fieles a Dios hasta el final. Amén." }
    ]
  },
  {
    id: "dia_madres",
    nombre: "Día de las Madres",
    descripcion: "Para bendecir a mamá.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Bendición", texto: "Dios todopoderoso, te damos gracias por el don maravilloso de nuestra madre. Bendice su vida, su salud y su hogar. Que la Virgen María, la Madre más amorosa, la cuide y la proteja siempre. Amén." },
      { tipo: "repeticion", titulo: "Ave María", veces: 1 },
      { tipo: "texto", titulo: "Oración", texto: "Gracias, Señor, por las manos que nos cuidaron, por las palabras que nos consolaron y por el amor incondicional de nuestra madre. Amén." }
    ]
  },
  {
    id: "dia_padre",
    nombre: "Día del Padre",
    descripcion: "Para bendecir a papá.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Bendición", texto: "Señor, que eres el Padre de todos, bendice a nuestro papá. Dale salud, fortaleza y sabiduría para guiar a nuestra familia. Que San José, el padre adoptivo de Jesús, sea su modelo y protector. Amén." },
      { tipo: "padre_nuestro" },
      { tipo: "texto", titulo: "Oración", texto: "Gracias, Señor, por el esfuerzo y el trabajo de nuestro padre. Recompensa su entrega y hazlo feliz en este día. Amén." }
    ]
  },
  {
    id: "pentecostes",
    nombre: "Pentecostés",
    descripcion: "Para pedir los dones del Espíritu Santo.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Ven, Espíritu Santo", texto: "Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor. Amén." },
      { tipo: "texto", titulo: "Petición de Dones", texto: "Espíritu de sabiduría y entendimiento, Espíritu de consejo y fortaleza, Espíritu de ciencia y piedad, Espíritu de temor de Dios: ven y renueva la faz de la tierra. Amén." },
      { tipo: "repeticion", titulo: "Ave María", veces: 1 }
    ]
  },
  {
    id: "asuncion",
    nombre: "Asunción de la Virgen",
    descripcion: "Para el 15 de agosto.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración", texto: "Virgen María, hoy celebramos que fuiste llevada en cuerpo y alma a la gloria del cielo. Ruega por nosotros, que caminamos aún en esta tierra, para que un día podamos contemplarte cara a cara en el paraíso. Amén." },
      { tipo: "padre_nuestro" },
      { tipo: "repeticion", titulo: "Ave María", veces: 1 }
    ]
  },
  {
    id: "rosario_aurora",
    nombre: "Rosario de Aurora",
    descripcion: "Para rezar al amanecer.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración al amanecer", texto: "Señor, al comenzar este nuevo día, te ofrezco mi vida. Que la Virgen María me tome de la mano y me enseñe a caminar como tú quieres. Amén." },
      { tipo: "texto", titulo: "Primer Misterio", texto: "Meditamos en el nacimiento de Jesús, la luz que ilumina el mundo." },
      { tipo: "padre_nuestro" },
      { tipo: "repeticion", titulo: "Ave María", veces: 10 },
      { tipo: "gloria" },
      { tipo: "texto", titulo: "Oración Final", texto: "Gracias, Virgen de la Aurora, por escuchar nuestras plegarias matutinas. Acompáñanos hoy en todos nuestros trabajos. Amén." }
    ]
  },
  {
    id: "bendicion_ninos",
    nombre: "Bendición de los Niños",
    descripcion: "Para bendecir a los más pequeños.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Oración", texto: "Señor Jesús, tú que dijiste 'Dejen que los niños vengan a mí', bendice a estos pequeños. Que el ángel de la guarda los cuide siempre, que crezcan sanos y fuertes, y que el amor de su familia los acompañe. Amén." },
      { tipo: "repeticion", titulo: "Ave María", veces: 1 }
    ]
  },
  {
    id: "consagracion_virgen",
    nombre: "Consagración a la Virgen",
    descripcion: "Entrega tu vida a María.",
    pasos: [
      { tipo: "texto", titulo: "Señal de la Cruz", texto: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén." },
      { tipo: "texto", titulo: "Acto de Consagración", texto: "¡Oh Señora mía, oh Madre mía! Yo me ofrezco enteramente a ti. Y en prueba de mi filial afecto, te consagro en este día mis ojos, mis oídos, mi lengua, mi corazón... En una palabra, todo mi ser. Ya que soy todo tuyo, oh Madre de Dios, guárdame y defiéndeme como propiedad tuya. Amén." },
      { tipo: "padre_nuestro" },
      { tipo: "repeticion", titulo: "Ave María", veces: 3 }
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
