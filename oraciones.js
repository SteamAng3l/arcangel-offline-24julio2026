const oraciones = [
  {
    nombre: "Salmo 23 (El Señor es mi Pastor)",
    santo: "Rey David",
    categorias: ["Miedo / Ansiedad", "Protección / Refugio", "Soledad"],
    subKeywords: ["pastor", "valle oscuro", "nada me falta", "verdes praderas"],
    texto: "El Señor es mi pastor, nada me falta: en verdes praderas me hace recostar; me conduce hacia fuentes tranquilas y repara mis fuerzas; me guía por el sendero justo, por el honor de su nombre. Aunque camine por cañadas oscuras, nada temo, porque tú vas conmigo: tu vara y tu cayado me sosiegan. Preparas una mesa ante mí, enfrente de mis enemigos; me unges la cabeza con perfume, y mi copa rebosa. Tu bondad y tu misericordia me acompañan todos los días de mi vida, y habitaré en la casa del Señor por años sin término. Amén."
  },
  {
    nombre: "Al Amparo del Altísimo (Salmo 91)",
    santo: "Rey David",
    categorias: ["Miedo / Ansiedad", "Protección / Refugio"],
    subKeywords: ["refugio", "peligro", "nocturno", "peste", "amparo"],
    texto: "Tú que habitas al amparo del Altísimo, que vives a la sombra del Omnipotente, di al Señor: «Refugio mío, alcázar mío, Dios mío, en quien confío». Él te librará de la red del cazador, de la peste funesta. Te cubrirá con sus plumas, bajo sus alas hallarás refugio: su brazo es escudo y armadura. No temerás el espanto nocturno, ni la flecha que vuela de día, ni la peste que se desliza en las tinieblas, ni la epidemia que devasta a mediodía. Amén."
  },
  {
    nombre: "Nada te turbe",
    santo: "Santa Teresa de Jesús",
    categorias: ["Miedo / Ansiedad", "Paz interior", "Estrés / Agobio"],
    subKeywords: ["agitado", "nervioso", "todo se pasa", "paciencia"],
    texto: "Nada te turbe, nada te espante, todo se pasa, Dios no se muda; la paciencia todo lo alcanza; quien a Dios tiene nada le falta: Solo Dios basta. Eleva el pensamiento, al cielo sube, por nada te acongojes, nada te turbe. Sigue a Jesucristo, con pecho grande, y, venga lo que venga, nada te espante. Amén."
  },
  {
    nombre: "Confianza ante la Tormenta",
    santo: "San Agustín de Hipona",
    categorias: ["Miedo / Ansiedad", "Fe / Confianza en Dios"],
    subKeywords: ["tormenta", "paralizado", "tempestad", "ansiedad"],
    texto: "Señor mío y Dios mío, ahuyenta de mi alma el espíritu del miedo que paraliza mi fe. Tú que calmaste la tormenta en el mar de Galilea, mira la tempestad que se agita en mi pecho. No permitas que la ansiedad nuble la certeza de tu amor. Confío en que caminas a mi lado y que nada puede arrancarme de tu mano protectora. Dame la gracia de descansar en tu Providencia. Amén."
  },
  {
    nombre: "Salve Regina (Dios te salve, Reina y Madre)",
    santo: "Tradición de la Iglesia",
    categorias: ["Tristeza / Pena", "Advocaciones marianas / Virgen María", "Duelo / Pérdida"],
    subKeywords: ["reina", "madre", "misericordia", "valle de lágrimas"],
    texto: "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén."
  },
  {
    nombre: "Consuelo de los Afligidos",
    santo: "San Juan de la Cruz",
    categorias: ["Tristeza / Pena", "Duelo / Pérdida", "Desesperanza / Desánimo"],
    subKeywords: ["consuelo", "afligido", "lágrimas", "corazón quebrantado"],
    texto: "¡Oh Señor, Dios mío! No te acuerdes de mis rebeldías para mirarme, sino mira tu infinita misericordia y tu bondad, y sáname esta alma que está triste y herida. Tú eres el consuelo de los afligidos y el bálsamo de los corazones quebrantados. Mira mis lágrimas y el peso de mi pena; transforma este dolor en una ofrenda de amor y purificación. Que tu luz disipe las tinieblas de mi tristeza. Amén."
  },
  {
    nombre: "Alivio de los Cansados",
    santo: "Inspirada en Mateo 11, 28",
    categorias: ["Estrés / Agobio", "Cansancio / Fatiga"],
    subKeywords: ["cansado", "agobiado", "trabajo", "responsabilidades", "tensiones"],
    texto: "Señor Jesús, Tú dijiste: 'Venid a mí todos los que estáis cansados y agobiados, y yo os aliviaré'. Acudo hoy ante tu presencia con el alma cargada de tensiones, prisas y preocupaciones. Te entrego mi agenda, mis miedos a no dar la talla y el peso de mis responsabilidades. Toma Tú el timón de mi día y concédeme la gracia de trabajar con paz y descansar en tu amor. Amén."
  },
  {
    nombre: "Oración para Entregar las Cargas",
    santo: "San Francisco de Sales",
    categorias: ["Estrés / Agobio", "Fe / Confianza en Dios"],
    subKeywords: ["mañana", "providencia", "preocupación", "cargas"],
    texto: "No pienses en el mañana, deja todo cuidado en las manos de la Divina Providencia. El mismo Dios que hoy cuida de ti, cuidará de ti mañana y todos los días; o bien te protegerá del sufrimiento, o te dará la fuerza necesaria para soportarlo. Mantén la paz interior y arroja lejos de ti todas las imaginaciones agobiantes y los pensamientos de inquietud. Amén."
  },
  {
    nombre: "Quédate Conmigo",
    santo: "San Pío de Pietrelcina",
    categorias: ["Soledad", "Oración / Vida espiritual"],
    subKeywords: ["solo", "abandonado", "compañía", "presencia"],
    texto: "Quédate conmigo, Señor, porque es necesario tenerte presente para no olvidarte. Ya ves con cuánta facilidad te abandono. Quédate conmigo, Señor, porque soy débil y necesito tu fuerza para no caer tantas veces. Quédate conmigo, Señor, porque Tú eres mi vida y sin Ti desfallezco. Quédate conmigo, Señor, porque Tú eres mi luz y sin Ti estoy en tinieblas. Quédate conmigo, Señor, para que escuche tu voz y te siga. Amén."
  },
  {
    nombre: "Acto de Esperanza Absoluta",
    santo: "San Francisco de Sales",
    categorias: ["Desesperanza / Desánimo", "Esperanza en el futuro"],
    subKeywords: ["esperanza", "desánimo", "sin salida", "fuerzas"],
    texto: "Dios mío, tengo la firme esperanza de que me concederás, por los méritos de Jesucristo, la vida eterna y las gracias necesarias para alcanzarla, porque Tú, que eres infinitamente fiel y poderoso, lo has prometido. En los momentos de mayor desánimo, cuando mis fuerzas flaquean y no veo salida, me arrojo en tus brazos paternales. Sé que tu amor no me abandonará jamás. Amén."
  }
];
