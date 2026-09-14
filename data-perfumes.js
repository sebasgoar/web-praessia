/* ============================================================
   Praessia — quiz/data-perfumes.js
   Catálogo maestro de 91 fragancias (histórico + portafolio
   actualizado) con matriz de afinidad por presencia. IDs secuenciales
   y estables — pensado para activar/desactivar productos desde la
   base de datos sin reordenar el catálogo.
   Usado por: test.html (a través de quiz/engine.js)
   ============================================================ */

const perfumes = [
  {
    id: "praessia-01",
    name: "Inspiración Olfativa: One Million",
    image: "/assets/img/perfumes/one_million.png",
    personalities: {
      fresco_vital: 4,
      libre_natural: 2,
      elegante_clasico: 7,
      esencial_moderno: 8,
      sensual_profundo: 23,
      calido_envolvente: 24,
      audaz_magnetico: 26,
      creativo_alternativo: 6
    },
    gender: "masculina"
  },
  {
    id: "praessia-02",
    name: "Inspiración Olfativa: 212 VIP",
    image: "/assets/img/perfumes/212_vip.png",
    personalities: {
      fresco_vital: 5,
      libre_natural: 4,
      elegante_clasico: 8,
      esencial_moderno: 12,
      sensual_profundo: 18,
      calido_envolvente: 20,
      audaz_magnetico: 23,
      creativo_alternativo: 10
    },
    gender: "masculina"
  },
  {
    id: "praessia-03",
    name: "Inspiración Olfativa: Acqua Di Gio",
    image: "/assets/img/perfumes/acqua_di_gio.png",
    personalities: {
      fresco_vital: 24,
      libre_natural: 23,
      elegante_clasico: 16,
      esencial_moderno: 14,
      sensual_profundo: 8,
      calido_envolvente: 5,
      audaz_magnetico: 5,
      creativo_alternativo: 5
    },
    gender: "masculina"
  },
  {
    id: "praessia-04",
    name: "Inspiración Olfativa: Loquito por Ti",
    image: "/assets/img/perfumes/loquito_por_ti.png",
    personalities: {
      fresco_vital: 8,
      libre_natural: 7,
      elegante_clasico: 8,
      esencial_moderno: 14,
      sensual_profundo: 21,
      calido_envolvente: 23,
      audaz_magnetico: 10,
      creativo_alternativo: 9
    },
    gender: "femenina"
  },
  {
    id: "praessia-05",
    name: "Inspiración Olfativa: CH Good Girl",
    image: "/assets/img/perfumes/good_girl.png",
    personalities: {
      fresco_vital: 3,
      libre_natural: 2,
      elegante_clasico: 10,
      esencial_moderno: 11,
      sensual_profundo: 17,
      calido_envolvente: 16,
      audaz_magnetico: 33,
      creativo_alternativo: 8
    },
    gender: "femenina"
  },
  {
    id: "praessia-06",
    name: "Inspiración Olfativa: 212 Men",
    image: "/assets/img/perfumes/212.png",
    personalities: {
      fresco_vital: 21,
      libre_natural: 14,
      elegante_clasico: 23,
      esencial_moderno: 20,
      sensual_profundo: 7,
      calido_envolvente: 8,
      audaz_magnetico: 14,
      creativo_alternativo: 7
    },
    gender: "masculina"
  },
  {
    id: "praessia-07",
    name: "Inspiración Olfativa: 212 VIP Black",
    image: "/assets/img/perfumes/212_vip_black.png",
    personalities: {
      fresco_vital: 4,
      libre_natural: 5,
      elegante_clasico: 9,
      esencial_moderno: 11,
      sensual_profundo: 18,
      calido_envolvente: 15,
      audaz_magnetico: 17,
      creativo_alternativo: 21
    },
    gender: "masculina"
  },
  {
    id: "praessia-08",
    name: "Inspiración Olfativa: Polo Blue",
    image: "/assets/img/perfumes/polo_blue.png",
    personalities: {
      fresco_vital: 23,
      libre_natural: 17,
      elegante_clasico: 18,
      esencial_moderno: 17,
      sensual_profundo: 5,
      calido_envolvente: 6,
      audaz_magnetico: 5,
      creativo_alternativo: 9
    },
    gender: "masculina"
  },
  {
    id: "praessia-09",
    name: "Inspiración Olfativa: 360 Men",
    image: "/assets/img/perfumes/360_men.png",
    personalities: {
      fresco_vital: 23,
      libre_natural: 16,
      elegante_clasico: 21,
      esencial_moderno: 13,
      sensual_profundo: 6,
      calido_envolvente: 9,
      audaz_magnetico: 6,
      creativo_alternativo: 6
    },
    gender: "masculina"
  },
  {
    id: "praessia-10",
    name: "Inspiración Olfativa: Black XS L'Excès",
    image: "/assets/img/perfumes/black_xs_l'exces.png",
    personalities: {
      fresco_vital: 3,
      libre_natural: 5,
      elegante_clasico: 7,
      esencial_moderno: 11,
      sensual_profundo: 16,
      calido_envolvente: 17,
      audaz_magnetico: 18,
      creativo_alternativo: 23
    },
    gender: "masculina"
  },
  {
    id: "praessia-11",
    name: "Inspiración Olfativa: CK One",
    image: "/assets/img/perfumes/ck_one.png",
    personalities: {
      fresco_vital: 25,
      libre_natural: 21,
      elegante_clasico: 10,
      esencial_moderno: 22,
      sensual_profundo: 4,
      calido_envolvente: 4,
      audaz_magnetico: 4,
      creativo_alternativo: 10
    },
    gender: "unisex"
  },
  {
    id: "praessia-12",
    name: "Inspiración Olfativa: Fahrenheit",
    image: "/assets/img/perfumes/Fahrenheit.png",
    personalities: {
      fresco_vital: 5,
      libre_natural: 7,
      elegante_clasico: 15,
      esencial_moderno: 6,
      sensual_profundo: 14,
      calido_envolvente: 10,
      audaz_magnetico: 26,
      creativo_alternativo: 17
    },
    gender: "masculina"
  },
  {
    id: "praessia-13",
    name: "Inspiración Olfativa: Hugo Boss",
    image: "/assets/img/perfumes/hugo_boss.png",
    personalities: {
      fresco_vital: 23,
      libre_natural: 22,
      elegante_clasico: 11,
      esencial_moderno: 15,
      sensual_profundo: 5,
      calido_envolvente: 7,
      audaz_magnetico: 9,
      creativo_alternativo: 8
    },
    gender: "masculina"
  },
  {
    id: "praessia-14",
    name: "Inspiración Olfativa: Invictus",
    image: "/assets/img/perfumes/invictus.png",
    personalities: {
      fresco_vital: 19,
      libre_natural: 11,
      elegante_clasico: 9,
      esencial_moderno: 14,
      sensual_profundo: 10,
      calido_envolvente: 9,
      audaz_magnetico: 21,
      creativo_alternativo: 7
    },
    gender: "masculina"
  },
  {
    id: "praessia-15",
    name: "Inspiración Olfativa: Jean Paul Gaultier (Le Male)",
    image: "/assets/img/perfumes/le_male.png",
    personalities: {
      fresco_vital: 8,
      libre_natural: 9,
      elegante_clasico: 10,
      esencial_moderno: 9,
      sensual_profundo: 19,
      calido_envolvente: 18,
      audaz_magnetico: 17,
      creativo_alternativo: 10
    },
    gender: "masculina"
  },
  {
    id: "praessia-16",
    name: "Inspiración Olfativa: Lacoste Blanca",
    image: "/assets/img/perfumes/lacoste_blanca.png",
    personalities: {
      fresco_vital: 23,
      libre_natural: 15,
      elegante_clasico: 16,
      esencial_moderno: 18,
      sensual_profundo: 7,
      calido_envolvente: 5,
      audaz_magnetico: 10,
      creativo_alternativo: 6
    },
    gender: "masculina"
  },
  {
    id: "praessia-17",
    name: "Inspiración Olfativa: Lacoste Red",
    image: "/assets/img/perfumes/lacoste_red.png",
    personalities: {
      fresco_vital: 21,
      libre_natural: 17,
      elegante_clasico: 8,
      esencial_moderno: 15,
      sensual_profundo: 8,
      calido_envolvente: 7,
      audaz_magnetico: 15,
      creativo_alternativo: 9
    },
    gender: "masculina"
  },
  {
    id: "praessia-18",
    name: "Inspiración Olfativa: Lapidus",
    image: "/assets/img/perfumes/lapidus.png",
    personalities: {
      fresco_vital: 4,
      libre_natural: 6,
      elegante_clasico: 23,
      esencial_moderno: 4,
      sensual_profundo: 19,
      calido_envolvente: 23,
      audaz_magnetico: 13,
      creativo_alternativo: 8
    },
    gender: "masculina"
  },
  {
    id: "praessia-19",
    name: "Inspiración Olfativa: Tommy",
    image: "/assets/img/perfumes/tommy.png",
    personalities: {
      fresco_vital: 23,
      libre_natural: 19,
      elegante_clasico: 10,
      esencial_moderno: 15,
      sensual_profundo: 7,
      calido_envolvente: 5,
      audaz_magnetico: 12,
      creativo_alternativo: 9
    },
    gender: "masculina"
  },
  {
    id: "praessia-20",
    name: "Inspiración Olfativa: 212 VIP Rose",
    image: "/assets/img/perfumes/212_vip_rose.png",
    personalities: {
      fresco_vital: 16,
      libre_natural: 10,
      elegante_clasico: 13,
      esencial_moderno: 16,
      sensual_profundo: 10,
      calido_envolvente: 9,
      audaz_magnetico: 16,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-21",
    name: "Inspiración Olfativa: Paris Hilton",
    image: "/assets/img/perfumes/paris_hilton.png",
    personalities: {
      fresco_vital: 21,
      libre_natural: 14,
      elegante_clasico: 10,
      esencial_moderno: 16,
      sensual_profundo: 7,
      calido_envolvente: 9,
      audaz_magnetico: 13,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-22",
    name: "Inspiración Olfativa: 360",
    image: "/assets/img/perfumes/360_women.png",
    personalities: {
      fresco_vital: 19,
      libre_natural: 15,
      elegante_clasico: 16,
      esencial_moderno: 17,
      sensual_profundo: 6,
      calido_envolvente: 8,
      audaz_magnetico: 9,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-23",
    name: "Inspiración Olfativa: BFF Kim Kardashian",
    image: "/assets/img/perfumes/bff.png",
    personalities: {
      fresco_vital: 20,
      libre_natural: 12,
      elegante_clasico: 8,
      esencial_moderno: 16,
      sensual_profundo: 10,
      calido_envolvente: 11,
      audaz_magnetico: 13,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-24",
    name: "Inspiración Olfativa: Cloud Ariana Grande",
    image: "/assets/img/perfumes/cloud.png",
    personalities: {
      fresco_vital: 12,
      libre_natural: 10,
      elegante_clasico: 8,
      esencial_moderno: 14,
      sensual_profundo: 13,
      calido_envolvente: 19,
      audaz_magnetico: 13,
      creativo_alternativo: 11
    },
    gender: "femenina"
  },
  {
    id: "praessia-25",
    name: "Inspiración Olfativa: La Vida es Bella",
    image: "/assets/img/perfumes/la_vida_es_bella.png",
    personalities: {
      fresco_vital: 10,
      libre_natural: 7,
      elegante_clasico: 16,
      esencial_moderno: 13,
      sensual_profundo: 14,
      calido_envolvente: 16,
      audaz_magnetico: 14,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-26",
    name: "Inspiración Olfativa: Thank Next",
    image: "/assets/img/perfumes/thank_next.png",
    personalities: {
      fresco_vital: 12,
      libre_natural: 13,
      elegante_clasico: 7,
      esencial_moderno: 15,
      sensual_profundo: 10,
      calido_envolvente: 18,
      audaz_magnetico: 14,
      creativo_alternativo: 11
    },
    gender: "femenina"
  },
  {
    id: "praessia-27",
    name: "Inspiración Olfativa: Boss Bottled Unlimited",
    image: "/assets/img/perfumes/boss_bottled_unlimited.png",
    personalities: {
      fresco_vital: 22,
      libre_natural: 18,
      elegante_clasico: 9,
      esencial_moderno: 19,
      sensual_profundo: 8,
      calido_envolvente: 6,
      audaz_magnetico: 10,
      creativo_alternativo: 8
    },
    gender: "masculina"
  },
  {
    id: "praessia-28",
    name: "Inspiración Olfativa: Eros Versace",
    image: "/assets/img/perfumes/eros.png",
    personalities: {
      fresco_vital: 11,
      libre_natural: 6,
      elegante_clasico: 7,
      esencial_moderno: 13,
      sensual_profundo: 17,
      calido_envolvente: 16,
      audaz_magnetico: 22,
      creativo_alternativo: 8
    },
    gender: "masculina"
  },
  {
    id: "praessia-29",
    name: "Inspiración Olfativa: Bleu Chanel",
    image: "/assets/img/perfumes/bleu_chanel.png",
    personalities: {
      fresco_vital: 13,
      libre_natural: 9,
      elegante_clasico: 16,
      esencial_moderno: 17,
      sensual_profundo: 12,
      calido_envolvente: 11,
      audaz_magnetico: 14,
      creativo_alternativo: 8
    },
    gender: "masculina"
  },
  {
    id: "praessia-30",
    name: "Inspiración Olfativa: Creed Aventus",
    image: "/assets/img/perfumes/creed_aventus.png",
    personalities: {
      fresco_vital: 12,
      libre_natural: 9,
      elegante_clasico: 16,
      esencial_moderno: 15,
      sensual_profundo: 13,
      calido_envolvente: 11,
      audaz_magnetico: 14,
      creativo_alternativo: 10
    },
    gender: "masculina"
  },
  {
    id: "praessia-31",
    name: "Inspiración Olfativa: Creed Silver Mountain",
    image: "/assets/img/perfumes/creed_silver_mountain.png",
    personalities: {
      fresco_vital: 18,
      libre_natural: 15,
      elegante_clasico: 16,
      esencial_moderno: 14,
      sensual_profundo: 8,
      calido_envolvente: 6,
      audaz_magnetico: 10,
      creativo_alternativo: 13
    },
    gender: "unisex"
  },
  {
    id: "praessia-32",
    name: "Inspiración Olfativa: Amethyst",
    image: "/assets/img/perfumes/amethyst.png",
    personalities: {
      fresco_vital: 9,
      libre_natural: 11,
      elegante_clasico: 12,
      esencial_moderno: 14,
      sensual_profundo: 16,
      calido_envolvente: 14,
      audaz_magnetico: 13,
      creativo_alternativo: 11
    },
    gender: "femenina"
  },
  {
    id: "praessia-33",
    name: "Inspiración Olfativa: Bade'e Al Oud Sublime",
    image: "/assets/img/perfumes/badee_al_oud_sublime.png",
    personalities: {
      fresco_vital: 12,
      libre_natural: 11,
      elegante_clasico: 13,
      esencial_moderno: 14,
      sensual_profundo: 15,
      calido_envolvente: 16,
      audaz_magnetico: 10,
      creativo_alternativo: 9
    },
    gender: "unisex"
  },
  {
    id: "praessia-34",
    name: "Inspiración Olfativa: Santal 33",
    image: "/assets/img/perfumes/santal_33.png",
    personalities: {
      fresco_vital: 6,
      libre_natural: 12,
      elegante_clasico: 11,
      esencial_moderno: 17,
      sensual_profundo: 13,
      calido_envolvente: 9,
      audaz_magnetico: 14,
      creativo_alternativo: 18
    },
    gender: "unisex"
  },
  {
    id: "praessia-35",
    name: "Inspiración Olfativa: Odyssey Mandarin Sky",
    image: "/assets/img/perfumes/odyssey_mandarin _sky.png",
    personalities: {
      fresco_vital: 17,
      libre_natural: 14,
      elegante_clasico: 10,
      esencial_moderno: 16,
      sensual_profundo: 12,
      calido_envolvente: 13,
      audaz_magnetico: 14,
      creativo_alternativo: 4
    },
    gender: "masculina"
  },
  {
    id: "praessia-36",
    name: "Inspiración Olfativa: Yum Yum",
    image: "/assets/img/perfumes/yum_yum.png",
    personalities: {
      fresco_vital: 12,
      libre_natural: 10,
      elegante_clasico: 7,
      esencial_moderno: 13,
      sensual_profundo: 15,
      calido_envolvente: 19,
      audaz_magnetico: 13,
      creativo_alternativo: 11
    },
    gender: "femenina"
  },
  {
    id: "praessia-37",
    name: "Inspiración Olfativa: Yara Moi",
    image: "/assets/img/perfumes/yara_moi.png",
    personalities: {
      fresco_vital: 10,
      libre_natural: 11,
      elegante_clasico: 12,
      esencial_moderno: 14,
      sensual_profundo: 16,
      calido_envolvente: 18,
      audaz_magnetico: 11,
      creativo_alternativo: 8
    },
    gender: "femenina"
  },
  {
    id: "praessia-38",
    name: "Inspiración Olfativa: Amber Oud Gold",
    image: "/assets/img/perfumes/amber_oud_gold.png",
    personalities: {
      fresco_vital: 11,
      libre_natural: 10,
      elegante_clasico: 10,
      esencial_moderno: 14,
      sensual_profundo: 14,
      calido_envolvente: 15,
      audaz_magnetico: 16,
      creativo_alternativo: 10
    },
    gender: "unisex"
  },
  {
    id: "praessia-39",
    name: "Inspiración Olfativa: Arabians Tonka",
    image: "/assets/img/perfumes/arabians_tonka.png",
    personalities: {
      fresco_vital: 3,
      libre_natural: 5,
      elegante_clasico: 9,
      esencial_moderno: 12,
      sensual_profundo: 18,
      calido_envolvente: 20,
      audaz_magnetico: 19,
      creativo_alternativo: 14
    },
    gender: "unisex"
  },
  {
    id: "praessia-40",
    name: "Inspiración Olfativa: Asad (Lattafa)",
    image: "/assets/img/perfumes/asad.png",
    personalities: {
      fresco_vital: 4,
      libre_natural: 7,
      elegante_clasico: 10,
      esencial_moderno: 14,
      sensual_profundo: 18,
      calido_envolvente: 19,
      audaz_magnetico: 17,
      creativo_alternativo: 11
    },
    gender: "masculina"
  },
  {
    id: "praessia-41",
    name: "Inspiración Olfativa: Khamrah Lattafa",
    image: "/assets/img/perfumes/khamrah.png",
    personalities: {
      fresco_vital: 2,
      libre_natural: 4,
      elegante_clasico: 9,
      esencial_moderno: 13,
      sensual_profundo: 18,
      calido_envolvente: 21,
      audaz_magnetico: 18,
      creativo_alternativo: 15
    },
    gender: "unisex"
  },
  {
    id: "praessia-42",
    name: "Inspiración Olfativa: Acqua di Gioia",
    image: "/assets/img/perfumes/acqua_di_gioia.png",
    personalities: {
      fresco_vital: 26,
      libre_natural: 20,
      elegante_clasico: 10,
      esencial_moderno: 12,
      sensual_profundo: 4,
      calido_envolvente: 8,
      audaz_magnetico: 8,
      creativo_alternativo: 12
    },
    gender: "femenina"
  },
  {
    id: "praessia-43",
    name: "Inspiración Olfativa: Bright Crystal",
    image: "/assets/img/perfumes/bright_crystal.png",
    personalities: {
      fresco_vital: 24,
      libre_natural: 14,
      elegante_clasico: 8,
      esencial_moderno: 10,
      sensual_profundo: 4,
      calido_envolvente: 20,
      audaz_magnetico: 10,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-44",
    name: "Inspiración Olfativa: Burberry Her",
    image: "/assets/img/perfumes/burberry_her.png",
    personalities: {
      fresco_vital: 14,
      libre_natural: 8,
      elegante_clasico: 6,
      esencial_moderno: 10,
      sensual_profundo: 6,
      calido_envolvente: 24,
      audaz_magnetico: 18,
      creativo_alternativo: 14
    },
    gender: "femenina"
  },
  {
    id: "praessia-45",
    name: "Inspiración Olfativa: Burberry Goddess",
    image: "/assets/img/perfumes/burberry_goddess.png",
    personalities: {
      fresco_vital: 8,
      libre_natural: 5,
      elegante_clasico: 12,
      esencial_moderno: 10,
      sensual_profundo: 16,
      calido_envolvente: 14,
      audaz_magnetico: 24,
      creativo_alternativo: 11
    },
    gender: "femenina"
  },
  {
    id: "praessia-46",
    name: "Inspiración Olfativa: Carolina Herrera (CH tradicional)",
    image: "/assets/img/perfumes/ch_tradicional.png",
    personalities: {
      fresco_vital: 10,
      libre_natural: 6,
      elegante_clasico: 30,
      esencial_moderno: 14,
      sensual_profundo: 10,
      calido_envolvente: 12,
      audaz_magnetico: 12,
      creativo_alternativo: 6
    },
    gender: "femenina"
  },
  {
    id: "praessia-47",
    name: "Inspiración Olfativa: Chance Eau Fraîche",
    image: "/assets/img/perfumes/chance_eau_fraiche.png",
    personalities: {
      fresco_vital: 20,
      libre_natural: 14,
      elegante_clasico: 22,
      esencial_moderno: 16,
      sensual_profundo: 4,
      calido_envolvente: 8,
      audaz_magnetico: 8,
      creativo_alternativo: 8
    },
    gender: "femenina"
  },
  {
    id: "praessia-48",
    name: "Inspiración Olfativa: Coco Mademoiselle",
    image: "/assets/img/perfumes/coco_mademoiselle.png",
    personalities: {
      fresco_vital: 6,
      libre_natural: 4,
      elegante_clasico: 22,
      esencial_moderno: 10,
      sensual_profundo: 24,
      calido_envolvente: 10,
      audaz_magnetico: 16,
      creativo_alternativo: 8
    },
    gender: "femenina"
  },
  {
    id: "praessia-49",
    name: "Inspiración Olfativa: Dona Valentino",
    image: "/assets/img/perfumes/dona_valentino.png",
    personalities: {
      fresco_vital: 8,
      libre_natural: 6,
      elegante_clasico: 14,
      esencial_moderno: 10,
      sensual_profundo: 18,
      calido_envolvente: 22,
      audaz_magnetico: 12,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-50",
    name: "Inspiración Olfativa: CH L'Eau (Eau de Parfum)",
    image: "/assets/img/perfumes/ch_leau.png",
    personalities: {
      fresco_vital: 22,
      libre_natural: 16,
      elegante_clasico: 16,
      esencial_moderno: 16,
      sensual_profundo: 4,
      calido_envolvente: 10,
      audaz_magnetico: 8,
      creativo_alternativo: 8
    },
    gender: "femenina"
  },
  {
    id: "praessia-51",
    name: "Inspiración Olfativa: Fantasy",
    image: "/assets/img/perfumes/fantasy.png",
    personalities: {
      fresco_vital: 12,
      libre_natural: 6,
      elegante_clasico: 4,
      esencial_moderno: 8,
      sensual_profundo: 10,
      calido_envolvente: 30,
      audaz_magnetico: 14,
      creativo_alternativo: 16
    },
    gender: "femenina"
  },
  {
    id: "praessia-52",
    name: "Inspiración Olfativa: Il Femme",
    image: "/assets/img/perfumes/il_femme.png",
    personalities: {
      fresco_vital: 16,
      libre_natural: 12,
      elegante_clasico: 12,
      esencial_moderno: 14,
      sensual_profundo: 8,
      calido_envolvente: 18,
      audaz_magnetico: 10,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-53",
    name: "Inspiración Olfativa: La Bomba (Bombshell)",
    image: "/assets/img/perfumes/la_bomba.png",
    personalities: {
      fresco_vital: 14,
      libre_natural: 8,
      elegante_clasico: 10,
      esencial_moderno: 10,
      sensual_profundo: 10,
      calido_envolvente: 22,
      audaz_magnetico: 18,
      creativo_alternativo: 8
    },
    gender: "femenina"
  },
  {
    id: "praessia-54",
    name: "Inspiración Olfativa: Light Blue",
    image: "/assets/img/perfumes/light_blue.png",
    personalities: {
      fresco_vital: 28,
      libre_natural: 22,
      elegante_clasico: 10,
      esencial_moderno: 14,
      sensual_profundo: 2,
      calido_envolvente: 8,
      audaz_magnetico: 6,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-55",
    name: "Inspiración Olfativa: Moschino Bubble Gum (Toy 2)",
    image: "/assets/img/perfumes/moschino_bubble_gum.png",
    personalities: {
      fresco_vital: 14,
      libre_natural: 6,
      elegante_clasico: 4,
      esencial_moderno: 6,
      sensual_profundo: 6,
      calido_envolvente: 28,
      audaz_magnetico: 10,
      creativo_alternativo: 26
    },
    gender: "femenina"
  },
  {
    id: "praessia-56",
    name: "Inspiración Olfativa: Moschino Funny",
    image: "/assets/img/perfumes/moschino_funny.png",
    personalities: {
      fresco_vital: 20,
      libre_natural: 10,
      elegante_clasico: 6,
      esencial_moderno: 8,
      sensual_profundo: 4,
      calido_envolvente: 18,
      audaz_magnetico: 10,
      creativo_alternativo: 24
    },
    gender: "femenina"
  },
  {
    id: "praessia-57",
    name: "Inspiración Olfativa: Noble Blush",
    image: "/assets/img/perfumes/noble_blush.png",
    personalities: {
      fresco_vital: 10,
      libre_natural: 8,
      elegante_clasico: 20,
      esencial_moderno: 12,
      sensual_profundo: 14,
      calido_envolvente: 20,
      audaz_magnetico: 8,
      creativo_alternativo: 8
    },
    gender: "femenina"
  },
  {
    id: "praessia-58",
    name: "Inspiración Olfativa: Sorbetto Rosso",
    image: "/assets/img/perfumes/sorbetto_rosso.png",
    personalities: {
      fresco_vital: 22,
      libre_natural: 14,
      elegante_clasico: 6,
      esencial_moderno: 10,
      sensual_profundo: 6,
      calido_envolvente: 22,
      audaz_magnetico: 10,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-59",
    name: "Inspiración Olfativa: Valaya",
    image: "/assets/img/perfumes/valaya.png",
    personalities: {
      fresco_vital: 6,
      libre_natural: 4,
      elegante_clasico: 18,
      esencial_moderno: 8,
      sensual_profundo: 22,
      calido_envolvente: 18,
      audaz_magnetico: 16,
      creativo_alternativo: 8
    },
    gender: "femenina"
  },
  {
    id: "praessia-60",
    name: "Inspiración Olfativa: Adrenaline",
    image: "/assets/img/perfumes/adrenaline.png",
    personalities: {
      fresco_vital: 20,
      libre_natural: 14,
      elegante_clasico: 10,
      esencial_moderno: 12,
      sensual_profundo: 6,
      calido_envolvente: 6,
      audaz_magnetico: 26,
      creativo_alternativo: 6
    },
    gender: "masculina"
  },
  {
    id: "praessia-61",
    name: "Inspiración Olfativa: Art of Universe",
    image: "/assets/img/perfumes/art_of_universe.png",
    personalities: {
      fresco_vital: 6,
      libre_natural: 10,
      elegante_clasico: 10,
      esencial_moderno: 12,
      sensual_profundo: 16,
      calido_envolvente: 10,
      audaz_magnetico: 14,
      creativo_alternativo: 22
    },
    gender: "unisex"
  },
  {
    id: "praessia-62",
    name: "Inspiración Olfativa: Bad Boy",
    image: "/assets/img/perfumes/bad_boy.png",
    personalities: {
      fresco_vital: 4,
      libre_natural: 4,
      elegante_clasico: 10,
      esencial_moderno: 10,
      sensual_profundo: 20,
      calido_envolvente: 16,
      audaz_magnetico: 26,
      creativo_alternativo: 10
    },
    gender: "masculina"
  },
  {
    id: "praessia-63",
    name: "Inspiración Olfativa: Blue Seduction",
    image: "/assets/img/perfumes/blue_seduction.png",
    personalities: {
      fresco_vital: 22,
      libre_natural: 16,
      elegante_clasico: 10,
      esencial_moderno: 14,
      sensual_profundo: 6,
      calido_envolvente: 14,
      audaz_magnetico: 12,
      creativo_alternativo: 6
    },
    gender: "masculina"
  },
  {
    id: "praessia-64",
    name: "Inspiración Olfativa: CH (Men tradicional)",
    image: "/assets/img/perfumes/ch_men_tradicional.png",
    personalities: {
      fresco_vital: 8,
      libre_natural: 6,
      elegante_clasico: 28,
      esencial_moderno: 16,
      sensual_profundo: 12,
      calido_envolvente: 10,
      audaz_magnetico: 14,
      creativo_alternativo: 6
    },
    gender: "masculina"
  },
  {
    id: "praessia-65",
    name: "Inspiración Olfativa: Façonnable",
    image: "/assets/img/perfumes/facconable.png",
    personalities: {
      fresco_vital: 16,
      libre_natural: 12,
      elegante_clasico: 22,
      esencial_moderno: 16,
      sensual_profundo: 6,
      calido_envolvente: 10,
      audaz_magnetico: 10,
      creativo_alternativo: 8
    },
    gender: "masculina"
  },
  {
    id: "praessia-66",
    name: "Inspiración Olfativa: Amber Oud Rouge",
    image: "/assets/img/perfumes/amber_ oud_rouge.png",
    personalities: {
      fresco_vital: 2,
      libre_natural: 4,
      elegante_clasico: 10,
      esencial_moderno: 10,
      sensual_profundo: 24,
      calido_envolvente: 20,
      audaz_magnetico: 20,
      creativo_alternativo: 10
    },
    gender: "unisex"
  },
  {
    id: "praessia-67",
    name: "Inspiración Olfativa: Baccarat Rouge 540",
    image: "/assets/img/perfumes/baccarat_rouge_540.png",
    personalities: {
      fresco_vital: 6,
      libre_natural: 4,
      elegante_clasico: 14,
      esencial_moderno: 12,
      sensual_profundo: 20,
      calido_envolvente: 14,
      audaz_magnetico: 22,
      creativo_alternativo: 8
    },
    gender: "unisex"
  },
  {
    id: "praessia-68",
    name: "Inspiración Olfativa: Bianco Latte",
    image: "/assets/img/perfumes/bianco_latte.png",
    personalities: {
      fresco_vital: 8,
      libre_natural: 6,
      elegante_clasico: 6,
      esencial_moderno: 8,
      sensual_profundo: 10,
      calido_envolvente: 32,
      audaz_magnetico: 10,
      creativo_alternativo: 20
    },
    gender: "unisex"
  },
  {
    id: "praessia-69",
    name: "Inspiración Olfativa: Eclaire Banoffi",
    image: "/assets/img/perfumes/eclaire_banoffi.png",
    personalities: {
      fresco_vital: 6,
      libre_natural: 6,
      elegante_clasico: 4,
      esencial_moderno: 8,
      sensual_profundo: 8,
      calido_envolvente: 28,
      audaz_magnetico: 8,
      creativo_alternativo: 32
    },
    gender: "unisex"
  },
  {
    id: "praessia-70",
    name: "Inspiración Olfativa: Eclaire Pistache",
    image: "/assets/img/perfumes/eclaire_pistache.png",
    personalities: {
      fresco_vital: 6,
      libre_natural: 6,
      elegante_clasico: 6,
      esencial_moderno: 10,
      sensual_profundo: 8,
      calido_envolvente: 24,
      audaz_magnetico: 8,
      creativo_alternativo: 32
    },
    gender: "unisex"
  },
  {
    id: "praessia-71",
    name: "Inspiración Olfativa: Oud Maracuja",
    image: "/assets/img/perfumes/oud_maracuja.png",
    personalities: {
      fresco_vital: 8,
      libre_natural: 10,
      elegante_clasico: 8,
      esencial_moderno: 10,
      sensual_profundo: 16,
      calido_envolvente: 12,
      audaz_magnetico: 12,
      creativo_alternativo: 24
    },
    gender: "unisex"
  },
  {
    id: "praessia-72",
    name: "Inspiración Olfativa: Can Can Paris Hilton",
    image: "/assets/img/perfumes/can_can.png",
    personalities: {
      fresco_vital: 5,
      libre_natural: 4,
      elegante_clasico: 8,
      esencial_moderno: 10,
      sensual_profundo: 20,
      calido_envolvente: 19,
      audaz_magnetico: 14,
      creativo_alternativo: 20
    },
    gender: "femenina"
  },
  {
    id: "praessia-73",
    name: "Inspiración Olfativa: 212 Heroes",
    image: "/assets/img/perfumes/212_heroes.png",
    personalities: {
      fresco_vital: 20,
      libre_natural: 16,
      elegante_clasico: 9,
      esencial_moderno: 15,
      sensual_profundo: 8,
      calido_envolvente: 7,
      audaz_magnetico: 12,
      creativo_alternativo: 13
    },
    gender: "masculina"
  },
  {
    id: "praessia-74",
    name: "Inspiración Olfativa: Le Male Elixir",
    image: "/assets/img/perfumes/le_male_elixir.png",
    personalities: {
      fresco_vital: 2,
      libre_natural: 4,
      elegante_clasico: 11,
      esencial_moderno: 13,
      sensual_profundo: 19,
      calido_envolvente: 18,
      audaz_magnetico: 17,
      creativo_alternativo: 16
    },
    gender: "masculina"
  },
  {
    id: "praessia-75",
    name: "Inspiración Olfativa: Eternity",
    image: "/assets/img/perfumes/eternity.png",
    personalities: {
      fresco_vital: 22,
      libre_natural: 18,
      elegante_clasico: 27,
      esencial_moderno: 12,
      sensual_profundo: 4,
      calido_envolvente: 7,
      audaz_magnetico: 4,
      creativo_alternativo: 6
    },
    gender: "masculina"
  },
  {
    id: "praessia-76",
    name: "Inspiración Olfativa: Ultramale Jean Paul Goutier",
    image: "/assets/img/perfumes/ultramale.png",
    personalities: {
      fresco_vital: 5,
      libre_natural: 6,
      elegante_clasico: 7,
      esencial_moderno: 8,
      sensual_profundo: 24,
      calido_envolvente: 22,
      audaz_magnetico: 16,
      creativo_alternativo: 12
    },
    gender: "masculina"
  },
  {
    id: "praessia-77",
    name: "Inspiración Olfativa: Pure Seduction",
    image: "/assets/img/perfumes/pure_seduction.png",
    personalities: {
      fresco_vital: 16,
      libre_natural: 9,
      elegante_clasico: 6,
      esencial_moderno: 13,
      sensual_profundo: 15,
      calido_envolvente: 14,
      audaz_magnetico: 16,
      creativo_alternativo: 11
    },
    gender: "femenina"
  },
  {
    id: "praessia-78",
    name: "Inspiración Olfativa: Coconut Passion",
    image: "/assets/img/perfumes/coconut_passion.png",
    personalities: {
      fresco_vital: 14,
      libre_natural: 13,
      elegante_clasico: 5,
      esencial_moderno: 11,
      sensual_profundo: 14,
      calido_envolvente: 20,
      audaz_magnetico: 13,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-79",
    name: "Inspiración Olfativa: Omnia Crystalline",
    image: "/assets/img/perfumes/omnia_crystalline.png",
    personalities: {
      fresco_vital: 20,
      libre_natural: 15,
      elegante_clasico: 16,
      esencial_moderno: 19,
      sensual_profundo: 4,
      calido_envolvente: 7,
      audaz_magnetico: 9,
      creativo_alternativo: 10
    },
    gender: "femenina"
  },
  {
    id: "praessia-80",
    name: "Inspiración Olfativa: Paris Hilton Heiress",
    image: "/assets/img/perfumes/paris_hilton_heiress.png",
    personalities: {
      fresco_vital: 19,
      libre_natural: 14,
      elegante_clasico: 9,
      esencial_moderno: 12,
      sensual_profundo: 8,
      calido_envolvente: 10,
      audaz_magnetico: 15,
      creativo_alternativo: 13
    },
    gender: "femenina"
  },
  {
    id: "praessia-81",
    name: "Inspiración Olfativa: Amor Amor",
    image: "/assets/img/perfumes/amor_amor.png",
    personalities: {
      fresco_vital: 12,
      libre_natural: 11,
      elegante_clasico: 7,
      esencial_moderno: 13,
      sensual_profundo: 15,
      calido_envolvente: 16,
      audaz_magnetico: 14,
      creativo_alternativo: 12
    },
    gender: "femenina"
  },
  {
    id: "praessia-82",
    name: "Inspiración Olfativa: Omnia Coral",
    image: "/assets/img/perfumes/omnia_coral.png",
    personalities: {
      fresco_vital: 20,
      libre_natural: 16,
      elegante_clasico: 14,
      esencial_moderno: 17,
      sensual_profundo: 8,
      calido_envolvente: 10,
      audaz_magnetico: 12,
      creativo_alternativo: 3
    },
    gender: "femenina"
  },
  {
    id: "praessia-83",
    name: "Inspiración Olfativa: Tommy",
    image: "/assets/img/perfumes/tommy_women.png",
    personalities: {
      fresco_vital: 24,
      libre_natural: 22,
      elegante_clasico: 14,
      esencial_moderno: 15,
      sensual_profundo: 5,
      calido_envolvente: 6,
      audaz_magnetico: 10,
      creativo_alternativo: 4
    },
    gender: "femenina"
  },
  {
    id: "praessia-84",
    name: "Inspiración Olfativa: Scandal Pour Homme",
    image: "/assets/img/perfumes/scandal_pour_homme.png",
    personalities: {
      fresco_vital: 4,
      libre_natural: 5,
      elegante_clasico: 7,
      esencial_moderno: 11,
      sensual_profundo: 18,
      calido_envolvente: 19,
      audaz_magnetico: 20,
      creativo_alternativo: 16
    },
    gender: "masculina"
  },
  {
    id: "praessia-85",
    name: "Inspiración Olfativa: Nautica Voyage",
    image: "/assets/img/perfumes/nautica_voyage.png",
    personalities: {
      fresco_vital: 25,
      libre_natural: 22,
      elegante_clasico: 11,
      esencial_moderno: 16,
      sensual_profundo: 5,
      calido_envolvente: 4,
      audaz_magnetico: 9,
      creativo_alternativo: 8
    },
    gender: "masculina"
  },
  {
    id: "praessia-86",
    name: "Inspiración Olfativa: Sauvage",
    image: "/assets/img/perfumes/sauvage.png",
    personalities: {
      fresco_vital: 16,
      libre_natural: 10,
      elegante_clasico: 9,
      esencial_moderno: 15,
      sensual_profundo: 11,
      calido_envolvente: 8,
      audaz_magnetico: 21,
      creativo_alternativo: 10
    },
    gender: "masculina"
  },
  {
    id: "praessia-87",
    name: "Inspiración Olfativa: Angel",
    image: "/assets/img/perfumes/angel.png",
    personalities: {
      fresco_vital: 2,
      libre_natural: 5,
      elegante_clasico: 7,
      esencial_moderno: 13,
      sensual_profundo: 23,
      calido_envolvente: 19,
      audaz_magnetico: 16,
      creativo_alternativo: 15
    },
    gender: "masculina"
  },
  {
    id: "praessia-88",
    name: "Inspiración Olfativa: Issey Miyake",
    image: "/assets/img/perfumes/issey_miyake.png",
    personalities: {
      fresco_vital: 18,
      libre_natural: 14,
      elegante_clasico: 16,
      esencial_moderno: 17,
      sensual_profundo: 8,
      calido_envolvente: 7,
      audaz_magnetico: 9,
      creativo_alternativo: 11
    },
    gender: "masculina"
  },
  {
    id: "praessia-89",
    name: "Inspiración Olfativa: Bharara King",
    image: "/assets/img/perfumes/bharara_king.png",
    personalities: {
      fresco_vital: 7,
      libre_natural: 5,
      elegante_clasico: 13,
      esencial_moderno: 14,
      sensual_profundo: 16,
      calido_envolvente: 18,
      audaz_magnetico: 17,
      creativo_alternativo: 10
    },
    gender: "masculina"
  },
  {
    id: "praessia-90",
    name: "Inspiración Olfativa: Yara Candy",
    image: "/assets/img/perfumes/yara_candy.png",
    personalities: {
      fresco_vital: 10,
      libre_natural: 9,
      elegante_clasico: 8,
      esencial_moderno: 13,
      sensual_profundo: 16,
      calido_envolvente: 19,
      audaz_magnetico: 13,
      creativo_alternativo: 12
    },
    gender: "femenina"
  },
  {
    id: "praessia-91",
    name: "Inspiración Olfativa: Odyssey Candee",
    image: "/assets/img/perfumes/odyssey_candee.png",
    personalities: {
      fresco_vital: 10,
      libre_natural: 6,
      elegante_clasico: 5,
      esencial_moderno: 16,
      sensual_profundo: 18,
      calido_envolvente: 19,
      audaz_magnetico: 13,
      creativo_alternativo: 13
    },
    gender: "femenina"
  }
];