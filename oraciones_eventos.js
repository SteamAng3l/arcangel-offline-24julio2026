// oraciones_eventos.js – Arcángel App
// Oraciones completas para momentos especiales de la vida
const oracionesEventos = [
  {
    id: "cumple",
    ocasion: "Cumpleaños",
    titulo: "Oración de cumpleaños",
    descripcion: "Para dar gracias por un año más de vida.",
    texto: "Señor, hoy damos gracias por un año más de vida de nuestro hermano. Gracias por cada día que le has regalado, por las alegrías y las pruebas que lo han hecho crecer. Bendice este nuevo año que comienza: dale salud, fortaleza, y un corazón siempre agradecido. Que nunca le falte tu presencia, y que su vida sea testimonio de tu amor. Que cumpla muchos años más, siempre cerca de ti. Amén.",
    guia: "Se puede rezar antes de partir el pastel, con la familia reunida, tomados de la mano."
  },
  {
    id: "boda",
    ocasion: "Boda / Aniversario",
    titulo: "Oración por los esposos",
    descripcion: "Para pedir bendición sobre el matrimonio.",
    texto: "Señor, que en el sacramento del matrimonio uniste a estos esposos, renueva hoy tu bendición sobre ellos. Que el amor que se prometieron crezca cada día, que la paciencia y el perdón sean el cimiento de su hogar, y que juntos caminen hacia ti. Que en los momentos difíciles se sostengan de la mano, y en los alegres te den gracias. Que su casa sea un reflejo de tu amor y que los frutos de su unión sean para tu gloria. Amén.",
    guia: "Se puede rezar en la boda, en el aniversario, o en un momento especial con la pareja."
  },
  {
    id: "bautizo",
    ocasion: "Bautizo",
    titulo: "Oración por el bautizado",
    descripcion: "Para acompañar al nuevo hijo de Dios.",
    texto: "Padre amoroso, hoy recibes a este niño como hijo tuyo en el bautismo. Te damos gracias por el don de la fe que se le entrega. Que el agua que lo lavó sea semilla de vida nueva, y que crezca en gracia y sabiduría. Que sus padres y padrinos lo guíen con ejemplo y oración, y que la Virgen María lo cubra con su manto. Que un día, ya grande, dé testimonio de tu amor. Amén.",
    guia: "Se puede rezar antes o después de la ceremonia, junto a los padres y padrinos."
  },
  {
    id: "gracias",
    ocasion: "Acción de gracias",
    titulo: "Oración de acción de gracias",
    descripcion: "Para dar gracias a Dios por sus dones.",
    texto: "Padre bueno, te damos gracias por todo lo que nos has dado: la vida, la fe, la familia, el trabajo, y cada pequeño don de cada día. Gracias por los momentos alegres y también por los difíciles, porque en todo nos acompañas. Que no olvidemos nunca agradecer, y que nuestra vida sea una continua alabanza. Recibe, Señor, este pequeño gracias nuestro, y hazlo grande por tu amor. Amén.",
    guia: "Se puede rezar en familia, antes o después de una comida, o en un momento especial."
  },
  {
    id: "comunion",
    ocasion: "Primera Comunión",
    titulo: "Oración por la Primera Comunión",
    descripcion: "Para acompañar al niño que recibe a Jesús.",
    texto: "Señor Jesús, hoy este niño recibe por primera vez tu Cuerpo en la Eucaristía. Te damos gracias por este día tan grande. Que este primer encuentro contigo sea semilla de muchos más, y que crezca en fe, en amor y en gracia. Que sus padres, catequistas y padrinos lo guíen con ejemplo, y que la Virgen María lo cuide. Que este día quede en su corazón para siempre. Amén.",
    guia: "Se puede rezar antes o después de la ceremonia, junto al niño y sus papás."
  },
  {
    id: "velorio",
    ocasion: "Velorio / Funeral",
    titulo: "Oración para acompañar en un velorio",
    descripcion: "Para consolar a quien perdió a un ser querido.",
    texto: "Señor de la vida y de la muerte, en este momento de dolor te pedimos por el alma de nuestro hermano que ha partido, y por su familia que hoy llora su ausencia. Recíbelo en tu presencia y dale el descanso eterno. Consuela a quienes quedamos, seca nuestras lágrimas y danos la esperanza de la resurrección, donde no habrá más llanto ni dolor. Que la fe en ti sostenga a esta familia y que la Virgen María, Madre de la Consolación, los acompañe. Por Cristo nuestro Señor. Amén.",
    guia: "Se puede rezar en voz alta, tomados de la mano, junto al ataúd o en casa del doliente."
  },
  {
    id: "hogar",
    ocasion: "Bendición del hogar",
    titulo: "Bendición del hogar",
    descripcion: "Para pedir la paz de Cristo en la casa.",
    texto: "Señor Jesús, entra en este hogar como entraste en la casa de Marta y María. Bendice cada habitación, cada rincón, cada persona que aquí vive. Que la paz habite en estas paredes, que la alegría sea el pan de cada día, y que la caridad nunca falte. Aleja de aquí todo mal, toda discordia, toda tristeza. Que esta casa sea un pequeño cielo en la tierra, y que quienes la habitan crezcan en tu amor. Amén.",
    guia: "Se puede rezar en familia, de pie en la sala o en la puerta de la casa, con agua bendita si se desea."
  },
  {
    id: "reunion",
    ocasion: "Reunión familiar",
    titulo: "Oración por la familia reunida",
    descripcion: "Para bendecir el encuentro de la familia.",
    texto: "Señor, hoy te damos gracias por el don de la familia, por el regalo de poder reunirnos una vez más. Bendice a quienes estamos aquí presentes, y también a quienes no pudieron venir. Que la alegría de este encuentro nos recuerde el amor que nos tienes. Que haya paz entre nosotros, perdón para las ofensas, y gratitud por todo lo compartido. Que esta mesa, este tiempo, sea un reflejo de la mesa que compartiremos un día contigo. Amén.",
    guia: "Se puede rezar antes de comer o al inicio de la reunión, tomados de la mano."
  },
  {
    id: "embarazo",
    ocasion: "Embarazo / Parto",
    titulo: "Oración por el embarazo y el parto",
    descripcion: "Para pedir protección para la madre y el bebé.",
    texto: "Señor de la vida, tú que formaste al ser humano en el vientre de su madre, cuida ahora de esta madre y de su bebé. Que el embarazo llegue a buen término, que el parto sea seguro, y que el niño nazca sano. Que la Virgen María, Madre de Dios, la acompañe en cada momento. Que esta nueva vida sea para bien de la familia y para gloria tuya. Que el ángel de la guarda cuide al pequeño desde su concepción. Amén.",
    guia: "Se puede rezar durante el embarazo, en el momento del parto, o al nacer el bebé."
  },
  {
    id: "trabajo",
    ocasion: "Trabajo nuevo / Entrevista",
    titulo: "Oración por el trabajo",
    descripcion: "Para pedir providencia y éxito en el trabajo.",
    texto: "Señor, tú que trabajaste con tus manos en Nazaret, mira hoy mi necesidad. Te pido por este trabajo nuevo, por la entrevista que tengo por delante, y por el sustento de mi familia. Dame sabiduría, fortaleza y honestidad para desempeñarme como tú quieres. Si este trabajo es tu voluntad, abre las puertas; y si no, guíame a otro camino. Que nunca falte en mi mesa el pan de cada día. Amén.",
    guia: "Se puede rezar antes de una entrevista o al inicio de un trabajo nuevo, con fe y confianza."
  },
  {
    id: "confirmacion",
    ocasion: "Confirmación",
    titulo: "Oración por la Confirmación",
    descripcion: "Para pedir los dones del Espíritu Santo.",
    texto: "Espíritu Santo, ven sobre este hijo tuyo que hoy recibe la Confirmación. Envíale tus siete dones: sabiduría, entendimiento, consejo, fortaleza, ciencia, piedad y temor de Dios. Que desde este día viva como discípulo valiente, dé testimonio de su fe, y sirva a los demás con alegría. Que sus padrinos y su familia lo acompañen en el caminar. Que tu fuego encienda su corazón para siempre. Amén.",
    guia: "Se puede rezar antes o después de la ceremonia, junto al confirmado y su padrino."
  },
  {
    id: "viaje",
    ocasion: "Viaje",
    titulo: "Oración para un viaje",
    descripcion: "Para pedir protección en el camino.",
    texto: "Señor, tú que guiaste a tu pueblo por el desierto y a los magos por el camino de la estrella, sé ahora compañero de viaje de quien va a partir. Protégelo de todo peligro, guarda su camino, y dale la alegría de volver a casa. Que los ángeles te acompañen, y que en cada destino te encuentre presente. Que este viaje sea para bien, y que al regresar, demos todos gracias juntos. Amén.",
    guia: "Se puede rezar antes de salir de viaje, en familia, encomendando el camino."
  },
  {
    id: "enfermo",
    ocasion: "Enfermo / Hospital",
    titulo: "Oración por un enfermo",
    descripcion: "Para pedir salud y consuelo al Señor.",
    texto: "Señor de la vida, tú que sanaste a los enfermos y consolaste a los afligidos, mira hoy a tu hijo que está enfermo. Dale fuerza en el cuerpo, paz en el alma, y paciencia en la espera. Que los médicos y quienes lo cuidan sean instrumentos de tu mano. Si es tu voluntad, concédele la salud; y si no, dale la gracia de aceptar tu designio con confianza. Que la Virgen de la Salud lo acompañe y lo cubra con su manto. Amén.",
    guia: "Se puede rezar junto a la cama del enfermo, o a distancia, pidiendo su sanación."
  },
  {
    id: "estudios",
    ocasion: "Examen / Estudios",
    titulo: "Oración por el estudio y los exámenes",
    descripcion: "Para pedir luz y sabiduría antes de estudiar.",
    texto: "Señor, fuente de toda sabiduría, ilumina mi mente en este tiempo de estudio y exámenes. Dame claridad para entender, memoria para retener, y serenidad para responder. Que el esfuerzo de estos días dé frutos, y que todo lo aprendido me sirva para servir a los demás. Que no me gane la ansiedad, sino que confíe en tu ayuda. Que la Virgen María, sede de la sabiduría, me acompañe. Amén.",
    guia: "Se puede rezar antes de estudiar o antes de un examen, invocando al Espíritu Santo."
  },
  {
    id: "mudanza",
    ocasion: "Mudanza / Casa nueva",
    titulo: "Oración por la mudanza",
    descripcion: "Para pedir bendición en el nuevo hogar.",
    texto: "Señor, en este tiempo de mudanza te pedimos que nos acompañes. Bendice el nuevo hogar al que vamos, y también la casa que dejamos. Que el cambio no nos quite la paz, y que en el nuevo lugar encontremos buenos vecinos, tranquilidad y alegría. Que la Virgen María nos ayude a hacer de esta casa un hogar. Que cada caja, cada mueble, cada rincón, lleve tu bendición. Amén.",
    guia: "Se puede rezar antes de la mudanza, o al llegar a la nueva casa, con agua bendita."
  },
  {
    id: "paz",
    ocasion: "Paz / Violencia",
    titulo: "Oración por la paz",
    descripcion: "Para pedir paz en el mundo y en el corazón.",
    texto: "Señor, rey de la paz, mira nuestro mundo herido por la violencia, la guerra y el odio. Te pedimos por las víctimas, por sus familias, y por quienes viven con miedo. Danos paz en el corazón, en la familia, en la comunidad, en el país. Que los gobernantes busquen el bien común, que los violentos cambien de camino, y que nosotros seamos sembradores de paz donde estemos. Que la Virgen María, Reina de la Paz, interceda por nosotros. Amén.",
    guia: "Se puede rezar en familia, en comunidad, o en momentos de tensión social."
  },
  {
    id: "vehiculo",
    ocasion: "Bendición de vehículo",
    titulo: "Bendición de un vehículo",
    descripcion: "Para pedir protección en los caminos.",
    texto: "Señor, tú que proteges a quienes viajan, bendice este vehículo que hoy ponemos en tus manos. Que sea instrumento de trabajo, de servicio y de bien para la familia. Aleja de él todo accidente y todo peligro, y guarda a quienes viajen en él. Que el ángel de la guarda acompañe cada trayecto, y que la Virgen María nos cuide en el camino. Amén.",
    guia: "Se puede rezar al estrenar un carro, o antes de salir a un viaje largo."
  },
  {
    id: "luctuoso",
    ocasion: "Aniversario luctuoso / Día de Muertos",
    titulo: "Oración por un aniversario luctuoso",
    descripcion: "Para recordar a un ser querido que partió.",
    texto: "Señor, en este día recordamos a nuestro hermano que ya camina en tu presencia. Te damos gracias por los años que compartimos, por las alegrías y los momentos que guardamos en el corazón. Que él descanse en tu paz, y que nosotros, que lo esperamos, vivamos con la esperanza de reencontrarnos en tu gloria. Que esta memoria no sea tristeza sin consuelo, sino amor que sigue. Que la Virgen María nos consuele y lo cuide. Amén.",
    guia: "Se puede rezar en familia, frente a la tumba o en casa, con una vela encendida."
  },
  {
    id: "migrantes",
    ocasion: "Migrantes / Familia lejana",
    titulo: "Oración por los que están lejos",
    descripcion: "Para pedir por quienes están lejos de casa.",
    texto: "Señor, tú que conoces el camino del migrante, mira hoy a nuestros hermanos que están lejos de casa. Cuídalos en su camino, protégelos de todo peligro, y dales trabajo y pan. Consuela a quienes los esperamos aquí, y acorta la distancia con tu amor. Que no pierdan la fe ni la esperanza, y que un día podamos reencontrarnos. Que la Virgen María, que también fue peregrina, los acompañe. Amén.",
    guia: "Se puede rezar en familia, recordando a los que están lejos, con una foto o un recuerdo."
  }
];
