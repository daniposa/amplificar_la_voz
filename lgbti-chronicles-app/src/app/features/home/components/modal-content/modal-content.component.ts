import {
  Component,
  EventEmitter,
  Input,
  Output,
  SecurityContext,
  inject,
  computed,
  signal,
} from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import { TextParserService } from '../../../../core/services/text-parser.service';
import { HighlightTooltipsDirective } from '../../../../shared/directives/highlight-tooltips.directive';
import { LanguageService, type Language } from '../../../../core/services/language.service';
import { CHRONICLE_UI } from '../../../../core/data/content.data';
import type {
  LocalizedModalContent,
  PartialLocalizedContent,
} from '../../../../core/models/content.model';

interface ResolvedModalContent {
  title: string;
  bodyHtml: SafeHtml;
  tooltipsForLang: Record<string, string>;
}

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [HighlightTooltipsDirective],
  template: `
    <div class="modal-backdrop" (click)="close.emit()">
      <div class="modal-box" (click)="$event.stopPropagation()">
        <button class="modal-close" (click)="close.emit()" aria-label="Close">&times;</button>

        <div class="page-flipper" [class.flipped]="showSpanish()">
          <!-- Front face: original language -->
          <div class="page-face page-front">
            @if (resolvedContent(); as content) {
              @if (content.title) {
                <h2 class="modal-title">{{ content.title }}</h2>
              }
              <div
                class="modal-body chapter-text"
                [innerHTML]="content.bodyHtml"
                [appHighlightTooltips]="content.tooltipsForLang"
              ></div>
            }
            @if (langService.language() !== 'es' || hasContextInfo()) {
              <div class="action-bar">
                @if (langService.language() !== 'es') {
                  <button class="flip-btn" (click)="showSpanish.set(true)">
                    <span class="material-icons">translate</span>
                    Original
                    <span class="material-icons arrow-right">chevron_right</span>
                  </button>
                }
                @if (hasContextInfo()) {
                  <button
                    type="button"
                    class="flip-btn context-btn"
                    [class.active]="showContext()"
                    (click)="showContext.set(!showContext())"
                  >
                    <span class="material-icons">info_outline</span>
                    {{ contextInfoBtnLabel() }}
                  </button>
                }
                @if (showContext() && safeContextHtml(); as html) {
                  <div class="context-panel" [innerHTML]="html"></div>
                }
              </div>
            }
          </div>

          <!-- Back face: Spanish translation -->
          <div class="page-face page-back">
            <div class="lang-badge">
              <span class="material-icons">translate</span>
              Original
            </div>
            @if (spanishContent(); as es) {
              @if (es.title) {
                <h2 class="modal-title">{{ es.title }}</h2>
              }
              <div
                class="modal-body chapter-text"
                [innerHTML]="es.bodyHtml"
                [appHighlightTooltips]="es.tooltipsForLang"
              ></div>
            }
            <div class="action-bar">
              <button class="flip-btn flip-back" (click)="showSpanish.set(false)">
                <span class="material-icons arrow-left">chevron_left</span>
                {{ backLabel() }}
              </button>
              @if (hasSpanishContextInfo()) {
                <button
                  type="button"
                  class="flip-btn context-btn"
                  [class.active]="showContextEs()"
                  (click)="showContextEs.set(!showContextEs())"
                >
                  <span class="material-icons">info_outline</span>
                  {{ spanishContextBtnLabel }}
                </button>
              }
              @if (showContextEs() && safeSpanishContextHtml(); as html) {
                <div class="context-panel" [innerHTML]="html"></div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(44, 36, 32, 0.45);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }
      .modal-box {
        background: transparent;
        border-radius: 4px;
        max-width: min(90vw, var(--reading-width));
        max-height: 80vh;
        overflow: auto;
        position: relative;
        perspective: 1400px;
        perspective-origin: center center;
      }
      .modal-close {
        position: absolute;
        top: var(--space-sm);
        right: var(--space-sm);
        background: none;
        border: none;
        font-size: 1.75rem;
        cursor: pointer;
        color: var(--color-ink-muted);
        line-height: 1;
        font-family: var(--font-body);
        transition: color 0.2s;
        z-index: 20;
      }
      .modal-close:hover {
        color: var(--color-ink);
      }

      /* ── 3-D flipper ── */
      .page-flipper {
        display: grid;
        transform-style: preserve-3d;
        transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .page-flipper.flipped {
        transform: rotateY(-180deg);
      }
      .page-face {
        grid-area: 1 / 1;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        background: var(--color-paper);
        border-radius: 4px;
        padding: var(--space-xl);
        box-shadow: var(--shadow-modal);
        border: 1px solid var(--color-border);
      }
      .page-back {
        transform: rotateY(180deg);
        background: var(--color-paper-warm);
        border-color: var(--color-border-soft);
      }

      /* ── content ── */
      .modal-title {
        font-family: var(--font-display);
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--color-ink);
        margin: 0 0 var(--space-lg) 0;
        letter-spacing: 0.02em;
      }
      .modal-body.chapter-text {
        padding-right: var(--space-xl);
        font-size: 1.05rem;
        line-height: 1.85;
        color: var(--color-ink);
      }
      .modal-body.chapter-text ::ng-deep > p {
        margin: 0 0 var(--space-md) 0;
      }
      .modal-body.chapter-text ::ng-deep > p:last-child {
        margin-bottom: 0;
      }
      .modal-body.chapter-text ::ng-deep > p:first-child::first-letter {
        font-family: var(--font-display);
        font-size: 3rem;
        float: left;
        line-height: 1;
        margin-right: 0.35rem;
        margin-top: 0.05rem;
        color: var(--color-ink);
      }
      .highlight {
        background: rgba(139, 105, 20, 0.15);
        padding: 0 0.15em;
        border-bottom: 1px dotted var(--color-accent);
      }

      /* ── action bar ── */
      .action-bar {
        margin-top: var(--space-lg);
        padding-top: var(--space-md);
        border-top: 1px solid var(--color-border-soft);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-sm);
      }
      .context-panel {
        flex: 1 1 100%;
        margin-top: var(--space-sm);
        padding: var(--space-md);
        border: 1px solid var(--color-border-soft);
        border-radius: 4px;
        background: var(--color-paper-warm);
        font-family: var(--font-body);
        font-size: 0.95rem;
        color: var(--color-ink);
        line-height: 1.6;
      }
      .context-panel ::ng-deep p {
        margin: 0 0 var(--space-xs) 0;
      }
      .context-panel ::ng-deep p:last-child {
        margin-bottom: 0;
      }
      .flip-btn.context-btn.active {
        border-color: var(--color-accent);
        color: var(--color-accent);
        background: rgba(139, 105, 20, 0.05);
      }
      .flip-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        background: none;
        border: 1px solid var(--color-border);
        border-radius: 4px;
        padding: 0.45rem 0.9rem;
        font-family: var(--font-body);
        font-size: 0.875rem;
        color: var(--color-ink-muted);
        cursor: pointer;
        transition: all 0.2s;
      }
      .flip-btn .material-icons {
        font-size: 1.1rem;
      }
      .flip-btn:hover {
        border-color: var(--color-accent);
        color: var(--color-accent);
        background: rgba(139, 105, 20, 0.05);
      }
      .flip-back {
        color: var(--color-ink-light);
      }

      /* ── Spanish badge ── */
      .lang-badge {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-family: var(--font-body);
        font-size: 0.75rem;
        font-style: italic;
        color: var(--color-ink-light);
        text-transform: uppercase;
        letter-spacing: 0.07em;
        margin-bottom: var(--space-md);
      }
      .lang-badge .material-icons {
        font-size: 1rem;
      }
    `,
  ],
})
export class ModalContentComponent {
  private parser = inject(TextParserService);
  private sanitizer = inject(DomSanitizer);
  langService = inject(LanguageService);

