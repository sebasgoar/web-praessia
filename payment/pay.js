/* ============================================================
   Praessia — pay.js
   Lógica de la página de checkout (pay.html):
   · Resumen de pedido (lee el carrito de tienda.js)
   · Departamento → Ciudad en cascada (32 departamentos de Colombia)
   · Sección de facturación condicional
   · Guardar datos del cliente (opt-in) para la próxima compra
   · Validación de formulario
   · Construcción del payload y apertura del checkout de Bold
   ============================================================ */

'use strict';

/* ── CONFIGURACIÓN ───────────────────────────────────────────── */
const PAY_CONFIG = {
  shippingCost:     14000,
  shippingFormatted: '$14.000',
  currency:         'COP',
  boldIntegration:  'TU_INTEGRATION_ID_BOLD', // Reemplazar con tu ID de integración Bold
  cartStorageKey:   'praessiaCart',           // misma clave que usa tienda.js
  emailStorageKey:  'praessiaEmail',
  savedInfoKey:     'praessiaCustomerInfo',   // localStorage — solo si el usuario acepta guardarla
  draftKey:         'praessiaCheckoutDraft'   // sessionStorage — borrador mientras completa el form
};

/* ── DATOS: 32 departamentos de Colombia y sus municipios ──────
   Fuente: DIVIPOLA / Anexo de municipios de Colombia.
   Se usa en los selectores de "Departamento" y "Ciudad / Municipio"
   tanto en Entrega como en Dirección de facturación.               */
