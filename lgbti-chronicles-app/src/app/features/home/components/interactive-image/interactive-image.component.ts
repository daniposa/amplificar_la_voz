import { Component, Input } from '@angular/core';
import type { CardData, Hotspot } from '../../../../core/models/content.model';

@Component({
  selector: 'app-interactive-image',
  standalone: true,
  imports: [],
  template: `
    <div class="image-container" [class.landscape-contain]="card?.id === 1 || card?.id === 3">
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
    }
    .image-container img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover; /* Comportamiento original para la temática 2 */
    }
    
    /* 🌟 ESTILOS DE AJUSTE PARA LAS TEMÁTICAS 1 Y 3 */
    .image-container.landscape-contain {
      background-color: #f5f0e8; /* Tu fondo beige neutral */
    }
    .image-container.landscape-contain img {
      object-fit: contain; /* Encoge el paisaje para revelar las estrellas de los bordes */
      max-width: 100%;
      max-height: 100%;
    }

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
  `]
})
export class InteractiveImageComponent {
  @Input() card: CardData | null = null;

  get imagePath(): string {
    return this.card?.imagePath ?? '';
  }

  get hotspots(): Hotspot[] {
    return this.card?.hotspots ?? [];
  }

  // Definimos el evento para avisarle al componente padre (chronicles) que abra el modal correspondiente
  openModal(hotspot: Hotspot): void {
    // Si tu componente padre maneja el evento de apertura mediante un Output o servicio, 
    // puedes enlazarlo aquí. Dado que limpiamos el modalContent local, la interacción se centraliza.
    const customEvent = new CustomEvent('openChronicleModal', { detail: hotspot.modalContent });
    window.dispatchEvent(customEvent);
  }
}
