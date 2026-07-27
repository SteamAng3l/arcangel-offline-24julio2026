// categories.js – Arcángel App (33 categorías, versículos del Antiguo Testamento RV1909)
const categories = [
  {
    nombre: "Miedo / Ansiedad",
    keywords: ["miedo","ansiedad","temor","angustia","preocupación","nervios","inquietud","susto","pánico","sobresalto"],
    versiculos: [
      { texto: "No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te fortalezco; siempre te sustentaré con la diestra de mi justicia.", cita: "Isaías 41:10" },
      { texto: "En el día que temí, yo en ti confié.", cita: "Salmos 56:3" },
      { texto: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?", cita: "Salmos 27:1" },
      { texto: "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento.", cita: "Salmos 23:4" },
      { texto: "Esfuérzate y sé valiente; no temas ni desmayes, porque Jehová tu Dios está contigo en dondequiera que fueres.", cita: "Josué 1:9" }
    ]
  },
  {
    nombre: "Tristeza / Pena",
    keywords: ["tristeza","pena","deprimido","abatido","llanto","lágrimas"],
    versiculos: [
      { texto: "Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.", cita: "Salmos 34:18" },
      { texto: "El sana a los quebrantados de corazón, y venda sus heridas.", cita: "Salmos 147:3" },
      { texto: "Por la noche durará el lloro, y a la mañana vendrá la alegría.", cita: "Salmos 30:5" },
      { texto: "¿Por qué te abates, oh alma mía, y te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío.", cita: "Salmos 42:11" },
      { texto: "Bienaventurados los que lloran, porque ellos recibirán consolación.", cita: "Mateo 5:4" }
    ]
  },
  {
    nombre: "Estrés / Agobio",
    keywords: ["estrés","agobio","cansancio","sobrecarga","presión","agotamiento"],
    versiculos: [
      { texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", cita: "Mateo 11:28" },
      { texto: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.", cita: "Filipenses 4:6" },
      { texto: "Echando toda vuestra solicitud en él, porque él tiene cuidado de vosotros.", cita: "1 Pedro 5:7" },
      { texto: "Estad quietos, y conoced que yo soy Dios.", cita: "Salmos 46:10" },
      { texto: "En Dios solamente está acallada mi alma; de él viene mi salvación.", cita: "Salmos 62:1" }
    ]
  },
  {
    nombre: "Soledad",
    keywords: ["soledad","solo","abandonado","aislado","sin nadie"],
    versiculos: [
      { texto: "Dios hace habitar en familia a los solitarios; saca a los cautivos a prosperidad; mas los rebeldes habitan en tierra seca.", cita: "Salmos 68:6" },
      { texto: "No te dejaré, ni te desampararé.", cita: "Josué 1:5" },
      { texto: "Aunque mi padre y mi madre me dejaran, con todo Jehová me recogerá.", cita: "Salmos 27:10" },
      { texto: "He aquí que yo estoy con vosotros todos los días, hasta el fin del mundo.", cita: "Mateo 28:20" },
      { texto: "Jehová va delante de ti; él estará contigo, no te dejará ni te desamparará; no temas ni te intimides.", cita: "Deuteronomio 31:8" }
    ]
  },
  {
    nombre: "Desesperanza / Desánimo",
    keywords: ["desesperanza","desánimo","sin esperanza","rendirse","desalentado"],
    versiculos: [
      { texto: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.", cita: "Jeremías 29:11" },
      { texto: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo.", cita: "Romanos 15:13" },
      { texto: "¿Por qué te abates, oh alma mía, y te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío.", cita: "Salmos 42:5" },
      { texto: "Mas los que esperan a Jehová tendrán nuevas fuerzas; levantarán las alas como águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.", cita: "Isaías 40:31" },
      { texto: "Esforzaos todos vosotros los que esperáis en Jehová, y tome aliento vuestro corazón.", cita: "Salmos 31:24" }
    ]
  },
  {
    nombre: "Cansancio / Fatiga",
    keywords: ["cansancio","fatiga","agotado","sin fuerzas","extenuado","rendido"],
    versiculos: [
      { texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", cita: "Mateo 11:28" },
      { texto: "Él da fuerzas al cansado, y multiplica las fuerzas al que no tiene ningunas.", cita: "Isaías 40:29" },
      { texto: "En lugares de verdes pastos me hará descansar; junto a aguas de reposo me pastoreará.", cita: "Salmos 23:2" },
      { texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", cita: "Mateo 11:28" },
      { texto: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.", cita: "Salmos 46:1" }
    ]
  },
  {
    nombre: "Enfermedad / Dolor",
    keywords: ["enfermedad","dolor","enfermo","malestar","padecimiento","sufrimiento físico"],
    versiculos: [
      { texto: "Sáname, oh Jehová, y seré sano; sálvame, y seré salvo; porque tú eres mi alabanza.", cita: "Jeremías 17:14" },
      { texto: "Él es quien perdona todas tus iniquidades, el que sana todas tus dolencias.", cita: "Salmos 103:3" },
      { texto: "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.", cita: "Isaías 53:5" },
      { texto: "Jehová te sustentará en el lecho del dolor; ablandarás toda su cama en la enfermedad.", cita: "Salmos 41:3" },
      { texto: "Yo soy Jehová tu sanador.", cita: "Éxodo 15:26" }
    ]
  },
  {
    nombre: "Duelo / Pérdida",
    keywords: ["duelo","pérdida","muerte","fallecimiento","difunto","luto"],
    versiculos: [
      { texto: "Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.", cita: "Salmos 34:18" },
      { texto: "Bienaventurados los que lloran, porque ellos recibirán consolación.", cita: "Mateo 5:4" },
      { texto: "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron.", cita: "Apocalipsis 21:4" },
      { texto: "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento.", cita: "Salmos 23:4" },
      { texto: "El eterno Dios es tu refugio, y acá abajo los brazos eternos; él echó de delante de ti al enemigo, y dijo: Destruye.", cita: "Deuteronomio 33:27" }
    ]
  },
  {
    nombre: "Advocaciones marianas / Virgen María",
    keywords: ["maría","virgen","madre","advocación","guadalupe","rosario"],
    versiculos: [
      { texto: "Engrandece mi alma al Señor; y mi espíritu se regocija en Dios mi Salvador.", cita: "Lucas 1:46-47" },
      { texto: "He aquí la sierva del Señor; hágase conmigo conforme a tu palabra.", cita: "Lucas 1:38" },
      { texto: "Bienaventurada la que creyó, porque se cumplirá lo que le fue dicho de parte del Señor.", cita: "Lucas 1:45" },
      { texto: "Y perseveraban unánimes en oración y ruego, con las mujeres, y con María la madre de Jesús, y con sus hermanos.", cita: "Hechos 1:14" },
      { texto: "María guardaba todas estas cosas, meditándolas en su corazón.", cita: "Lucas 2:19" }
    ]
  },
  {
    nombre: "Paz interior",
    keywords: ["paz interior","calma","serenidad","tranquilidad","paz mental","sosiego"],
    versiculos: [
      { texto: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo.", cita: "Juan 14:27" },
      { texto: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.", cita: "Filipenses 4:7" },
      { texto: "Jehová dará fortaleza a su pueblo; Jehová bendecirá a su pueblo con paz.", cita: "Salmos 29:11" },
      { texto: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.", cita: "Isaías 26:3" },
      { texto: "Estad quietos, y conoced que yo soy Dios.", cita: "Salmos 46:10" }
    ]
  },
  {
    nombre: "Fortaleza / Valentía",
    keywords: ["fortaleza","valentía","fuerza","coraje","ánimo","valiente"],
    versiculos: [
      { texto: "Todo lo puedo en Cristo que me fortalece.", cita: "Filipenses 4:13" },
      { texto: "Esfuérzate y sé valiente; no temas ni desmayes, porque Jehová tu Dios está contigo en dondequiera que fueres.", cita: "Josué 1:9" },
      { texto: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?", cita: "Salmos 27:1" },
      { texto: "No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te fortalezco; siempre te sustentaré con la diestra de mi justicia.", cita: "Isaías 41:10" },
      { texto: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.", cita: "Salmos 46:1" }
    ]
  },
  {
    nombre: "Protección / Refugio",
    keywords: ["protección","refugio","seguro","escudo","amparo","defensa","peligro"],
    versiculos: [
      { texto: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. Diré yo a Jehová: Esperanza mía, y castillo mío; mi Dios, en quien confiaré.", cita: "Salmos 91:1-2" },
      { texto: "Torre fuerte es el nombre de Jehová; a ella correrá el justo, y será levantado.", cita: "Proverbios 18:10" },
      { texto: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.", cita: "Salmos 46:1" },
      { texto: "Jehová te guardará de todo mal; él guardará tu alma. Jehová guardará tu salida y tu entrada desde ahora y para siempre.", cita: "Salmos 121:7-8" },
      { texto: "No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te fortalezco; siempre te sustentaré con la diestra de mi justicia.", cita: "Isaías 41:10" }
    ]
  },
  {
    nombre: "Fe / Confianza en Dios",
    keywords: ["fe","confianza","creer","duda","confiar"],
    versiculos: [
      { texto: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.", cita: "Hebreos 11:1" },
      { texto: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.", cita: "Proverbios 3:5-6" },
      { texto: "Encomienda a Jehová tu camino, y confía en él; y él hará.", cita: "Salmos 37:5" },
      { texto: "Tened fe en Dios.", cita: "Marcos 11:22" },
      { texto: "Jesús le dijo: Si puedes creer, al que cree todo le es posible.", cita: "Marcos 9:23" }
    ]
  },
  {
    nombre: "Oración / Vida espiritual",
    keywords: ["oración","rezar","vida espiritual","comunión","hablar con Dios"],
    versiculos: [
      { texto: "Mas tú, cuando ores, entra en tu aposento, y cerrada la puerta, ora a tu Padre que está en secreto; y tu Padre que ve en lo secreto te recompensará en público.", cita: "Mateo 6:6" },
      { texto: "Orad sin cesar.", cita: "1 Tesalonicenses 5:17" },
      { texto: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.", cita: "Filipenses 4:6" },
      { texto: "Cercano está Jehová a todos los que le invocan, a todos los que le invocan de veras.", cita: "Salmos 145:18" },
      { texto: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.", cita: "Jeremías 33:3" }
    ]
  },
  {
    nombre: "Salud física y espiritual",
    keywords: ["salud","bienestar","sano","cuidado","cuerpo","mente sana"],
    versiculos: [
      { texto: "Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma.", cita: "3 Juan 1:2" },
      { texto: "¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios, y que no sois vuestros?", cita: "1 Corintios 6:19" },
      { texto: "Él es quien perdona todas tus iniquidades, el que sana todas tus dolencias.", cita: "Salmos 103:3" },
      { texto: "Sáname, oh Jehová, y seré sano; sálvame, y seré salvo; porque tú eres mi alabanza.", cita: "Jeremías 17:14" },
      { texto: "Mas los que esperan a Jehová tendrán nuevas fuerzas; levantarán las alas como águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.", cita: "Isaías 40:31" }
    ]
  },
  {
    nombre: "Sanación interior / Liberación",
    keywords: ["sanación interior","liberación","curación","heridas","pasado","trauma"],
    versiculos: [
      { texto: "El Espíritu del Señor Jehová está sobre mí, porque me ha ungido Jehová; me ha enviado a predicar buenas nuevas a los abatidos, a vendar a los quebrantados de corazón, a publicar libertad a los cautivos, y a los presos abertura de la cárcel.", cita: "Isaías 61:1" },
      { texto: "El sana a los quebrantados de corazón, y venda sus heridas.", cita: "Salmos 147:3" },
      { texto: "Y os restituiré los años que comió la oruga, el saltón, el revoltón y la langosta, mi grande ejército que envié contra vosotros.", cita: "Joel 2:25" },
      { texto: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.", cita: "2 Corintios 5:17" },
      { texto: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.", cita: "Salmos 51:10" }
    ]
  },
  {
    nombre: "Arrepentimiento / Confesión",
    keywords: ["arrepentimiento","confesión","culpa","pecado","remordimiento"],
    versiculos: [
      { texto: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.", cita: "1 Juan 1:9" },
      { texto: "Ten piedad de mí, oh Dios, conforme a tu misericordia; conforme a la multitud de tus piedades borra mis rebeliones.", cita: "Salmos 51:1" },
      { texto: "El que encubre sus pecados no prosperará; mas el que los confiesa y se aparta alcanzará misericordia.", cita: "Proverbios 28:13" },
      { texto: "Venid luego, dice Jehová, y estemos a cuenta: si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos; si fueren rojos como el carmesí, vendrán a ser como blanca lana.", cita: "Isaías 1:18" },
      { texto: "Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados.", cita: "Hechos 3:19" }
    ]
  },
  {
    nombre: "Perdón",
    keywords: ["perdón","perdonar","rencor","resentimiento","ofensa","reconciliación"],
    versiculos: [
      { texto: "Porque si perdonáis a los hombres sus ofensas, os perdonará también a vosotros vuestro Padre celestial.", cita: "Mateo 6:14" },
      { texto: "Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo.", cita: "Efesios 4:32" },
      { texto: "Soportándoos unos a otros, y perdonándoos unos a otros si alguno tuviere queja contra otro. De la manera que Cristo os perdonó, así también hacedlo vosotros.", cita: "Colosenses 3:13" },
      { texto: "Entonces se le acercó Pedro y le dijo: Señor, ¿cuántas veces perdonaré a mi hermano que peque contra mí? ¿Hasta siete? Jesús le dijo: No te digo hasta siete, sino aun hasta setenta veces siete.", cita: "Mateo 18:21-22" },
      { texto: "Y cuando estéis orando, perdonad, si tenéis algo contra alguno, para que también vuestro Padre que está en los cielos os perdone a vosotros vuestras ofensas.", cita: "Marcos 11:25" }
    ]
  },
  {
    nombre: "Tentación / Pecado",
    keywords: ["tentación","pecado","caer","error","vicio","lucha"],
    versiculos: [
      { texto: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar.", cita: "1 Corintios 10:13" },
      { texto: "Velad y orad, para que no entréis en tentación; el espíritu a la verdad está dispuesto, pero la carne es débil.", cita: "Mateo 26:41" },
      { texto: "Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros.", cita: "Santiago 4:7" },
      { texto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.", cita: "Salmos 119:105" },
      { texto: "En mi corazón he guardado tus dichos, para no pecar contra ti.", cita: "Salmos 119:11" }
    ]
  },
  {
    nombre: "Familia / Hogar",
    keywords: ["familia","hogar","hijo","padres","esposo","matrimonio","casa"],
    versiculos: [
      { texto: "Y si mal os parece servir a Jehová, escogeos hoy a quién sirváis; … pero yo y mi casa serviremos a Jehová.", cita: "Josué 24:15" },
      { texto: "Si Jehová no edificare la casa, en vano trabajan los que la edifican; si Jehová no guardare la ciudad, en vano vela la guardia.", cita: "Salmos 127:1" },
      { texto: "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.", cita: "Proverbios 22:6" },
      { texto: "Hijos, obedeced en el Señor a vuestros padres, porque esto es justo.", cita: "Efesios 6:1" },
      { texto: "Maridos, amad a vuestras mujeres, así como Cristo amó a la iglesia, y se entregó a sí mismo por ella.", cita: "Efesios 5:25" }
    ]
  },
  {
    nombre: "Amor de Dios",
    keywords: ["amor de Dios","amor divino","Dios me ama","amor eterno"],
    versiculos: [
      { texto: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.", cita: "Juan 3:16" },
      { texto: "Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.", cita: "Romanos 5:8" },
      { texto: "Con amor eterno te he amado; por tanto, te prolongué mi misericordia.", cita: "Jeremías 31:3" },
      { texto: "En esto se mostró el amor de Dios para con nosotros, en que Dios envió a su Hijo unigénito al mundo, para que vivamos por él.", cita: "1 Juan 4:9" },
      { texto: "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir, ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro.", cita: "Romanos 8:38-39" }
    ]
  },
  {
    nombre: "Amor al prójimo",
    keywords: ["amor al prójimo","caridad","ayudar","servicio","compartir"],
    versiculos: [
      { texto: "Amarás a tu prójimo como a ti mismo.", cita: "Mateo 22:39" },
      { texto: "Un mandamiento nuevo os doy: Que os améis unos a otros; como yo os he amado, que también os améis unos a otros.", cita: "Juan 13:34" },
      { texto: "Y el segundo es semejante: Amarás a tu prójimo como a ti mismo.", cita: "Mateo 22:39" },
      { texto: "En esto conocerán todos que sois mis discípulos, si tuviereis amor los unos con los otros.", cita: "Juan 13:35" },
      { texto: "Sobrellevad los unos las cargas de los otros, y cumplid así la ley de Cristo.", cita: "Gálatas 6:2" }
    ]
  },
  {
    nombre: "Amistad",
    keywords: ["amistad","amigo","compañero","confidente","lealtad"],
    versiculos: [
      { texto: "En todo tiempo ama el amigo, y es como un hermano en la adversidad.", cita: "Proverbios 17:17" },
      { texto: "Nadie tiene mayor amor que este, que uno ponga su vida por sus amigos.", cita: "Juan 15:13" },
      { texto: "Hierro con hierro se aguza; y así el hombre aguza el rostro de su amigo.", cita: "Proverbios 27:17" },
      { texto: "Fieles son las heridas del que ama; pero importunos los besos del que aborrece.", cita: "Proverbios 27:6" },
      { texto: "El hombre que tiene amigos ha de mostrarse amigo; y amigo hay más unido que un hermano.", cita: "Proverbios 18:24" }
    ]
  },
  {
    nombre: "Gratitud / Acción de gracias",
    keywords: ["gratitud","gracias","agradecimiento","bendición","dar gracias"],
    versiculos: [
      { texto: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.", cita: "1 Tesalonicenses 5:18" },
      { texto: "Entrad por sus puertas con acción de gracias, por sus atrios con alabanza; alabadle, bendecid su nombre.", cita: "Salmos 100:4" },
      { texto: "Dad gracias a Jehová, porque él es bueno; porque para siempre es su misericordia.", cita: "Salmos 136:1" },
      { texto: "Bendice, alma mía, a Jehová, y no olvides ninguno de sus beneficios.", cita: "Salmos 103:2" },
      { texto: "Doy gracias a mi Dios siempre por vosotros, por la gracia de Dios que os fue dada en Cristo Jesús.", cita: "1 Corintios 1:4" }
    ]
  },
  {
    nombre: "Alegría / Gozo",
    keywords: ["alegría","gozo","felicidad","contento","júbilo","regocijo"],
    versiculos: [
      { texto: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.", cita: "Salmos 118:24" },
      { texto: "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!", cita: "Filipenses 4:4" },
      { texto: "En tu presencia hay plenitud de gozo; delicias a tu diestra para siempre.", cita: "Salmos 16:11" },
      { texto: "El gozo de Jehová es vuestra fortaleza.", cita: "Nehemías 8:10" },
      { texto: "Has cambiado mi lamento en baile; desataste mi cilicio, y me ceñiste de alegría.", cita: "Salmos 30:11" }
    ]
  },
  {
    nombre: "Paciencia / Perseverancia",
    keywords: ["paciencia","perseverancia","constancia","esperar","resistencia","aguante"],
    versiculos: [
      { texto: "Gozosos en la esperanza; sufridos en la tribulación; constantes en la oración.", cita: "Romanos 12:12" },
      { texto: "Mas tenga la paciencia su obra completa, para que seáis perfectos y cabales, sin que os falte cosa alguna.", cita: "Santiago 1:4" },
      { texto: "Guarda silencio ante Jehová, y espera en él. No te alteres con motivo del que prospera en su camino, por el hombre que hace maldades.", cita: "Salmos 37:7" },
      { texto: "Porque os es necesaria la paciencia, para que habiendo hecho la voluntad de Dios, obtengáis la promesa.", cita: "Hebreos 10:36" },
      { texto: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.", cita: "Gálatas 6:9" }
    ]
  },
  {
    nombre: "Humildad",
    keywords: ["humildad","sencillez","mansedumbre","pequeñez","no orgullo"],
    versiculos: [
      { texto: "Cualquiera que se enaltece, será humillado; y el que se humilla, será enaltecido.", cita: "Lucas 14:11" },
      { texto: "Humillaos delante del Señor, y él os exaltará.", cita: "Santiago 4:10" },
      { texto: "Aprended de mí, que soy manso y humilde de corazón; y hallaréis descanso para vuestras almas.", cita: "Mateo 11:29" },
      { texto: "Nada hagáis por contienda o por vanagloria; antes bien con humildad, estimando cada uno a los demás como superiores a él mismo.", cita: "Filipenses 2:3" },
      { texto: "Dios resiste a los soberbios, y da gracia a los humildes.", cita: "Santiago 4:6" }
    ]
  },
  {
    nombre: "Sabiduría / Discernimiento",
    keywords: ["sabiduría","discernimiento","entendimiento","inteligencia","prudencia","consejo"],
    versiculos: [
      { texto: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.", cita: "Santiago 1:5" },
      { texto: "El principio de la sabiduría es el temor de Jehová; los insensatos desprecian la sabiduría y la enseñanza.", cita: "Proverbios 1:7" },
      { texto: "Sabiduría ante todo; adquiere sabiduría; y sobre todas tus posesiones adquiere inteligencia.", cita: "Proverbios 4:7" },
      { texto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.", cita: "Salmos 119:105" },
      { texto: "Porque Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia.", cita: "Proverbios 2:6" }
    ]
  },
  {
    nombre: "Trabajo / Desempleo",
    keywords: ["trabajo","empleo","desempleo","paro","profesión","oficio","negocio"],
    versiculos: [
      { texto: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.", cita: "Colosenses 3:23" },
      { texto: "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.", cita: "Proverbios 16:3" },
      { texto: "El alma del perezoso desea, y nada alcanza; mas el alma de los diligentes será prosperada.", cita: "Proverbios 13:4" },
      { texto: "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús.", cita: "Filipenses 4:19" },
      { texto: "Seis días trabajarás, y harás toda tu obra.", cita: "Éxodo 20:9" }
    ]
  },
  {
    nombre: "Estudios / Exámenes",
    keywords: ["estudios","examen","estudiar","aprender","prueba","conocimiento"],
    versiculos: [
      { texto: "El principio de la sabiduría es el temor de Jehová; los insensatos desprecian la sabiduría y la enseñanza.", cita: "Proverbios 1:7" },
      { texto: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.", cita: "Santiago 1:5" },
      { texto: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.", cita: "2 Timoteo 2:15" },
      { texto: "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.", cita: "Proverbios 16:3" },
      { texto: "Todo lo puedo en Cristo que me fortalece.", cita: "Filipenses 4:13" }
    ]
  },
  {
    nombre: "Ayuda económica / Providencia",
    keywords: ["dinero","deuda","económico","pobreza","necesidad","provisión"],
    versiculos: [
      { texto: "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús.", cita: "Filipenses 4:19" },
      { texto: "Jehová es mi pastor; nada me faltará.", cita: "Salmos 23:1" },
      { texto: "Mirad las aves del cielo, que no siembran, ni siegan, ni recogen en graneros; y vuestro Padre celestial las alimenta. ¿No valéis vosotros mucho más que ellas?", cita: "Mateo 6:26" },
      { texto: "Los leoncillos necesitan, y tienen hambre; pero los que buscan a Jehová no tendrán falta de ningún bien.", cita: "Salmos 34:10" },
      { texto: "Honra a Jehová con tus bienes, y con las primicias de todos tus frutos; y serán llenos tus graneros con abundancia, y tus lagares rebosarán de mosto.", cita: "Proverbios 3:9-10" }
    ]
  },
  {
    nombre: "Justicia / Injusticia",
    keywords: ["justicia","injusticia","injusto","desigualdad","rectitud","juicio"],
    versiculos: [
      { texto: "Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y humillarte ante tu Dios.", cita: "Miqueas 6:8" },
      { texto: "Aprended a hacer el bien; buscad el derecho, socorred al agraviado, haced justicia al huérfano, defended a la viuda.", cita: "Isaías 1:17" },
      { texto: "Bienaventurados los que tienen hambre y sed de justicia, porque ellos serán saciados.", cita: "Mateo 5:6" },
      { texto: "Jehová ama la justicia, y no desampara a sus santos; para siempre serán guardados; mas la descendencia de los impíos será destruida.", cita: "Salmos 37:28" },
      { texto: "No digas: Tomaré venganza del mal; espera a Jehová, y él te salvará.", cita: "Proverbios 20:22" }
    ]
  },
  {
    nombre: "Esperanza en el futuro",
    keywords: ["esperanza","futuro","mañana","ilusión","visión","plan"],
    versiculos: [
      { texto: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.", cita: "Jeremías 29:11" },
      { texto: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo.", cita: "Romanos 15:13" },
      { texto: "Mas los que esperan a Jehová tendrán nuevas fuerzas; levantarán las alas como águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.", cita: "Isaías 40:31" },
      { texto: "Esta es mi porción, dice mi alma; por tanto, en él esperaré.", cita: "Lamentaciones 3:24" },
      { texto: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.", cita: "Jeremías 29:11" }
    ]
  },
  {
    nombre: "Vocación / Propósito de vida",
    keywords: ["vocación","propósito","llamado","misión","sentido","para qué estoy aquí"],
    versiculos: [
      { texto: "Antes que te formase en el vientre te conocí, y antes que nacieses te santifiqué, te di por profeta a las naciones.", cita: "Jeremías 1:5" },
      { texto: "Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas.", cita: "Efesios 2:10" },
      { texto: "Jehová cumplirá su propósito en mí; tu misericordia, oh Jehová, es para siempre; no desampares la obra de tus manos.", cita: "Salmos 138:8" },
      { texto: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.", cita: "Romanos 8:28" },
      { texto: "Heme aquí, envíame a mí.", cita: "Isaías 6:8" }
    ]
  }
];

// Función de detección de categoría (compatible con index.html)
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
    if (!mejorCategoria) {
        mejorCategoria = categories[Math.floor(Math.random() * categories.length)];
    }
    return mejorCategoria;
}