const COLOMBIA_DATA = {"Amazonas": ["Leticia", "Puerto Nariño"], "Antioquia": ["Abejorral", "Abriaquí", "Alejandría", "Amagá", "Amalfi", "Andes", "Angelópolis", "Angostura", "Anorí", "Anzá", "Apartadó", "Arboletes", "Argelia", "Armenia", "Barbosa", "Bello", "Belmira", "Betania", "Betulia", "Briceño", "Buriticá", "Cáceres", "Caicedo", "Caldas", "Campamento", "Cañasgordas", "Caracolí", "Caramanta", "Carepa", "Carolina del Príncipe", "Caucasia", "Chigorodó", "Cisneros", "Ciudad Bolívar", "Cocorná", "Concepción", "Concordia", "Copacabana", "Dabeiba", "Donmatías", "Ebéjico", "El Bagre", "El Carmen de Viboral", "El Peñol", "El Retiro", "El Santuario", "Entrerríos", "Envigado", "Fredonia", "Frontino", "Giraldo", "Girardota", "Gómez Plata", "Granada", "Guadalupe", "Guarne", "Guatapé", "Heliconia", "Hispania", "Itagüí", "Ituango", "Jardín", "Jericó", "La Ceja", "La Estrella", "La Pintada", "La Unión", "Liborina", "Maceo", "Marinilla", "Medellín", "Montebello", "Murindó", "Mutatá", "Nariño", "Nechí", "Necoclí", "Olaya", "Peque", "Pueblorrico", "Puerto Berrío", "Puerto Nare", "Puerto Triunfo", "Remedios", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar", "San Andrés de Cuerquia", "San Carlos", "San Francisco", "San Jerónimo", "San José de la Montaña", "San Juan de Urabá", "San Luis", "San Pedro de Urabá", "San Pedro de los Milagros", "San Rafael", "San Roque", "San Vicente", "Santa Bárbara", "Santa Fe de Antioquia", "Santa Rosa de Osos", "Santo Domingo", "Segovia", "Sonsón", "Sopetrán", "Támesis", "Tarazá", "Tarso", "Titiribí", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaíso", "Vegachí", "Venecia", "Vigía del Fuerte", "Yalí", "Yarumal", "Yolombó", "Yondó", "Zaragoza"], "Arauca": ["Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondón", "Saravena", "Tame"], "Atlántico": ["Baranoa", "Barranquilla", "Campo de la Cruz", "Candelaria", "Galapa", "Juan de Acosta", "Luruaco", "Malambo", "Manatí", "Palmar de Varela", "Piojó", "Polonuevo", "Ponedera", "Puerto Colombia", "Repelón", "Sabanagrande", "Sabanalarga", "Santa Lucía", "Santo Tomás", "Soledad", "Suán", "Tubará", "Usiacurí"], "Bolívar": ["Achí", "Altos del Rosario", "Arenal", "Arjona", "Arroyohondo", "Barranco de Loba", "Brazuelo de Papayal", "Calamar", "Cantagallo", "Cartagena de Indias", "Cicuco", "Clemencia", "Córdoba", "El Carmen de Bolívar", "El Guamo", "El Peñón", "Hatillo de Loba", "Magangué", "Mahates", "Margarita", "María la Baja", "Mompós", "Montecristo", "Morales", "Norosí", "Pinillos", "Regidor", "Río Viejo", "San Cristóbal", "San Estanislao", "San Fernando", "San Jacinto del Cauca", "San Jacinto", "San Juan Nepomuceno", "San Martín de Loba", "San Pablo", "Santa Catalina", "Santa Rosa", "Santa Rosa del Sur", "Simití", "Soplaviento", "Talaigua Nuevo", "Tiquisio", "Turbaco", "Turbaná", "Villanueva", "Zambrano"], "Boyacá": ["Almeida", "Aquitania", "Arcabuco", "Belén", "Berbeo", "Betéitiva", "Boavita", "Boyacá", "Briceño", "Buenavista", "Busbanzá", "Caldas", "Campohermoso", "Cerinza", "Chinavita", "Chiquinquirá", "Chíquiza", "Chiscas", "Chita", "Chitaraque", "Chivatá", "Chivor", "Ciénega", "Cómbita", "Coper", "Corrales", "Covarachía", "Cubará", "Cucaita", "Cuítiva", "Duitama", "El Cocuy", "El Espino", "Firavitoba", "Floresta", "Gachantivá", "Gámeza", "Garagoa", "Guacamayas", "Guateque", "Guayatá", "Güicán", "Iza", "Jenesano", "Jericó", "La Capilla", "La Uvita", "La Victoria", "Labranzagrande", "Macanal", "Maripí", "Miraflores", "Mongua", "Monguí", "Moniquirá", "Motavita", "Muzo", "Nobsa", "Nuevo Colón", "Oicatá", "Otanche", "Pachavita", "Páez", "Paipa", "Pajarito", "Panqueba", "Pauna", "Paya", "Paz del Río", "Pesca", "Pisba", "Puerto Boyacá", "Quípama", "Ramiriquí", "Ráquira", "Rondón", "Saboyá", "Sáchica", "Samacá", "San Eduardo", "San José de Pare", "San Luis de Gaceno", "San Mateo", "San Miguel de Sema", "San Pablo de Borbur", "Santa María", "Santa Rosa de Viterbo", "Santa Sofía", "Santana", "Sativanorte", "Sativasur", "Siachoque", "Soatá", "Socha", "Socotá", "Sogamoso", "Somondoco", "Sora", "Soracá", "Sotaquirá", "Susacón", "Sutamarchán", "Sutatenza", "Tasco", "Tenza", "Tibaná", "Tibasosa", "Tinjacá", "Tipacoque", "Toca", "Togüí", "Tópaga", "Tota", "Tunja", "Tununguá", "Turmequé", "Tuta", "Tutazá", "Úmbita", "Ventaquemada", "Villa de Leyva", "Viracachá", "Zetaquira"], "Caldas": ["Aguadas", "Anserma", "Aranzazu", "Belalcázar", "Chinchiná", "Filadelfia", "La Dorada", "La Merced", "Manizales", "Manzanares", "Marmato", "Marquetalia", "Marulanda", "Neira", "Norcasia", "Pácora", "Palestina", "Pensilvania", "Riosucio", "Risaralda", "Salamina", "Samaná", "San José", "Supía", "Victoria", "Villamaría", "Viterbo"], "Caquetá": ["Albania", "Belén de los Andaquíes", "Cartagena del Chairá", "Curillo", "El Doncello", "El Paujil", "Florencia", "La Montañita", "Milán", "Morelia", "Puerto Rico", "San José del Fragua", "San Vicente del Caguán", "Solano", "Solita", "Valparaíso"], "Casanare": ["Aguazul", "Chámeza", "Hato Corozal", "La Salina", "Maní", "Monterrey", "Nunchía", "Orocué", "Paz de Ariporo", "Pore", "Recetor", "Sabanalarga", "Sácama", "San Luis de Palenque", "Támara", "Tauramena", "Trinidad", "Villanueva", "Yopal"], "Cauca": ["Almaguer", "Argelia", "Balboa", "Bolívar", "Buenos Aires", "Cajibío", "Caldono", "Caloto", "Corinto", "El Tambo", "Florencia", "Guachené", "Guapí", "Inzá", "Jambaló", "La Sierra", "La Vega", "López de Micay", "Mercaderes", "Miranda", "Morales", "Padilla", "Páez", "Patía", "Piamonte", "Piendamó", "Popayán", "Puerto Tejada", "Puracé", "Rosas", "San Sebastián", "Santa Rosa", "Santander de Quilichao", "Silvia", "Sotará", "Suárez", "Sucre", "Timbío", "Timbiquí", "Toribío", "Totoró", "Villa Rica"], "Cesar": ["Aguachica", "Agustín Codazzi", "Astrea", "Becerril", "Bosconia", "Chimichagua", "Chiriguaná", "Curumaní", "El Copey", "El Paso", "Gamarra", "González", "La Gloria (Cesar)", "La Jagua de Ibirico", "La Paz", "Manaure Balcón del Cesar", "Pailitas", "Pelaya", "Pueblo Bello", "Río de Oro", "San Alberto", "San Diego", "San Martín", "Tamalameque", "Valledupar"], "Chocó": ["Acandí", "Alto Baudó", "Bagadó", "Bahía Solano", "Bajo Baudó", "Bojayá", "Cantón de San Pablo", "Cértegui", "Condoto", "El Atrato", "El Carmen de Atrato", "El Carmen del Darién", "Istmina", "Juradó", "Litoral de San Juan", "Lloró", "Medio Atrato", "Medio Baudó", "Medio San Juan", "Nóvita", "Nuquí", "Quibdó", "Río Iró", "Río Quito", "Riosucio", "San José del Palmar", "Sipí", "Tadó", "Unión Panamericana", "Unguía"], "Cundinamarca": ["Agua de Dios", "Albán", "Anapoima", "Anolaima", "Apulo", "Arbeláez", "Beltrán", "Bituima", "Bogotá", "Bojacá", "Cabrera", "Cachipay", "Cajicá", "Caparrapí", "Cáqueza", "Carmen de Carupa", "Chaguaní", "Chía", "Chipaque", "Choachí", "Chocontá", "Cogua", "Cota", "Cucunubá", "El Colegio", "El Peñón", "El Rosal", "Facatativá", "Fómeque", "Fosca", "Funza", "Fúquene", "Fusagasugá", "Gachalá", "Gachancipá", "Gachetá", "Gama", "Girardot", "Granada", "Guachetá", "Guaduas", "Guasca", "Guataquí", "Guatavita", "Guayabal de Síquima", "Guayabetal", "Gutiérrez", "Jerusalén", "Junín", "La Calera", "La Mesa", "La Palma", "La Peña", "La Vega", "Lenguazaque", "Machetá", "Madrid", "Manta", "Medina", "Mosquera", "Nariño", "Nemocón", "Nilo", "Nimaima", "Nocaima", "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Pulí", "Quebradanegra", "Quetame", "Quipile", "Ricaurte", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco", "San Juan de Rioseco", "Sasaima", "Sesquilé", "Sibaté", "Silvania", "Simijaca", "Soacha", "Sopó", "Subachoque", "Suesca", "Supatá", "Susa", "Sutatausa", "Tabio", "Tausa", "Tena", "Tenjo", "Tibacuy", "Tibirita", "Tocaima", "Tocancipá", "Topaipí", "Ubalá", "Ubaque", "Ubaté", "Une", "Útica", "Venecia", "Vergara", "Vianí", "Villagómez", "Villapinzón", "Villeta", "Viotá", "Yacopí", "Zipacón", "Zipaquirá"], "Córdoba": ["Ayapel", "Buenavista", "Canalete", "Cereté", "Chimá", "Chinú", "Ciénaga de Oro", "Cotorra", "La Apartada", "Lorica", "Los Córdobas", "Momil", "Montelíbano", "Montería", "Moñitos", "Planeta Rica", "Pueblo Nuevo", "Puerto Escondido", "Puerto Libertador", "Purísima", "Sahagún", "San Andrés de Sotavento", "San Antero", "San Bernardo del Viento", "San Carlos", "San José de Uré", "San Pelayo", "Tierralta", "Tuchín", "Valencia"], "Guainía": ["Inírida"], "Guaviare": ["Calamar", "El Retorno", "Miraflores", "San José del Guaviare"], "Huila": ["Acevedo", "Agrado", "Aipe", "Algeciras", "Altamira", "Baraya", "Campoalegre", "Colombia", "El Pital", "Elías", "Garzón", "Gigante", "Guadalupe", "Hobo", "Íquira", "Isnos", "La Argentina", "La Plata", "Nátaga", "Neiva", "Oporapa", "Paicol", "Palermo", "Palestina", "Pitalito", "Rivera", "Saladoblanco", "San Agustín", "Santa María", "Suaza", "Tarqui", "Tello", "Teruel", "Tesalia", "Timaná", "Villavieja", "Yaguará"], "La Guajira": ["Albania", "Barrancas", "Dibulla", "Distracción", "El Molino", "Fonseca", "Hatonuevo", "La Jagua del Pilar", "Maicao", "Manaure", "Riohacha", "San Juan del Cesar", "Uribia", "Urumita", "Villanueva"], "Magdalena": ["Algarrobo", "Aracataca", "Ariguaní", "Cerro de San Antonio", "Chibolo", "Ciénaga", "Concordia", "El Banco", "El Piñón", "El Retén", "Fundación", "Guamal", "Nueva Granada", "Pedraza", "Pijiño del Carmen", "Pivijay", "Plato", "Pueblo Viejo", "Remolino", "Sabanas de San Ángel", "Salamina", "San Sebastián de Buenavista", "San Zenón", "Santa Ana", "Santa Bárbara de Pinto", "Santa Marta", "Sitionuevo", "Tenerife", "Zapayán", "Zona Bananera"], "Meta": ["Acacías", "Barranca de Upía", "Cabuyaro", "Castilla la Nueva", "Cubarral", "Cumaral", "El Calvario", "El Castillo", "El Dorado", "Fuente de Oro", "Granada", "Guamal", "La Macarena", "La Uribe", "Lejanías", "Mapiripán", "Mesetas", "Puerto Concordia", "Puerto Gaitán", "Puerto Lleras", "Puerto López", "Puerto Rico", "Restrepo", "San Carlos de Guaroa", "San Juan de Arama", "San Juanito", "San Martín", "Villavicencio", "Vista Hermosa"], "Nariño": ["Aldana", "Ancuyá", "Arboleda", "Barbacoas", "Belén", "Buesaco", "Chachagüí", "Colón", "Consacá", "Contadero", "Córdoba", "Cuaspud", "Cumbal", "Cumbitara", "El Charco", "El Peñol", "El Rosario", "El Tablón", "El Tambo", "Francisco Pizarro", "Funes", "Guachucal", "Guaitarilla", "Gualmatán", "Iles", "Imués", "Ipiales", "La Cruz", "La Florida", "La Llanada", "La Tola", "La Unión", "Leiva", "Linares", "Los Andes", "Magüí Payán", "Mallama", "Mosquera", "Nariño", "Olaya Herrera", "Ospina", "Pasto", "Policarpa", "Potosí", "Providencia", "Puerres", "Pupiales", "Ricaurte", "Roberto Payán", "Samaniego", "San Bernardo", "San José de Albán", "San Lorenzo", "San Pablo", "San Pedro de Cartago", "Sandoná", "Santa Bárbara", "Santacruz", "Sapuyes", "Taminango", "Tangua", "Tumaco", "Túquerres", "Yacuanquer"], "Norte de Santander": ["Ábrego", "Arboledas", "Bochalema", "Bucarasica", "Cáchira", "Cácota", "Chinácota", "Chitagá", "Convención", "Cúcuta", "Cucutilla", "Duranía", "El Carmen", "El Tarra", "El Zulia", "Gramalote", "Hacarí", "Herrán", "La Esperanza", "La Playa de Belén", "Labateca", "Los Patios", "Lourdes", "Mutiscua", "Ocaña", "Pamplona", "Pamplonita", "Puerto Santander", "Ragonvalia", "Salazar de Las Palmas", "San Calixto", "San Cayetano", "Santiago", "Santo Domingo de Silos", "Sardinata", "Teorama", "Tibú", "Toledo", "Villa Caro", "Villa del Rosario"], "Putumayo": ["Colón", "Mocoa", "Orito", "Puerto Asís", "Puerto Caicedo", "Puerto Guzmán", "Puerto Leguízamo", "San Francisco", "San Miguel", "Santiago", "Sibundoy", "Valle del Guamuez", "Villagarzón"], "Quindío": ["Armenia", "Buenavista", "Calarcá", "Circasia", "Córdoba", "Filandia", "Génova", "La Tebaida", "Montenegro", "Pijao", "Quimbaya", "Salento"], "Risaralda": ["Apía", "Balboa", "Belén de Umbría", "Dosquebradas", "Guática", "La Celia", "La Virginia", "Marsella", "Mistrató", "Pereira", "Pueblo Rico", "Quinchía", "Santa Rosa de Cabal", "Santuario"], "San Andrés y Providencia": ["Providencia y Santa Catalina Islas", "San Andrés"], "Santander": ["Aguada", "Albania", "Aratoca", "Barbosa", "Barichara", "Barrancabermeja", "Betulia", "Bolívar", "Bucaramanga", "Cabrera", "California", "Capitanejo", "Carcasí", "Cepitá", "Cerrito", "Charalá", "Charta", "Chima", "Chipatá", "Cimitarra", "Concepción", "Confines", "Contratación", "Coromoro", "Curití", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "El Playón", "El Socorro", "Encino", "Enciso", "Florián", "Floridablanca", "Galán", "Gámbita", "Girón", "Guaca", "Guadalupe", "Guapotá", "Guavatá", "Güepsa", "Hato", "Jesús María", "Jordán", "La Belleza", "La Paz", "Landázuri", "Lebrija", "Los Santos", "Macaravita", "Málaga", "Matanza", "Mogotes", "Molagavita", "Ocamonte", "Oiba", "Onzaga", "Palmar", "Palmas del Socorro", "Páramo", "Piedecuesta", "Pinchote", "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "Sabana de Torres", "San Andrés", "San Benito", "San Gil", "San Joaquín", "San José de Miranda", "San Miguel", "San Vicente de Chucurí", "Santa Bárbara", "Santa Helena del Opón", "Simacota", "Suaita", "Sucre", "Suratá", "Tona", "Valle de San José", "Vélez", "Vetas", "Villanueva", "Zapatoca"], "Sucre": ["Buenavista", "Caimito", "Chalán", "Colosó", "Corozal", "Coveñas", "El Roble", "Galeras", "Guaranda", "La Unión", "Los Palmitos", "Majagual", "Morroa", "Ovejas", "Sampués", "San Antonio de Palmito", "San Benito Abad", "San Juan de Betulia", "San Marcos", "San Onofre", "San Pedro", "Sincé", "Sincelejo", "Sucre", "Tolú", "Tolú Viejo"], "Tolima": ["Alpujarra", "Alvarado", "Ambalema", "Anzoátegui", "Armero", "Ataco", "Cajamarca", "Carmen de Apicalá", "Casabianca", "Chaparral", "Coello", "Coyaima", "Cunday", "Dolores", "El Espinal", "Falán", "Flandes", "Fresno", "Guamo", "Herveo", "Honda", "Ibagué", "Icononzo", "Lérida", "Líbano", "Mariquita", "Melgar", "Murillo", "Natagaima", "Ortega", "Palocabildo", "Piedras", "Planadas", "Prado", "Purificación", "Rioblanco", "Roncesvalles", "Rovira", "Saldaña", "San Antonio", "San Luis", "Santa Isabel", "Suárez", "Valle de San Juan", "Venadillo", "Villahermosa", "Villarrica"], "Valle del Cauca": ["Alcalá", "Andalucía", "Ansermanuevo", "Argelia", "Bolívar", "Buenaventura", "Buga", "Bugalagrande", "Caicedonia", "Cali", "Calima", "Candelaria", "Cartago", "Dagua", "El Águila", "El Cairo", "El Cerrito", "El Dovio", "Florida", "Ginebra", "Guacarí", "Jamundí", "La Cumbre", "La Unión", "La Victoria", "Obando", "Palmira", "Pradera", "Restrepo", "Riofrío", "Roldanillo", "San Pedro", "Sevilla", "Toro", "Trujillo", "Tuluá", "Ulloa", "Versalles", "Vijes", "Yotoco", "Yumbo", "Zarzal"], "Vaupés": ["Carurú", "Mitú", "Taraira"], "Vichada": ["Cumaribo", "La Primavera", "Puerto Carreño", "Santa Rosalía"]};

