import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TooltipController } from './tooltip.controller';

/**
 * Wires tooltip hover/click behavior onto `.highlight[data-tooltip-id]` spans
 * rendered via `[innerHTML]` inside the host element.
 */
@Directive({
  selector: '[appHighlightTooltips]',
  standalone: true,
})
export class HighlightTooltipsDirective implements OnChanges, OnDestroy {
  @Input('appHighlightTooltips') tooltips: Record<string, string> = {};

  private controllers: TooltipController[] = [];
  private readonly sanitizer = inject(DomSanitizer);

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnChanges(_changes: SimpleChanges): void {
    this.bindHighlights();
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private bindHighlights(): void {
    queueMicrotask(() => {
      this.cleanup();

      const nodes = this.el.nativeElement.querySelectorAll<HTMLElement>('.highlight');

      for (const node of nodes) {
        const id = resolveTooltipId(node);
        const html = id ? this.tooltips[id] : undefined;
        if (!html) continue;

        node.style.cursor = 'help';
        const controller = new TooltipController(node, html, this.sanitizer, false);
        this.controllers.push(controller);
      }
    });
  }

  private cleanup(): void {
    for (const controller of this.controllers) {
      controller.detach();
    }
    this.controllers = [];
  }
}

function resolveTooltipId(node: HTMLElement): string | null {
  const dataId = node.getAttribute('data-tooltip-id');
  if (dataId) return dataId;

  for (const className of node.classList) {
    const match = className.match(/^tooltip-ref-(\d+)$/);
    if (match) return match[1];
  }

  return null;
}
