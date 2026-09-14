/* ============================================================
   Praessia — quiz/data-presencias.js
   Base de datos de los 8 arquetipos de presencia y detalle
   editorial de cada fragancia del catálogo.
   Usado por: test.html (a través de quiz/render-result.js)
   ============================================================ */

const PRESENCIAS_DATA = {
  fresco_vital: {
    nombre: 'Fresca Vital',
    tagline: 'Irradias energía limpia y optimismo. Tu presencia activa lo que toca.',
    placeholder: 'Hay algo en tu forma de llegar que renueva el ambiente. No es esfuerzo: es constitución. Tu vitalidad genuina hace que la gente quiera estar cerca sin saber exactamente por qué. Proyectas movimiento, apertura y una ligereza que en este mundo acelerado resulta extraordinariamente refrescante.',
    contextos: {
      laboral: 'Motor del equipo. Llegas con soluciones donde otros ven obstáculos.',
      social: 'Dinámico y conectivo. Eres el puente entre personas y conversaciones.',
      intimo: 'Ligero y alegre. El disfrute es para ti una filosofía de vida.',
      proyeccion: 'Vitalidad, apertura y una energía que contagia positivamente.'
    }
  },
  libre_natural: {
    nombre: 'Libre Natural',
    tagline: 'Tu autenticidad es tu mayor fortaleza. No te adaptas: te expresas.',
    placeholder: 'Tu presencia no sigue guiones. Tienes una honestidad que resulta refrescante en un mundo donde la mayoría se cuida demasiado. No finges comodidades que no sientes ni entusiasmos que no tienes. Esa coherencia entre lo que piensas y lo que proyectas es extraordinariamente rara, y la gente lo percibe.',
    contextos: {
      laboral: 'Perspectiva diferencial. Ves lo que los demás normalizan.',
      social: 'Auténtico y sin filtros. Las personas saben exactamente quién eres.',
      intimo: 'Profundamente leal. Tus vínculos son genuinos porque no construiste ninguno por conveniencia.',
      proyeccion: 'Autenticidad, libertad y una coherencia que genera confianza inmediata.'
    }
  },
  elegante_clasico: {
    nombre: 'Elegante Clásico',
    tagline: 'Proyectas herencia y permanencia: tu refinamiento no sigue tendencias, las trasciende.',
    placeholder: 'Tu presencia se construye desde la coherencia y el control estético. Eliges con criterio, no por impulso. Cada decisión tuya —en lo que vistes, en cómo hablas, en el espacio que habitas— comunica una jerarquía de valores que no necesita explicación. En entornos laborales proyectas liderazgo sin fricción; en lo social, generas respeto sin necesidad de exagerar.',
    contextos: {
      laboral: 'Autoridad silenciosa. Tus ideas son tomadas en serio antes de terminar de hablarlas.',
      social: 'Presencia gravitacional. La gente te observa sin saber exactamente por qué.',
      intimo: 'Selecto y cálido. Quienes llegan a tu círculo saben que ese espacio se ganó.',
      proyeccion: 'Gusto, criterio y permanencia. Lo opuesto a la moda: atemporalidad.'
    }
  },
  esencial_moderno: {
    nombre: 'Esencial Moderno',
    tagline: 'Comunicas propósito con lenguaje contemporáneo: menos ornamento, más intención.',
    placeholder: 'Tienes la rara habilidad de comunicar mucho con poco. En tu caso, la austeridad no es frialdad —es precisión. Eliminas el ruido y lo que queda es contundente. Quienes te conocen saben que detrás de cada decisión tuya hay un argumento sólido y bien pensado.',
    contextos: {
      laboral: 'Eficiencia que inspira. Resuelves antes de que otros terminen de plantear el problema.',
      social: 'Presencia intelectual. Prefieres conversaciones que dejan algo, no las que solo llenan tiempo.',
      intimo: 'Honesto y presente. Lo artificial no tiene lugar en tu mundo.',
      proyeccion: 'Claridad, intención y autenticidad radical.'
    }
  },
  sensual_profundo: {
    nombre: 'Sensual Profundo',
    tagline: 'Tu magnetismo es privado: se revela de cerca, no se anuncia en público.',
    placeholder: 'Hay una intensidad en ti que no se anuncia: se siente. Tu presencia no entra a un cuarto, lo transforma. Eres de los que permanecen en la memoria mucho después de que el encuentro terminó. Esta profundidad es tu firma más poderosa y más difícil de imitar.',
    contextos: {
      laboral: 'Influencia que perdura. Tus ideas no solo se escuchan, se recuerdan.',
      social: 'Enigmático y atractivo. Generas curiosidad sin proponértelo.',
      intimo: 'Intenso y presente al cien por ciento. Nada superficial te interesa.',
      proyeccion: 'Profundidad, misterio y una calidez que solo aparece ante los elegidos.'
    }
  },
  calido_envolvente: {
    nombre: 'Cálido Envolvente',
    tagline: 'Tu magnetismo es relacional: la gente se abre y se queda cerca de ti.',
    placeholder: 'Tienes el don de hacer que las personas se abran. Hay algo en tu forma de estar que genera confianza sin pedirla. Tu inteligencia emocional es tu superpoder: lees las situaciones, lees a las personas, y respondes desde un lugar de genuina consideración hacia el otro.',
    contextos: {
      laboral: 'El pegamento del equipo. Sostienes el clima humano donde los demás solo ven tareas.',
      social: 'Anfitrión natural. Nadie se siente excluido cuando estás.',
      intimo: 'Profundamente presente. En ti, la gente siente que puede ser como es.',
      proyeccion: 'Calidez, empatía y una generosidad que transforma ambientes.'
    }
  },
  audaz_magnetico: {
    nombre: 'Audaz Magnético',
    tagline: 'Tu magnetismo es público: entras a un lugar y el lugar cambia contigo.',
    placeholder: 'No pides la atención: sucede. Tienes una confianza natural que no necesita validación externa para existir. Rompes convenciones porque las cuestionas genuinamente, no por rebeldía. Esa autenticidad radical es lo que hace que otros te sigan, incluso cuando no lo propones conscientemente.',
    contextos: {
      laboral: 'Energía que activa equipos. Donde estás, pasan cosas.',
      social: 'El centro sin buscarlo. Tienes la habilidad de hacer que todo el mundo se sienta incluido.',
      intimo: 'Apasionado y generoso. Das con la misma intensidad con que vives.',
      proyeccion: 'Confianza, energía y magnetismo genuino que no se aprende.'
    }
  },
  creativo_alternativo: {
    nombre: 'Creativo Alternativo',
    tagline: 'No sigues el mapa: tu forma de ver el mundo es, en sí misma, tu firma.',
    placeholder: 'Tu mente conecta puntos que otros no ven. Tienes una sensibilidad estética que no es solo gustativa —es conceptual. No te conformas con lo que ya existe: imaginas lo que podría ser. Esa capacidad de ver posibilidades donde otros ven límites es lo que define tu presencia y la hace imposible de olvidar.',
    contextos: {
      laboral: 'La perspectiva que nadie tiene. Tus ideas abren caminos donde no los había.',
      social: 'Fascinante y estimulante. Las conversaciones contigo no se parecen a ninguna otra.',
      intimo: 'Profundamente curioso. Tus relaciones más significativas son las que te retan intelectualmente.',
      proyeccion: 'Originalidad, sensibilidad y una visión que expande lo posible.'
    }
  }
};