/* ── ESTADO ──────────────────────────────────────────────────── */
let cart = [];

/* ── INICIALIZACIÓN ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadCart();

  if (cart.length === 0) {
    showToast('<i class="bi bi-exclamation-circle me-2"></i>Tu carrito está vacío. Redirigiendo...');
    setTimeout(() => { window.location.href = '/store'; }, 1800);
    return;
  }

  renderSummary();
  fillDepartmentSelects();
  restoreSavedInfo();
  bindEvents();
});

/* ─────────────────────────────────────────────────────────────
   CARRITO — lectura (mismo storage que tienda.js)
───────────────────────────────────────────────────────────── */
function loadCart() {
  try {
    const raw = sessionStorage.getItem(PAY_CONFIG.cartStorageKey);
    cart = raw ? JSON.parse(raw) : [];
  } catch (e) {
    cart = [];
  }
}

/* ─────────────────────────────────────────────────────────────
   RESUMEN DE PEDIDO
───────────────────────────────────────────────────────────── */
function renderSummary() {
  const itemsWrap = document.getElementById('summaryItems');
  if (!itemsWrap) return;

  if (cart.length === 0) {
    itemsWrap.innerHTML = `<p class="pay-summary-empty">Tu carrito está vacío</p>`;
  } else {
    itemsWrap.innerHTML = cart.map(item => {
      const hasImg = item.image && item.image !== 'x';
      return `
      <div class="pay-summary-item">
        <div class="pay-summary-item-img">
          ${hasImg
            ? `<img src="${item.image}" alt="${escapeHtml(item.name)}">`
            : `<i class="bi bi-droplet-half"></i>`}
          <span class="pay-summary-item-qty">${item.qty}</span>
        </div>
        <div class="pay-summary-item-info">
          <p class="pay-summary-item-name">${escapeHtml(item.name)}</p>
          <p class="pay-summary-item-ref">100 ml · EDP</p>
        </div>
        <span class="pay-summary-item-price">${formatCOP(item.price * item.qty)}</span>
      </div>`;
    }).join('');
  }

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = cart.length > 0 ? PAY_CONFIG.shippingCost : 0;
  const total = subtotal + shipping;

  setText('summarySubtotal', formatCOP(subtotal));
  setText('summaryShipping', formatCOP(shipping));
  setText('summaryTotal', formatCOP(total));
  setText('toggleSummaryTotal', formatCOP(total));
}

