const oraciones = [

// ============================================
// NIVEL 1: PILARES DE LA FE (las más rezadas del mundo)
// ============================================

  {
    nombre: "Padre Nuestro",
    santo: "Jesucristo",
    categorias: ["Oración / Vida espiritual", "Fe / Confianza en Dios", "Familia / Hogar"],
    subKeywords: ["padre", "pan", "perdón", "tentación", "reino"],
    texto: "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén."
  },
  {
    nombre: "Ave María",
    santo: "Tradición de la Iglesia",
    categorias: ["Advocaciones marianas / Virgen María", "Oración / Vida espiritual"],
    subKeywords: ["maría", "madre", "gracia", "ruega", "pecadores"],
    texto: "Dios te salve, María, llena eres de gracia, el Señor es contigo; bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén."
  },
  {
    nombre: "Ángelus",
    santo: "Tradición de la Iglesia",
    categorias: ["Advocaciones marianas / Virgen María", "Oración / Vida espiritual", "Fe / Confianza en Dios"],
    subKeywords: ["ángel", "anunciación", "encarnación", "mediodía", "verbo"],
    texto: "El Ángel del Señor anunció a María, y concibió por obra del Espíritu Santo. He aquí la esclava del Señor, hágase en mí según tu palabra. Y el Verbo se hizo carne, y habitó entre nosotros. Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Infunde, Señor, tu gracia en nuestras almas, para que cuantos hemos conocido por el anuncio del Ángel la Encarnación de tu Hijo Jesucristo, por su Pasión y su Cruz seamos llevados a la gloria de la Resurrección. Por el mismo Jesucristo Nuestro Señor. Amén."
  },
  {
    nombre: "Gloria al Padre",
    santo: "Tradición de la Iglesia",
    categorias: ["Oración / Vida espiritual", "Gratitud / Acción de gracias"],
    subKeywords: ["gloria", "trinidad", "padre", "hijo", "espíritu"],
    texto: "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén."
  },
  {
    nombre: "Credo de los Apóstoles",
    santo: "Tradición de la Iglesia",
    categorias: ["Fe / Confianza en Dios", "Oración / Vida espiritual"],
    subKeywords: ["creo", "fe", "resurrección", "iglesia", "espíritu santo"],
    texto: "Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre Todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia Católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén."
  },
  {
    nombre: "La Salve (Dios te salve, Reina y Madre)",
    santo: "Tradición de la Iglesia",
    categorias: ["Tristeza / Pena", "Advocaciones marianas / Virgen María", "Duelo / Pérdida"],
    subKeywords: ["reina", "madre", "misericordia", "valle de lágrimas", "desterrados"],
    texto: "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén."
  },
  {
    nombre: "Bajo tu Amparo (Sub Tuum Praesidium)",
    santo: "Tradición de la Iglesia (año 250)",
    categorias: ["Protección / Refugio", "Advocaciones marianas / Virgen María", "Miedo / Ansiedad"],
    subKeywords: ["amparo", "protección", "peligro", "virgen", "súplicas"],
    texto: "Bajo tu amparo nos acogemos, Santa Madre de Dios; no desprecies las súplicas que te dirigimos en nuestras necesidades, antes bien, líbranos de todo peligro, ¡oh Virgen gloriosa y bendita! Amén."
  },
  {
    nombre: "Acordaos (Memorare)",
    santo: "San Bernardo de Claraval",
    categorias: ["Desesperanza / Desánimo", "Advocaciones marianas / Virgen María", "Ayuda económica / Providencia"],
    subKeywords: ["acordaos", "jamás", "abandonado", "súplicas", "confianza"],
    texto: "Acordaos, ¡oh piadosísima Virgen María!, que jamás se ha oído decir que ninguno de los que han acudido a vuestra protección, implorado vuestro auxilio o reclamado vuestro socorro, haya sido abandonado de Vos. Animado por esta confianza, a Vos acudo, Madre, Virgen de las vírgenes, y gimiendo bajo el peso de mis pecados, me atrevo a comparecer ante Vos. ¡Oh Madre de Dios!, no desechéis mis súplicas, antes bien, escuchadlas y acogedlas benignamente. Amén."
  },

// ============================================
// NIVEL 2: SANTOS Y ARCÁNGELES (los más populares)
// ============================================

  {
    nombre: "Oración a San Miguel Arcángel",
    santo: "Papa León XIII",
    categorias: ["Tentación / Pecado", "Protección / Refugio", "Miedo / Ansiedad"],
    subKeywords: ["miguel", "arcángel", "defiéndenos", "satanás", "milicia"],
    texto: "San Miguel Arcángel, defiéndenos en la lucha. Sé nuestro amparo contra la perversidad y acechanzas del demonio. Que Dios manifieste sobre él su poder, es nuestra humilde súplica. Y tú, oh Príncipe de la Milicia Celestial, con el poder que Dios te ha conferido, arroja al infierno a Satanás y a los demás espíritus malignos que vagan por el mundo para la perdición de las almas. Amén."
  },
  {
    nombre: "Oración a San Judas Tadeo",
    santo: "San Judas Tadeo",
    categorias: ["Ayuda económica / Providencia", "Desesperanza / Desánimo", "Trabajo / Desempleo"],
    subKeywords: ["judas", "tadeo", "causas difíciles", "imposibles", "necesidades"],
    texto: "San Judas Tadeo, fiel siervo y amigo de Jesús, la Iglesia te honra e invoca universalmente como patrón de los casos difíciles y desesperados. Ruega por mí, que soy tan miserable, y haz uso del privilegio especial que se te ha concedido de socorrer con prontitud visible y rápida en las cosas más desesperadas. Ven en mi ayuda en esta gran necesidad, para que yo pueda recibir el consuelo y el socorro del cielo en todas mis necesidades, tribulaciones y sufrimientos, particularmente (menciona aquí tu petición), y para que pueda alabar a Dios contigo y con todos los elegidos por toda la eternidad. Amén."
  },
  {
    nombre: "Ángel de mi Guarda",
    santo: "Tradición de la Iglesia",
    categorias: ["Protección / Refugio", "Soledad", "Miedo / Ansiedad"],
    subKeywords: ["ángel", "guarda", "custodia", "ilumíname", "defiéndeme"],
    texto: "Ángel de Dios, bajo cuya custodia me puso la celestial piedad, ilumíname, custódiame, rígeme y gobiérname en este día (o noche). Defiéndeme de las insidias del enemigo visible e invisible, y no permitas que por el pecado me aparte jamás de mi buen Dios. Amén."
  },
  {
    nombre: "Súplica a San José por las Causas Difíciles",
    santo: "San José",
    categorias: ["Ayuda económica / Providencia", "Trabajo / Desempleo", "Familia / Hogar"],
    subKeywords: ["josé", "causas difíciles", "trabajo", "protección", "hogar"],
    texto: "Oh glorioso San José, cuya protección es tan grande, tan fuerte y tan inmediata ante el trono de Dios, te confío todas mis intenciones y deseos. Asísteme, San José, con tu poderosa intercesión, y obtén para mí de tu Divino Hijo todas las bendiciones espirituales y temporales, para que, al confiar aquí abajo en tu poder celestial, pueda ofrecer mi acción de gracias al Padre más amoroso. Amén."
  },
  {
    nombre: "Oración a San Antonio de Padua",
    santo: "San Antonio de Padua",
    categorias: ["Ayuda económica / Providencia", "Necesidades urgentes", "Esperanza en el futuro"],
    subKeywords: ["antonio", "padua", "perdido", "hallar", "milagros"],
    texto: "Glorioso San Antonio, que tienes el don divino de encontrar lo que se ha perdido, ayúdame a recuperar (menciónese el objeto o la gracia) si es para el bien de mi alma. Alcánzame también una fe firme, un amor ardiente al prójimo y una confianza absoluta en la bondad de Dios, para que nunca me separe de su camino y reciba su auxilio en mis carencias cotidianas. Amén."
  },
  {
    nombre: "Oración a Santa Rita de Casia",
    santo: "Santa Rita de Casia",
    categorias: ["Desesperanza / Desánimo", "Ayuda económica / Providencia", "Enfermedad / Dolor"],
    subKeywords: ["rita", "casia", "imposibles", "desesperados", "angustias"],
    texto: "Bajo el peso del dolor, a ti, querida Santa Rita, llamada la santa de los imposibles, recurro con confianza con la esperanza de ser escuchado en mi necesidad. Libra mi pobre corazón de las angustias que lo oprimen y devuelve la paz a mi espíritu, tan lleno de continuas preocupaciones. Tú que fuiste elegida por Dios como abogada de los casos más desesperados, alcánzame la gracia que fervientemente te pido. Amén."
  },
  {
    nombre: "La Coraza de San Patricio",
    santo: "San Patricio",
    categorias: ["Protección / Refugio", "Miedo / Ansiedad", "Fortaleza / Valentía"],
    subKeywords: ["coraza", "patricio", "cristo conmigo", "protección", "escudo"],
    texto: "Cristo conmigo, Cristo delante de mí, Cristo detrás de mí, Cristo en mí, Cristo debajo de mí, Cristo sobre mí, Cristo a mi derecha, Cristo a mi izquierda, Cristo al descansar, Cristo al levantarme, Cristo en el corazón de todo hombre que piense en mí, Cristo en la boca de todo hombre que hable de mí, Cristo en todo ojo que me vea, Cristo en todo oído que me escuche. Me levanto hoy por medio de la poderosa fuerza de Dios que me protege. Amén."
  },
  {
    nombre: "Oración del Viajero a San Cristóbal",
    santo: "San Cristóbal",
    categorias: ["Protección / Refugio", "Miedo / Ansiedad", "Esperanza en el futuro"],
    subKeywords: ["cristóbal", "viajero", "camino", "conductor", "accidentes"],
    texto: "Señor, dame una mano firme y un ojo atento para que nadie sufra daño cuando yo pase. Tú que das la vida y la conservas, te ruego humildemente que cuides hoy de mi existencia y de la de aquellos que me acompañan. Líbranos, San Cristóbal protector, de los accidentes y peligros del camino, y haz que lleguemos con bien a nuestro destino para alabanza de tu santo Nombre. Amén."
  },

// ============================================
// NIVEL 3: ORACIONES MÍSTICAS UNIVERSALES
// ============================================

  {
    nombre: "Alma de Cristo (Anima Christi)",
    santo: "San Ignacio de Loyola",
    categorias: ["Oración / Vida espiritual", "Tristeza / Pena", "Enfermedad / Dolor", "Duelo / Pérdida"],
    subKeywords: ["alma", "cristo", "sangre", "llagas", "escóndeme"],
    texto: "Alma de Cristo, santifícame. Cuerpo de Cristo, sálvame. Sangre de Cristo, embriágame. Agua del costado de Cristo, lávame. Pasión de Cristo, confórtame. ¡Oh, buen Jesús!, óyeme. Dentro de tus llagas, escóndeme. No permitas que me aparte de Ti. Del maligno enemigo, defiéndeme. En la hora de mi muerte, llámame. Y mándame ir a Ti, para que con tus santos te alabe, por los siglos de los siglos. Amén."
  },
  {
    nombre: "Nada te turbe",
    santo: "Santa Teresa de Jesús",
    categorias: ["Miedo / Ansiedad", "Paz interior", "Estrés / Agobio", "Desesperanza / Desánimo"],
    subKeywords: ["nada te turbe", "todo se pasa", "paciencia", "solo dios basta"],
    texto: "Nada te turbe, nada te espante, todo se pasa, Dios no se muda; la paciencia todo lo alcanza; quien a Dios tiene nada le falta: Solo Dios basta. Eleva el pensamiento, al cielo sube, por nada te acongojes, nada te turbe. Sigue a Jesucristo, con pecho grande, y, venga lo que venga, nada te espante. Amén."
  },
  {
    nombre: "Tarde te amé",
    santo: "San Agustín de Hipona",
    categorias: ["Amor de Dios", "Oración / Vida espiritual", "Arrepentimiento / Confesión"],
    subKeywords: ["tarde te amé", "hermosura", "dentro de mí", "perfume"],
    texto: "¡Tarde te amé, hermosura tan antigua y tan nueva, tarde te amé! Y tú estabas dentro de mí y yo fuera, y por fuera te buscaba. Tú estabas conmigo, mas yo no estaba contigo. Llamaste y clamaste, y rompiste mi sordera; brillaste y resplandeciste, y fugaste mi ceguera; exhalaste tu perfume, y respiré, y suspiro por ti; gusté de ti, y siento hambre y sed; me tocaste, y me encendí en tu paz. Amén."
  },
  {
    nombre: "Acto de Amor Perfecto",
    santo: "San Francisco Javier",
    categorias: ["Amor de Dios", "Fe / Confianza en Dios", "Oración / Vida espiritual"],
    subKeywords: ["no me mueve", "quererte", "cruz", "amor"],
    texto: "No me mueve, mi Dios, para quererte el cielo que me tienes prometido, ni me mueve el infierno tan temido para dejar por eso de ofenderte. Tú me mueves, Señor, muéveme el verte clavado en una cruz y escarnecido, muéveme ver tu cuerpo tan herido, muévenme tus afrentas y tu muerte. Muéveme, en fin, tu amor, y en tal manera, que aunque no hubiera cielo, yo te amara, y aunque no hubiera infierno, te temiera. Amén."
  },
  {
    nombre: "Oración de la Misericordia (Tres de la Tarde)",
    santo: "Santa Faustina Kowalska",
    categorias: ["Arrepentimiento / Confesión", "Amor de Dios", "Enfermedad / Dolor", "Duelo / Pérdida"],
    subKeywords: ["misericordia", "tres de la tarde", "fuente", "sangre y agua"],
    texto: "Expiraste, Jesús, pero la fuente de vida brotó inmensamente para las almas, y el océano de misericordia se abrió para el mundo entero. Oh, Fuente de Vida, insondable Misericordia Divina, abarca al mundo entero y derrámate sobre nosotros. Oh, Sangre y Agua que brotaste del Corazón de Jesús como una fuente de misericordia para nosotros, en Ti confío. Amén."
  },
  {
    nombre: "Magnificat (Cántico de la Virgen María)",
    santo: "La Virgen María (Lucas 1)",
    categorias: ["Gratitud / Acción de gracias", "Advocaciones marianas / Virgen María", "Alegría / Gozo"],
    subKeywords: ["magnificat", "engrandece", "alma", "poderoso"],
    texto: "Proclama mi alma la grandeza del Señor, se alegra mi espíritu en Dios, mi salvador; porque ha mirado la humillación de su esclava. Desde ahora me felicitarán todas las generaciones, porque el Poderoso ha hecho obras grandes por mí: su nombre es santo, y su misericordia llega a sus fieles de generación en generación. Él hace proezas con su brazo: dispersa a los soberbios de corazón, derriba del trono a los poderosos y enaltece a los humildes, a los hambrientos los colma de bienes y a los ricos los despide vacíos. Amén."
  },
  {
    nombre: "Te Deum (Himno de Alabanza)",
    santo: "Tradición de la Iglesia",
    categorias: ["Gratitud / Acción de gracias", "Alegría / Gozo", "Oración / Vida espiritual"],
    subKeywords: ["te deum", "alabamos", "confesamos", "santo"],
    texto: "A ti, Dios, te alabamos, a ti, Señor, te confesamos. A ti, eterno Padre, te venera toda la tierra. Los ángeles todos, los cielos y todas las potestades te honran. Santo, Santo, Santo es el Señor, Dios de los ejércitos. Llenos están los cielos y la tierra de la majestad de tu gloria. Te damos gracias por tus inmensos beneficios y por el don de la fe. Amén."
  },
  {
    nombre: "Acto de Contrición Perfecto",
    santo: "Tradición de la Iglesia",
    categorias: ["Arrepentimiento / Confesión", "Perdón", "Tentación / Pecado"],
    subKeywords: ["contrición", "pesa", "ofendido", "propongo"],
    texto: "Señor mío Jesucristo, Dios y Hombre verdadero, Creador, Padre y Redentor mío; por ser Vos quien sois, Bondad infinita, y porque os amo sobre todas las cosas, me pesa de todo corazón de haberos ofendido; también me pesa porque podéis castigarme con las penas del infierno. Propongo firmemente, ayudado de vuestra divina gracia, enmendarme y nunca más pecar, confesarme y cumplir la penitencia que me fuere impuesta. Amén."
  },

// ============================================
// NIVEL 4: TEMÁTICAS POR SENTIMIENTO
// ============================================

// ---- MIEDO / ANSIEDAD ----
  {
    nombre: "Salmo 23 (El Señor es mi Pastor)",
    santo: "Rey David",
    categorias: ["Miedo / Ansiedad", "Protección / Refugio", "Soledad", "Paz interior"],
    subKeywords: ["pastor", "valle oscuro", "nada me falta", "verdes praderas", "cayado"],
    texto: "El Señor es mi pastor, nada me falta: en verdes praderas me hace recostar; me conduce hacia fuentes tranquilas y repara mis fuerzas; me guía por el sendero justo, por el honor de su nombre. Aunque camine por cañadas oscuras, nada temo, porque tú vas conmigo: tu vara y tu cayado me sosiegan. Preparas una mesa ante mí, enfrente de mis enemigos; me unges la cabeza con perfume, y mi copa rebosa. Tu bondad y tu misericordia me acompañan todos los días de mi vida, y habitaré en la casa del Señor por años sin término. Amén."
  },
  {
    nombre: "Al Amparo del Altísimo (Salmo 91)",
    santo: "Rey David",
    categorias: ["Miedo / Ansiedad", "Protección / Refugio"],
    subKeywords: ["refugio", "peligro", "nocturno", "peste", "amparo", "altísimo"],
    texto: "Tú que habitas al amparo del Altísimo, que vives a la sombra del Omnipotente, di al Señor: «Refugio mío, alcázar mío, Dios mío, en quien confío». Él te librará de la red del cazador, de la peste funesta. Te cubrirá con sus plumas, bajo sus alas hallarás refugio: su brazo es escudo y armadura. No temerás el espanto nocturno, ni la flecha que vuela de día, ni la peste que se desliza en las tinieblas, ni la epidemia que devasta a mediodía. Amén."
  },
  {
    nombre: "Confianza ante la Tormenta",
    santo: "San Agustín de Hipona",
    categorias: ["Miedo / Ansiedad", "Fe / Confianza en Dios", "Paz interior"],
    subKeywords: ["tormenta", "paralizado", "tempestad", "ansiedad", "galilea"],
    texto: "Señor mío y Dios mío, ahuyenta de mi alma el espíritu del miedo que paraliza mi fe. Tú que calmaste la tormenta en el mar de Galilea, mira la tempestad que se agita en mi pecho. No permitas que la ansiedad nuble la certeza de tu amor. Confío en que caminas a mi lado y que nada puede arrancarme de tu mano protectora. Dame la gracia de descansar en tu Providencia. Amén."
  },

// ---- TRISTEZA / PENA ----
  {
    nombre: "Consuelo de los Afligidos",
    santo: "San Juan de la Cruz",
    categorias: ["Tristeza / Pena", "Duelo / Pérdida", "Desesperanza / Desánimo", "Sanación interior / Liberación"],
    subKeywords: ["consuelo", "afligido", "lágrimas", "corazón quebrantado", "herida"],
    texto: "¡Oh Señor, Dios mío! No te acuerdes de mis rebeldías para mirarme, sino mira tu infinita misericordia y tu bondad, y sáname esta alma que está triste y herida. Tú eres el consuelo de los afligidos y el bálsamo de los corazones quebrantados. Mira mis lágrimas y el peso de mi pena; transforma este dolor en una ofrenda de amor y purificación. Que tu luz disipe las tinieblas de mi tristeza. Amén."
  },
  {
    nombre: "Súplica en el Abatimiento",
    santo: "San Alfonso María de Ligorio",
    categorias: ["Tristeza / Pena", "Desesperanza / Desánimo", "Soledad"],
    subKeywords: ["abatimiento", "amargura", "desolación", "huerto de los olivos", "corazón traspasado"],
    texto: "Jesús mío, me veo sumergido en la tristeza y la amargura, pero acudo a Ti, que eres la fuente de todo consuelo. Acepto esta pena en unión con tus dolores en el Huerto de los Olivos. No me dejes caer en la desesperación. Sé Tú mi alegría en medio de la desolación y haz que mi alma encuentre descanso solo en tu Corazón traspasado. Amén."
  },

// ---- ESTRÉS / AGOBIO ----
  {
    nombre: "Alivio de los Cansados",
    santo: "Inspirada en Mateo 11, 28",
    categorias: ["Estrés / Agobio", "Cansancio / Fatiga", "Paz interior"],
    subKeywords: ["cansado", "agobiado", "trabajo", "responsabilidades", "tensiones", "agenda"],
    texto: "Señor Jesús, Tú dijiste: 'Venid a mí todos los que estáis cansados y agobiados, y yo os aliviaré'. Acudo hoy ante tu presencia con el alma cargada de tensiones, prisas y preocupaciones. Te entrego mi agenda, mis miedos a no dar la talla y el peso de mis responsabilidades. Toma Tú el timón de mi día y concédeme la gracia de trabajar con paz y descansar en tu amor. Amén."
  },
  {
    nombre: "Oración para Entregar las Cargas",
    santo: "San Francisco de Sales",
    categorias: ["Estrés / Agobio", "Fe / Confianza en Dios", "Paz interior"],
    subKeywords: ["mañana", "providencia", "preocupación", "cargas", "paz interior"],
    texto: "No pienses en el mañana, deja todo cuidado en las manos de la Divina Providencia. El mismo Dios que hoy cuida de ti, cuidará de ti mañana y todos los días; o bien te protegerá del sufrimiento, o te dará la fuerza necesaria para soportarlo. Mantén la paz interior y arroja lejos de ti todas las imaginaciones agobiantes y los pensamientos de inquietud. Amén."
  },
  {
    nombre: "Suscitando la Calma",
    santo: "San Felipe Neri",
    categorias: ["Estrés / Agobio", "Paz interior", "Miedo / Ansiedad"],
    subKeywords: ["calma", "inquietud", "escrúpulo", "agobio", "lago tranquilo"],
    texto: "Señor, mapa de amor, aparta de mí todo espíritu de inquietud, escrúpulo y agobio que pretenda turbar la paz de mi alma. Haz que mi corazón sea como un lago tranquilo que refleje tu luz divina. Que las prisas del mundo no me exasperen, que nada rompa mi concordia contigo. Dame un espíritu sereno y confiado. Amén."
  },
  {
    nombre: "Abandono de las Preocupaciones",
    santo: "San Juan Pablo II",
    categorias: ["Estrés / Agobio", "Fe / Confianza en Dios", "Trabajo / Desempleo"],
    subKeywords: ["ritmo frenético", "agobio", "éxito material", "reino de dios"],
    texto: "Oh Cristo Redentor, ante el ritmo frenético de la vida y el agobio de los problemas cotidianos, te pido que satures mi mente de tu paz. Enséñame a distinguir lo urgente de lo verdaderamente importante. Que no me deje arrastrar por la ansiedad del éxito material, sino que busque ante todo el Reino de Dios y su justicia. Amén."
  },

// ---- SOLEDAD ----
  {
    nombre: "Quédate Conmigo",
    santo: "San Pío de Pietrelcina",
    categorias: ["Soledad", "Oración / Vida espiritual", "Fe / Confianza en Dios"],
    subKeywords: ["solo", "abandonado", "compañía", "presencia", "débil"],
    texto: "Quédate conmigo, Señor, porque es necesario tenerte presente para no olvidarte. Ya ves con cuánta facilidad te abandono. Quédate conmigo, Señor, porque soy débil y necesito tu fuerza para no caer tantas veces. Quédate conmigo, Señor, porque Tú eres mi vida y sin Ti desfallezco. Quédate conmigo, Señor, porque Tú eres mi luz y sin Ti estoy en tinieblas. Quédate conmigo, Señor, para que escuche tu voz y te siga. Amén."
  },
  {
    nombre: "El Amigo Invisible en el Sagrario",
    santo: "San Alfonso María de Ligorio",
    categorias: ["Soledad", "Oración / Vida espiritual", "Amor de Dios"],
    subKeywords: ["sagrario", "eucaristía", "abandonado", "compañía", "esperándome"],
    texto: "Jesús mío, cuando me sienta solo y abandonado por las criaturas, haz que vuelva mis ojos hacia el sagrario. Allí estás Tú, esperándome día y noche, silencioso y amoroso. Que tu presencia eucarística sea mi compañía perfecta, mi consuelo en el desamparo y la fuerza para seguir amando. Amén."
  },
  {
    nombre: "Dios como Única Compañía",
    santo: "San Juan de la Cruz",
    categorias: ["Soledad", "Amor de Dios", "Oración / Vida espiritual"],
    subKeywords: ["silencio", "olvidarme", "distancia", "compañero fiel", "roca"],
    texto: "Señor, en la soledad de mi alma y en el silencio de mis días, te busco a Ti. Cuando el mundo parece olvidarme o la distancia me separa de los que amo, recuerdo que nunca estoy solo, porque Tú habitas en lo más profundo de mi ser. Sé Tú mi conversación, mi amigo fiel, mi roca y mi consuelo. Que esta soledad terrenal me impulse a unirme más íntimamente a tu Divino Corazón. Amén."
  },
  {
    nombre: "Oración en el Silencio",
    santo: "San Benito de Nursia",
    categorias: ["Soledad", "Paz interior", "Oración / Vida espiritual"],
    subKeywords: ["silencio", "santuario", "protector", "vela", "se hace tarde"],
    texto: "Padre santo, concédeme la gracia de encontrarte en el silencio. Que la soledad del mundo no sea motivo de tristeza, sino un santuario donde pueda escuchar tu voz dulce y suave. Tú eres el compañero que nunca falla, el protector que vela mi sueño y el consolador de mi espíritu. Quédate conmigo, Señor, porque se hace tarde. Amén."
  },

// ---- DESESPERANZA / DESÁNIMO ----
  {
    nombre: "Acto de Esperanza Absoluta",
    santo: "San Francisco de Sales",
    categorias: ["Desesperanza / Desánimo", "Esperanza en el futuro", "Fe / Confianza en Dios"],
    subKeywords: ["esperanza", "desánimo", "sin salida", "fuerzas", "brazos paternales"],
    texto: "Dios mío, tengo la firme esperanza de que me concederás, por los méritos de Jesucristo, la vida eterna y las gracias necesarias para alcanzarla, porque Tú, que eres infinitamente fiel y poderoso, lo has prometido. En los momentos de mayor desánimo, cuando mis fuerzas flaquean y no veo salida, me arrojo en tus brazos paternales. Sé que tu amor no me abandonará jamás. Amén."
  },
  {
    nombre: "Para Desterrar el Desaliento",
    santo: "San Pío de Pietrelcina",
    categorias: ["Desesperanza / Desánimo", "Fortaleza / Valentía", "Fe / Confianza en Dios"],
    subKeywords: ["desaliento", "desánimo", "esfuerzos en vano", "victoria", "misericordioso"],
    texto: "Señor Jesús, aleja de mí el fantasma del desánimo que debilita mis pasos. Cuando sienta que mis esfuerzos son en vano y la desesperanza toque a mi puerta, pon tus llagas ante mis ojos para recordar que la victoria final ya es tuya. Mi fe puesta en Ti aleja toda preocupación inútil, porque Tú eres misericordioso. Amén."
  },
  {
    nombre: "Esperanza Inquebrantable",
    santo: "San Juan Pablo II",
    categorias: ["Desesperanza / Desánimo", "Esperanza en el futuro", "Fortaleza / Valentía"],
    subKeywords: ["días oscuros", "desesperanza", "futuro", "no tengáis miedo", "señor de la historia"],
    texto: "Señor, en los días oscuros en que la desesperanza quiere adueñarse de mi futuro, infúndeme la fuerza de tu Espíritu Santo. Que no flaquee mi fe ante las dificultades del mundo, sino que camine con la frente en alto, recordando tus palabras: '¡No tengáis miedo!'. Tú eres el Señor de la historia y mi Salvador. Amén."
  },

// ---- CANSANCIO / FATIGA ----
  {
    nombre: "El Corazón Inquieto",
    santo: "San Agustín de Hipona",
    categorias: ["Cansancio / Fatiga", "Soledad", "Oración / Vida espiritual"],
    subKeywords: ["inquieto", "descanso", "agotamiento", "corazón", "hasta que descanse en ti"],
    texto: "Grande eres, Señor, y laudable sobremanera; grande tu poder, y tu sabiduría no tiene número. Nos hiciste, Señor, para Ti, y nuestro corazón estará inquieto y fatigado hasta que descanse en Ti. Te presento mi cansancio físico, mi agotamiento mental y el peso de mis labores. Renueva mis energías bajo la sombra de tus alas. Amén."
  },
  {
    nombre: "Súplica del Trabajador Exhausto",
    santo: "San José Obrero",
    categorias: ["Cansancio / Fatiga", "Trabajo / Desempleo", "Estrés / Agobio"],
    subKeywords: ["josé", "trabajador", "fatiga", "sudor", "sagrada familia"],
    texto: "Glorioso San José, patrón de los trabajadores, que conociste la fatiga del trabajo diario y el sudor de la frente para sustentar a la Sagrada Familia, alcánzame la gracia de sobrellevar el cansancio con paciencia y espíritu de fe. Que mis labores y mis fatigas sean santificadas y ofrecidas al Señor como un sacrificio agradable. Amén."
  },
  {
    nombre: "Renovación del Vigor",
    santo: "Santo Tomás de Aquino",
    categorias: ["Cansancio / Fatiga", "Fortaleza / Valentía", "Salud física y espiritual"],
    subKeywords: ["vigor", "agotado", "miembros fatigados", "fuerza de los que esperan"],
    texto: "Señor Dios, fuerza de los que en Ti esperan, mira con bondad mi cuerpo y mi mente agotados por las exigencias de la vida. Infunde un rayo de tu vigor en mis miembros fatigados. Que mi cansancio no me vuelva irritable ni egoísta, sino que aprenda a ofrecerlo con amor por la salvación de mi alma y la de mis hermanos. Amén."
  },
  {
    nombre: "Alivio Espiritual en la Fatiga",
    santo: "San Ignacio de Loyola",
    categorias: ["Cansancio / Fatiga", "Oración / Vida espiritual"],
    subKeywords: ["toma mi cansancio", "ofrenda", "sueño reparador", "entusiasmo"],
    texto: "Señor, toma mi cansancio y recíbelo como una ofrenda de servicio. Que la fatiga física no apague el ardor de mi espíritu ni disminuya mi deseo de hacer el bien. Dame un sueño reparador y un despertar lleno de entusiasmo para seguir edificando tu Reino con fuerzas renovadas. Amén."
  },

// ---- ENFERMEDAD / DOLOR ----
  {
    nombre: "Súplica por la Salud",
    santo: "San Juan Pablo II",
    categorias: ["Enfermedad / Dolor", "Salud física y espiritual", "Fe / Confianza en Dios"],
    subKeywords: ["salud", "enfermedad", "dolores", "pasión redentora", "paciencia"],
    texto: "Señor Jesús, que por nuestro amor cargaste con la Cruz y conociste el sufrimiento humano, te presento mi enfermedad y mis dolores físicos (o los de mi ser querido). Te pido la salud del cuerpo si es tu Santa Voluntad, pero sobre todo te ruego que me concedas la paciencia y la fortaleza para no renegar en la prueba. Uno mis sufrimientos a tu Pasión Redentora. En Ti confío, Señor. Amén."
  },
  {
    nombre: "Oración del Enfermo",
    santo: "San Camilo de Lelis",
    categorias: ["Enfermedad / Dolor", "Salud física y espiritual", "Sanación interior / Liberación"],
    subKeywords: ["enfermo", "sanación", "dolencias", "vida y salud", "santo nombre"],
    texto: "Señor Jesús, vida y salud de los enfermos, mira con piedad a tu siervo necesitado de sanación. Libra mi cuerpo de las dolencias que lo aquejan y purifica mi alma de toda mancha de pecado. Que la salud recobrada sea empleada para alabanza de tu santo Nombre y para el cumplimiento fiel de tus mandamientos. Amén."
  },
  {
    nombre: "Intercesión en el Dolor",
    santo: "Virgen de Lourdes",
    categorias: ["Enfermedad / Dolor", "Advocaciones marianas / Virgen María", "Salud física y espiritual"],
    subKeywords: ["lourdes", "salud de los enfermos", "dolores", "cruz", "dignidad cristiana"],
    texto: "¡Oh mansa y piadosa Virgen de Lourdes!, Refugio de los pecadores y Salud de los enfermos. Tú que conoces mis dolores y las limitaciones de mi cuerpo, intercede ante tu Divino Hijo por mi pronta sanación. Alcánzame la gracia de soportar el dolor con dignidad cristiana, uniendo mi cruz a la de Jesús para la gloria de Dios. Amén."
  },
  {
    nombre: "Aceptación del Dolor Corporal",
    santo: "San Pío de Pietrelcina",
    categorias: ["Enfermedad / Dolor", "Fortaleza / Valentía", "Fe / Confianza en Dios"],
    subKeywords: ["cruz", "enfermedad", "purificación", "hágase tu voluntad"],
    texto: "Señor Dios, no te pido que me quites la cruz de la enfermedad, sino que me des la fuerza para llevarla con la misma paciencia con que Tú llevaste la tuya. Que este dolor físico sea un medio de purificación para mi alma y un testimonio de fe para los que me rodean. Hágase en mí tu santa voluntad. Amén."
  },

// ---- DUELO / PÉRDIDA ----
  {
    nombre: "Ante la Partida de un Ser Querido",
    santo: "San Agustín de Hipona",
    categorias: ["Duelo / Pérdida", "Esperanza en el futuro", "Fe / Confianza en Dios"],
    subKeywords: ["partida", "ser querido", "separación", "resurrección", "volveremos a vernos"],
    texto: "No te imploro, Señor, que me devuelvas a quien te has llevado, porque tu voluntad es santa y justa. Te pido que me concedas la gracia de aceptar esta separación con la esperanza cristiana de la resurrección. Tú sabes el dolor que desgarra mi alma por la ausencia de este ser querido. Dale a él la luz perpetua, y a mí la paz que el mundo no puede dar. Volveremos a vernos en tu Reino. Amén."
  },
  {
    nombre: "Requiem Aeternam",
    santo: "Liturgia Oficial de la Iglesia",
    categorias: ["Duelo / Pérdida", "Oración / Vida espiritual"],
    subKeywords: ["descanso eterno", "luz perpetua", "difuntos", "fieles difuntos"],
    texto: "Concédeles, Señor, el descanso eterno y brille para ellos la luz perpetua. Que las almas de todos los fieles difuntos, por la misericordia de Dios, descansen en paz. Consuela a los que lloramos su partida y acrecienta en nuestros corazones la esperanza de la vida eterna en tu presencia celestial. Amén."
  },
  {
    nombre: "Al Otro Lado del Camino",
    santo: "Inspirada en San Agustín",
    categorias: ["Duelo / Pérdida", "Esperanza en el futuro", "Paz interior"],
    subKeywords: ["muerte", "habitación de al lado", "otro lado del camino", "no estoy lejos"],
    texto: "La muerte no es nada, solo he pasado a la habitación de al lado. Yo soy yo, vosotros sois vosotros. Lo que éramos unos para otros, lo seguimos siendo. Rezad, sonreíd, pensad en mí. No estoy lejos, justo al otro lado del camino. Enjuga tus lágrimas y no llores si me amas; mi alma está sumergida en el amor de Dios. Amén."
  },
  {
    nombre: "Súplica a la Virgen de los Dolores",
    santo: "Virgen de los Dolores",
    categorias: ["Duelo / Pérdida", "Advocaciones marianas / Virgen María", "Tristeza / Pena"],
    subKeywords: ["madre dolorosa", "cruz", "lágrimas", "luto", "vacío"],
    texto: "Oh María, Madre Dolorosa, que al pie de la Cruz experimentaste el dolor más grande al ver morir a tu Divino Hijo, mira las lágrimas de mi corazón herido por la pérdida de mi ser querido. Tú que comprendes este vacío, acompáñame en mi luto, sana mi dolor y alcánzame la paz que solo Dios puede otorgar. Amén."
  },

// ---- PAZ INTERIOR ----
  {
    nombre: "Instrumento de Paz",
    santo: "San Francisco de Asís",
    categorias: ["Paz interior", "Amor al prójimo", "Fortaleza / Valentía"],
    subKeywords: ["instrumento", "paz", "odio", "perdón", "dar"],
    texto: "Señor, hazme un instrumento de tu paz: donde haya odio, ponga yo amor; donde haya ofensa, ponga yo perdón; donde haya discordia, ponga yo unión; donde haya error, ponga yo verdad; donde haya duda, ponga yo la fe; donde haya desesperación, ponga yo esperanza; donde haya tinieblas, ponga yo la luz; donde haya tristeza, ponga yo alegría. Oh Maestro, haz que yo no busque tanto ser consolado, sino consolar; ser comprendido, sino comprender; ser amado, sino amar. Porque es dando que se recibe; perdonando que se es perdonado; muriendo que se resucita a la Vida Eterna. Amén."
  },
  {
    nombre: "Oración por la Paz del Corazón",
    santo: "San Felipe Neri",
    categorias: ["Paz interior", "Estrés / Agobio", "Miedo / Ansiedad"],
    subKeywords: ["turbación", "enojo", "escrúpulo", "mar tranquilo", "concordia"],
    texto: "Señor, Dios de bondad, aparta de mí toda turbación, enojo y escrúpulo que perturbe la paz de mi alma. Haz que mi corazón sea como un mar tranquilo que refleje tu luz divina. Que nada me exaspere, que nada rompa mi concordia contigo y con mis hermanos. Dame un espíritu alegre, sereno y confiado en tu amor. Amén."
  },
  {
    nombre: "Oración de la Serenidad Completa",
    santo: "Santa Teresa de Jesús",
    categorias: ["Paz interior", "Estrés / Agobio", "Fe / Confianza en Dios"],
    subKeywords: ["serenidad", "paz interior", "pensamientos tormentosos", "santa calma"],
    texto: "Señor, concédeme la paz interior que sobrepasa todo entendimiento. Que mi alma descanse en la certeza de que estás al control de todas las cosas. Aplaca los pensamientos tormentosos, aquieta los impulsos de mi carne y llena mi espíritu con el óleo santo de tu santa calma, para que pueda ser testigo de tu amor. Amén."
  },
  {
    nombre: "Custodia de la Paz Interior",
    santo: "San Francisco de Sales",
    categorias: ["Paz interior", "Estrés / Agobio", "Fe / Confianza en Dios"],
    subKeywords: ["no pierdas la paz", "corazón agitado", "confianza", "nunca desampara"],
    texto: "No pierdas la paz interior por ninguna cosa, ni aunque el mundo entero se vuelva del revés. Si te das cuenta de que tu corazón se agita, recógelo suavemente y ponlo de nuevo en presencia de Dios, haciendo un acto de fe y confianza en que Él nunca desampara a sus hijos. Amén."
  },

// ---- FORTALEZA / VALENTÍA ----
  {
    nombre: "Ofrecimiento para la Lucha",
    santo: "San Ignacio de Loyola",
    categorias: ["Fortaleza / Valentía", "Vocación / Propósito de vida", "Fe / Confianza en Dios"],
    subKeywords: ["libertad", "memoria", "entendimiento", "voluntad", "gracia"],
    texto: "Tomad, Señor, y recibid toda mi libertad, mi memoria, mi entendimiento y toda mi voluntad, todo mi haber y mi poseer; Vos me lo disteis, a Vos, Señor, lo torno; todo es vuestro, disponed a toda vuestra voluntad; dadme vuestro amor y gracia, que esta me basta. Con esta gracia tendré la fortaleza para vencer cualquier obstáculo y el valor para confesar tu santo nombre. Amén."
  },
  {
    nombre: "Firmeza sobre la Roca",
    santo: "San Juan Crisóstomo",
    categorias: ["Fortaleza / Valentía", "Fe / Confianza en Dios", "Tentación / Pecado"],
    subKeywords: ["roca", "cristo", "tempestad", "mártires", "verdad"],
    texto: "Señor, las olas se agitan y la tempestad es fuerte, pero no tememos naufragar porque estamos cimentados sobre la roca que es Cristo. Dame la valentía de los santos mártires para no traicionar jamás la verdad de tu Evangelio ante las presiones del mundo, manteniéndome firme en la doctrina santa de tu Iglesia. Amén."
  },
  {
    nombre: "Fuerza ante las Dificultades",
    santo: "San Pío de Pietrelcina",
    categorias: ["Fortaleza / Valentía", "Miedo / Ansiedad", "Trabajo / Desempleo"],
    subKeywords: ["fortaleza", "espíritu santo", "no retroceda", "valentía"],
    texto: "Señor Dios, la vida presenta combates duros y a veces siento que mis fuerzas humanas claudican. Te pido que infundas en mi alma el don de la fortaleza del Espíritu Santo. Que no retroceda ante el deber, que no me acobarde ante las críticas y que camine con la valentía de saber que Tú vences conmigo. Amén."
  },
  {
    nombre: "Súplica por el Valor Cristiano",
    santo: "San Juan Pablo II",
    categorias: ["Fortaleza / Valentía", "Fe / Confianza en Dios", "Amor al prójimo"],
    subKeywords: ["valiente", "respeto humano", "defender la verdad", "cruz"],
    texto: "Señor Jesús, hazme valiente. Quita de mi corazón el respeto humano y el miedo al qué dirán. Dame la fortaleza para defender la verdad, proteger al débil y proclamar tu Nombre con obras y palabras. Que tu Cruz sea mi estandarte y mi victoria diaria. Amén."
  },

// ---- PROTECCIÓN / REFUGIO ----
  {
    nombre: "Torre Fuerte es el Nombre del Señor",
    santo: "Rey Salomón",
    categorias: ["Protección / Refugio", "Miedo / Ansiedad", "Fortaleza / Valentía"],
    subKeywords: ["torre fuerte", "refugio", "correr", "levantado"],
    texto: "El nombre del Señor es torre fuerte; a ella corre el justo y está a salvo. Padre, en los momentos en que me siento amenazado o vulnerable, enséñame a correr hacia Ti, no hacia mis propias fuerzas. Sé mi torre inexpugnable, mi refugio seguro, mi defensa en el día del peligro. Que bajo tu amparo encuentre la paz que el mundo no puede darme. Amén."
  },
  {
    nombre: "El Señor es mi Luz y mi Salvación",
    santo: "Rey David",
    categorias: ["Protección / Refugio", "Miedo / Ansiedad", "Fe / Confianza en Dios"],
    subKeywords: ["luz", "salvación", "temeré", "fortaleza"],
    texto: "El Señor es mi luz y mi salvación, ¿a quién temeré? El Señor es la defensa de mi vida, ¿quién me hará temblar? Cuando se juntan contra mí los malhechores, ellos tropiezan y caen. Aunque acampe contra mí un ejército, mi corazón no teme; aunque estalle una guerra contra mí, estoy confiado. Amén."
  },
  {
    nombre: "Oración por los Niños y la Familia",
    santo: "San Juan Pablo II",
    categorias: ["Protección / Refugio", "Familia / Hogar", "Amor al prójimo"],
    subKeywords: ["niños", "familia", "protección", "hogar", "inocencia"],
    texto: "Señor Jesús, que en los niños de Belén y de Nazaret bendijiste la infancia, te pedimos por los niños de nuestras familias y del mundo entero. Protégelos de todo mal, de toda violencia y de todo peligro. Guarda su inocencia, ilumina sus mentes y haz que crezcan en sabiduría y gracia ante Ti y ante los hombres. Amén."
  },
  {
    nombre: "Oración por la Protección del Hogar",
    santo: "San José",
    categorias: ["Protección / Refugio", "Familia / Hogar"],
    subKeywords: ["hogar", "casa", "puertas", "guardian"],
    texto: "San José, guardián de la Sagrada Familia, te confío mi hogar y a todos los que en él habitan. Sé tú el centinela que vela nuestras puertas, el protector que aleja todo mal, el padre que custodia la paz de nuestro hogar. Que en esta casa reine siempre el amor, la comprensión y la presencia de Dios. Amén."
  },

// ---- FE / CONFIANZA EN DIOS ----
  {
    nombre: "Abandono en el Padre",
    santo: "Beato Carlos de Foucauld",
    categorias: ["Fe / Confianza en Dios", "Esperanza en el futuro", "Paz interior"],
    subKeywords: ["abandono", "haz de mí", "voluntad", "confianza infinita"],
    texto: "Padre mío, me abandono a Ti, haz de mí lo que quieras. Por todo lo que hagas de mí, te doy gracias. Estoy dispuesto a todo, lo acepto todo, con tal de que tu voluntad se cumpla en mí y en todas tus criaturas. No deseo nada más, Dios mío. Pongo mi alma en tus manos, te la doy con todo el amor de mi corazón, con una confianza infinita, porque Tú eres mi Padre. Amén."
  },
  {
    nombre: "Acto de Fe",
    santo: "Tradición de la Iglesia",
    categorias: ["Fe / Confianza en Dios", "Oración / Vida espiritual"],
    subKeywords: ["creo", "fe", "suma verdad", "aumenta mi fe"],
    texto: "Señor Dios, creo firmemente todo lo que Tú has revelado y nos propones creer por medio de tu Santa Iglesia Católica, porque Tú eres la Suma Verdad que no puede engañarse ni engañarnos. Aumenta mi fe, hazla viva, operante por la caridad y valiente ante las dudas del mundo. En esta fe quiero vivir y morir. Amén."
  },
  {
    nombre: "Confianza Plena",
    santo: "San Pío de Pietrelcina",
    categorias: ["Fe / Confianza en Dios", "Esperanza en el futuro", "Estrés / Agobio"],
    subKeywords: ["pasado", "presente", "futuro", "providencia", "a ciegas"],
    texto: "Mi pasado, Señor, a tu misericordia; mi presente, a tu amor; mi futuro, a tu Divina Providencia. En Ti confío a ciegas, Jesús, porque sé que tu amor es fiel y que nunca defraudas al corazón que se humilla y espera pacientemente el cumplimiento de tus promesas. Amén."
  },
  {
    nombre: "Súplica por una Fe Viva",
    santo: "San Buenaventura",
    categorias: ["Fe / Confianza en Dios", "Oración / Vida espiritual"],
    subKeywords: ["fe viva", "hoguera ardiente", "dudas", "palabra eterna"],
    texto: "Señor, haz que mi fe no sea solo de palabras, sino una hoguera ardiente que transforme mis acciones. Cuando las dudas humanas asalten mi mente, concédeme la gracia de arrodillarme y adorar tu misterio, sabiendo que para Ti nada hay imposible y que tu palabra es eterna. Amén."
  },

// ---- ORACIÓN / VIDA ESPIRITUAL ----
  {
    nombre: "Preparación del Entendimiento",
    santo: "Santo Tomás de Aquino",
    categorias: ["Oración / Vida espiritual", "Estudios / Exámenes", "Sabiduría / Discernimiento"],
    subKeywords: ["entendimiento", "claridad", "sabiduría", "aprender", "retener"],
    texto: "Creador inefable, Tú que eres la verdadera fuente de la luz y principio de la sabiduría, dígnate infundir sobre las tinieblas de mi entendimiento el rayo de tu claridad, removiendo el pecado y la ignorancia. Dame agudeza para entender, capacidad para retener, método y facilidad para aprender, y gracia abundante para hablar y orar. Amén."
  },
  {
    nombre: "Elevación de la Mente a Dios",
    santo: "San Juan de la Cruz",
    categorias: ["Oración / Vida espiritual", "Amor de Dios", "Paz interior"],
    subKeywords: ["silencio", "contemplación", "despoja", "caridad perfecta"],
    texto: "Señor Dios, amante de las almas, infunde en mí el deseo de buscarte solo a Ti en el silencio y en la verdad de la oración. Despoja mi mente de las distracciones del mundo y de los afectos desordenados, para que mi espíritu pueda contemplar tu hermosura y unirse a tu divina esencia en caridad perfecta. Amén."
  },
  {
    nombre: "Oración para Saber Rezar",
    santo: "San Agustín",
    categorias: ["Oración / Vida espiritual", "Fe / Confianza en Dios", "Humildad"],
    subKeywords: ["saber rezar", "adoración", "acción de gracias", "escucharte"],
    texto: "Señor, enséñame a orar adecuadamente. Que mi oración no sea un grito de exigencias egoístas, sino un acto de adoración, de acción de gracias y de alineación con tu divina voluntad. Que aprenda a callar para escucharte a Ti, que hablas en el secreto de mi alma. Amén."
  },
  {
    nombre: "Petición del Espíritu Santo",
    santo: "San Alfonso María de Ligorio",
    categorias: ["Oración / Vida espiritual", "Fortaleza / Valentía", "Sabiduría / Discernimiento"],
    subKeywords: ["espíritu santo", "llena", "fuego", "consuelo", "renovarás"],
    texto: "Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor. Envía tu Espíritu y todo será creado, y renovarás la faz de la tierra. Oh Dios, que has iluminado los corazones de tus hijos, concédenos saborear las cosas rectas según el mismo Espíritu y gozar siempre de su consuelo. Amén."
  },

// ---- SALUD FÍSICA Y ESPIRITUAL ----
  {
    nombre: "Sanación Integral",
    santo: "San Pío de Pietrelcina",
    categorias: ["Salud física y espiritual", "Enfermedad / Dolor", "Sanación interior / Liberación"],
    subKeywords: ["sanación", "médico divino", "heridas", "rencor", "amargura"],
    texto: "Señor Jesús, Médico Divino de las almas y de los cuerpos, te pido que pases tu mano sanadora sobre mi vida. Sana las heridas de mi cuerpo, devuelve el vigor a mis miembros debilitados y, sobre todo, cura las llagas de mi alma causadas por el pecado, el rencor o la amargura. Deseo estar sano para servirte con fidelidad. Amén."
  },
  {
    nombre: "Súplica al Médico Celestial",
    santo: "San Lucas de Crimea",
    categorias: ["Salud física y espiritual", "Enfermedad / Dolor"],
    subKeywords: ["médico celestial", "fragilidad", "dolencias", "iniquidad"],
    texto: "Oh Señor Jesucristo, que con una sola palabra expulsabas las enfermedades y dabas la salud total, mira con piedad mi fragilidad. Libra mi cuerpo de las dolencias que lo aquejan y purifica mi alma de toda iniquidad, para que renovado enteramente pueda glorificar tu santo Nombre. Amén."
  },
  {
    nombre: "Salud del Cuerpo y del Alma",
    santo: "San Rafael Arcángel",
    categorias: ["Salud física y espiritual", "Protección / Refugio", "Enfermedad / Dolor"],
    subKeywords: ["rafael", "medicina de dios", "bienestar", "curación"],
    texto: "Glorioso Arcángel San Rafael, medicina de Dios, te ruego que me asistas en mi necesidad de salud física y espiritual. Aleja de mí las enfermedades corporales y las tentaciones del alma. Conduce mis pasos hacia fuentes de bienestar y alcánzame del Señor la gracia de una curación total. Amén."
  },
  {
    nombre: "Fortaleza en la Debilidad",
    santo: "San Agustín",
    categorias: ["Salud física y espiritual", "Enfermedad / Dolor", "Fortaleza / Valentía"],
    subKeywords: ["carne débil", "salud corporal", "gracia santificante", "alma"],
    texto: "Señor, nuestra carne es débil y propensa a la enfermedad, pero tu poder es infinito. Te pido que sostengas mi salud corporal para poder cumplir con mis deberes, pero te ruego aún más que preserves la salud de mi alma en gracia santificante, porque de nada sirve ganar el mundo si pierdo mi alma. Amén."
  },

// ---- ARREPENTIMIENTO / CONFESIÓN ----
  {
    nombre: "Miserere (Salmo 50)",
    santo: "Rey David",
    categorias: ["Arrepentimiento / Confesión", "Perdón", "Sanación interior / Liberación"],
    subKeywords: ["misericordia", "culpa", "pecado", "corazón puro"],
    texto: "Misericordia, Dios mío, por tu bondad, por tu inmensa compasión borra mi culpa; lava del todo mi delito, limpia mi pecado. Pues yo reconozco mi culpa, tengo siempre presente mi pecado. Contra ti, contra ti solo pequé, cometí la maldad que aborreces. Oh Dios, crea en mí un corazón puro, renuévame por dentro con espíritu firme. No me arrojes lejos de tu rostro. Amén."
  },
  {
    nombre: "Dolor del Corazón",
    santo: "San Alfonso María de Ligorio",
    categorias: ["Arrepentimiento / Confesión", "Perdón", "Amor de Dios"],
    subKeywords: ["vergüenza", "ingratitudes", "corazón abierto", "lávame"],
    texto: "Jesús mío, vengo a tus pies cubierto de vergüenza por mis muchas ingratitudes. He pecado contra el cielo y contra Ti, y no soy digno de llamarme hijo tuyo. Pero confío en tu Corazón abierto en la Cruz para los pecadores arrepentidos. Lávame en tu Sangre, perdóname y dame la gracia de no volver a ofenderte jamás. Amén."
  },
  {
    nombre: "Clamor del Pecador Arrepentido",
    santo: "San Agustín",
    categorias: ["Arrepentimiento / Confesión", "Perdón", "Sanación interior / Liberación"],
    subKeywords: ["carga pesada", "miseria", "misericordia", "sáname"],
    texto: "Señor, mis pecados son una carga pesada que me arrastra lejos de tu luz. Reconozco mi miseria y no me justifico ante Ti. Apelo únicamente a tu infinita misericordia. Sáname, Señor, porque he pecado contra Ti; devuélveme la alegría de tu salvación y afiánzame con un espíritu generoso. Amén."
  },

// ---- PERDÓN ----
  {
    nombre: "Por el Perdón de las Ofensas",
    santo: "Inspirada en Lucas 23, 34",
    categorias: ["Perdón", "Amor al prójimo", "Sanación interior / Liberación"],
    subKeywords: ["perdonar", "ofensas", "verdugos", "amargura", "resentimiento"],
    texto: "Señor Jesús, que en la Cruz perdonaste a tus verdugos diciendo: 'Padre, perdónalos porque no saben lo que hacen', concédeme la gracia de perdonar de corazón a quienes me han ofendido o causado daño. Arranca de mi alma toda raíz de amargura y resentimiento. Haz que mi corazón sea semejante al tuyo, lleno de misericordia. Amén."
  },
  {
    nombre: "Súplica por los Enemigos",
    santo: "San Juan Crisóstomo",
    categorias: ["Perdón", "Amor al prójimo"],
    subKeywords: ["enemigos", "envidia", "calumnias", "bendiciones", "bien por mal"],
    texto: "Señor, Dios de amor, te rogamos por todos aquellos que nos odian, nos envidian o nos calumnian. Llena sus vidas de tus santas bendiciones, ilumina sus mentes con la verdad de tu Evangelio y concédenos a nosotros la gracia de amarlos con amor sincero, devolviendo siempre bien por mal, según tu mandato divino. Amén."
  },
  {
    nombre: "Para Sanar el Resentimiento",
    santo: "San Francisco de Sales",
    categorias: ["Perdón", "Sanación interior / Liberación", "Paz interior"],
    subKeywords: ["resentimiento", "orgullo", "perdonar", "bendecir", "paz"],
    texto: "Señor, me cuesta perdonar y olvidar la ofensa recibida; mi naturaleza humana clama por justicia y orgullo. Pero acudo a tu gracia, que todo lo puede. Te entrego este dolor y este resentimiento; decido perdonar en tu Nombre a quien me hirió. Bendícelo y sana mi memoria para que viva en paz. Amén."
  },
  {
    nombre: "Caridad Fraterna del Perdón",
    santo: "San Ignacio de Loyola",
    categorias: ["Perdón", "Amor al prójimo", "Humildad"],
    subKeywords: ["misericordia", "juez severo", "humildad", "perdón inmediato"],
    texto: "Señor Jesús, enséñame a mirar a mis hermanos con tus ojos de misericordia. Que no sea un juez severo de sus caídas mientras soy indulgente con las mías. Dame la humildad para pedir perdón cuando ofenda y la grandeza de alma para otorgarlo inmediatamente cuando me sea solicitado. Amén."
  },

// ---- TENTACIÓN / PECADO ----
  {
    nombre: "Auxilio contra las Pasiones",
    santo: "San Alfonso María de Ligorio",
    categorias: ["Tentación / Pecado", "Fortaleza / Valentía", "Fe / Confianza en Dios"],
    subKeywords: ["pecar", "tentación", "débil", "gracia", "santísimo nombre"],
    texto: "¡Oh Jesús mío! No permitas que vuelva a pecar. Antes morir que ofenderte. Sé que soy débil y que el enemigo de las almas ruge como león buscando a quién devorar; pero tu gracia es más fuerte que todas las tentaciones del mundo y del demonio. Cuando me asalte la tentación, haz que clame inmediatamente tu santísimo Nombre. Líbrame del pecado, Señor. Amén."
  },
  {
    nombre: "Para Vencer el Mal Exterior",
    santo: "San Ignacio de Loyola",
    categorias: ["Tentación / Pecado", "Fortaleza / Valentía"],
    subKeywords: ["halagos", "mundo", "enemigo", "pecado mortal", "escudo"],
    texto: "Señor Jesús, ante los halagos del mundo y las sugerencias del enemigo que intentan desviarme de tu camino, enciende tu amor en mi pecho. Que prefiera perder los bienes terrenales y sufrir el desprecio de los hombres antes que manchar mi alma con el pecado mortal. Sé mi escudo, mi roca y mi salvación. Amén."
  },
  {
    nombre: "Clamor en la Fragilidad Humana",
    santo: "San Agustín",
    categorias: ["Tentación / Pecado", "Humildad", "Fe / Confianza en Dios"],
    subKeywords: ["flaqueza", "caer", "resistir", "corazón puro"],
    texto: "Señor, Tú conoces mi flaqueza y sabes cuán propenso soy a caer si me dejas solo. No te alejes de mí cuando la tentación apriete mi voluntad. Dame la fuerza para resistir, la inteligencia para huir de las ocasiones de pecado y un corazón puro que solo desee agradarte a Ti. Amén."
  },

// ---- FAMILIA / HOGAR ----
  {
    nombre: "Consagración del Hogar",
    santo: "San Juan Pablo II",
    categorias: ["Familia / Hogar", "Protección / Refugio", "Amor al prójimo"],
    subKeywords: ["familia", "santuario", "matrimonio", "hogar", "crisis"],
    texto: "Señor Dios, de quien procede toda paternidad en el cielo y en la tierra, haz que cada familia humana sea un verdadero santuario de la vida y del amor para las nuevas generaciones. Que tu gracia guíe los pensamientos y las obras de los esposos hacia el bien de sus hogares. Que el amor, enriquecido por la gracia del Sacramento del Matrimonio, se muestre más fuerte que cualquier debilidad o crisis. Amén."
  },
  {
    nombre: "Súplica a la Sagrada Familia",
    santo: "Tradición de la Iglesia",
    categorias: ["Familia / Hogar", "Oración / Vida espiritual"],
    subKeywords: ["jesús", "maría", "josé", "nazaret", "iglesias domésticas"],
    texto: "Jesús, María y José, en vosotros contemplamos el esplendor del verdadero amor, a vosotros, confiados, nos dirigimos. Sagrada Familia de Nazaret, haz también de nuestras familias lugares de comunión y cenáculos de oración, auténticas escuelas del Evangelio y pequeñas iglesias domésticas donde reine la paz y el respeto mutuo. Amén."
  },
  {
    nombre: "Bendición de la Mesa y el Hogar",
    santo: "San Francisco de Asís",
    categorias: ["Familia / Hogar", "Gratitud / Acción de gracias", "Protección / Refugio"],
    subKeywords: ["bendice", "hogar", "pan", "mesa", "discusiones"],
    texto: "Señor, bendice este hogar y a todos los que en él habitan. Que nunca falte el pan cotidiano sobre nuestra mesa, ni el amor fraterno en nuestros corazones. Aleja de las paredes de nuestra casa las discusiones, el egoísmo y la división. Que nuestra familia sea un reflejo de la armonía de tu Reino. Amén."
  },
  {
    nombre: "Custodia de los Hijos y Padres",
    santo: "San Agustín",
    categorias: ["Familia / Hogar", "Amor al prójimo", "Protección / Refugio"],
    subKeywords: ["honrar", "padres", "hijos", "paciencia", "unidos"],
    texto: "Oh Dios, que nos mandas honrar a nuestros padres y cuidar con amor de nuestros hijos, derrama tu bendición sobre los miembros de mi familia. Danos paciencia para sobrellevar nuestras faltas, sabiduría para aconsejarnos y una fe viva que nos mantenga siempre unidos en tu santo servicio. Amén."
  },

// ---- AMOR DE DIOS ----
  {
    nombre: "Encomienda al Amor Divino",
    santo: "San Ignacio de Loyola",
    categorias: ["Amor de Dios", "Fe / Confianza en Dios", "Vocación / Propósito de vida"],
    subKeywords: ["tomad señor", "libertad", "voluntad", "amor y gracia"],
    texto: "Tomad, Señor, y recibid toda mi libertad, mi memoria, mi entendimiento y toda mi voluntad. Vos me lo disteis, a Vos, Señor, lo torno; todo es vuestro, disponed a toda vuestra voluntad; dadme vuestro amor y gracia, que esta me basta, y no deseo ninguna otra riqueza terrenal. Amén."
  },
  {
    nombre: "Vivo sin vivir en mí",
    santo: "Santa Teresa de Jesús",
    categorias: ["Amor de Dios", "Esperanza en el futuro", "Oración / Vida espiritual"],
    subKeywords: ["vivo sin vivir", "muero porque no muero", "amor", "sedienta"],
    texto: "Vivo sin vivir en mí, y tan alta vida espero, que muero porque no muero. Vivo ya fuera de mí, después que muero de amor; porque vivo en el Señor, que me quiso para sí; cuando el corazón le di puso en él este letrero: que muero porque no muero. Mi alma sedienta de Dios solo anhela unirse a su Creador eternamente. Amén."
  },

// ---- AMOR AL PRÓJIMO ----
  {
    nombre: "Ver a Cristo en el Hermano",
    santo: "San Vicente de Paúl",
    categorias: ["Amor al prójimo", "Justicia / Injusticia", "Humildad"],
    subKeywords: ["pobres", "enfermos", "caridad", "obras", "prójimo"],
    texto: "Señor, concédeme la gracia de reconocerte en el rostro de los pobres, de los enfermos y de todos mis semejantes. Que mi caridad no sea de palabras, sino de obras y de verdad. Quita de mi corazón el egoísmo, la indiferencia y el juicio severo. Haz que me entregue al servicio de mis hermanos con un corazón alegre, sabiendo que todo lo que hago por ellos, lo hago por Ti. Amén."
  },
  {
    nombre: "Súplica por la Caridad Fraterna",
    santo: "San Juan Bosco",
    categorias: ["Amor al prójimo", "Amistad", "Paciencia / Perseverancia"],
    subKeywords: ["corazón grande", "amar", "flaquezas", "paciencia"],
    texto: "Señor, dame un corazón grande para amar a todos mis hermanos, especialmente a los más necesitados y apartados de tu gracia. Haz que sepa comprender sus flaquezas, perdonar sus errores y guiarlos con paciencia hacia tu amor. Que la caridad sea la regla de mi vida y el sello de mis acciones diarias. Amén."
  },
  {
    nombre: "Oración de la Unión Fraterna",
    santo: "San Juan Pablo II",
    categorias: ["Amor al prójimo", "Paz interior", "Justicia / Injusticia"],
    subKeywords: ["amar como tú", "prejuicio", "envidia", "solidaridad"],
    texto: "Oh Cristo, enséñame a amar como Tú amaste. Que rompa los muros del prejuicio, de la envidia y del rencor hacia mi prójimo. Concédenos caminar juntos en la justicia y la solidaridad, buscando el bien común y manifestando al mundo que somos verdaderos discípulos tuyos por el amor que nos tenemos. Amén."
  },
  {
    nombre: "Para Evitar Juzgar al Prójimo",
    santo: "San Francisco de Sales",
    categorias: ["Amor al prójimo", "Humildad", "Perdón"],
    subKeywords: ["juzgar", "calumniar", "compasivo", "corregir con dulzura"],
    texto: "Señor, pon un guardián en mi boca y una barrera en mis labios para que no calumnie ni juzgue a mis hermanos. Dame un corazón compasivo que disculpe los errores ajenos y resalte sus virtudes. Que aprenda a corregir con dulzura y a amar sin condiciones, imitando tu divina paciencia. Amén."
  },
// ---- AMISTAD ----
  {
    nombre: "Bendición de los Amigos",
    santo: "Inspirada en San Elredo de Rieval",
    categorias: ["Amistad", "Amor al prójimo", "Gratitud / Acción de gracias"],
    subKeywords: ["amigos", "amistad", "don sagrado", "sostenerse"],
    texto: "Señor Dios, que nos has enseñado que la verdadera amistad es un don sagrado que refleja tu propio amor, te doy gracias por los amigos que has puesto en mi camino. Te pido que los bendigas, los protejas y los guíes en la verdad. Que nuestra unión esté cimentada en la virtud y en la fe mutua. Ayúdanos a sostenernos en las pruebas de la vida. Amén."
  },
  {
    nombre: "Por los Amigos Espirituales",
    santo: "San Ignacio de Loyola",
    categorias: ["Amistad", "Oración / Vida espiritual", "Amor al prójimo"],
    subKeywords: ["discípulos", "compañeros", "camino", "santidad"],
    texto: "Señor Jesucristo, que uniste a tus discípulos con el vínculo del amor santo, bendice a mis amigos y compañeros de camino. Que nuestra amistad sea un estímulo constante para buscar la santidad, servir al prójimo y dar testimonio de tu Evangelio en el mundo, compartiendo los mismos anhelos de eternidad. Amén."
  },
  {
    nombre: "Fidelidad en la Amistad",
    santo: "San Francisco de Sales",
    categorias: ["Amistad", "Amor al prójimo", "Humildad"],
    subKeywords: ["fiel", "sincero", "desinteresado", "lisonjas"],
    texto: "Señor, enséñame a ser un amigo fiel, sincero y desinteresado. Que sepa estar presente en los momentos de dolor y celebrar con alegría los éxitos de mis amigos. Que nuestra amistad sea pura, libre de lisonjas y conveniencias, y que siempre nos conduzca a amarte más a Ti, fuente de toda verdadera comunión. Amén."
  },
  {
    nombre: "Gratitud por la Compañía Cristiana",
    santo: "San Agustín",
    categorias: ["Amistad", "Gratitud / Acción de gracias", "Amor al prójimo"],
    subKeywords: ["consuelo", "amistad", "destello", "eternidad"],
    texto: "Te doy gracias, Señor, por el consuelo de la amistad. En los lazos de un amigo verdadero descubro un destello de tu amor incondicional. Te ruego que bendigas a quienes comparten mis días, que guardes sus almas en tu gracia y que nos permitas alabarte juntos por toda la eternidad. Amén."
  },

// ---- GRATITUD / ACCIÓN DE GRACIAS ----
  {
    nombre: "Alabanza por los Beneficios Recibidos",
    santo: "San Alfonso María de Ligorio",
    categorias: ["Gratitud / Acción de gracias", "Amor de Dios"],
    subKeywords: ["agradecer", "bendiciones", "paciencia", "bondad", "corazón agradecido"],
    texto: "Señor mío y Dios mío, no tengo palabras para agradecerte tu infinita paciencia y bondad para conmigo. Me has colmado de bendiciones que no merezco y me has levantado de mis caídas. Hoy te ofrezco mi corazón lleno de gratitud; que mi vida entera sea un canto de acción de gracias a tu Divina Majestad. Amén."
  },
  {
    nombre: "Gracias por la Creación",
    santo: "San Francisco de Asís",
    categorias: ["Gratitud / Acción de gracias", "Alegría / Gozo"],
    subKeywords: ["creación", "tierra", "sol", "agua", "hermano sol"],
    texto: "Altísimo, omnipotente, buen Señor, tuyas son las alabanzas, la gloria y el honor. Te doy gracias por la hermana madre tierra, las estrellas, el sol y el agua que sustenta nuestra existencia. Todo lo has hecho con sabiduría y amor para nuestro bien. Gracias, Señor, por tu maravillosa e infinita generosidad. Amén."
  },

// ---- ALEGRÍA / GOZO ----
  {
    nombre: "Gozo en el Espíritu",
    santo: "San Felipe Neri",
    categorias: ["Alegría / Gozo", "Paz interior", "Gratitud / Acción de gracias"],
    subKeywords: ["gozo", "alegría", "sonrisa", "melancolía", "desánimo"],
    texto: "Señor, mi Dios, fuente de toda verdadera alegría, infunde en mi corazón el gozo que proviene de una conciencia limpia y de la certeza de tu salvación. Que las dificultades del mundo no apaguen la sonrisa de mi alma. Haz que transmita a los demás la alegría de ser cristiano, desterrando la melancolía y el desánimo. Amén."
  },
  {
    nombre: "Alabanza de las Criaturas",
    santo: "San Francisco de Asís",
    categorias: ["Alegría / Gozo", "Gratitud / Acción de gracias"],
    subKeywords: ["júbilo", "fiesta interior", "maravillas", "alabe"],
    texto: "Mi corazón salta de gozo, Señor, al contemplar tus maravillas. Que mi alma te alabe con júbilo desbordante, porque eres el Dios de la vida y de la felicidad. Haz que viva en una constante fiesta interior, sabiendo que mi nombre está escrito en los cielos y que tu amor me rodea cada mañana. Amén."
  },
  {
    nombre: "Alegría de la Resurrección",
    santo: "San Juan Pablo II",
    categorias: ["Alegría / Gozo", "Esperanza en el futuro", "Fe / Confianza en Dios"],
    subKeywords: ["aleluya", "resurrección", "pascua", "vencido la muerte"],
    texto: "¡Aleluya! Cristo ha resucitado y ha vencido a la muerte. Señor Jesús, llena mi espíritu con la alegría desbordante de la Pascua. Que ningún dolor terrenal nuble la certeza de tu victoria final. Hazme testigo alegre de tu Evangelio en medio de un mundo sediento de esperanza y de felicidad verdadera. Amén."
  },
  {
    nombre: "Gozo en el Servicio Divino",
    santo: "San Ignacio de Loyola",
    categorias: ["Alegría / Gozo", "Vocación / Propósito de vida", "Amor al prójimo"],
    subKeywords: ["servirte", "voluntad", "dar sin esperar", "reino"],
    texto: "Señor, que mi mayor gozo sea servirte y hacer tu santa voluntad. Que experimente la inmensa alegría de dar sin esperar nada a cambio, de gastar mi vida por el Reino y de saber que, al final de mis días, me espera el abrazo gozoso de mi Salvador y Amigo. Amén."
  },

// ---- PACIENCIA / PERSEVERANCIA ----
  {
    nombre: "Paciencia en las Pruebas",
    santo: "San Alfonso María de Ligorio",
    categorias: ["Paciencia / Perseverancia", "Fortaleza / Valentía", "Fe / Confianza en Dios"],
    subKeywords: ["paciencia", "cruces", "calvario", "perseverancia", "desespero"],
    texto: "Jesús mío, dame la paciencia que necesito para sobrellevar las cruces de cada día. Sé que muchas veces me desespero y me quejo, olvidando que el camino del Calvario es el que lleva a la gloria. Concédeme la perseverancia final; que no me rinda ante las dificultades, ni mi alma se aparte de Ti por las seducciones del mundo. Amén."
  },
  {
    nombre: "Por la Constancia Final",
    santo: "San Agustín",
    categorias: ["Paciencia / Perseverancia", "Fe / Confianza en Dios", "Esperanza en el futuro"],
    subKeywords: ["constancia", "perseverar", "mandamientos", "corona de la vida"],
    texto: "Oh Dios, que nos mandas la constancia para alcanzar la corona de la vida, danos la gracia de perseverar en tus mandamientos hasta el último suspiro de nuestra existencia. Que ninguna tentación nos desvíe y ningún temor nos haga retroceder. En tus manos encomendamos nuestra salvación perpetua. Amén."
  },
  {
    nombre: "Fortaleza en la Espera",
    santo: "San Pío de Pietrelcina",
    categorias: ["Paciencia / Perseverancia", "Esperanza en el futuro", "Paz interior"],
    subKeywords: ["espera", "tiempos", "impaciencia", "retrasos", "coopera para el bien"],
    texto: "Señor Jesús, enséñame a esperar tus tiempos con fe y serenidad. Quita de mí la impaciencia humana que quiere adelantarse a tus planes. Que acepte los retrasos, las contradicciones y los sufrimientos cotidianos con un espíritu pacífico, confiando en que todo coopera para el bien de los que te aman. Amén."
  },
  {
    nombre: "Súplica del Combatiente Fiel",
    santo: "San Ignacio de Loyola",
    categorias: ["Paciencia / Perseverancia", "Fortaleza / Valentía", "Vocación / Propósito de vida"],
    subKeywords: ["luchar", "heridas", "trabajar", "soldado", "batalla"],
    texto: "Señor, enséñame a luchar sin preocuparme de las heridas, a trabajar sin buscar descanso, sabiendo que la recompensa es hacer tu santa voluntad. Dame la perseverancia del soldado que no abandona su puesto en la batalla hasta que el Rey lo llame a su presencia. Amén."
  },

// ---- HUMILDAD ----
  {
    nombre: "Letanías de la Humildad",
    santo: "Cardenal Merry del Val",
    categorias: ["Humildad", "Oración / Vida espiritual", "Amor al prójimo"],
    subKeywords: ["humildad", "estimado", "alabado", "olvidado", "gloria"],
    texto: "Jesús, manso y humilde de Corazón, óyeme. Del deseo de ser estimado y alabado, líbrame, Jesús. Del deseo de ser honrado y preferido, líbrame, Jesús. Del temor de ser humillado y despreciado, líbrame, Jesús. Del temor de ser olvidado y calumniado, líbrame, Jesús. Que otros sean más amados y estimados que yo, Jesús, concédeme la gracia de desearlo. Que otros puedan crecer en la opinión del mundo y yo disminuir, Jesús, concédeme la gracia de desearlo. Que yo sea santo todo lo que pueda, buscando solo tu gloria. Amén."
  },
  {
    nombre: "El Reconocimiento de la Nada",
    santo: "San Francisco de Asís",
    categorias: ["Humildad", "Oración / Vida espiritual", "Arrepentimiento / Confesión"],
    subKeywords: ["quién eres tú", "quién soy yo", "gusanillo", "suma bondad"],
    texto: "Señor, ¿quién eres Tú y quién soy yo? Tú eres el Omnipotente, el Creador del universo, la Suma Bondad; y yo soy un gusanillo de la tierra, un pecador desagradecido. Haz que me reconozca como nada ante tu presencia, para que toda la gloria sea tuya por los siglos de los siglos. Amén."
  },
  {
    nombre: "Humildad del Corazón",
    santo: "San Agustín",
    categorias: ["Humildad", "Paz interior", "Amor al prójimo"],
    subKeywords: ["orgullo", "soberbia", "vanagloria", "corazón sencillo"],
    texto: "Señor Dios, ahuyenta de mi alma el espíritu del orgullo, de la soberbia y de la vanagloria. Enséñame a reconocer que todo lo bueno que hay en mí proviene de tu gracia y no de mis propios méritos. Dame un corazón sencillo que sepa aprender de los demás y que no busque ensalzarse ante los hombres. Amén."
  },
  {
    nombre: "Sapiencia de la Humildad",
    santo: "Santo Tomás de Aquino",
    categorias: ["Humildad", "Sabiduría / Discernimiento", "Oración / Vida espiritual"],
    subKeywords: ["humildad intelectual", "sabiduría", "temor de dios", "sencillos"],
    texto: "Oh Jesús, dame la gracia de una verdadera humildad intelectual y espiritual. Que no me envanezca por los conocimientos o talentos que me has otorgado. Que recuerde siempre que el principio de la sabiduría es el santo temor de Dios y que Tú revelas tus misterios a los sencillos de corazón. Amén."
  },

// ---- SABIDURÍA / DISCERNIMIENTO ----
  {
    nombre: "Ante el Crucifijo",
    santo: "San Francisco de Asís",
    categorias: ["Sabiduría / Discernimiento", "Oración / Vida espiritual", "Fe / Confianza en Dios"],
    subKeywords: ["ilumina", "tinieblas", "fe recta", "esperanza cierta", "caridad perfecta"],
    texto: "Alto y glorioso Dios, ilumina las tinieblas de mi corazón y dame fe recta, esperanza cierta y caridad perfecta, sentido y conocimiento, Señor, para que cumpla tu santo y verdadero mandamiento en cada jornada de mi vida. Amén."
  },
  {
    nombre: "Discernimiento Espiritual",
    santo: "San Ignacio de Loyola",
    categorias: ["Sabiduría / Discernimiento", "Oración / Vida espiritual", "Vocación / Propósito de vida"],
    subKeywords: ["discernimiento", "espíritus", "mociones interiores", "elegir", "mayor gloria"],
    texto: "Señor Jesús, infunde en mí el don del discernimiento de espíritus. Enséñame a reconocer de dónde provienen mis pensamientos y mociones interiores, si de tu Santo Espíritu o del enemigo de mi alma. Dame la luz para elegir siempre aquello que sea para tu mayor gloria y el bien de mi prójimo. Amén."
  },
  {
    nombre: "Guía del Entendimiento",
    santo: "San Agustín",
    categorias: ["Sabiduría / Discernimiento", "Estudios / Exámenes", "Fe / Confianza en Dios"],
    subKeywords: ["luz verdadera", "entiendo", "decisiones difíciles", "sabiduría eterna"],
    texto: "Oh Dios, que eres la Luz verdadera y la Verdad misma, ilumina mi entendimiento entenebrecido por la ignorancia. Sé el faro que guíe mis decisiones difíciles. Que no me deje arrastrar por las pasiones ni por las opiniones humanas, sino que busque siempre la sabiduría eterna que proviene de Ti. Amén."
  },

// ---- TRABAJO / DESEMPLEO ----
  {
    nombre: "Santificación del Trabajo",
    santo: "San José María Escrivá de Balaguer",
    categorias: ["Trabajo / Desempleo", "Vocación / Propósito de vida", "Oración / Vida espiritual"],
    subKeywords: ["trabajo", "santificar", "labor", "deberes", "altar"],
    texto: "Señor y Dios nuestro, te ofrezco el trabajo de este día. Haz que sepa santificar mi labor cotidiana, realizando mis deberes con competencia, rectitud y amor. Que mi lugar de trabajo sea un altar donde te rinda culto, sirviendo con justicia y caridad a mis compañeros y clientes, edificando el mundo según tu plan divino. Amén."
  },
  {
    nombre: "Súplica al Santo de la Providencia",
    santo: "San Cayetano de Thiene",
    categorias: ["Trabajo / Desempleo", "Ayuda económica / Providencia"],
    subKeywords: ["cayetano", "empleo", "oportunidad laboral", "pan", "trabajo digno"],
    texto: "Glorioso San Cayetano, intercede ante el trono de Dios para que se abran las puertas de la oportunidad laboral a quienes hoy desesperan por la falta de empleo. No permitas que en ningún hogar falte el pan de cada día ni el trabajo digno necesario para ganarlo con el sudor de la frente. Amén."
  },
  {
    nombre: "Ofrecimiento de la Labor Diaria",
    santo: "San José Obrero",
    categorias: ["Trabajo / Desempleo", "Familia / Hogar", "Oración / Vida espiritual"],
    subKeywords: ["josé", "carpintero", "manos", "herramientas", "sacrificio"],
    texto: "Glorioso San José, que con nobleza asumiste el oficio de carpintero para sostener el hogar de Nazaret, bendice mis manos y mis herramientas de trabajo. Que mis labores diarias sean realizadas con honestidad, espíritu de sacrificio y ofrecidas a Dios como una oración continua por la salvación de las almas. Amén."
  },
  {
    nombre: "Por los Derechos de los Trabajadores",
    santo: "San Juan Pablo II",
    categorias: ["Trabajo / Desempleo", "Justicia / Injusticia", "Amor al prójimo"],
    subKeywords: ["derechos", "trabajadores", "justicia", "salarios", "explotación"],
    texto: "Señor Jesús, protector de los trabajadores y defensor de la justicia, te rogamos por un orden laboral digno y justo. Que los gobernantes y empresarios respeten los derechos de los obreros, garanticen salarios equitativos y erradiquen la explotación, permitiendo que cada hombre sostenga a su familia con dignidad. Amén."
  },

// ---- ESTUDIOS / EXÁMENES ----
  {
    nombre: "Oración del Estudiante ante el Examen",
    santo: "San José de Cupertino",
    categorias: ["Estudios / Exámenes", "Sabiduría / Discernimiento", "Miedo / Ansiedad"],
    subKeywords: ["examen", "estudiar", "memoria", "nervios", "cupertino"],
    texto: "Oh glorioso San José de Cupertino, que por tu confianza en Dios obtuviste la gracia de ser aprobado en tus exámenes a pesar de tus dificultades humanas, mírame con compasión. Te pido que intercedas por mí en estos estudios y exámenes que debo afrontar. Da claridad a mi mente, memoria a mi entendimiento y serenidad a mis nervios. Haz que mis respuestas reflejen el esfuerzo realizado. Amén."
  },
  {
    nombre: "Oración por la Retención y el Enfoque",
    santo: "San Agustín",
    categorias: ["Estudios / Exámenes", "Sabiduría / Discernimiento"],
    subKeywords: ["distracción", "pereza", "entendimiento", "asimilar", "humildad"],
    texto: "Señor, quita de mi mente toda distracción y pereza que me impidan avanzar en el conocimiento. Abre mi entendimiento para asimilar las lecciones de mis maestros. Que aprenda con humildad y que la ciencia adquirida nunca me envanezca, sino que sea un instrumento para hacer el bien en el mundo. Amén."
  },
  {
    nombre: "Oración por el Éxito Académico",
    santo: "San Juan Bosco",
    categorias: ["Estudios / Exámenes", "Esperanza en el futuro", "Sabiduría / Discernimiento"],
    subKeywords: ["estudios", "disciplina", "constancia", "evaluación", "sabiduría"],
    texto: "Señor Jesús, amigo de los jóvenes y maestro de la verdad, bendice mis estudios. Dame la disciplina para el repaso diario, la constancia ante las materias difíciles y la paz del corazón en las horas de evaluación. Que progrese en sabiduría humana y divina, bajo el amparo de tu Santísima Madre. Amén."
  },

// ---- AYUDA ECONÓMICA / PROVIDENCIA ----
  {
    nombre: "Oración a la Divina Providencia",
    santo: "Tradición de la Iglesia",
    categorias: ["Ayuda económica / Providencia", "Trabajo / Desempleo", "Fe / Confianza en Dios"],
    subKeywords: ["providencia", "deudas", "carencias", "sustento", "casa"],
    texto: "¡Oh Divina Providencia! Concédeme tu clemencia y tu infinita bondad. Arrodillado a tus pies, a ti recurro en mis necesidades económicas y materiales. No permitas que me falte casa, vestido y sustento, ni los sagrados auxilios en el último momento. Confío en que tu mano paternal proveerá lo necesario para solventar mis deudas y carencias. Hágase en todo tu santísima voluntad. Amén."
  },
  {
    nombre: "Oración en la Escasez Material",
    santo: "San Cayetano de Thiene",
    categorias: ["Ayuda económica / Providencia", "Desesperanza / Desánimo", "Trabajo / Desempleo"],
    subKeywords: ["escasez", "crisis", "penuria", "aves", "lirios"],
    texto: "Dios y Padre nuestro, que alimentas a las aves del cielo y vistes a los lirios del campo, mira con misericordia nuestra penuria económica. No nos abandones en esta crisis; danos las oportunidades para salir adelante, provee el sustento necesario para nuestro hogar y acrecienta nuestra confianza en tu amor providente. Amén."
  },
  {
    nombre: "Oración del Abandono Financiero",
    santo: "San Francisco de Asís",
    categorias: ["Ayuda económica / Providencia", "Fe / Confianza en Dios", "Paz interior"],
    subKeywords: ["pobreza", "avaricia", "deudas", "generosidad", "tesoro"],
    texto: "Señor Dios, Tú que elegiste la pobreza voluntaria y no poseías dónde reclinar la cabeza, líbrame de la avaricia y del miedo a la escasez. Te entrego mis deudas, mis faltas de recursos y mis angustias económicas. Confío en que tu generosidad divina abrirá caminos donde yo no los veo, porque eres mi único tesoro. Amén."
  },
  {
    nombre: "Oración por el Sustento Justo",
    santo: "San Alfonso María de Ligorio",
    categorias: ["Ayuda económica / Providencia", "Trabajo / Desempleo", "Justicia / Injusticia"],
    subKeywords: ["sustento", "obligaciones", "decoro", "compartir", "generoso"],
    texto: "Jesús mío, acudo a Ti con la urgencia de mis necesidades materiales y el peso de mis obligaciones económicas. Tú que conoces nuestras carencias terrenales, derrama tus bendiciones sobre nuestra economía familiar. Danos lo necesario para vivir con decoro y un corazón generoso para compartir con el más pobre. Amén."
  },

// ---- JUSTICIA / INJUSTICIA ----
  {
    nombre: "Oración ante los Juicios Falsos",
    santo: "San Juan Pablo II",
    categorias: ["Justicia / Injusticia", "Perdón", "Fortaleza / Valentía"],
    subKeywords: ["juicios falsos", "opresión", "injusticia", "venganza", "verdad"],
    texto: "Señor Dios, defensor de los oprimidos y juez justo de toda la tierra, te presento la impotencia y el dolor que siento ante las injusticias de este mundo, ante los juicios falsos y la opresión de los inocentes. No permitas que el odio ni el deseo de venganza corrompan mi alma. Haz que resplandezca la verdad y convierte el corazón de los opresores. Amén."
  },
  {
    nombre: "Oración por los Derechos Oprimidos",
    santo: "San Basilio el Grande",
    categorias: ["Justicia / Injusticia", "Amor al prójimo", "Fortaleza / Valentía"],
    subKeywords: ["derechos", "oprimidos", "desamparados", "justicia", "inocentes"],
    texto: "Señor Jesús, que condenaste la opresión y el desprecio a los pequeños, suscita en nuestra sociedad hombres de ley y rectitud que defiendan los derechos de los desamparados, rompan las cadenas de la maldad y establezcan la paz fundada en la justicia verdadera, para que cese el llanto de los inocentes. Amén."
  },
  {
    nombre: "Oración por la Conversión de los Injustos",
    santo: "San Agustín",
    categorias: ["Justicia / Injusticia", "Perdón", "Amor al prójimo"],
    subKeywords: ["conversión", "injustos", "calumnias", "arrepentimiento", "juez supremo"],
    texto: "Oh Señor, Juez supremo de las acciones humanas, mira con piedad a quienes cometen injusticias, calumnias y atropellos contra sus semejantes. Toca sus corazones de piedra, ilumina sus mentes cegadas por la soberbia y concédeles la gracia del arrepentimiento antes de que comparezcan ante tu tribunal divino. Amén."
  },
  {
    nombre: "Súplica de Paciencia ante el Agravio",
    santo: "San Alfonso María de Ligorio",
    categorias: ["Justicia / Injusticia", "Paciencia / Perseverancia", "Perdón"],
    subKeywords: ["agravio", "mansedumbre", "violencia", "rectitud", "desvalido"],
    texto: "Jesús mío, que sufriste los insultos, los azotes y la sentencia injusta de Pilato sin proferir una sola queja, dame la mansedumbre para soportar los agravios de los hombres. Que no responda con violencia a la injusticia, sino que encomiende mi causa a Ti, que juzgas con rectitud y libras al desvalido. Amén."
  },

// ---- ESPERANZA EN EL FUTURO ----
  {
    nombre: "Oración por el Mañana",
    santo: "San Juan XXIII",
    categorias: ["Esperanza en el futuro", "Fe / Confianza en Dios", "Estrés / Agobio"],
    subKeywords: ["mañana", "futuro", "proyectos", "porvenir", "esperanza eterna"],
    texto: "Señor Dios, el futuro está en tus manos y eso me basta para caminar seguro. No sé lo que me deparará el mañana, pero sé quién sostiene el mañana. Te entrego mis proyectos, mis temores sobre el porvenir y mis anhelos de felicidad. Que tu Espíritu Santo guíe mi historia y me llene de una esperanza eterna que no defrauda. Amén."
  },
  {
    nombre: "Oración para Caminar sin Temor al Porvenir",
    santo: "San Juan Pablo II",
    categorias: ["Esperanza en el futuro", "Miedo / Ansiedad", "Fe / Confianza en Dios"],
    subKeywords: ["no tengáis miedo", "futuro", "incertidumbre", "planes de paz"],
    texto: "¡No tengáis miedo del futuro, porque el futuro le pertenece a Dios! Señor Jesús, quita de mi mente toda incertidumbre y angustia por lo que vendrá. Que confíe plenamente en que tus planes para mí son de paz y no de aflicción, y que tu amor me acompañará en cada etapa de mi existencia. Amén."
  },
  {
    nombre: "Oración de la Esperanza Eterna",
    santo: "San Agustín",
    categorias: ["Esperanza en el futuro", "Fe / Confianza en Dios", "Paz interior"],
    subKeywords: ["vida terrenal", "suspiro", "vida eterna", "ancla del alma"],
    texto: "Señor, nuestra vida terrenal es un suspiro y el mañana es incierto, pero tu promesa de vida eterna es inmutable. Que la esperanza del cielo sea el ancla de mi alma en medio de las tempestades del tiempo presente. Camino con paso firme porque mi destino final eres Tú, Dios mío. Amén."
  },

// ---- VOCACIÓN / PROPÓSITO DE VIDA ----
  {
    nombre: "Oración para Conocer la Misión Personal",
    santo: "San John Henry Newman",
    categorias: ["Vocación / Propósito de vida", "Oración / Vida espiritual", "Fe / Confianza en Dios"],
    subKeywords: ["misión", "servicio", "obra", "planes", "ángel de paz"],
    texto: "Señor, Dios mío, Tú me has creado para algún servicio concreto; has encomendado una obra a mí que no has encomendado a ningún otro. Tengo mi propio puesto en tus planes. No fui creado para la nada; haré el bien, haré tu trabajo; seré un ángel de paz, un predicador de la verdad en el lugar que Tú me asignes, con tal de que observe tus mandamientos y te sirva en mi vocación. Amén."
  },
  {
    nombre: "Ofrecimiento Vocacional",
    santo: "San Luis Gonzaga",
    categorias: ["Vocación / Propósito de vida", "Advocaciones marianas / Virgen María", "Oración / Vida espiritual"],
    subKeywords: ["vocación", "talento", "deseos", "señora mía", "seguirle"],
    texto: "¡Oh Señora mía, Santa María! Me pongo bajo tu amparo y soberana protección, encomendándote mi propósito de vida. Guía mis inclinaciones, talentos y deseos hacia aquello que sea para mayor gloria de Dios y salvación de mi alma. Haz que descubra con claridad el sendero por el cual Jesús me llama a seguirle. Amén."
  },
  {
    nombre: "Heme aquí, Señor",
    santo: "Inspirada en San Francisco de Asís",
    categorias: ["Vocación / Propósito de vida", "Amor al prójimo", "Fortaleza / Valentía"],
    subKeywords: ["heme aquí", "propósito", "existencia", "servirte", "entregar"],
    texto: "Señor, ¿qué quieres que haga? Muéstrame el propósito para el cual me diste el don de la existencia. No permitas que malgaste mis días en ambiciones vacías ni egoísmos mundanos. Enciende en mi alma el deseo de servirte en los hermanos, entregando mi juventud, mis fuerzas y mi vida entera a tu santo servicio. Amén."
  },
  {
    nombre: "Oración por la Fidelidad a la Vocación",
    santo: "San Ignacio de Loyola",
    categorias: ["Vocación / Propósito de vida", "Paciencia / Perseverancia", "Fe / Confianza en Dios"],
    subKeywords: ["fidelidad", "vocación", "matrimonio", "vida consagrada", "laical"],
    texto: "Señor Jesús, Tú que me llamaste por mi nombre a formar parte de tu Iglesia, dame la gracia de ser fiel a la vocación que me has confiado, ya sea en el matrimonio, en la vida consagrada o en el servicio laical. Que no mire atrás con duda, sino que avance con valentía cumpliendo el propósito de mi vida. Amén."
  }
];
