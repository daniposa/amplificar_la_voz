import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Language } from '../../core/services/language.service';
import { CARDS_DATA, LANDING_BUTTONS, PAGE_CONFIG } from '../../core/data/content.data';

/** One entry in the sitemap drawer (optional nested children). */
interface SitemapItem {
  label: string;
  route: string;
  queryParams?: Record<string, string | number>;
  children?: SitemapItem[];
}

function chroniclesBranch(lang: Language, route: string): SitemapItem {
  const tabIntro = PAGE_CONFIG.tabs.intro[lang];
  const tabChronicles = PAGE_CONFIG.tabs.chronicles[lang];
  const landingBtn = LANDING_BUTTONS.find((b) => b.routerLink === route);

  return {
    label: landingBtn?.label ?? route,
    route,
    children: [
      {
        label: tabIntro,
        route,
        queryParams: { tab: 'intro' },
      },
      {
        label: tabChronicles,
        route,
        queryParams: { tab: 'chronicles' },
        children: CARDS_DATA.map((card) => ({
          label: card.title[lang],
          route,
          queryParams: { tab: 'chronicles', card: card.id },
        })),
      },
    ],
  };
}

@Component({
  selector: 'app-sitemap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <button
      type="button"
      class="sitemap-toggle"
      [attr.aria-expanded]="open()"
      aria-label="Open site navigation"
      (click)="$event.stopPropagation(); toggle()"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    @if (open()) {
      <div class="sitemap-overlay" (click)="close()" aria-hidden="true"></div>
      <nav class="sitemap-drawer" role="navigation" aria-label="Site map">
        <header class="sitemap-header">
          <h2 class="sitemap-title">Mapa del sitio</h2>
          <button
            type="button"
            class="sitemap-close"
            aria-label="Close navigation"
            (click)="close()"
          >
            &times;
          </button>
        </header>
        <ul class="sitemap-list">
          @for (item of sitemap; track item.route + item.label) {
            <li>
              <a
                class="sitemap-link"
                [routerLink]="item.route"
                [queryParams]="item.queryParams ?? undefined"
                (click)="close()"
              >
                {{ item.label }}
              </a>
              @if (item.children?.length) {
                <ul class="sitemap-sublist">
                  @for (child of item.children; track child.route + child.label) {
                    <li>
                      <a
                        class="sitemap-link depth-1"
                        [routerLink]="child.route"
                        [queryParams]="child.queryParams ?? undefined"
                        (click)="close()"
                      >
                        {{ child.label }}
                      </a>
                    </li>
                  }
                </ul>
              }
            </li>
          }
        </ul>
      </nav>
    }
  `,
  styles: [
    `
      .sitemap-toggle {
        position: fixed;
        top: var(--space-sm);
        left: var(--space-sm);
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 44px;
        height: 44px;
        padding: var(--space-xs);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        background: rgba(245, 240, 232, 0.92);
        cursor: pointer;
        transition:
          background 0.2s,
          border-color 0.2s;
        box-shadow: var(--shadow-soft);
      }
      .sitemap-toggle:hover {
        background: var(--color-paper-warm);
        border-color: var(--color-ink-light);
      }
      .sitemap-toggle .bar {
        display: block;
        width: 100%;
        height: 2px;
        background: var(--color-ink);
        border-radius: 1px;
      }
      .sitemap-overlay {
        position: fixed;
        inset: 0;
        z-index: 101;
        background: rgba(44, 36, 32, 0.35);
      }
      .sitemap-drawer {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 102;
        width: min(320px, 85vw);
        height: 100vh;
        overflow-y: auto;
        background: var(--color-paper);
        border-right: 1px solid var(--color-border);
        box-shadow: var(--shadow-soft);
        animation: sitemap-slide-in 0.25s ease-out;
      }
      @keyframes sitemap-slide-in {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
      .sitemap-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-md) var(--space-lg);
        border-bottom: 1px solid var(--color-border);
        background: rgba(245, 240, 232, 0.9);
      }
      .sitemap-title {
        margin: 0;
        font-family: var(--font-display);
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--color-ink);
      }
      .sitemap-close {
        font-size: 1.5rem;
        line-height: 1;
        color: var(--color-ink-muted);
        background: none;
        border: none;
        cursor: pointer;
        padding: var(--space-xs);
      }
      .sitemap-close:hover {
        color: var(--color-ink);
      }
      .sitemap-list,
      .sitemap-sublist {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .sitemap-list {
        padding: var(--space-md) 0;
      }
      .sitemap-sublist {
        padding-left: var(--space-md);
      }
      .sitemap-link {
        display: block;
        padding: var(--space-xs) var(--space-lg);
        font-family: var(--font-body);
        font-size: 0.95rem;
        color: var(--color-ink);
        text-decoration: none;
        transition:
          background 0.15s,
          color 0.15s;
      }
      .sitemap-link:hover {
        background: var(--color-paper-warm);
        color: var(--color-accent);
      }
      .sitemap-link.depth-1 {
        font-size: 0.9rem;
        color: var(--color-ink-muted);
        padding-left: var(--space-xl);
      }
    `,
  ],
})
export class SitemapComponent {
  readonly open = signal(false);

  readonly sitemap: SitemapItem[] = [
    { label: 'Inicio / Home', route: '/' },
    chroniclesBranch('en', '/en'),
    chroniclesBranch('fr', '/fr'),
    {
      label: LANDING_BUTTONS.find((b) => b.routerLink === '/comments')?.label ?? 'Comentarios',
      route: '/comments',
    },
  ];

  toggle(): void {
    this.open.update((v) => !v);
  }

  close(): void {
    this.open.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) this.close();
  }
}
