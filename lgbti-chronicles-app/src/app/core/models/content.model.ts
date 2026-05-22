import type { Language } from '../services/language.service';

export interface LocalizedContent {
  es: string;
  fr: string;
  en: string;
}

/** Per-language strings where each locale is optional (used for contextual info HTML). */
export interface PartialLocalizedContent {
  es?: string | null;
  fr?: string | null;
  en?: string | null;
}

export interface ModalContent {
  title: string;
  rawText: string;
  tooltips: Record<number, string>;
}

export interface LocalizedModalContent {
  title: LocalizedContent;
  rawText: LocalizedContent;
  /**
   * Tooltip HTML for each highlight marker id. Use a small HTML fragment: `<p>`, `<br>`,
   * `<strong>`, `<a href="https://…" target="_blank" rel="noopener noreferrer">`,
   * `<img src="images/…" alt="…" width="…">` (paths under `images/` work at runtime).
   */
  tooltips: Record<number, LocalizedContent>;
  /**
   * Optional HTML for the "Contextual information" panel (one fragment per language).
   * Resolved at render time: current lang → es → fr → en. Same safe tags as tooltips.
   */
  contextInfo?: PartialLocalizedContent;
}

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  modalContent: LocalizedModalContent;
}

export interface CardData {
  id: number;
  title: LocalizedContent;
  description: LocalizedContent;
  imagePath: string;
  hotspots: Hotspot[];
}

/** One line on the landing page credits block (role + names). */
export interface CreditLine {
  label: string;
  names: string;
}

/** Credits shown on the home (landing) page below the main buttons. */
export interface LandingCredits {
  sectionTitle: string;
  lines: CreditLine[];
}