/* ─────────────────────────────────────────────────────────────
   DEPARTAMENTO → CIUDAD (cascada)
───────────────────────────────────────────────────────────── */
function fillDepartmentSelects() {
  const departments = Object.keys(COLOMBIA_DATA).sort((a, b) => a.localeCompare(b, 'es'));

  ['departamento', 'fDepartamento'].forEach(selectId => {
    const select = document.getElementById(selectId);
    if (!select) return;
    departments.forEach(dep => {
      const opt = document.createElement('option');
      opt.value = dep;
      opt.textContent = dep;
      select.appendChild(opt);
    });
  });
}

function fillCitySelect(departmentSelectId, citySelectId) {
  const depSelect  = document.getElementById(departmentSelectId);
  const citySelect = document.getElementById(citySelectId);
  if (!depSelect || !citySelect) return;

  const dep = depSelect.value;
  const cities = COLOMBIA_DATA[dep] || [];

  citySelect.innerHTML = '';

  if (!dep || cities.length === 0) {
    citySelect.innerHTML = '<option value="">Selecciona primero un departamento</option>';
    citySelect.disabled = true;
    return;
  }

  citySelect.disabled = false;
  citySelect.innerHTML = '<option value="">Selecciona una ciudad/municipio...</option>' +
    cities.slice().sort((a, b) => a.localeCompare(b, 'es'))
      .map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
}