/* ── Detalle editorial de fragancias ───────────────────────── */
const PERFUMES_DETAIL = {

  'praessia-01': {
    familia: 'Amaderado especiado · Oriental',
    descripcion: 'Notas metálicas y de menta que se abren paso entre especias cálidas, hasta desembocar en un corazón de ámbar y vetiver profundamente magnético. Una fragancia construida sobre el contraste: fría en la salida, ardiente en el fondo.',
    rationale: 'Ese viraje entre lo frío y lo ardiente es exactamente tu forma de entrar a un lugar: primero llega tu energía, después tu magnetismo se queda en la memoria de los demás.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Climas templados y fríos',
    ocasion: 'Salidas sociales, eventos',
    notas: { salida: 'Menta, mandarina, canela', corazon: 'Rosa, pachulí, jengibre', fondo: 'Ámbar, vetiver, cedro' },
    tags: ['especiado', 'oriental', 'intenso', 'memorable']
  },
  'praessia-02': {
    familia: 'Amaderado especiado · Festivo',
    descripcion: 'Mandarina y bergamota luminosas se funden con heliotropo y cardamomo, hasta asentarse en una base de sándalo y almizcle discretamente magnética. Fresco en la superficie, firme en el fondo.',
    rationale: 'Esa precisión sin esfuerzo visible es la misma con la que tú proyectas liderazgo: no necesitas subir el volumen para que se note quién dirige la sala.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Reuniones, vida nocturna',
    notas: { salida: 'Mandarina, bergamota', corazon: 'Heliotropo, cardamomo', fondo: 'Sándalo, almizcle, cedro' },
    tags: ['amaderado', 'festivo', 'moderno', 'versátil']
  },
  'praessia-03': {
    familia: 'Acuático aromático',
    descripcion: 'El mar en calma convertido en aroma: notas marinas y cítricas sobre una base amaderada limpia. Una fragancia que no busca imponerse, sino acompañar con naturalidad.',
    rationale: 'Su frescura marina y su ligereza dialogan con esa vitalidad tuya que no necesita esfuerzo para notarse. Presencia que respira.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido y templado',
    ocasion: 'Uso diario, oficina, día a día activo',
    notas: { salida: 'Bergamota, notas marinas, mandarina', corazon: 'Jazmín, romero, notas acuáticas', fondo: 'Almizcle blanco, cedro, musgo de roble' },
    tags: ['fresco', 'acuático', 'versátil', 'diario']
  },
  'praessia-04': {
    familia: 'Floral oriental',
    descripcion: 'Un ramo cálido de flor blanca y especias suaves, envuelto en una base ambarada que se queda cerca de la piel. Seducción sin estridencia.',
    rationale: 'Su calidez floral conecta con la manera en que te dejas sentir de cerca: nada se anuncia, todo se percibe.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Citas, noches especiales',
    notas: { salida: 'Mandarina, bergamota', corazon: 'Jazmín, flor de azahar, canela', fondo: 'Vainilla, ámbar, almizcle' },
    tags: ['floral', 'cálido', 'seductor', 'noche']
  },
  'praessia-05': {
    familia: 'Floral afrutado',
    descripcion: 'Manzana verde y flores blancas sobre un fondo de almizcle y cacao, un contraste entre lo dulce y lo firme. Una fragancia con carácter propio.',
    rationale: 'Ese contraste entre dulzura y firmeza es justo tu forma de entrar a un lugar: nadie lo pide, pero todos lo notan.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Día a noche, vida social',
    notas: { salida: 'Manzana verde, bergamota, limón', corazon: 'Jazmín, flor de naranjo, gardenia', fondo: 'Almizcle, cacao, praliné' },
    tags: ['afrutado', 'moderno', 'con carácter', 'versátil']
  },
  'praessia-06': {
    familia: 'Aromático fresco',
    descripcion: 'Cítricos y lavanda sobre una base de maderas limpias. La versión más clásica y ordenada de la frescura masculina.',
    rationale: 'Su estructura clara y bien resuelta encaja con tu manera de proyectar autoridad sin necesitar volumen.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Oficina, uso diario',
    notas: { salida: 'Limón, bergamota, lavanda', corazon: 'Geranio, jazmín, salvia', fondo: 'Cedro, ámbar, almizcle' },
    tags: ['clásico', 'fresco', 'oficina', 'atemporal']
  },
  'praessia-07': {
    familia: 'Amaderado oriental',
    descripcion: 'Especias y cuero suave sobre un fondo ambarado profundo. Una fragancia nocturna, hecha para espacios donde la presencia importa.',
    rationale: 'Su intensidad discreta es el mismo lenguaje con el que tú te mueves: nada evidente, todo memorable.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío y templado',
    ocasion: 'Vida nocturna, eventos',
    notas: { salida: 'Pimienta negra, cardamomo', corazon: 'Cuero, geranio', fondo: 'Ámbar, pachulí, vainilla' },
    tags: ['nocturno', 'intenso', 'misterioso', 'elegante']
  },
  'praessia-08': {
    familia: 'Acuático amaderado',
    descripcion: 'Aire de altura y madera limpia: una fragancia que evoca horizontes abiertos y calma controlada.',
    rationale: 'Esa serenidad amplia es la que proyectas cuando entras a un espacio sin necesidad de anunciarte.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido y templado',
    ocasion: 'Día a día, oficina, exteriores',
    notas: { salida: 'Notas acuáticas, mandarina', corazon: 'Geranio, lavanda, salvia', fondo: 'Almizcle, musgo, cedro' },
    tags: ['fresco', 'sereno', 'oficina', 'atemporal']
  },
  'praessia-09': {
    familia: 'Cítrico aromático',
    descripcion: 'Cítricos vibrantes con un fondo amaderado suave. Una fragancia deportiva que suma sin sobrecargar.',
    rationale: 'Su energía limpia refleja tu forma natural de moverte por el mundo: ligera, directa, sin fricción.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, deporte, casual',
    notas: { salida: 'Limón, bergamota, menta', corazon: 'Geranio, romero', fondo: 'Cedro, almizcle' },
    tags: ['cítrico', 'deportivo', 'ligero', 'diario']
  },
  'praessia-10': {
    familia: 'Amaderado especiado',
    descripcion: 'Especias oscuras y cuero sobre una base intensa, pensada para quienes no le temen al contraste.',
    rationale: 'Su carácter poco convencional combina con esa manera tuya de leer el mundo distinto a los demás.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío',
    ocasion: 'Vida nocturna, ocasiones especiales',
    notas: { salida: 'Ajenjo, mandarina', corazon: 'Canela, cuero', fondo: 'Ámbar, vainilla, pachulí' },
    tags: ['especiado', 'nocturno', 'audaz', 'intenso']
  },
  'praessia-11': {
    familia: 'Cítrico unisex',
    descripcion: 'El cítrico universal: limpio, minimalista, sin género. La fragancia que definió una era de simplicidad.',
    rationale: 'Su claridad sin adornos es la misma con la que tú te expresas: directa, honesta, sin ruido.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Uso diario, cualquier ocasión',
    notas: { salida: 'Limón, bergamota, piña', corazon: 'Jazmín, violeta, nuez moscada', fondo: 'Almizcle, ámbar, musgo' },
    tags: ['unisex', 'minimalista', 'clásico', 'diario']
  },
  'praessia-12': {
    familia: 'Aromático fougère',
    descripcion: 'Un icónico contraste entre frescura violeta y calidez amaderada. Atrevido desde su primera aparición.',
    rationale: 'Ese contraste sin miedo es tu forma natural de liderar: la confianza no se pide, se nota.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Uso diario, versátil',
    notas: { salida: 'Lavanda, mandarina, hoja verde', corazon: 'Violeta, cedro', fondo: 'Sándalo, almizcle, cuero' },
    tags: ['audaz', 'clásico', 'versátil', 'icónico']
  },
  'praessia-13': {
    familia: 'Aromático fresco',
    descripcion: 'Cítricos y notas verdes con un fondo amaderado ligero. Frescura funcional para el día a día.',
    rationale: 'Su equilibrio entre movimiento y calma refleja esa autenticidad tuya que no necesita adornos.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Oficina, uso diario',
    notas: { salida: 'Bergamota, manzana', corazon: 'Geranio, salvia', fondo: 'Sándalo, almizcle' },
    tags: ['fresco', 'diario', 'versátil', 'clásico']
  },
  'praessia-14': {
    familia: 'Amaderado acuático',
    descripcion: 'Notas marinas eléctricas sobre un fondo de ámbar gris, pensada para quienes buscan destacar sin perder frescura.',
    rationale: 'Esa energía que se impone con naturalidad es la tuya: no pides atención, pero la consigues.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido y templado',
    ocasion: 'Deporte, vida social, día activo',
    notas: { salida: 'Toronja, mandarina', corazon: 'Loto, notas marinas', fondo: 'Ámbar gris, guayacol, pachulí' },
    tags: ['audaz', 'fresco', 'deportivo', 'moderno']
  },
  'praessia-15': {
    familia: 'Oriental especiado',
    descripcion: 'Lavanda y vainilla en tensión constante: dulzura y estructura que conviven sin anularse.',
    rationale: 'Ese equilibrio entre calidez y firmeza es tu manera de generar cercanía sin perder profundidad.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío y templado',
    ocasion: 'Noche, ocasiones especiales',
    notas: { salida: 'Menta, lavanda, bergamota', corazon: 'Canela, comino, cardamomo', fondo: 'Vainilla, ámbar, cacao' },
    tags: ['oriental', 'cálido', 'icónico', 'noche']
  },
  'praessia-16': {
    familia: 'Cítrico acuático',
    descripcion: 'Cítricos crujientes sobre un fondo limpio de almizcle. La frescura reducida a su expresión más honesta.',
    rationale: 'Esa honestidad sin adornos es tu forma de comunicar: clara, directa, sin necesidad de más.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Uso diario, oficina',
    notas: { salida: 'Limón, mandarina', corazon: 'Jazmín, geranio', fondo: 'Almizcle blanco, cedro' },
    tags: ['minimalista', 'fresco', 'diario', 'clásico']
  },
  'praessia-17': {
    familia: 'Aromático cítrico',
    descripcion: 'Notas rojas vibrantes y especias suaves con fondo amaderado. Energía sin perder su lado natural.',
    rationale: 'Su vitalidad directa combina con esa autenticidad tuya que no se ajusta a lo que se espera de ella.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, deporte',
    notas: { salida: 'Manzana roja, pimienta rosa', corazon: 'Canela, geranio', fondo: 'Cedro, almizcle' },
    tags: ['vital', 'especiado', 'deportivo', 'natural']
  },
  'praessia-18': {
    familia: 'Oriental amaderado',
    descripcion: 'Cuero, especias y ámbar en una composición clásica de gran carácter. Sofisticación que no pasa de moda.',
    rationale: 'Su elegancia envolvente es exactamente donde se cruzan tu criterio y tu calidez: refinado y cercano a la vez.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío',
    ocasion: 'Ocasiones formales, noche',
    notas: { salida: 'Bergamota, pimienta', corazon: 'Cuero, canela', fondo: 'Ámbar, vainilla, pachulí' },
    tags: ['clásico', 'cálido', 'sofisticado', 'noche']
  },
  'praessia-19': {
    familia: 'Aromático fresco',
    descripcion: 'Cítricos y notas verdes con un fondo amaderado ligero. Frescura clásica hecha para cualquier momento del día.',
    rationale: 'Tu energía natural y tu autenticidad encuentran aquí un reflejo simple y directo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Uso diario, versátil',
    notas: { salida: 'Bergamota, menta', corazon: 'Geranio, albahaca', fondo: 'Cedro, almizcle' },
    tags: ['fresco', 'clásico', 'diario', 'versátil']
  },
  'praessia-20': {
    familia: 'Floral frutal',
    descripcion: 'Rosa y pimienta rosa sobre un fondo amaderado sutil. Feminidad con un giro contemporáneo.',
    rationale: 'Ese equilibrio entre dulzura y precisión conecta con tu claridad natural para proyectarte.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido y templado',
    ocasion: 'Día a día, vida social',
    notas: { salida: 'Pimienta rosa, mandarina', corazon: 'Rosa, jazmín', fondo: 'Almizcle, cedro' },
    tags: ['floral', 'moderno', 'versátil', 'diario']
  },
  'praessia-21': {
    familia: 'Floral frutal',
    descripcion: 'Frutas tropicales y flores blancas sobre una base dulce y luminosa. Glamour sin filtros.',
    rationale: 'Su brillo espontáneo va de la mano con tu energía y tu forma clara de comunicar quién eres.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a noche, vida social',
    notas: { salida: 'Kiwi, melón, mandarina', corazon: 'Jazmín, gardenia', fondo: 'Almizcle, vainilla' },
    tags: ['afrutado', 'luminoso', 'glamour', 'social']
  },
  'praessia-22': {
    familia: 'Floral acuático',
    descripcion: 'Frescura floral limpia con un fondo amaderado discreto. Un clásico contemporáneo y fácil de llevar.',
    rationale: 'Su claridad natural encaja con tu forma de proyectar propósito sin necesidad de artificios.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Uso diario, oficina',
    notas: { salida: 'Bergamota, notas acuáticas', corazon: 'Jazmín, muguete', fondo: 'Almizcle, sándalo' },
    tags: ['fresco', 'floral', 'diario', 'clásico']
  },
  'praessia-23': {
    familia: 'Floral frutal',
    descripcion: 'Frambuesa y flores blancas sobre una base dulce y luminosa. Una fragancia hecha para el reflector.',
    rationale: 'Su brillo directo combina con tu claridad para mostrarte tal cual eres, sin necesidad de filtros.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Vida social, salidas',
    notas: { salida: 'Frambuesa, pera', corazon: 'Jazmín, flor de azahar', fondo: 'Almizcle, vainilla' },
    tags: ['afrutado', 'luminoso', 'social', 'moderno']
  },
  'praessia-24': {
    familia: 'Gourmand floral',
    descripcion: 'Algodón de azúcar y flores blancas en una composición dulce y cálida. Comodidad convertida en aroma.',
    rationale: 'Esa calidez envolvente es tu forma natural de hacer que la gente se sienta bienvenida.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Día a día, uso casual',
    notas: { salida: 'Bergamota, pera', corazon: 'Jazmín, algodón de azúcar', fondo: 'Almizcle, vainilla' },
    tags: ['gourmand', 'cálido', 'dulce', 'reconfortante']
  },
  'praessia-25': {
    familia: 'Floral gourmand',
    descripcion: 'Iris, praliné y vainilla en una composición elegante y golosa. Un clásico contemporáneo con alma cálida.',
    rationale: 'Su balance entre elegancia y dulzura refleja tu forma de generar confianza sin perder distinción.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Día a noche, versátil',
    notas: { salida: 'Pera, grosella negra', corazon: 'Iris, jazmín', fondo: 'Praliné, vainilla, pachulí' },
    tags: ['gourmand', 'elegante', 'cálido', 'versátil']
  },
  'praessia-26': {
    familia: 'Floral gourmand',
    descripcion: 'Pera y vainilla sobre una base de flor blanca. Dulzura ligera pensada para el día a día.',
    rationale: 'Su calidez sencilla se parece a la manera en que haces sentir bien a quienes te rodean.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido y templado',
    ocasion: 'Uso diario, casual',
    notas: { salida: 'Pera, mandarina', corazon: 'Jazmín, flor de azahar', fondo: 'Vainilla, almizcle' },
    tags: ['gourmand', 'ligero', 'cálido', 'diario']
  },
  'praessia-27': {
    familia: 'Aromático fresco',
    descripcion: 'Cítricos brillantes y notas marinas sobre un fondo amaderado limpio. Frescura moderna, sin excesos.',
    rationale: 'Su precisión fresca conecta con tu manera de comunicar mucho con muy poco.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Oficina, uso diario',
    notas: { salida: 'Bergamota, notas marinas', corazon: 'Salvia, romero', fondo: 'Cedro, almizcle' },
    tags: ['fresco', 'moderno', 'oficina', 'limpio']
  },
  'praessia-28': {
    familia: 'Aromático amaderado',
    descripcion: 'Menta y notas de tonka con un fondo amaderado vibrante. Confianza convertida en estela.',
    rationale: 'Su energía firme es la misma con la que tú entras a un espacio y lo transformas sin pedir permiso.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Vida social, salidas nocturnas',
    notas: { salida: 'Menta, limón, manzana', corazon: 'Ámbar, geranio', fondo: 'Haba tonka, cedro, vetiver' },
    tags: ['audaz', 'vibrante', 'social', 'moderno']
  },
  'praessia-29': {
    familia: 'Amaderado aromático',
    descripcion: 'Cítricos y madera de cedro en una composición precisa y minimalista. Una firma discreta, casi arquitectónica.',
    rationale: 'Su precisión y su claridad son el reflejo exacto de tu forma de comunicar con intención.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Oficina, versátil',
    notas: { salida: 'Toronja, menta', corazon: 'Jengibre, nuez moscada', fondo: 'Incienso, cedro, sándalo' },
    tags: ['minimalista', 'moderno', 'versátil', 'clásico']
  },
  'praessia-30': {
    familia: 'Afrutado amaderado',
    descripcion: 'Piña y abedul ahumado en un contraste inesperado entre dulzura y estructura. Distinción con carácter.',
    rationale: 'Ese cruce entre lo dulce y lo firme habla de tu criterio: eliges con precisión, nunca por impulso.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Ocasiones formales, versátil',
    notas: { salida: 'Piña, manzana, bergamota', corazon: 'Rosa, jazmín, pachulí', fondo: 'Abedul, almizcle, roble' },
    tags: ['distintivo', 'elegante', 'icónico', 'versátil']
  },
  'praessia-31': {
    familia: 'Aromático acuático',
    descripcion: 'Bergamota y notas verdes sobre un fondo mineral fresco. La montaña convertida en aroma.',
    rationale: 'Su frescura serena refleja tu criterio calmado: eliges lo esencial y lo sostienes con seguridad.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, exteriores',
    notas: { salida: 'Bergamota, notas verdes', corazon: 'Violeta, sándalo', fondo: 'Almizcle, ámbar' },
    tags: ['fresco', 'unisex', 'sereno', 'clásico']
  },
  'praessia-32': {
    familia: 'Oriental floral · Amethyst',
    descripcion: 'Pimienta rosa y bergamota se abren paso hacia un ramo de rosas turca y búlgara con jazmín, que desciende sobre una base de oud, ámbar y vainilla. Oscuro, floral y con un fondo casi animal.',
    rationale: 'Ese fondo de oud que solo se revela cuando alguien se acerca es justo tu tipo de magnetismo: privado, nunca exhibido.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Noche, ocasiones íntimas',
    notas: { salida: 'Pimienta rosa, bergamota', corazon: 'Rosa turca, rosa búlgara, jazmín', fondo: 'Oud, ámbar, vainilla' },
    tags: ['floral', 'oriental', 'íntimo', 'noche']
  },
  'praessia-33': {
    familia: 'Frutal amaderado',
    descripcion: 'Manzana y lichi crujientes se abren sobre un corazón de ciruela y jazmín, antes de asentarse en una base de musgo, vainilla y pachulí. Frutal a primera vista, con un fondo mucho más adulto de lo que promete.',
    rationale: 'Ese contraste entre la fruta luminosa de la salida y la profundidad del fondo es tu manera de sorprender: primero atraes con ligereza, después te quedas por sustancia.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido y templado',
    ocasion: 'Día a día, vida social',
    notas: { salida: 'Manzana, lichi, rosa', corazon: 'Ciruela, jazmín', fondo: 'Musgo, vainilla, pachulí' },
    tags: ['frutal', 'unisex', 'luminoso', 'versátil']
  },
  'praessia-34': {
    familia: 'Amaderado seco',
    descripcion: 'Madera de sándalo pura, casi textil, en una composición minimalista y de culto. Sensorial sin ser evidente.',
    rationale: 'Su forma poco convencional de entender lo amaderado combina con tu manera de ver lo que otros no ven.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Uso diario, versátil',
    notas: { salida: 'Notas especiadas', corazon: 'Sándalo, cedro', fondo: 'Almizcle, ámbar' },
    tags: ['unisex', 'minimalista', 'culto', 'amaderado']
  },
  'praessia-35': {
    familia: 'Cítrico especiado',
    descripcion: 'Mandarina brillante sobre un fondo especiado suave. Frescura con un giro cálido y confiado.',
    rationale: 'Ese equilibrio entre energía y calidez es tu forma natural de comunicar con claridad.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, uso versátil',
    notas: { salida: 'Mandarina, bergamota', corazon: 'Cardamomo, canela', fondo: 'Almizcle, ámbar' },
    tags: ['cítrico', 'especiado', 'diario', 'versátil']
  },
  'praessia-36': {
    familia: 'Gourmand dulce',
    descripcion: 'Pistacho y gelato en una composición golosa y contemporánea. Dulzura sin culpa, pensada para disfrutar.',
    rationale: 'Su calidez golosa es la misma con la que tú envuelves a quienes tienes cerca.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Día a día, uso casual',
    notas: { salida: 'Pistacho, bergamota', corazon: 'Praliné, flor de azahar', fondo: 'Vainilla, almizcle, sándalo' },
    tags: ['gourmand', 'dulce', 'cálido', 'casual']
  },
  'praessia-37': {
    familia: 'Oriental afrutado',
    descripcion: 'Frutas rojas maduras y vainilla sobre un fondo ambarado profundo. Sensualidad cálida y envolvente.',
    rationale: 'Esa dulzura profunda que se queda cerca de la piel es justo tu tipo de cercanía.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Noche, ocasiones especiales',
    notas: { salida: 'Frutos rojos, mandarina', corazon: 'Flor de azahar, rosa', fondo: 'Vainilla, ámbar, almizcle' },
    tags: ['oriental', 'cálido', 'sensual', 'noche']
  },
  'praessia-38': {
    familia: 'Oriental vainillado',
    descripcion: 'Bergamota y notas verdes que se abren hacia un corazón jugoso de melón y piña, sostenido por ámbar dorado y cerrado en una base de vainilla, musgo y almizcle. Golosina y opulencia en la misma fórmula.',
    rationale: 'Esa calidez dorada que se despliega poco a poco refleja el tipo de magnetismo que entra a un lugar y, sin prisa, lo cambia contigo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Noche, ocasiones especiales',
    notas: { salida: 'Bergamota, notas verdes', corazon: 'Melón, piña, ámbar', fondo: 'Maderas, vainilla, almizcle' },
    tags: ['oriental', 'unisex', 'lujoso', 'dorado']
  },
  'praessia-39': {
    familia: 'Oriental amaderado',
    descripcion: 'Azafrán y bergamota se entrelazan con oud y rosa búlgara, hasta cerrar en una base de haba tonka, azúcar de caña, ámbar y almizcle blanco. Especiado, floral y con un fondo casi gourmand.',
    rationale: 'Su calidez envolvente y su fondo goloso hacen de esta fragancia un punto de encuentro: el tipo de magnetismo que reúne a la gente a tu alrededor.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío y templado',
    ocasion: 'Noche, reuniones sociales',
    notas: { salida: 'Azafrán, bergamota', corazon: 'Oud, rosa búlgara', fondo: 'Haba tonka, ámbar, almizcle blanco' },
    tags: ['oriental', 'unisex', 'cálido', 'social']
  },
  'praessia-40': {
    familia: 'Oriental especiado',
    descripcion: 'Pimienta negra, tabaco y piña marcan una salida inesperada, que se asienta en un corazón de patchouli, café e iris, y cierra sobre una base de vainilla, ámbar, maderas secas y bálsamo. Especiado, terroso y con carácter propio.',
    rationale: 'Ese contraste entre lo especiado y lo terroso es tu manera de imponerte sin levantar la voz: la fuerza está en el fondo, no en el gesto.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío y templado',
    ocasion: 'Noche, ocasiones especiales',
    notas: { salida: 'Pimienta negra, tabaco, piña', corazon: 'Patchouli, café, iris', fondo: 'Vainilla, ámbar, maderas secas' },
    tags: ['oriental', 'especiado', 'intenso', 'noche']
  },
  'praessia-41': {
    familia: 'Gourmand oriental',
    descripcion: 'Canela, nuez moscada y bergamota se abren hacia un corazón de dátiles, praliné y tuberosa, hasta cerrar sobre una base de vainilla, haba tonka, benjuí y mirra. Un abrazo especiado, dulce y profundamente cálido.',
    rationale: 'Su calidez casi golosa es el reflejo exacto de tu forma de envolver a quienes se acercan a ti, sin que tengan que pedirlo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío y templado',
    ocasion: 'Noche, reuniones íntimas',
    notas: { salida: 'Canela, nuez moscada, bergamota', corazon: 'Dátiles, praliné, tuberosa', fondo: 'Vainilla, haba tonka, benjuí' },
    tags: ['gourmand', 'unisex', 'cálido', 'intenso']
  },
  'praessia-42': {
    familia: 'Floral acuático',
    descripcion: 'Menta, jazmín y grosella negra sobre un fondo ligero. La luz del mediterráneo convertida en aroma.',
    rationale: 'Su energía luminosa y natural refleja esa vitalidad que activa todo lo que tocas.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, exteriores',
    notas: { salida: 'Menta, limón, grosella negra', corazon: 'Jazmín, peonía', fondo: 'Almizcle blanco, cedro' },
    tags: ['fresco', 'floral', 'luminoso', 'diario']
  },
  'praessia-43': {
    familia: 'Floral frutal',
    descripcion: 'Granada y flor de loto sobre un fondo de almizcle luminoso. Frescura floral con carácter.',
    rationale: 'Su brillo natural es el mismo con el que tú activas los espacios sin proponértelo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, versátil',
    notas: { salida: 'Granada, notas acuáticas', corazon: 'Peonía, loto', fondo: 'Almizcle, caoba' },
    tags: ['floral', 'fresco', 'luminoso', 'diario']
  },
  'praessia-44': {
    familia: 'Floral gourmand',
    descripcion: 'Fresa silvestre y jazmín sobre un fondo cálido de almizcle. Ternura y frescura conviviendo en armonía.',
    rationale: 'Esa calidez cercana es tu forma de hacer que quienes te rodean se sientan bienvenidos de verdad.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado',
    ocasion: 'Día a día, uso casual',
    notas: { salida: 'Fresa silvestre, pera', corazon: 'Jazmín, magnolia', fondo: 'Almizcle, sándalo' },
    tags: ['floral', 'cálido', 'tierno', 'casual']
  },
  'praessia-45': {
    familia: 'Floral amaderado',
    descripcion: 'Notas doradas de flor blanca y madera cálida, en una composición luminosa de gran presencia.',
    rationale: 'Ese brillo que se impone con seguridad es tu manera natural de cambiar un lugar con solo entrar.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Día a noche, versátil',
    notas: { salida: 'Bergamota, azafrán', corazon: 'Jazmín, ámbar', fondo: 'Sándalo, almizcle, vainilla' },
    tags: ['floral', 'dorado', 'audaz', 'versátil']
  },
  'praessia-46': {
    familia: 'Floral aldehídico',
    descripcion: 'Un clásico floral estructurado, de aldehídos luminosos y fondo amaderado. Elegancia que no pasa de moda.',
    rationale: 'Su permanencia y su carácter atemporal son exactamente tu manera de trascender las tendencias.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Ocasiones formales, día a noche',
    notas: { salida: 'Aldehídos, bergamota', corazon: 'Rosa, jazmín, iris', fondo: 'Sándalo, almizcle, vainilla' },
    tags: ['clásico', 'elegante', 'atemporal', 'formal']
  },
  'praessia-47': {
    familia: 'Floral chipre',
    descripcion: 'Cítricos ligeros sobre una base chipre discreta. La versión más fresca y sobria de la elegancia floral.',
    rationale: 'Su sobriedad luminosa es tu forma de comunicar refinamiento sin necesidad de subrayarlo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, oficina',
    notas: { salida: 'Limón, cítricos', corazon: 'Jazmín, rosa', fondo: 'Pachulí, ámbar' },
    tags: ['fresco', 'elegante', 'sobrio', 'diario']
  },
  'praessia-48': {
    familia: 'Chipre oriental',
    descripcion: 'Naranja, pachulí y vainilla en una composición sofisticada e inconfundible. Un clásico contemporáneo de gran carácter.',
    rationale: 'Esa profundidad que se revela solo de cerca es tu tipo exacto de magnetismo: privado y difícil de olvidar.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Ocasiones formales, noche',
    notas: { salida: 'Naranja, bergamota', corazon: 'Jazmín, rosa', fondo: 'Pachulí, vainilla, vetiver' },
    tags: ['icónico', 'sofisticado', 'sensual', 'elegante']
  },
  'praessia-49': {
    familia: 'Floral oriental',
    descripcion: 'Bergamota y pomelo dan paso a un corazón floral de iris, rosa búlgara y praliné, que se asienta sobre una base de cuero, vainilla y pachulí. Frescura al inicio, sofisticación de piel al final.',
    rationale: 'Ese giro de lo fresco a lo envolvente es tu manera de generar cercanía real: primero das confianza, después te quedas.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado',
    ocasion: 'Día a día, ocasiones formales',
    notas: { salida: 'Bergamota, pomelo', corazon: 'Iris, rosa búlgara, praliné', fondo: 'Cuero, vainilla, pachulí' },
    tags: ['floral', 'elegante', 'sofisticado', 'versátil']
  },
  'praessia-50': {
    familia: 'Cítrico floral',
    descripcion: 'Cítricos frescos sobre un fondo floral ligero. La versión más natural y despreocupada de la frescura diaria.',
    rationale: 'Su ligereza natural refleja tu energía libre, la que no necesita ajustarse a nada para sentirse tuya.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Uso diario, versátil',
    notas: { salida: 'Naranja, mandarina', corazon: 'Flor de azahar, jazmín', fondo: 'Almizcle, cedro' },
    tags: ['fresco', 'natural', 'diario', 'ligero']
  },
  'praessia-51': {
    familia: 'Gourmand frutal',
    descripcion: 'Manzana roja y algodón de azúcar en una composición dulce y juguetona. Fantasía convertida en aroma.',
    rationale: 'Su dulzura envolvente es la misma con la que tú acoges a quienes tienes cerca, sin pedirlo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Uso casual, día a día',
    notas: { salida: 'Manzana roja, kiwi', corazon: 'Algodón de azúcar, orquídea', fondo: 'Vainilla, almizcle, caramelo' },
    tags: ['gourmand', 'dulce', 'juguetón', 'casual']
  },
  'praessia-52': {
    familia: 'Ámbar amaderado',
    descripcion: 'Fruta de la pasión, canela y rosa se abren hacia un corazón de maderas ahumadas y bálsamos orientales, hasta cerrar en una base de sándalo, tabaco, vainilla y almizcle. Exótico, cálido y con un punto ahumado inesperado.',
    rationale: 'Ese cruce entre lo frutal y lo ahumado es tu forma de sorprender sin esfuerzo: das calidez, pero nunca de la manera obvia.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Uso diario, versátil',
    notas: { salida: 'Fruta de la pasión, canela, rosa', corazon: 'Maderas ahumadas, cedro, cachemira', fondo: 'Sándalo, tabaco, vainilla' },
    tags: ['ámbar', 'unisex', 'cálido', 'exótico']
  },
  'praessia-53': {
    familia: 'Floral frutal',
    descripcion: 'Fruta de la pasión y flores blancas en una composición glamorosa y luminosa. Hecha para brillar.',
    rationale: 'Ese magnetismo espontáneo es tu manera de hacer que el ambiente cambie contigo sin proponértelo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Vida social, salidas',
    notas: { salida: 'Fruta de la pasión, mandarina', corazon: 'Magnolia, jazmín', fondo: 'Almizcle, vainilla' },
    tags: ['afrutado', 'glamour', 'social', 'audaz']
  },
  'praessia-54': {
    familia: 'Cítrico afrutado',
    descripcion: 'Manzana siciliana y cedro fresco en una composición mediterránea, luminosa y despreocupada.',
    rationale: 'Su frescura auténtica y natural conecta directamente con tu forma libre de mostrarte.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, exteriores',
    notas: { salida: 'Manzana siciliana, cedrón', corazon: 'Jazmín, bambú', fondo: 'Cedro blanco, almizcle' },
    tags: ['fresco', 'natural', 'diario', 'icónico']
  },
  'praessia-55': {
    familia: 'Gourmand dulce',
    descripcion: 'Chicle rosa y frutos rojos en una composición dulce, lúdica y sin pretensiones. Nostalgia convertida en aroma.',
    rationale: 'Su espíritu juguetón y original es tu forma de ver el mundo distinto, sin seguir ningún guion.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Uso casual, día a día',
    notas: { salida: 'Frambuesa, mandarina', corazon: 'Chicle rosa, jazmín', fondo: 'Vainilla, almizcle' },
    tags: ['gourmand', 'lúdico', 'dulce', 'original']
  },
  'praessia-56': {
    familia: 'Cítrico afrutado',
    descripcion: 'Naranja sanguina y flores blancas en una composición alegre y despreocupada. Frescura con sentido del humor.',
    rationale: 'Su espontaneidad divertida es el mismo lenguaje con el que tú ves posibilidades donde otros ven límites.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, uso casual',
    notas: { salida: 'Naranja sanguina, granada', corazon: 'Flor de azahar, jazmín', fondo: 'Almizcle, cedro' },
    tags: ['cítrico', 'alegre', 'original', 'casual']
  },
  'praessia-57': {
    familia: 'Gourmand floral',
    descripcion: 'Un acorde de rosa lechosa se abre hacia un corazón de almendra y merengue, y desciende sobre una base de sándalo, vainilla y almizcle. Delicado como un postre, elegante como una flor recién cortada.',
    rationale: 'Esa dulzura que nunca empalaga refleja tu criterio calmado: eliges con gusto, nunca por impulso.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado',
    ocasion: 'Día a día, ocasiones formales',
    notas: { salida: 'Rosa lechosa', corazon: 'Almendra, merengue', fondo: 'Sándalo, vainilla, almizcle' },
    tags: ['floral', 'gourmand', 'delicado', 'elegante']
  },
  'praessia-58': {
    familia: 'Afrutado floral',
    descripcion: 'Frutos rojos frescos sobre un fondo floral cálido. Una fragancia de verano hecha para disfrutar.',
    rationale: 'Su energía luminosa y cálida a la vez refleja el equilibrio entre tu vitalidad y tu calidez natural.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, verano',
    notas: { salida: 'Frutos rojos, mandarina', corazon: 'Flor de azahar, jazmín', fondo: 'Almizcle, vainilla' },
    tags: ['afrutado', 'veraniego', 'fresco', 'cálido']
  },
  'praessia-59': {
    familia: 'Floral musgoso',
    descripcion: 'Bergamota, mandarina y durazno blanco abren paso a un corazón de azahar y flores blancas, que se asienta sobre una base de almizcle, akigalawood y madera clara. Luminoso, aéreo y sofisticado sin esfuerzo.',
    rationale: 'Esa suavidad que igual se nota es tu tipo exacto de presencia reservada: la que no necesita imponerse para dejar huella.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Día a día, ocasiones formales',
    notas: { salida: 'Bergamota, mandarina, durazno blanco', corazon: 'Azahar, flores blancas', fondo: 'Almizcle, akigalawood, madera' },
    tags: ['floral', 'lujoso', 'luminoso', 'elegante']
  },
  'praessia-60': {
    familia: 'Amaderado especiado',
    descripcion: 'Mandarina, violeta y limón se abren con energía hacia un corazón especiado de pimienta negra y azafrán, que cierra sobre una base de haba tonka, cuero y cedro. Fresco al inicio, magnético al final.',
    rationale: 'Ese contraste entre la chispa inicial y la fuerza del fondo es la misma con la que tú entras a un espacio: primero energía, después dominio.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Noche, vida social',
    notas: { salida: 'Mandarina, violeta, limón', corazon: 'Pimienta negra, azafrán', fondo: 'Haba tonka, cuero, cedro' },
    tags: ['audaz', 'especiado', 'nocturno', 'intenso']
  },
  'praessia-61': {
    familia: 'Cítrico aromático',
    descripcion: 'Mandarina, jengibre, bergamota y menta se abren con frescor hacia un corazón de pera y azahar, y cierran sobre una base de almizcle, ámbar y cedro. Energético al inicio, elegante en el fondo.',
    rationale: 'Ese giro de la chispa inicial a la calidez del fondo combina con tu manera de ver posibilidades donde otros solo ven un punto de partida.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Uso diario, versátil',
    notas: { salida: 'Mandarina, jengibre, bergamota, menta', corazon: 'Pera, azahar', fondo: 'Almizcle, ámbar, cedro' },
    tags: ['cítrico', 'unisex', 'original', 'versátil']
  },
  'praessia-62': {
    familia: 'Aromático especiado',
    descripcion: 'Pimienta blanca, bergamota y pimienta rosa marcan una salida vibrante, que se asienta en un corazón de maderas y cierra sobre una base de haba tonka y cacao. Fresco, especiado y con un fondo goloso inesperado.',
    rationale: 'Ese contraste sin filtros entre lo picante y lo dulce es tu forma natural de liderar: cuestionas las convenciones porque las entiendes de verdad.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Noche, ocasiones especiales',
    notas: { salida: 'Pimienta blanca, bergamota, pimienta rosa', corazon: 'Maderas, salvia', fondo: 'Haba tonka, cacao' },
    tags: ['audaz', 'especiado', 'moderno', 'noche']
  },
  'praessia-63': {
    familia: 'Aromático cítrico',
    descripcion: 'Cítricos suaves y notas acuáticas sobre un fondo amaderado ligero. Frescura fácil de llevar todos los días.',
    rationale: 'Su naturalidad simple refleja tu forma de vivir con autenticidad, sin necesidad de complicarte.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Uso diario, casual',
    notas: { salida: 'Limón, mandarina', corazon: 'Notas acuáticas, geranio', fondo: 'Almizcle, cedro' },
    tags: ['fresco', 'natural', 'diario', 'ligero']
  },
  'praessia-64': {
    familia: 'Aromático fougère',
    descripcion: 'Lavanda y cuero en una estructura clásica y disciplinada. Tradición masculina en su forma más pura.',
    rationale: 'Su estructura tradicional es exactamente tu manera de proyectar autoridad sin necesitar esfuerzo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Oficina, ocasiones formales',
    notas: { salida: 'Bergamota, lavanda', corazon: 'Geranio, salvia', fondo: 'Cuero, cedro, almizcle' },
    tags: ['clásico', 'formal', 'atemporal', 'elegante']
  },
  'praessia-65': {
    familia: 'Aromático fougère',
    descripcion: 'Romero, menta y mandarina se abren con frescor mediterráneo, hacia un corazón de lavanda, nuez moscada y geranio, y cierran sobre una base de cedro, sándalo y musgo de roble. Clásico, marino y tradicional en el mejor sentido.',
    rationale: 'Esa pulcritud tradicional, casi de costa francesa, refleja tu criterio calmado y tu gusto por lo que resiste el paso del tiempo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido y templado',
    ocasion: 'Oficina, uso diario',
    notas: { salida: 'Romero, menta, mandarina', corazon: 'Lavanda, nuez moscada, geranio', fondo: 'Cedro, sándalo, musgo de roble' },
    tags: ['clásico', 'marino', 'elegante', 'diario']
  },
  'praessia-66': {
    familia: 'Ámbar floral',
    descripcion: 'Azafrán luminoso abre paso a un corazón de jazmín, que se asienta sobre una base de ámbar gris, almizcle y cedro blanco. Minimalista en su pirámide, pero de una intensidad que se siente desde lejos.',
    rationale: 'Esa profundidad que se revela de cerca, sin necesitar más de tres notas para hacerlo, es tu tipo exacto de magnetismo: privado y difícil de olvidar.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Noche, ocasiones especiales',
    notas: { salida: 'Azafrán', corazon: 'Jazmín', fondo: 'Ámbar gris, almizcle, cedro blanco' },
    tags: ['oriental', 'unisex', 'minimalista', 'intenso']
  },
  'praessia-67': {
    familia: 'Ambarado floral',
    descripcion: 'Azafrán y jazmín sobre una base de ámbar gris luminoso. Una fragancia icónica, reconocible desde la distancia.',
    rationale: 'Ese magnetismo que entra a un lugar y lo cambia contigo es exactamente tu forma pública de presencia.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Noche, ocasiones de alto perfil',
    notas: { salida: 'Azafrán, manzana', corazon: 'Jazmín, cedro', fondo: 'Ámbar gris, almizcle' },
    tags: ['icónico', 'unisex', 'lujoso', 'magnético']
  },
  'praessia-68': {
    familia: 'Ámbar gourmand',
    descripcion: 'Un caramelo luminoso abre la fragancia, que se ablanda en un corazón de cumarina y miel, y se asienta sobre una base de vainilla y almizcle blanco. Simple en su pirámide, adictivo en la piel.',
    rationale: 'Esa calidez que envuelve sin pedirlo, construida con apenas cuatro notas, es tu forma más pura de hacer sentir bien a quienes te rodean.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Día a día, uso íntimo',
    notas: { salida: 'Caramelo', corazon: 'Cumarina, miel', fondo: 'Vainilla, almizcle blanco' },
    tags: ['gourmand', 'unisex', 'reconfortante', 'cálido']
  },
  'praessia-69': {
    familia: 'Gourmand frutal',
    descripcion: 'Plátano y dulce de leche se abren en una explosión golosa, que se ablanda en un corazón de crema batida y vainilla, y cierra sobre una base de praliné, galleta y almizcle. Postre convertido en fragancia, sin disculparse por ello.',
    rationale: 'Su dulzura sin filtros es tu forma de ver el mundo distinto, sin seguir ningún guion ni pedir permiso para disfrutar.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Uso casual, día a día',
    notas: { salida: 'Plátano, dulce de leche', corazon: 'Crema batida, vainilla', fondo: 'Praliné, galleta, almizcle' },
    tags: ['gourmand', 'unisex', 'original', 'dulce']
  },
  'praessia-70': {
    familia: 'Gourmand nuez',
    descripcion: 'Pistacho tostado y crema de pistacho abren la fragancia, que se despliega en un corazón de crema batida, coco y cacao, y cierra sobre una base de leche, vainilla y almizcle. Untuoso, tostado y reconfortante.',
    rationale: 'Su originalidad golosa, poco convencional en perfumería, refleja tu capacidad de conectar puntos que otros ni siquiera ven.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Uso casual, nicho',
    notas: { salida: 'Pistacho tostado, crema de pistacho', corazon: 'Crema batida, coco, cacao', fondo: 'Leche, vainilla, almizcle' },
    tags: ['gourmand', 'unisex', 'original', 'untuoso']
  },
  'praessia-71': {
    familia: 'Oriental frutal',
    descripcion: 'Fruta de la pasión, azafrán y rosa turca se abren en un contraste tropical, que se asienta en un corazón de oud y patchouli, y cierra sobre una base de cuero, ámbar, vainilla y akigalawood. Exótico y adulto a la vez.',
    rationale: 'Ese cruce inesperado entre dulzura tropical y profundidad de oud es tu forma particular de ver el mundo: siempre distinta, nunca previsible.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Uso nicho, ocasiones especiales',
    notas: { salida: 'Fruta de la pasión, azafrán, rosa turca', corazon: 'Oud, patchouli, benjuí', fondo: 'Cuero, ámbar, vainilla' },
    tags: ['nicho', 'unisex', 'original', 'exótico']
  },
  'praessia-72': {
    familia: 'Floral oriental',
    descripcion: 'Tuberosa y especias cálidas sobre un fondo ambarado teatral. Glamour con un guiño juguetón.',
    rationale: 'Ese carácter entre íntimo y original combina con tu manera de dejarte ver solo de cerca, a tu manera.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Noche, ocasiones especiales',
    notas: { salida: 'Canela, mandarina', corazon: 'Tuberosa, jazmín', fondo: 'Ámbar, almizcle, vainilla' },
    tags: ['oriental', 'teatral', 'original', 'noche']
  },
  'praessia-73': {
    familia: 'Cítrico gourmand',
    descripcion: 'Cítricos frescos con un toque goloso de fondo. Energía ligera para el día a día.',
    rationale: 'Su frescura directa refleja tu vitalidad natural, la que se mueve sin pedir permiso.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Uso diario, casual',
    notas: { salida: 'Bergamota, mandarina', corazon: 'Jazmín, caramelo', fondo: 'Almizcle, vainilla' },
    tags: ['fresco', 'gourmand', 'diario', 'ligero']
  },
  'praessia-74': {
    familia: 'Oriental gourmand',
    descripcion: 'Lavanda y vainilla intensificadas: la versión más golosa y magnética de un clásico ya icónico.',
    rationale: 'Esa dulzura envolvente que se queda cerca es tu forma de generar cercanía sin dejar de ser intenso.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío',
    ocasion: 'Noche, ocasiones especiales',
    notas: { salida: 'Lavanda, mandarina', corazon: 'Vainilla, cacao', fondo: 'Haba tonka, ámbar, pachulí' },
    tags: ['oriental', 'intenso', 'cálido', 'noche']
  },
  'praessia-75': {
    familia: 'Aromático fresco',
    descripcion: 'Cítricos y notas verdes sobre un fondo amaderado sobrio. Un clásico atemporal, hecho para durar generaciones.',
    rationale: 'Su permanencia serena es tu forma de proyectar autoridad sin necesitar volumen ni urgencia.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Oficina, uso diario',
    notas: { salida: 'Mandarina, salvia', corazon: 'Geranio, lavanda', fondo: 'Sándalo, almizcle, ámbar' },
    tags: ['clásico', 'atemporal', 'elegante', 'diario']
  },
  'praessia-76': {
    familia: 'Aromático fougère',
    descripcion: 'Lavanda y menta con un fondo dulce de vainilla y flor de azahar. El mismo contraste icónico, en su versión más fresca.',
    rationale: 'Ese equilibrio entre frescura y dulzura profunda refleja tu forma de generar cercanía desde la intensidad.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido y templado',
    ocasion: 'Uso diario, versátil',
    notas: { salida: 'Menta, lavanda', corazon: 'Flor de azahar, cardamomo', fondo: 'Vainilla, ámbar, cedro' },
    tags: ['fresco', 'oriental', 'versátil', 'cálido']
  },
  'praessia-77': {
    familia: 'Floral frutal',
    descripcion: 'Frutas rojas y flores blancas sobre un fondo cálido de almizcle. Seducción ligera, fácil de llevar.',
    rationale: 'Su energía cálida y directa refleja el equilibrio entre tu vitalidad y tu capacidad de atraer sin esfuerzo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, vida social',
    notas: { salida: 'Frutos rojos, mandarina', corazon: 'Jazmín, flor de azahar', fondo: 'Almizcle, vainilla' },
    tags: ['afrutado', 'seductor', 'social', 'ligero']
  },
  'praessia-78': {
    familia: 'Gourmand tropical',
    descripcion: 'Coco y vainilla en una composición cálida y veraniega. Playa y calma convertidas en aroma.',
    rationale: 'Su calidez tropical es tu forma natural de generar bienestar a tu alrededor, sin esfuerzo aparente.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, verano',
    notas: { salida: 'Coco, piña', corazon: 'Flor de azahar, jazmín', fondo: 'Vainilla, almizcle, sándalo' },
    tags: ['gourmand', 'tropical', 'cálido', 'veraniego']
  },
  'praessia-79': {
    familia: 'Floral acuático',
    descripcion: 'Notas cristalinas y flores blancas sobre un fondo limpio y luminoso. Frescura precisa, casi transparente.',
    rationale: 'Su claridad luminosa refleja tu vitalidad natural combinada con un criterio claro y sin rodeos.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, oficina',
    notas: { salida: 'Notas acuáticas, bergamota', corazon: 'Peonía, jazmín', fondo: 'Almizcle, cedro' },
    tags: ['fresco', 'floral', 'luminoso', 'diario']
  },
  'praessia-80': {
    familia: 'Floral frutal',
    descripcion: 'Frutas doradas y flores blancas sobre una base cálida y luminosa. Glamour heredero de un ícono pop.',
    rationale: 'Su brillo directo y confiado combina con tu energía y tu capacidad de atraer sin proponértelo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Vida social, salidas',
    notas: { salida: 'Mango, mandarina', corazon: 'Jazmín, gardenia', fondo: 'Almizcle, vainilla' },
    tags: ['afrutado', 'glamour', 'social', 'audaz']
  },
  'praessia-81': {
    familia: 'Floral gourmand',
    descripcion: 'Pomelo y vainilla sobre un fondo cálido de almizcle y toffee. Romance juvenil convertido en aroma.',
    rationale: 'Su calidez cercana refleja tu don para generar cercanía y confianza sin necesidad de pedirla.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado',
    ocasion: 'Día a día, uso casual',
    notas: { salida: 'Pomelo, mandarina', corazon: 'Jazmín, flor de azahar', fondo: 'Vainilla, almizcle, toffee' },
    tags: ['floral', 'gourmand', 'cálido', 'romántico']
  },
  'praessia-82': {
    familia: 'Floral acuático',
    descripcion: 'Coral y flor de loto sobre una base luminosa y fresca. Un clásico contemporáneo de aire mediterráneo.',
    rationale: 'Su frescura clara y directa refleja tu manera de comunicar propósito sin necesidad de ornamentos.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, versátil',
    notas: { salida: 'Mandarina, notas acuáticas', corazon: 'Loto, jazmín', fondo: 'Almizcle, cedro' },
    tags: ['fresco', 'floral', 'luminoso', 'diario']
  },
  'praessia-83': {
    familia: 'Cítrico floral',
    descripcion: 'Cítricos brillantes con un corazón floral ligero. Frescura despreocupada, ideal para el uso diario.',
    rationale: 'Su energía natural y directa refleja tu vitalidad genuina, la que activa lo que toca sin esfuerzo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Uso diario, casual',
    notas: { salida: 'Bergamota, mandarina', corazon: 'Jazmín, muguete', fondo: 'Almizcle, cedro' },
    tags: ['fresco', 'floral', 'diario', 'ligero']
  },
  'praessia-84': {
    familia: 'Oriental especiado',
    descripcion: 'Especias cálidas y flor de azahar sobre un fondo ambarado firme. Una fragancia hecha para provocar.',
    rationale: 'Su intensidad social y directa refleja tu capacidad de entrar a un espacio y transformarlo sin pedirlo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío y templado',
    ocasion: 'Noche, vida social',
    notas: { salida: 'Mandarina, especias', corazon: 'Flor de azahar, jazmín', fondo: 'Ámbar, almizcle, vainilla' },
    tags: ['oriental', 'audaz', 'social', 'noche']
  },
  'praessia-85': {
    familia: 'Acuático aromático',
    descripcion: 'Notas marinas frescas sobre una base amaderada limpia. El viaje convertido en aroma, ligero y directo.',
    rationale: 'Su frescura libre y natural refleja tu manera de moverte por el mundo sin ataduras.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a día, exteriores',
    notas: { salida: 'Notas marinas, mandarina', corazon: 'Lavanda, geranio', fondo: 'Cedro, almizcle' },
    tags: ['fresco', 'acuático', 'natural', 'diario']
  },
  'praessia-86': {
    familia: 'Aromático amaderado',
    descripcion: 'Bergamota radiante sobre una base amaderada mineral. Frescura con una estela imposible de ignorar.',
    rationale: 'Su presencia amplia y confiada es exactamente tu forma de entrar a un espacio y cambiarlo contigo.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Todo clima',
    ocasion: 'Uso diario, versátil',
    notas: { salida: 'Bergamota, pimienta de Sichuan', corazon: 'Lavanda, geranio', fondo: 'Ambroxan, cedro, vetiver' },
    tags: ['audaz', 'moderno', 'versátil', 'icónico']
  },
  'praessia-87': {
    familia: 'Oriental gourmand',
    descripcion: 'Chocolate, vainilla y pachulí en una composición dulce e intensa, hecha para quienes no buscan pasar desapercibidos.',
    rationale: 'Su profundidad golosa e intensa es tu tipo exacto de magnetismo: el que se revela de cerca y se queda en la memoria.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío y templado',
    ocasion: 'Noche, ocasiones especiales',
    notas: { salida: 'Mandarina, menta', corazon: 'Praliné, miel', fondo: 'Vainilla, chocolate, pachulí' },
    tags: ['oriental', 'gourmand', 'intenso', 'noche']
  },
  'praessia-88': {
    familia: 'Acuático amaderado',
    descripcion: 'Notas acuáticas minimalistas sobre una base amaderada precisa. Frescura conceptual, casi arquitectónica.',
    rationale: 'Su claridad funcional refleja tu vitalidad tranquila, siempre precisa y sin adornos innecesarios.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Oficina, uso diario',
    notas: { salida: 'Notas acuáticas, yuzu', corazon: 'Loto, geranio', fondo: 'Cedro, almizcle, ámbar' },
    tags: ['fresco', 'minimalista', 'oficina', 'moderno']
  },
  'praessia-89': {
    familia: 'Cítrico afrutado',
    descripcion: 'Naranja, bergamota y limón se abren con brillo hacia un corazón afrutado, que se asienta sobre una base de vainilla, ámbar y almizcle blanco. Luminoso al inicio, cálido y confiado en el fondo.',
    rationale: 'Ese equilibrio entre calidez y magnetismo es la forma en que generas cercanía sin perder autoridad: entras con luz, te quedas con presencia.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Cálido',
    ocasion: 'Día a noche, versátil',
    notas: { salida: 'Naranja, bergamota, limón', corazon: 'Notas afrutadas', fondo: 'Vainilla, ámbar, almizcle blanco' },
    tags: ['cítrico', 'confiado', 'versátil', 'luminoso']
  },
  'praessia-90': {
    familia: 'Gourmand oriental',
    descripcion: 'Dátil y vainilla en una versión más dulce y golosa de un clásico ambarado. Calidez que se queda en la memoria.',
    rationale: 'Su dulzura profunda refleja tu manera de generar cercanía real, incluso desde la intensidad.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Frío y templado',
    ocasion: 'Noche, reuniones íntimas',
    notas: { salida: 'Dátil, mandarina', corazon: 'Caramelo, cardamomo', fondo: 'Vainilla, ámbar, almizcle' },
    tags: ['gourmand', 'cálido', 'íntimo', 'dulce']
  },
  'praessia-91': {
    familia: 'Gourmand floral',
    descripcion: 'Caramelo y flores blancas sobre un fondo cálido de almizcle y vainilla. Dulzura envolvente hecha para acompañar.',
    rationale: 'Esa calidez que se revela de a poco es tu manera particular de generar cercanía y confianza genuina.',
    concentracion: 'Extrait de Parfum',
    presentacion: '100 ml',
    clima: 'Templado y frío',
    ocasion: 'Día a día, uso íntimo',
    notas: { salida: 'Caramelo, bergamota', corazon: 'Flor de azahar, jazmín', fondo: 'Vainilla, almizcle, sándalo' },
    tags: ['gourmand', 'cálido', 'íntimo', 'dulce']
  }
};

/* ── Labels de display para las barras de afinidad ─────────── */
const PRESENCIA_LABELS_MAP = {
  fresco_vital: 'Fresca Vital',
  libre_natural: 'Libre Natural',
  elegante_clasico: 'Elegante Clásico',
  esencial_moderno: 'Esencial Moderno',
  sensual_profundo: 'Sensual Profundo',
  calido_envolvente: 'Cálido Envolvente',
  audaz_magnetico: 'Audaz Magnético',
  creativo_alternativo: 'Creativo Alt.'
};

/* Exponer PERFUMES_DETAIL globalmente para el motor de PDF */
window.PERFUMES_DETAIL = PERFUMES_DETAIL;