  @Input() set content(value: LocalizedModalContent | null) {
    this.localizedContent.set(value);
    this.showSpanish.set(false);
    this.showContext.set(false);
    this.showContextEs.set(false);
  }
  @Output() close = new EventEmitter<void>();

  private localizedContent = signal<LocalizedModalContent | null>(null);
  showSpanish = signal(false);
  showContext = signal(false);
  showContextEs = signal(false);

  readonly spanishContextBtnLabel = CHRONICLE_UI.contextInfoButton.es;

  resolvedContent = computed<ResolvedModalContent | null>(() =>
    this.resolve(this.langService.language()),
  );

  spanishContent = computed<ResolvedModalContent | null>(() => this.resolve('es'));

  backLabel = computed(() =>
    this.langService.language() === 'fr' ? 'Français' : 'English',
  );

  contextInfoBtnLabel = computed(() => CHRONICLE_UI.contextInfoButton[this.langService.language()]);

  resolvedContextHtml = computed(() =>
    resolvePartialLocalized(this.localizedContent()?.contextInfo, this.langService.language()),
  );

  hasContextInfo = computed(() => this.resolvedContextHtml() !== null);

  safeContextHtml = computed((): SafeHtml | null => {
    const html = this.resolvedContextHtml();
    if (!html) return null;
    const clean = this.sanitizer.sanitize(SecurityContext.HTML, html) ?? '';
    return this.sanitizer.bypassSecurityTrustHtml(clean);
  });

  spanishContextHtml = computed(() =>
    resolvePartialLocalized(this.localizedContent()?.contextInfo, 'es'),
  );

  hasSpanishContextInfo = computed(() => this.spanishContextHtml() !== null);

  safeSpanishContextHtml = computed((): SafeHtml | null => {
    const html = this.spanishContextHtml();
    if (!html) return null;
    const clean = this.sanitizer.sanitize(SecurityContext.HTML, html) ?? '';
    return this.sanitizer.bypassSecurityTrustHtml(clean);
  });

  private resolve(lang: Language): ResolvedModalContent | null {
    const lc = this.localizedContent();
    if (!lc) return null;
    const title = lc.title[lang];
    const rawText = lc.rawText[lang];
    const tooltipsForLang: Record<string, string> = {};
    for (const [k, v] of Object.entries(lc.tooltips)) {
      tooltipsForLang[k] = v[lang];
    }
    const html = this.parser.markedTextToHtml(rawText);
    const clean = this.sanitizer.sanitize(SecurityContext.HTML, html) ?? '';
    const bodyHtml = this.sanitizer.bypassSecurityTrustHtml(clean);
    return { title, bodyHtml, tooltipsForLang };
  }
}

function resolvePartialLocalized(
  partial: PartialLocalizedContent | undefined,
  current: Language,
): string | null {
  if (!partial) return null;
  const order: Language[] = [current, 'es', 'fr', 'en'];
  const seen = new Set<Language>();
  for (const lang of order) {
    if (seen.has(lang)) continue;
    seen.add(lang);
    const value = partial[lang];
    if (typeof value === 'string' && value.trim().length > 0) {
      return value;
    }
  }
  return null;
}
