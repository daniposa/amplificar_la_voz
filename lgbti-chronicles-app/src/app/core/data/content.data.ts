Sánchezz type {
  LocalizedContent,
  CardData,
  LandingCredits,
  LandingButton,
} from '../models/content.model';
import { CHRONICLES_T1 } from './chronicles/thematic-1';
import { CHRONICLES_T2 } from './chronicles/thematic-2';
import { CHRONICLES_T3 } from './chronicles/thematic-3';
import { buildGridHotspots } from './chronicles/hotspot-layout';

/**
 * Page configuration - edit these values to customize the page title and tab labels.
 * All titles support Spanish (es), French (fr), and English (en).
 */
/** Path to the panoramic image shown behind the cards in the Chronicles tab. */
export const PANORAMA_IMAGE = {
  es: 'images/fondos/fondo_ingles.avif', // O la ruta en español si existiera
  fr: 'images/fondos/fondo_frances.avif', // 👈 ¡Aquí pones tu nueva ruta!
  en: 'images/fondos/fondo_ingles.avif'
};
/** Labels for chronicle modal UI (contextual info button). */
export const CHRONICLE_UI = {
  contextInfoButton: {
    es: 'Información contextual',
    fr: 'Informations contextuelles',
    en: 'Contextual information',
  } satisfies LocalizedContent,
};

export const PAGE_CONFIG = {
  /** Main page title (header and browser tab) */
  title: {
    // ✍️ Usamos \n para indicar exactamente dónde quieres que se quiebre el texto
    es: 'Amplificar la voz\nde las víctimas\npara la no-repetición',
    fr: 'Amplifier la voix\ndes victimes\npour la non-répétition',
    en: 'Amplifying the victims\' voice\nfor non-repetition',
  } satisfies LocalizedContent,
  
  /** Tab labels */
  tabs: {
    intro: {
      es: 'Introducción',
      fr: 'Introduction',
      en: 'Introduction',
    } satisfies LocalizedContent,
    chronicles: {
      es: 'Testimonios',
      fr: 'Témoignages',
      en: 'Testimonies',
    } satisfies LocalizedContent,
    second: {
      es: 'Comentarios de la traducción',
      fr: 'Commentaires de la traduction',
      en: 'Translation Comments',
    } satisfies LocalizedContent,
  },
};

/**
 * Buttons on the landing page. Edit `label` and `sub` to customize each
 * button's text, and `routerLink` to change where it navigates.
 */
export const LANDING_BUTTONS: LandingButton[] = [
  {
    label: 'English',
    sub: 'Read the testimonies',
    routerLink: '/en',
  },
  {
    label: 'Français',
    sub: 'Lire les témoignages',
    routerLink: '/fr',
  },
  {
    label: 'Comentarios',
    sub: 'Sobre el proceso de traducción',
    routerLink: '/comments',
    isComments: true,
  },
];

/**
 * Credits on the landing page (below the three buttons).
 * Edit `sectionTitle` and `lines` to match your project.
 */
export const LANDING_CREDITS: LandingCredits = {
  sectionTitle: 'Créditos',
  lines: [
    {
      label: 'Integrantes del Semillero',
      names: ' Andrea Carolina Figueroa Mendoza (Corozal, Sucre) (traductora )<br>Cristian Muñoz Sánchez (Yarumal, Antioquia) (traductor)<br>Luisa Fernanda Vélez Agudelo (Medellín, Antioquia) (correctora de estilo)<br>Mariana Collo Reyes (Popayán, Cauca) (traductora)<br>Mariana Macías García (San Antonio de Prado, Antioquia) (traductora)<br>Mariana Rojas Agudelo (Bello, Antioquia) (traductora, coordinadora)<br>Paula Andrea Montoya Arango (Medellín, Antioquia) (profesora, coordinadora)<br>Sergio Andrés Paz Gómez (Popayán, Cauca) (traductor, programador)<br>Valentina Castañeda Márquez (Bogotá, Bogotá D. C.) (traductora)',
    },
    {
      label: 'Ilustradoras',
      names: ' FLECHA ROJA/ Laura Rojas Sabogal (@flecharojaa)<br>Michell Restrepo (@micphre)<br>Némxsis (@nemxsisinthewoods)',
    },
    {
      label: 'Revisoras',
      names: ' Camille Jeannel (practicante de traducción y traductora de inglés y español al francés)<br>Claudia Urrego (traductora)<br>Doris Correa (coordinadora de Centro de Multiliteracidades)<br>Galice Arias-Lesur (practicante de traducción y traductora de inglés y español al francés)<br>Lauryne Angot (practicante de traducción)',
    },
    {
      label: 'Asesores de Prácticas',
      names: ' Alejandro Arroyave Tobón (profesor)<br>Daniel Felipe Jaramillo Giraldo (profesor)<br>Juan Guillermo Ramírez Giraldo (profesor)',
    },
    {
      label: 'Programación del Sitio Web',
      names: ' Daniela Posada (ingeniera)<br>Sergio Andrés Paz Gómez (Popayán, Cauca) (traductor, programador)',
    },
    {
      label: 'Apoyo Institucional, Escuela de Idiomas',
      names: ' Andrea Tobón Marín (comunicadora)<br>Catalina Tobón Sánchez (auxiliar de la Coordinación de Investigaciones)<br>Jaime Usma (director)<br>Jorge Mario Porras Garzón (coordinador de Investigaciones)<br>Juan Camilo Monsalve García (diseñador)<br>Luis Octavio Valle García (auxiliar de la Coordinación de Investigaciones)<br>Mario David Palacio (coordinador de la Agencia de Traducción)',
    },
  ],
};

