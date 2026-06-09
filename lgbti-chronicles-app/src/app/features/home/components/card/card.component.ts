import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { CardData } from '../../../../core/models/content.model';
import type { Language } from '../../../../core/services/language.service';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div
      class="card"
      [class.selected]="selected"
      [style.min-height.px]="card?.placement?.height"
      (click)="select.emit()"
    >
      <h3
        [style.font-family]="card?.textStyle?.fontFamily"
        [style.font-size]="card?.textStyle?.fontSize"
        [style.color]="card?.textStyle?.color"
      >
        {{ card?.title?.[lang] ?? '' }}
      </h3>
    </div>
  `,
  styles: [
    `
      .card {
        padding: 0.25rem 2.5%;
        border: 1px solid var(--color-border);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.25s ease;
        min-height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: var(--color-paper);
        box-shadow: var(--shadow-card);
      }
      .card:hover {
        border-color: var(--color-ink-light);
        box-shadow: var(--shadow-soft);
        background: var(--color-paper-warm);
      }
      .card.selected {
        border-color: var(--color-accent);
        background: var(--color-paper-warm);
        box-shadow: var(--shadow-soft);
      }
      .card h3 {
        margin: 0;
        width: 100%;
        text-align: center;
        font-family: var(--font-display);
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--color-ink);
      }
      .card p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--color-ink-muted);
        line-height: 1.5;
      }
    `,
  ],
})
export class CardComponent {
  @Input() card: CardData | null = null;
  @Input() lang: Language = 'es';
  @Input() selected = false;
  @Output() select = new EventEmitter<void>();
}