/* ─────────────────────────────────────────────────────────────
   INFORMACIÓN GUARDADA DEL CLIENTE (opt-in, localStorage)
───────────────────────────────────────────────────────────── */
function restoreSavedInfo() {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(PAY_CONFIG.savedInfoKey) || 'null');
  } catch (e) { saved = null; }
  if (!saved) return;

  const fields = ['email', 'wantsNews', 'departamento', 'nombre', 'apellidos',
    'tipoDocumento', 'documento', 'direccion', 'casa', 'telefono'];

  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el || saved[id] === undefined) return;
    if (el.type === 'checkbox') el.checked = !!saved[id];
    else el.value = saved[id];
  });

  /* Disparar cascada de ciudad y luego fijar la ciudad guardada */
  if (saved.departamento) {
    fillCitySelect('departamento', 'ciudad');
    if (saved.ciudad) document.getElementById('ciudad').value = saved.ciudad;
  }

  document.getElementById('saveInfo').checked = true;
}

function persistInfoIfRequested(data) {
  const saveInfo = document.getElementById('saveInfo')?.checked;
  if (!saveInfo) {
    try { localStorage.removeItem(PAY_CONFIG.savedInfoKey); } catch (e) {}
    return;
  }
  try {
    localStorage.setItem(PAY_CONFIG.savedInfoKey, JSON.stringify(data));
  } catch (e) {
    console.warn('Praessia: no se pudo guardar la información del cliente:', e);
  }
}

