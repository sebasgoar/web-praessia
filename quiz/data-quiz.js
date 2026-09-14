/* ============================================================
   Praessia — quiz/data-quiz.js
   Las 10 preguntas del test de presencia con sus opciones
   y puntos de personalidad asociados.
   Usado por: test.html (a través de quiz/render-quiz.js)
   ============================================================ */

const quizData = [
  {
    id: "q1",
    question: "¿Cómo describís tu estilo de vestir habitualmente?",
    options: {
      A: { text: "Casual y cómodo — funcional, sin complicaciones.", points: { libre_natural: 2, fresco_vital: 1 } },
      B: { text: "Clásico y sobrio — prefiero lo atemporal.", points: { elegante_clasico: 2, esencial_moderno: 1 } },
      C: { text: "Moderno y arriesgado — me gusta destacar.", points: { audaz_magnetico: 2, creativo_alternativo: 1 } },
      D: { text: "Elegante y cuidado — cuido los detalles.", points: { sensual_profundo: 2, elegante_clasico: 1 } }
    }
  },
  {
    id: "q2",
    question: "¿En qué ambiente pasás más tiempo en tu día a día?",
    options: {
      A: { text: "Al aire libre, moviéndome — gimnasio, parque, deporte.", points: { fresco_vital: 2, libre_natural: 1 } },
      B: { text: "Oficina o trabajo formal — reuniones, presentaciones.", points: { esencial_moderno: 2, elegante_clasico: 1 } },
      C: { text: "Espacios sociales — cafés, restaurantes, eventos.", points: { calido_envolvente: 2, audaz_magnetico: 1 } },
      D: { text: "En casa o espacios privados — tranquilidad, rutina propia.", points: { sensual_profundo: 2, esencial_moderno: 1 } }
    }
  },
  {
    id: "q3",
    question: "¿Qué tipo de clima preferís?",
    options: {
      A: { text: "Fresco o frío — aire limpio, brisa.", points: { libre_natural: 2, fresco_vital: 1 } },
      B: { text: "Templado — ni frío ni calor.", points: { esencial_moderno: 2, elegante_clasico: 1 } },
      C: { text: "Cálido — energía, verano.", points: { calido_envolvente: 2, audaz_magnetico: 1 } },
      D: { text: "Me adapto a cualquier clima.", points: { creativo_alternativo: 2, libre_natural: 1 } }
    }
  },
  {
    id: "q4",
    question: "¿Con qué bebida te identificás más?",
    options: {
      A: { text: "Agua o bebidas energizantes — hidratación, rendimiento.", points: { fresco_vital: 2, audaz_magnetico: 1 } },
      B: { text: "Café — ritual, concentración.", points: { esencial_moderno: 2, elegante_clasico: 1 } },
      C: { text: "Cóctel o vino — socialización, celebración.", points: { calido_envolvente: 2, audaz_magnetico: 1 } },
      D: { text: "Té o infusiones — calma, introspección.", points: { sensual_profundo: 2, creativo_alternativo: 1 } }
    }
  },
  {
    id: "q5",
    question: "¿Cómo preferís empezar tu mañana?",
    options: {
      A: { text: "Ejercicio — activar el cuerpo primero.", points: { fresco_vital: 2, audaz_magnetico: 1 } },
      B: { text: "Café en silencio — pensar antes de actuar.", points: { elegante_clasico: 2, esencial_moderno: 1 } },
      C: { text: "Revisando el celular — conectado desde el inicio.", points: { audaz_magnetico: 2, calido_envolvente: 1 } },
      D: { text: "Música o podcast — inspiración y estado de ánimo.", points: { creativo_alternativo: 2, sensual_profundo: 1 } }
    }
  },
  {
    id: "q6",
    question: "¿Cuál de estos ambientes te genera más bienestar?",
    options: {
      A: { text: "Naturaleza — montaña, río, campo.", points: { libre_natural: 2, fresco_vital: 1 } },
      B: { text: "Espacios ordenados — hogar moderno, oficina limpia.", points: { esencial_moderno: 2, elegante_clasico: 1 } },
      C: { text: "Lugares con vida — mercados, restaurantes, bares.", points: { calido_envolvente: 2, audaz_magnetico: 1 } },
      D: { text: "Espacios íntimos — biblioteca, café tranquilo, casa.", points: { creativo_alternativo: 2, sensual_profundo: 1 } }
    }
  },
  {
    id: "q7",
    question: "¿Cómo te describirían tus amigos o compañeros de trabajo?",
    options: {
      A: { text: "Enérgico y activo — siempre en movimiento.", points: { fresco_vital: 2, libre_natural: 1 } },
      B: { text: "Confiable y serio — alguien a quien se puede contar.", points: { elegante_clasico: 2, esencial_moderno: 1 } },
      C: { text: "Social y carismático — sabe cómo estar en cualquier grupo.", points: { calido_envolvente: 2, audaz_magnetico: 1 } },
      D: { text: "Reflexivo y calmado — piensa antes de hablar.", points: { sensual_profundo: 2, creativo_alternativo: 1 } }
    }
  },
  {
    id: "q8",
    question: "¿Cuál es tu mayor fortaleza?",
    options: {
      A: { text: "La perseverancia — no paro hasta lograr lo que me propongo.", points: { audaz_magnetico: 2, fresco_vital: 1 } },
      B: { text: "La precisión — hago las cosas bien o no las hago.", points: { esencial_moderno: 2, elegante_clasico: 1 } },
      C: { text: "La conexión — sé leer a las personas y adaptarme.", points: { calido_envolvente: 2, libre_natural: 1 } },
      D: { text: "La profundidad — pienso diferente, veo lo que otros no ven.", points: { creativo_alternativo: 2, sensual_profundo: 1 } }
    }
  },
  {
    id: "q9",
    question: "¿Con qué color te identificás más?",
    options: {
      A: { text: "Azul o verde — frescura, calma, naturaleza.", points: { libre_natural: 2, fresco_vital: 1 } },
      B: { text: "Negro o gris — sobriedad, elegancia, poder.", points: { elegante_clasico: 2, audaz_magnetico: 1 } },
      C: { text: "Rojo o naranja — energía, pasión, dinamismo.", points: { audaz_magnetico: 2, fresco_vital: 1 } },
      D: { text: "Blanco o beige — pureza, simpleza, paz.", points: { esencial_moderno: 2, sensual_profundo: 1 } }
    }
  },
  {
    id: "q10",
    question: "¿En qué momento del día te sentís más vos mismo?",
    options: {
      A: { text: "En la mañana — fresco, con energía, todo por delante.", points: { fresco_vital: 2, libre_natural: 1 } },
      B: { text: "En la tarde — productivo, enfocado, en movimiento.", points: { esencial_moderno: 2, audaz_magnetico: 1 } },
      C: { text: "En la noche — desinhibido, social, libre.", points: { audaz_magnetico: 2, calido_envolvente: 1 } },
      D: { text: "En los momentos de quietud — independiente del horario.", points: { sensual_profundo: 2, creativo_alternativo: 1 } }
    }
  }
];