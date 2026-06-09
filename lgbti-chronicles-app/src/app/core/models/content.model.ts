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
  /**
   * Chronicle body as a small HTML fragment (one per language). Same safe tag set as
   * `tooltips` / `contextInfo`: `<p>`, `<br>`, `<strong>`, `<em>`,
   * `<a href="https://…" target="_blank" rel="noopener noreferrer">`,
   * `<img src="images/…" alt="…" width="…">`, etc.
   * Use `{N}…{/N}` anywhere inside the fragment to mark tooltip highlights.
   * Plain text without block tags is wrapped in a single implicit `<p>` at render time.
   */
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
  /**
   * Optional position of this chronicle's hotspot button on the image. When set,
   * it overrides the automatic grid layout. Configure it in the chronicle file.
   */
  hotspot?: HotspotPlacement;
}

/**
 * Position (and optional size) of a hotspot button over the chronicle image.
 * `x` / `y` are percentages (0–100) measured to the button's center.
 */
export interface HotspotPlacement {
  /** Horizontal center, as a % of the image width (0 = left, 100 = right). */
  x: number;
  /** Vertical center, as a % of the image height (0 = top, 100 = bottom). */
  y: number;
  /** Clickable width as a % of the image width. Optional. */
  width?: number;
  /** Clickable height as a % of the image height. Optional. */
  height?: number;
}

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  modalContent: LocalizedModalContent;
}

/**
 * Where a card sits on the chronicles image and how big it is.
 * `x` / `y` are percentages of the rendered image (0–100), measured to the
 * card's center, so a card can be placed anywhere inside the image.
 */
export interface CardPlacement {
  /** Horizontal center position, as a % of the image width (0 = left, 100 = right). */
  x: number;
  /** Vertical center position, as a % of the image height (0 = top, 100 = bottom). */
  y: number;
  /** Card width in pixels. */
  width: number;
  /**
   * Minimum card height in pixels. The card grows taller if the text needs more
   * room, so the actual height is `max(height, content height)`. Optional.
   */
  height?: number;
}

/**
 * Optional typography overrides for a card's title. Any field left undefined
 * falls back to the default card styling. Values are raw CSS strings.
 */
export interface CardTextStyle {
  /** CSS font-family, e.g. `'Georgia, serif'`. */
  fontFamily?: string;
  /** CSS font-size, e.g. `'1.25rem'` or `'20px'`. */
  fontSize?: string;
  /** CSS color, e.g. `'#2c2420'` or `'var(--color-accent)'`. */
  color?: string;
}

export interface CardData {
  id: number;
  title: LocalizedContent;
  imagePath: string;
  /** Position and size of the card over the chronicles image. */
  placement: CardPlacement;
  /** Optional typography overrides for the card title. */
  textStyle?: CardTextStyle;
  /**
   * Background opacity of the card (0 = fully transparent, 1 = opaque).
   * Defaults to 0.28 when omitted.
   */
  backgroundAlpha?: number;
  hotspots: Hotspot[];
}

/** One line on the landing page credits block (role + names). */
export interface CreditLine {
  label: string;
  names: string;
}

/** A button on the landing page (label, subtext, and target route). */
export interface LandingButton {
  /** Main button text, e.g. "English". */
  label: string;
  /** Smaller text under the label, e.g. "Read the chronicles". */
  sub: string;
  /** Router path the button navigates to, e.g. "/en". */
  routerLink: string;
  /** When true, applies the muted "comments" styling variant. */
  isComments?: boolean;
}

/** Credits shown on the home (landing) page below the main buttons. */
export interface LandingCredits {
  sectionTitle: string;
  lines: CreditLine[];
}