/* ─────────────────────────────────────────────────────────────
   DIRECCIÓN DE FACTURACIÓN — mostrar/ocultar
───────────────────────────────────────────────────────────── */
function toggleBillingFields() {
  const isDifferent = document.getElementById('billingDifferent')?.checked;
  const wrap = document.getElementById('billingFields');
  if (!wrap) return;

  wrap.hidden = !isDifferent;

  /* Los campos de facturación solo son obligatorios si se muestran */
  const billingRequiredIds = ['fDepartamento', 'fNombre', 'fApellidos',
    'fTipoDocumento', 'fDocumento', 'fDireccion', 'fCiudad', 'fTelefono'];

  billingRequiredIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isDifferent && id !== 'fCiudad') {
      el.required = true;
    } else if (isDifferent && id === 'fCiudad') {
      el.required = !el.disabled;
    } else {
      el.required = false;
      clearFieldError(id);
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   RESUMEN MÓVIL — desplegable
───────────────────────────────────────────────────────────── */
function toggleSummaryPanel() {
  const btn   = document.getElementById('btnToggleSummary');
  const panel = document.getElementById('paySummaryPanel');
  if (!btn || !panel) return;

  const isOpen = panel.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(isOpen));
}

/* ─────────────────────────────────────────────────────────────
   VALIDACIÓN
───────────────────────────────────────────────────────────── */
function setFieldError(id, message) {
  const input = document.getElementById(id);
  const errorEl = document.getElementById(`err-${id}`);
  if (input) input.classList.add('is-invalid');
  if (errorEl) errorEl.textContent = message;
}

