// fechas.js – Arcángel App
// Calendario litúrgico para conectar fechas con las Oraciones Guiadas

const fechasEspeciales = [
  // ===== FECHAS FIJAS =====
  { mes: 1, dia: 1, idOracion: "ano_nuevo", titulo: "Año Nuevo" },
  { mes: 1, dia: 6, idOracion: "reyes", titulo: "Día de Reyes" },
  { mes: 2, dia: 2, idOracion: "candelaria", titulo: "Día de la Candelaria" },
  { mes: 5, dia: 10, idOracion: "dia_madres", titulo: "Día de las Madres" },
  { mes: 7, dia: 16, idOracion: "carmen", titulo: "Nuestra Señora del Carmen" },
  { mes: 8, dia: 15, idOracion: "asuncion", titulo: "Asunción de la Virgen" },
  { mes: 8, dia: 28, idOracion: "abuelo", titulo: "Día del Abuelo" },
  { mes: 9, dia: 29, idOracion: "san_miguel", titulo: "San Miguel Arcángel" },
  { mes: 10, dia: 15, idOracion: "santa_teresa", titulo: "Día de Santa Teresa" },
  { mes: 11, dia: 1, idOracion: "todos_santos", titulo: "Solemnidad de Todos los Santos" },
  { mes: 11, dia: 2, idOracion: "fieles_difuntos", titulo: "Fieles Difuntos" },
  { mes: 12, dia: 12, idOracion: "novena_guadalupe", titulo: "Virgen de Guadalupe" },
  { mes: 12, dia: 16, idOracion: "posadas", titulo: "Inicio de Posadas" },
  { mes: 12, dia: 24, idOracion: "nochebuena", titulo: "Nochebuena" },
  { mes: 12, dia: 25, idOracion: "navidad", titulo: "Navidad" },
  { mes: 12, dia: 31, idOracion: "anoviejo", titulo: "Año Viejo" },

  // ===== FECHAS MÓVILES (Calculadas en base a la Pascua) =====
  // Viernes Santo
  { tipo: "pascua", offset: -2, idOracion: "via_crucis", titulo: "Vía Crucis (Viernes Santo)" },
  { tipo: "pascua", offset: -2, idOracion: "siete_palabras", titulo: "Las Siete Palabras (Viernes Santo)" },
  // Pentecostés (50 días después de Pascua)
  { tipo: "pascua", offset: 49, idOracion: "pentecostes", titulo: "Pentecostés" },
  
  // ===== OTRAS FECHAS MÓVILES =====
  // Tercer domingo de junio (Día del Padre en México)
  { tipo: "tercer_domingo", mes: 6, idOracion: "dia_padre", titulo: "Día del Padre" }
];

// ==========================================
// FUNCIONES DE CÁLCULO DE FECHAS
// ==========================================

// Calcula la fecha de Pascua (Domingo de Resurrección) usando el algoritmo de Gauss
function calcularPascua(anio) {
  const a = anio % 19;
  const b = Math.floor(anio / 100);
  const c = anio % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31);
  const dia = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(anio, mes - 1, dia);
}

// Calcula el tercer domingo de un mes específico
function calcularTercerDomingo(anio, mes) {
  let domingos = 0;
  for (let dia = 1; dia <= 31; dia++) {
    const fecha = new Date(anio, mes - 1, dia);
    if (fecha.getMonth() !== mes - 1) break; // Si nos pasamos del mes
    if (fecha.getDay() === 0) { // 0 = Domingo
      domingos++;
      if (domingos === 3) return fecha;
    }
  }
  return null;
}

// Función principal que busca si hoy es una fecha especial
function obtenerFechaEspecialHoy() {
  const hoy = new Date();
  const anio = hoy.getFullYear();
  const mesActual = hoy.getMonth() + 1;
  const diaActual = hoy.getDate();

  for (let fecha of fechasEspeciales) {
    if (fecha.tipo === "pascua") {
      const pascua = calcularPascua(anio);
      const fechaCalculada = new Date(pascua);
      fechaCalculada.setDate(pascua.getDate() + fecha.offset);
      
      if (fechaCalculada.getDate() === diaActual && fechaCalculada.getMonth() + 1 === mesActual) {
        return fecha;
      }
    } 
    else if (fecha.tipo === "tercer_domingo") {
      const fechaCalculada = calcularTercerDomingo(anio, fecha.mes);
      if (fechaCalculada && fechaCalculada.getDate() === diaActual && fechaCalculada.getMonth() + 1 === mesActual) {
        return fecha;
      }
    } 
    else if (fecha.mes === mesActual && fecha.dia === diaActual) {
      return fecha;
    }
  }
  return null; // No es una fecha especial hoy
}
