import { Component, Input } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import type { CardData, Hotspot } from '../../../../core/models/content.model';

@Component({
  selector: 'app-interactive-image',
  standalone: true,
  imports: [ModalContentComponent],
  template: `
    <div class="image-container">
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
    @if (modalContent) {
      <app-modal-content [content]="modalContent" (close)="closeModal()" />
    }
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
      object-fit: cover;
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

  modalContent: import('../../../../core/models/content.model').LocalizedModalContent | null = null;

  openModal(hotspot: Hotspot): void {
    this.modalContent = hotspot.modalContent;
  }

  closeModal(): void {
    this.modalContent = null;
  }
}
