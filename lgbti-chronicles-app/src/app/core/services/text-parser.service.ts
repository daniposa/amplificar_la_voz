import { Injectable } from '@angular/core';

const MARKER_REGEX = /\{(\d+)\}(.*?)\{\/\1\}/g;

const BLOCK_TAG_REGEX =
  /^<(p|div|ul|ol|h[1-6]|blockquote|section|article|header|footer|main|aside|nav|table|figure|pre)\b/i;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrapImplicitParagraph(html: string): string {
  const trimmed = html.trim();
  if (!trimmed) return trimmed;
  if (BLOCK_TAG_REGEX.test(trimmed)) return html;
  return `<p>${html}</p>`;
}

@Injectable({ providedIn: 'root' })
export class TextParserService {
  /**
   * Converts `{N}…{/N}` markers in an HTML fragment into highlight spans for rendering.
   * Surrounding HTML is preserved; highlight inner text is escaped.
   */
  markedTextToHtml(rawText: string, idPrefix = ''): string {
    let html = '';
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    MARKER_REGEX.lastIndex = 0;
    while ((match = MARKER_REGEX.exec(rawText)) !== null) {
      html += rawText.slice(lastIndex, match.index);
      const id = `${idPrefix}${match[1]}`;
      html += `<span class="highlight tooltip-ref-${id}" data-tooltip-id="${id}">${escapeHtml(match[2])}</span>`;
      lastIndex = MARKER_REGEX.lastIndex;
    }

    html += rawText.slice(lastIndex);
    return wrapImplicitParagraph(html);
  }
}
