import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  signal,
} from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import type { CardData, Hotspot } from '../../../../core/models/content.model';

@Component({
  selector: 'app-interactive-image',
  standalone: true,
  imports: [ModalContentComponent],
  template: `
    <div class="image-container" #viewport>
      <div class="image-frame">
        <img
          [src]="imagePath"
          [alt]="'Image for card ' + card?.id"
          draggable="false"
          [style.max-width.px]="maxWidth()"
          [style.max-height.px]="maxHeight()"
          (load)="onImageLoad()"
        />
        
        @if (isImageLoaded()) {
          @for (h of hotspots; track h.id) {
            <button
              class="hotspot-btn"
              [style.left.%]="h.x"
              [style.top.%]="h.y"
              (click)="openModal(h)"
              aria-label="Open story"
            >
              <span class="material-icons">auto_awesome</span>
            </button>
          }
        }
      </div>

      <button 
        class="fullscreen-toggle-btn" 
        (click)="toggleFullscreen()" 
        [aria-label]="isFullscreen() ? 'Exit fullscreen' : 'Enter fullscreen'"
      >
        <span class="material-icons">
          {{ isFullscreen() ? 'fullscreen_exit' : 'fullscreen' }}
        </span>
      </button>

      @if (modalContent) {
        <app-modal-content [content]="modalContent" (close)="closeModal()" />
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        position: absolute;
        inset: 0;
      }
      .image-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .image-frame {
        position: relative;
        line-height: 0;
      }
      .image-frame img {
        display: block;
        width: auto;
        height: auto;
        object-fit: contain;
        z-index: 1; /* Imagen en la base */
      }
      
      .fullscreen-toggle-btn {
        position: absolute;
        bottom: var(--space-md);
        left: var(--space-md);
        z-index: 5;
        background: rgba(0, 0, 0, 0.45);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
        width: 40px;
        height: 40px;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(4px);
        transition: background-color 0.2s, transform 0.2s;
      }
      .fullscreen-toggle-btn:hover {
        background: rgba(0, 0, 0, 0.7);
        transform: scale(1.05);
      }
      .fullscreen-toggle-btn .material-icons {
        font-size: 24px;
      }

      .hotspot-btn {
        position: absolute;
        z-index: 3; /* ⬆️ Forzamos a las estrellas a flotar por encima de la imagen siempre */
        transform: translate(-50%, -50%);
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: sparkle-pulse 2.4s ease-in-out infinite;
      }
      .hotspot-btn .material-icons {
        font-size: 2rem;
        color: #ffe033;
        filter: drop-shadow(0 0 8px rgba(255, 220, 0, 0.9))
          drop-shadow(0 0 3px rgba(255, 255, 100, 1));
        transition:
          transform 0.2s ease,
          filter 0.2s ease;
      }
      .hotspot-btn:hover .material-icons {
        transform: scale(1.35);
        filter: drop-shadow(0 0 14px rgba(255, 220, 0, 1))
          drop-shadow(0 0 6px rgba(255, 255, 100, 1));
        color: #fff176;
      }

      app-modal-content {
        position: relative;
        z-index: 999999 !important; 
      }

      @keyframes sparkle-pulse {
        0%,
        100% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          opacity: 0.82;
          transform: translate(-50%, -50%) scale(0.9);
        }
        :-webkit-full-screen app-modal-content,
      :fullscreen app-modal-content {
        position: absolute !important;
        z-index: 2147483647 !important; /* El valor máximo permitido por los navegadores */
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }

      /* Si la cajita del tooltip se genera con una clase (por ejemplo .tooltip-box o .tooltip-container) */
      :-webkit-full-screen .tooltip-box,
      :fullscreen .tooltip-box,
      :-webkit-full-screen .highlight-tooltip,
      :fullscreen .highlight-tooltip {
        z-index: 2147483647 !important;
      }
      }
    `,
  ],
})
export class InteractiveImageComponent implements AfterViewInit, OnDestroy {
  @Input() card: CardData | null = null;
  @ViewChild('viewport') viewportRef!: ElementRef<HTMLDivElement>;

  readonly maxWidth = signal(0);
  readonly maxHeight = signal(0);
  readonly isFullscreen = signal(false);
  
  // 🔒 Signal del candado de estado de carga
  readonly isImageLoaded = signal(false);

  private resizeObserver?: ResizeObserver;

  get imagePath(): string {
    return this.card?.imagePath ?? '';
  }

  get hotspots(): Hotspot[] {
    return this.card?.hotspots ?? [];
  }

  modalContent: import('../../../../core/models/content.model').LocalizedModalContent | null = null;

  ngAfterViewInit(): void {
    this.updateBounds();
    
    const el = this.viewportRef.nativeElement;
    this.resizeObserver = new ResizeObserver(() => this.updateBounds());
    this.resizeObserver.observe(el);

    document.addEventListener('fullscreenchange', this.onFullscreenChange);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    document.removeEventListener('fullscreenchange', this.onFullscreenChange);
  }

  private updateBounds(): void {
    if (this.viewportRef?.nativeElement) {
      const el = this.viewportRef.nativeElement;
      this.maxWidth.set(el.clientWidth);
      this.maxHeight.set(el.clientHeight);
    }
  }

  /**
   * Se ejecuta exactamente cuando la imagen ya está dibujada
   */
  onImageLoad(): void {
    this.updateBounds();
    // 🔓 Abrimos el candado: la imagen ya tiene dimensiones reales, las estrellas pueden nacer seguras
    this.isImageLoaded.set(true);
  }

  toggleFullscreen(): void {
    const container = this.viewportRef.nativeElement.parentElement || this.viewportRef.nativeElement;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  private onFullscreenChange = (): void => {
    this.isFullscreen.set(!!document.fullscreenElement);
    setTimeout(() => this.updateBounds(), 50);
  };

  openModal(hotspot: Hotspot): void {
    this.modalContent = hotspot.modalContent;
  }

  closeModal(): void {
    this.modalContent = null;
  }
}