function clearFieldError(id) {
  const input = document.getElementById(id);
  const errorEl = document.getElementById(`err-${id}`);
  if (input) input.classList.remove('is-invalid');
  if (errorEl) errorEl.textContent = '';
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value) {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 13;
}

function validateForm() {
  let valid = true;

  const requiredFields = [
    { id: 'email', check: v => v.trim() !== '' && isValidEmail(v), msg: 'Ingresa un correo electrónico válido' },
    { id: 'departamento', check: v => v !== '', msg: 'Selecciona un departamento' },
    { id: 'nombre', check: v => v.trim() !== '', msg: 'Ingresa tu nombre' },
    { id: 'apellidos', check: v => v.trim() !== '', msg: 'Ingresa tus apellidos' },
    { id: 'tipoDocumento', check: v => v !== '', msg: 'Selecciona el tipo de documento' },
    { id: 'documento', check: v => v.trim().length >= 4, msg: 'Ingresa un número de documento válido' },
    { id: 'direccion', check: v => v.trim() !== '', msg: 'Ingresa tu dirección' },
    { id: 'ciudad', check: v => v !== '', msg: 'Selecciona una ciudad o municipio' },
    { id: 'telefono', check: v => isValidPhone(v), msg: 'Ingresa un teléfono válido' }
  ];

  requiredFields.forEach(f => {
    const el = document.getElementById(f.id);
    if (!el) return;
    clearFieldError(f.id);
    if (!f.check(el.value)) {
      setFieldError(f.id, f.msg);
      valid = false;
    }
  });

  /* Facturación distinta — validar también esos campos */
  if (document.getElementById('billingDifferent')?.checked) {
    const billingFields = [
      { id: 'fDepartamento', check: v => v !== '', msg: 'Selecciona un departamento' },
      { id: 'fNombre', check: v => v.trim() !== '', msg: 'Ingresa el nombre' },
      { id: 'fApellidos', check: v => v.trim() !== '', msg: 'Ingresa los apellidos' },
      { id: 'fTipoDocumento', check: v => v !== '', msg: 'Selecciona el tipo de documento' },
      { id: 'fDocumento', check: v => v.trim().length >= 4, msg: 'Ingresa un número de documento válido' },
      { id: 'fDireccion', check: v => v.trim() !== '', msg: 'Ingresa la dirección' },
      { id: 'fCiudad', check: v => v !== '', msg: 'Selecciona una ciudad o municipio' },
      { id: 'fTelefono', check: v => isValidPhone(v), msg: 'Ingresa un teléfono válido' }
    ];
    billingFields.forEach(f => {
      const el = document.getElementById(f.id);
      if (!el) return;
      clearFieldError(f.id);
      if (!f.check(el.value)) {
        setFieldError(f.id, f.msg);
        valid = false;
      }
    });
  }

  return valid;
}

/* ─────────────────────────────────────────────────────────────
   ENVÍO — construir payload y abrir checkout de Bold
───────────────────────────────────────────────────────────── */
function collectFormData() {
  const val = id => document.getElementById(id)?.value?.trim() || '';
  const isDifferentBilling = document.getElementById('billingDifferent')?.checked;

  const data = {
    email: val('email'),
    wantsNews: !!document.getElementById('wantsNews')?.checked,
    departamento: val('departamento'),
    nombre: val('nombre'),
    apellidos: val('apellidos'),
    tipoDocumento: val('tipoDocumento'),
    documento: val('documento'),
    direccion: val('direccion'),
    casa: val('casa'),
    ciudad: val('ciudad'),
    telefono: val('telefono'),
    billing: isDifferentBilling
      ? {
          sameAsShipping: false,
          departamento: val('fDepartamento'),
          nombre: val('fNombre'),
          apellidos: val('fApellidos'),
          tipoDocumento: val('fTipoDocumento'),
          documento: val('fDocumento'),
          direccion: val('fDireccion'),
          casa: val('fCasa'),
          ciudad: val('fCiudad'),
          telefono: val('fTelefono')
        }
      : { sameAsShipping: true }
  };

  return data;
}