/** @deprecated Use PAGE_CONFIG.title instead */
export const PROJECT_TITLE = PAGE_CONFIG.title;

/** @deprecated Use PAGE_CONFIG.tabs.intro instead */
export const TAB_INTRO_LABEL = PAGE_CONFIG.tabs.intro;

/** @deprecated Use PAGE_CONFIG.tabs.second instead */
export const TAB_SECOND_LABEL = PAGE_CONFIG.tabs.second;

/*
 * ── Chronicles data ───────────────────────────────────────────────────────────
 * Each thematic's chronicles live under `chronicles/thematic-N/` (one file per
 * chronicle). Hotspots are laid out on a grid via `buildGridHotspots`.
 *
 * Tooltip HTML fragments: see chronicle files and the former content.data.ts
 * comment block for allowed tags (<p>, <br>, <a>, <img>, etc.).
 */

export const CARDS_DATA: CardData[] = [
  {
    id: 1,
    title: { es: '', fr: '', en: '' },
    imagePath: 'images/paisajes/paisaje_que_paso.avif',
    // Position (x, y in % of the image) and size (width in px) of this card.
    placement: { x: 20.351, y: 67.859, width: 142, height: 40 },
    // Title typography (any field is optional and falls back to the default).
    textStyle: {
      fontFamily: 'var(--font-hand)',
      fontSize: '1.1rem',
      color: 'var(--color-ink)',
    },
    // Background opacity (0 = transparent, 1 = opaque).
    backgroundAlpha: 0.1,
    hotspots: buildGridHotspots(CHRONICLES_T1, { prefix: 't1' }),
  },
  {
    id: 2,
    title: { es: '', fr: '', en: '' },
    imagePath: 'images/paisajes/paisaje_por_que_paso.avif',
    // Position (x, y in % of the image) and size (width in px) of this card.
    placement: { x: 50.292, y: 66.42, width: 120, height: 40 },
    // Title typography (any field is optional and falls back to the default).
    textStyle: {
      fontFamily: 'var(--font-hand)',
      fontSize: '1.1rem',
      color: 'var(--color-ink)',
    },
    // Background opacity (0 = transparent, 1 = opaque).
    backgroundAlpha: 0.1,
    hotspots: buildGridHotspots(CHRONICLES_T2, { prefix: 't2' }),
  },
  {
    id: 3,
    title: {
      es: '¿',
      fr: '',
      en: '',
    },
    imagePath: 'images/paisajes/paisaje_que paso_con_lo_que_paso.avif',
    // Position (x, y in % of the image) and size (width in px) of this card.
    placement: { x: 79.667, y: 63.653, width: 130, height: 35 },
    // Title typography (any field is optional and falls back to the default).
    textStyle: {
      fontFamily: 'var(--font-hand)',
      fontSize: '1.1rem',
      color: 'var(--color-ink)',
    },
    // Background opacity (0 = transparent, 1 = opaque).
    backgroundAlpha: 0.1,
    hotspots: buildGridHotspots(CHRONICLES_T3, { prefix: 't3' }),
  },
];
