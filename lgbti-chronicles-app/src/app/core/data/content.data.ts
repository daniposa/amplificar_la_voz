import type { LocalizedContent, CardData, LandingCredits } from '../models/content.model';
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
      es: 'Crónicas',
      fr: 'Chroniques',
      en: 'Chronicles',
    } satisfies LocalizedContent,
    second: {
      es: 'Comentarios de la traducción',
      fr: 'Commentaires de la traduction',
      en: 'Translation Comments',
    } satisfies LocalizedContent,
  },
};

/**
 * Credits on the landing page (below the three buttons).
 * Edit `sectionTitle` and `lines` to match your project.
 */
export const LANDING_CREDITS: LandingCredits = {
  sectionTitle: 'Créditos',
  lines: [
    {
      label: 'Traductoras / Translators',
      names: 'Juan Pérez Gil, María García López',
    },
    {
      label: 'Revisión editorial / Editorial review',
      names: 'Ana Rodríguez Martínez',
    },
    {
      label: 'Diseño y desarrollo / Design & development',
      names: 'Equipo de publicación digital',
    },
    {
      label: 'Agradecimientos / Acknowledgements',
      names: 'Comunidad LGTBI+ que compartió estas crónicas',
    },
  ],
};

/** @deprecated Use PAGE_CONFIG.title instead */
export const PROJECT_TITLE = PAGE_CONFIG.title;

/** @deprecated Use PAGE_CONFIG.tabs.intro instead */
export const TAB_INTRO_LABEL = PAGE_CONFIG.tabs.intro;

/** @deprecated Use PAGE_CONFIG.tabs.second instead */
export const TAB_SECOND_LABEL = PAGE_CONFIG.tabs.second;

export const INTRO_TEXT: LocalizedContent = {
  es: 'Español: texto de prueba 2 jsuiashfuashfw Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  fr: 'Français: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  en: 'English: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
};

export const TAB2_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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
    title: { es: '¿Qué pasó?', fr: 'Qu’est-ce qu’il a passé ?', en: 'What happened?' },
    description: {
      es: 'Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fr: 'Français: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      en: 'English: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    imagePath: 'images/paisajes/paisaje_que_paso.avif',
    hotspots: buildGridHotspots(CHRONICLES_T1, { prefix: 't1' }),
  },
  {
    id: 2,
    title: { es: '¿Por qué pasó?', fr: 'Pourquoi il a passé ?', en: 'Why did it happen?' },
    description: {
      es: 'Español: Sed do eiusmod tempor incididunt ut labore et dolore.',
      fr: 'Français: Sed do eiusmod tempor incididunt ut labore et dolore.',
      en: 'English: Sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    imagePath: 'images/paisajes/paisaje_por_que_paso.avif',
    hotspots: buildGridHotspots(CHRONICLES_T2, { prefix: 't2' }),
  },
  {
    id: 3,
    title: {
      es: '¿Qué pasó con lo que pasó?',
      fr: 'Qu’est-ce qu’il a passé avec ce qu’il a passé ?',
      en: 'What happened with what happened?',
    },
    description: {
      es: 'Español: Ut enim ad minim veniam, quis nostrud exercitation.',
      fr: 'Français: Ut enim ad minim veniam, quis nostrud exercitation.',
      en: 'English: Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    imagePath: 'images/paisajes/paisaje_que paso_con_lo_que_paso.avif',
    hotspots: buildGridHotspots(CHRONICLES_T3, { prefix: 't3' }),
  },
];
