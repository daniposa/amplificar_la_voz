import {
  Component,
  computed,
  inject,
  signal,
  OnInit,
  OnDestroy,
  SecurityContext,
} from '@angular/core';
import { ActivatedRoute, RouterLink, type ParamMap } from '@angular/router';
import type { Subscription } from 'rxjs';
import { Title, DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import { LanguageService, type Language } from '../../core/services/language.service';
import { CARDS_DATA, PAGE_CONFIG, PANORAMA_IMAGE } from '../../core/data/content.data';
import { INTRO_CONTENT } from '../../core/data/intro/intro.content';
import { CardComponent } from '../home/components/card/card.component';
import { InteractiveImageComponent } from '../home/components/interactive-image/interactive-image.component';

type Tab = 'intro' | 'chronicles';

@Component({
  selector: 'app-chronicles',
  standalone: true,
  imports: [RouterLink, CardComponent, InteractiveImageComponent],
  template: `
    <div class="chronicles" [style.backgroundImage]="background()">
      <div class="page-overlay"></div>

      <header class="page-header">
        <a class="back-btn" routerLink="/">&#8592;</a>
        <h1 class="page-title">{{ pageTitle }}</h1>
      </header>

      <nav class="tab-nav">
        <button class="tab-btn" [class.active]="activeTab() === 'intro'" (click)="setTab('intro')">
          {{ introTabLabel }}
        </button>
        <button
          class="tab-btn"
          [class.active]="activeTab() === 'chronicles'"
          (click)="setTab('chronicles')"
        >
          {{ chroniclesTabLabel }}
        </button>
      </nav>

      <main class="page-main">
        @if (activeTab() === 'intro') {
          <div class="intro-text" [innerHTML]="introHtml"></div>
        }

        @if (activeTab() === 'chronicles') {
          <div class="panorama-wrapper">
            <div class="image-frame">
              <img
                class="panorama-img"
                [src]="panoramaImage"
                alt="Panoramic view"
                draggable="false"
              />

              @for (card of cards; track card.id) {
                <div
                  class="card-pin"
                  [class.selected]="selectedCardId() === card.id"
                  [style.left.%]="card.placement.x"
                  [style.top.%]="card.placement.y"
                  [style.width.px]="card.placement.width"
                >
                  <app-card
                    [card]="card"
                    [lang]="lang"
                    [selected]="selectedCardId() === card.id"
                    (select)="selectCard(card.id)"
                  />
                </div>
              }
            </div>
          </div>
        }
      </main>

      @if (selectedCard()) {
        <div class="image-fullscreen">
          <button class="close-btn" (click)="closeImage()" aria-label="Close">&times;</button>
          <app-interactive-image [card]="selectedCard()" />
        </div>
      }
    </div>
  `,
  styles: [
    `
      .chronicles {
        min-height: 100vh;
        background-color: var(--color-paper);
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        position: relative;
      }
      .page-overlay {
        position: fixed;
        inset: 0;
        background: linear-gradient(
          to bottom,
          rgba(248, 244, 239, 0.1) 0%,
          rgba(248, 244, 239, 0.1) 100%
        );
        pointer-events: none;
        z-index: 0;
      }
      .page-header {
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        max-height: 8vh;
        /* Leave room on the left for the fixed sitemap hamburger button. */
        padding: var(--space-sm) var(--space-xl) var(--space-sm)
          calc(var(--space-sm) + 44px + var(--space-md));
        border-bottom: 1px solid var(--color-border);
        background: rgba(245, 240, 232, 0.9);
        display: flex;
        align-items: center;
        gap: var(--space-md);
      }
      .back-btn {
        font-family: var(--font-body);
        font-size: 1.25rem;
        color: var(--color-ink-muted);
        text-decoration: none;
        padding: var(--space-xs) var(--space-sm);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        line-height: 1;
        transition: all 0.2s;
        background: var(--color-paper);
      }
      .back-btn:hover {
        color: var(--color-ink);
        border-color: var(--color-ink-light);
      }
      .page-title {
        margin: 0;
        font-family: var(--font-display);
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--color-ink);
        letter-spacing: 0.02em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .tab-nav {
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        max-height: 7vh;
        display: flex;
        background: rgba(245, 240, 232, 0.85);
        border-bottom: 1px solid var(--color-border);
        padding: 0 var(--space-xl);
      }
      .tab-btn {
        font-family: var(--font-display);
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.04em;
        color: var(--color-ink-muted);
        background: none;
        border: none;
        border-bottom: 2px solid transparent;
        padding: var(--space-xs) var(--space-lg);
        cursor: pointer;
        transition:
          color 0.2s,
          border-color 0.2s;
        margin-bottom: -1px;
      }
      .tab-btn:hover {
        color: var(--color-ink);
      }
      .tab-btn.active {
        color: var(--color-ink);
        border-bottom-color: var(--color-accent);
      }

      /* ── intro tab ── */
      .page-main {
        position: relative;
        z-index: 1;
      }
      .intro-text {
        width: 70%;
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-xl) var(--space-xl) var(--space-2xl);
        font-size: 1.05rem;
        line-height: 1.85;
        color: var(--color-ink);
      }
     

      /* ── panorama wrapper ── */
      .panorama-wrapper {
        position: relative;
        width: 100%;
        height: 85vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      /* Shrinks to the rendered image so card placement % maps to the image. */
      .image-frame {
        position: relative;
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
      }
      .panorama-img {
        display: block;
        max-width: 100%;
        max-height: 85vh;
        width: auto;
        height: auto;
        pointer-events: none;
      }

      /* ── cards (freely placed over the image) ── */
      .card-pin {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .card-pin app-card {
        display: block;
        width: 100%;
      }
      /* ── fullscreen image ── */
      .image-fullscreen {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-paper-warm);
      }
      .close-btn {
        position: absolute;
        top: var(--space-md);
        right: var(--space-md);
        z-index: 11;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        font-size: 26px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
      }
      .close-btn:hover {
        background: rgba(0, 0, 0, 0.7);
      }
    `,
  ],
})
export class ChroniclesComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private langService = inject(LanguageService);
  private titleService = inject(Title);
  private sanitizer = inject(DomSanitizer);
  private routeSubs: Subscription[] = [];

  lang: Language = 'en';
  cards = CARDS_DATA;
  panoramaImage = PANORAMA_IMAGE;
  introHtml: SafeHtml = '';
  pageTitle = '';
  introTabLabel = '';
  chroniclesTabLabel = '';

  activeTab = signal<Tab>('intro');
  selectedCardId = signal<number | null>(null);

  // ── computed ──────────────────────────────────────────────

  selectedCard = computed(() => {
    const id = this.selectedCardId();
    return id ? (CARDS_DATA.find((c) => c.id === id) ?? null) : null;
  });

  background = computed(() =>
    this.selectedCardId() !== null
      ? `url(images/background_3.jpg)`
      : `url(images/background_1.jpg)`,
  );

  // ── lifecycle ─────────────────────────────────────────────

  ngOnInit(): void {
    this.syncLanguageFromRoute();
    this.applyDeepLink(this.route.snapshot.queryParamMap);

    this.routeSubs.push(
      this.route.url.subscribe(() => this.syncLanguageFromRoute()),
      this.route.queryParamMap.subscribe((params) => this.applyDeepLink(params)),
    );
  }

  ngOnDestroy(): void {
    this.routeSubs.forEach((s) => s.unsubscribe());
  }

  private syncLanguageFromRoute(): void {
    const path = this.route.snapshot.url[0]?.path;
    this.lang = path === 'fr' ? 'fr' : 'en';
    this.langService.setLanguage(this.lang);
    this.introHtml = this.toSafeHtml(INTRO_CONTENT[this.lang]);
    this.pageTitle = PAGE_CONFIG.title[this.lang];
    this.introTabLabel = PAGE_CONFIG.tabs.intro[this.lang];
    this.chroniclesTabLabel = PAGE_CONFIG.tabs.chronicles[this.lang];
    this.titleService.setTitle(this.pageTitle);
  }

  private applyDeepLink(params: ParamMap): void {
    const tab = params.get('tab');
    if (tab === 'intro' || tab === 'chronicles') {
      this.activeTab.set(tab);
    }

    const cardParam = params.get('card');
    if (cardParam) {
      const id = Number(cardParam);
      if (!Number.isNaN(id) && CARDS_DATA.some((c) => c.id === id)) {
        this.activeTab.set('chronicles');
        this.selectedCardId.set(id);
        return;
      }
    }

    if (tab === 'intro') {
      this.selectedCardId.set(null);
    } else if (tab === 'chronicles' && !cardParam) {
      this.selectedCardId.set(null);
    }
  }

  private toSafeHtml(html: string): SafeHtml {
    const clean = this.sanitizer.sanitize(SecurityContext.HTML, html) ?? '';
    return this.sanitizer.bypassSecurityTrustHtml(clean);
  }

  // ── tabs / cards ──────────────────────────────────────────

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
    if (tab === 'intro') this.selectedCardId.set(null);
  }

  selectCard(id: number): void {
    this.selectedCardId.set(this.selectedCardId() === id ? null : id);
  }

  closeImage(): void {
    this.selectedCardId.set(null);
  }
}
