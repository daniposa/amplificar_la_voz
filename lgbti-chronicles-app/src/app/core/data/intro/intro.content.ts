import type { LocalizedContent } from '../../models/content.model';

/**
 * Content for the Introduction tab on the chronicles page, one HTML fragment per
 * language. Stored separately like the chronicles and comments content.
 *
 * The same safe tag set is supported and sanitized at render time: `<p>`,
 * `<br>`, `<strong>`, `<em>`, `<a href="https://…" target="_blank"
 * rel="noopener noreferrer">`, `<img src="images/…" alt="…" width="…">`, etc.
 */
export const INTRO_CONTENT: LocalizedContent = {
  es: `<p>Español: texto de prueba 2 jsuiashfuashfw Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`,
  fr: `<p>Français: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`,
  en: `<p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`,
};
