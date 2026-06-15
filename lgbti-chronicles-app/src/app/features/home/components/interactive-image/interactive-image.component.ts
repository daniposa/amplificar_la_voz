import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import type { CardData, Hotspot } from '../../../../core/models/content.model';

@Component({
  selector: 'app-interactive-image',
  standalone: true,
  imports: [],
  template: `
    <div #fullscreenContainer class="image-container fullscreen-target">
      <img [src]="imagePath" [alt]="'Image for card ' + card?.id" />
      
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

      <button class="fullscreen-toggle-btn" (click)="toggleFullscreen()" title="Pantalla completa">
        <span class="material-icons">{{ isFullscreen ? 'fullscreen_exit' : 'fullscreen' }}</span>
      </button>
    </div>
  `,
  styles: [`
    .image-container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background-color: #f5f0e8; /* Tu fondo beige neutral para las barras laterales si quedan espacios */
    }

    /* 🌟 Solución definitiva: Forzamos a que la imagen mantenga su proporción nativa (Aspect Ratio) */
    .image-container img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain; /* Garantiza que el 100% de la ilustración y las estrellas de los bordes estén visibles */
      max-width: 100%;
      max-height: 100%;
    }

    /* 🖥️ Estilos del nuevo botón de pantalla completa */
    .fullscreen-toggle-btn {
      position: absolute;
      bottom: 20px;
      right: 20px;
      background: rgba(245, 240, 232, 0.85);
      border: 1px solid #c2bba8;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      transition: all 0.2s ease;
      z-index: 10;
    }
    .fullscreen-toggle-btn:hover {
      background: #f5f0e8;
      transform: scale(1.1);
    }
    .fullscreen-toggle-btn .material-icons {
      font-size: 1.6rem;
      color: #4a4333;
    }

    /* Estilos de las estrellas/hotspots */
    .hotspot-btn {
      position: absolute;
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
      filter: drop-shadow(0 0 8px rgba(255, 220, 0, 0.9)) drop-shadow(0 0 3px rgba(255, 255, 100, 1));
      transition: transform 0.2s ease, filter 0.2s ease;
    }
    .hotspot-btn:hover .material-icons {
      transform: scale(1.35);
      filter: drop-shadow(0 0 14px rgba(255, 220, 0, 1)) drop-shadow(0 0 6px rgba(255, 255, 100, 1));
      color: #fff176;
    }
    @keyframes sparkle-pulse {
      0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      50%       { opacity: 0.82; transform: translate(-50%, -50%) scale(0.9); }
    }

    /* Ajuste especial cuando el contenedor entra en modo Pantalla Completa del navegador */
    .fullscreen-target:fullscreen {
      width: 100vw;
      height: 100vh;
      background-color: #f5f0e8;
    }
  `]
})
export class InteractiveImageComponent {
  @Input() card: CardData | null = null;
  @ViewChild('fullscreenContainer') fullscreenContainer!: ElementRef;

  isFullscreen = false;

  get imagePath(): string {
    return this.card?.imagePath ?? '';
  }

  get hotspots(): Hotspot[] {
    return this.card?.hotspots ?? [];
  }

  openModal(hotspot: Hotspot): void {
    const customEvent = new CustomEvent('openChronicleModal', { detail: hotspot.modalContent });
    window.dispatchEvent(customEvent);
  }

  /**
   * 🛠️ Manejador nativo del Fullscreen API de HTML5
   */
  toggleFullscreen(): void {
    const element = this.fullscreenContainer.nativeElement;

    if (!document.fullscreenElement) {
      element.requestFullscreen()
        .then(() => {
          this.isFullscreen = true;
        })
        .catch((err: any) => {
          console.error(`Error intentando activar pantalla completa: ${err.message}`);
        });
    } else {
      document.exitFullscreen();
      this.isFullscreen = false;
    }

    // Escuchar si el usuario sale usando la tecla ESC
    const escHandler = () => {
      this.isFullscreen = !!document.fullscreenElement;
      document.removeEventListener('fullscreenchange', escHandler);
    };
    document.addEventListener('fullscreenchange', escHandler);
  }
}
