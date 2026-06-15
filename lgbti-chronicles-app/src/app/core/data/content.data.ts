import type {
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
export const PANORAMA_IMAGE = 'images/fondos/fondo_ingles.avif';

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
    es: 'Amplificar la voz de las víctimas para la no-repetición',
    fr: 'Amplifier la voix des victimes pour éviter la répétition',
    en: 'Amplifying the voices of victims to avoid repetition',
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
  sectionTitle: 'Créditos / Credits',
  lines: [
    {
      label: 'Integrantes del Semillero / Research Group Members',
      names: ' Andrea Carolina Figueroa Mendoza (Corozal, Sucre) (traductora / translator)<br>Cristian Muñoz Sanchez (Yarumal, Antioquia) (traductor / translator)<br>Luisa Fernanda Vélez Agudelo (Medellín, Antioquia) (correctora de estilo / proofreader)<br>Mariana Collo Reyes (Popayán, Cauca) (traductora / translator)<br>Mariana Macías García (San Antonio de Prado, Antioquia) (traductora / translator)<br>Mariana Rojas Agudelo (Bello, Antioquia) (traductora, coordinadora / translator, coordinator)<br>Paula Andrea Montoya Arango (Medellín, Antioquia) (profesora, coordinadora / professor, coordinator)<br>Sergio Andrés Paz Gómez (Popayán, Cauca) (traductor, programador / translator, programmer)<br>Valentina Castañeda Márquez (Bogotá, Bogotá D. C.) (traductora / translator)',
    },
    {
      label: 'Ilustradoras / Illustrators',
      names: ' FLECHA ROJA/ Laura Rojas Sabogal (@flecharojaa)<br>Michell Restrepo (@micphre)<br>Némxsis (@nemxsisinthewoods)',
    },
    {
      label: 'Revisoras / Proofreaders',
      names: ' Camille Jeannel (practicante de traducción y traductora de inglés y español al francés / translation intern and translator from English and Spanish into French)<br>Doris Correa (Centro de Multiliteracidades)<br>Galice Arias-Lesur (practicante de traducción y traductora de inglés y español al francés / translation intern and translator from English and Spanish into French)<br>Lauryne Angot (translation intern)',
    },
    {
      label: 'Asesores de Prácticas / Internship Advisors',
      names: ' Alejandro Arroyave Tobón (profesor / professor)<br>Daniel Felipe Jaramillo Giraldo (profesor / professor)<br>Juan Guillermo Ramírez Giraldo (profesor / professor)',
    },
    {
      label: 'Programación del Sitio Web / Web Programming',
      names: ' Daniela Posada (ingeniera / engineer)',
    },
    {
      label: 'Apoyo Institucional / Institutional Support',
      names: ' Catalina Tobón Sánchez (auxiliar de la Coordinación de Investigaciones / Research Coordination assistant)<br>Jaime Usma (director Escuela de Idiomas / School of Languages director)<br>Jorge Mario Porras Garzón (Coordinación de Investigaciones Escuela de Idiomas / Research Coordination Office of the School of Languages)<br>Luis Octavio Valle García (auxiliar de la Coordinación de Investigaciones / Research Coordination assistant)<br>Mario David Palacio (Agencia de Traducción, Escuela de Idiomas / Translation Agency, School of Languages)',
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
    placement: { x: 20.351, y: 67.859, width: 116, height: 32 },
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
    placement: { x: 50.292, y: 66.42, width: 92, height: 31 },
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
    placement: { x: 79.667, y: 63.653, width: 104, height: 24 },
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