function submitCheckout(e) {
  e.preventDefault();

  if (cart.length === 0) {
    showToast('<i class="bi bi-exclamation-circle me-2"></i>Tu carrito está vacío');
    return;
  }

  if (!validateForm()) {
    showToast('<i class="bi bi-exclamation-triangle me-2"></i>Revisa los campos marcados en rojo');
    document.querySelector('.is-invalid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const formData = collectFormData();
  persistInfoIfRequested(formData);

  /* Guardar email para posible recuperación / notificaciones */
  try { sessionStorage.setItem(PAY_CONFIG.emailStorageKey, formData.email); } catch (e) {}

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal + PAY_CONFIG.shippingCost;

  const items = cart.map(i => ({
    name:      i.name,
    quantity:  i.qty,
    price:     i.price,
    taxAmount: 0
  }));

  /* Línea de envío como ítem adicional, para que el total de Bold coincida */
  items.push({
    name: 'Envío',
    quantity: 1,
    price: PAY_CONFIG.shippingCost,
    taxAmount: 0
  });

  const btn = document.getElementById('btnPayNow');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="bi bi-arrow-repeat"></i><span>Redirigiendo a Bold...</span>';
  }

  /* ─ Checkout embebido de Bold ─
     Documentación: https://docs.bold.co/checkout
     El backend de Praessia debe generar/validar el hash de integridad
     y el orderId antes de confirmar el pago (ver notas de seguridad). */
  if (typeof BoldCheckout !== 'undefined') {
    const checkout = new BoldCheckout({
      integrationId:  PAY_CONFIG.boldIntegration,
      orderId:        generateOrderId(),
      currency:       PAY_CONFIG.currency,
      amount:         total,
      description:    `Praessia · ${cart.length} fragancia(s)`,
      customerEmail:  formData.email,
      customerData: {
        fullName: `${formData.nombre} ${formData.apellidos}`,
        phone:    formData.telefono,
        documentNumber: formData.documento,
        documentType:   formData.tipoDocumento
      },
      items,
      redirectionUrl: `${window.location.origin}/tienda.html?status=success`
    });
    checkout.open();
  } else {
    console.warn('Praessia: Bold SDK no cargado. Verifica tu PUBLIC_KEY.');
    showToast('<i class="bi bi-exclamation-triangle me-2"></i>Error al conectar con el sistema de pago. Inténtalo de nuevo.');
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="bi bi-lock-fill"></i><span>Pagar ahora</span>';
    }
  }
}

/* ─────────────────────────────────────────────────────────────
   EVENTOS
───────────────────────────────────────────────────────────── */
function bindEvents() {

  /* Resumen desplegable (móvil) */
  document.getElementById('btnToggleSummary')?.addEventListener('click', toggleSummaryPanel);

  /* Cascada departamento → ciudad (entrega) */
  document.getElementById('departamento')?.addEventListener('change', () => {
    fillCitySelect('departamento', 'ciudad');
    clearFieldError('departamento');
  });

  /* Cascada departamento → ciudad (facturación) */
  document.getElementById('fDepartamento')?.addEventListener('change', () => {
    fillCitySelect('fDepartamento', 'fCiudad');
    clearFieldError('fDepartamento');
  });

  /* Dirección de facturación — mostrar/ocultar */
  document.getElementById('billingSame')?.addEventListener('change', toggleBillingFields);
  document.getElementById('billingDifferent')?.addEventListener('change', toggleBillingFields);

  /* Limpiar error al escribir/seleccionar */
  document.querySelectorAll('.pay-input').forEach(input => {
    input.addEventListener('input', () => clearFieldError(input.id));
    input.addEventListener('change', () => clearFieldError(input.id));
  });

  /* Envío del formulario */
  document.getElementById('payForm')?.addEventListener('submit', submitCheckout);
}

/* ─────────────────────────────────────────────────────────────
   UTILIDADES
───────────────────────────────────────────────────────────── */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function formatCOP(amount) {
  return '$' + amount.toLocaleString('es-CO');
}

function generateOrderId() {
  return 'PRS-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7).toUpperCase();
}

function showToast(msg, duration = 3000) {
  const toast = document.getElementById('payToast');
  if (!toast) return;
  toast.innerHTML = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), duration);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}