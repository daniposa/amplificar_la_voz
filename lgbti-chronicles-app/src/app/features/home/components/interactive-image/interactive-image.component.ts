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
        />
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
    </div>
    @if (modalContent) {
      <app-modal-content [content]="modalContent" (close)="closeModal()" />
    }
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
        top: calc(44px + var(--space-md));
        left: var(--space-md);
        right: var(--space-md);
        bottom: var(--space-md);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      /* Shrinks to the rendered image so hotspots align with the visible image. */
      .image-frame {
        position: relative;
        line-height: 0;
      }
      .image-frame img {
        display: block;
        width: auto;
        height: auto;
        object-fit: contain;
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
      }
    `,
  ],
})
export class InteractiveImageComponent implements AfterViewInit, OnDestroy {
  @Input() card: CardData | null = null;
  @ViewChild('viewport') viewportRef!: ElementRef<HTMLDivElement>;

  readonly maxWidth = signal(0);
  readonly maxHeight = signal(0);

  private resizeObserver?: ResizeObserver;

  get imagePath(): string {
    return this.card?.imagePath ?? '';
  }

  get hotspots(): Hotspot[] {
    return this.card?.hotspots ?? [];
  }

  modalContent: import('../../../../core/models/content.model').LocalizedModalContent | null = null;

  ngAfterViewInit(): void {
    const el = this.viewportRef.nativeElement;
    const updateBounds = (): void => {
      this.maxWidth.set(el.clientWidth);
      this.maxHeight.set(el.clientHeight);
    };

    updateBounds();
    this.resizeObserver = new ResizeObserver(updateBounds);
    this.resizeObserver.observe(el);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  openModal(hotspot: Hotspot): void {
    this.modalContent = hotspot.modalContent;
  }

  closeModal(): void {
    this.modalContent = null;
  }
}
