import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TooltipController } from './tooltip.controller';

/**
 * Highlights: hover shows a transient tooltip; click pins an explainer panel
 * (selectable text + close). Only one pinned panel at a time across the app.
 *
 * Tooltip strings may contain a **trusted HTML fragment** (see `content.data.ts`):
 * paragraphs, links (`<a href="https://..." target="_blank" rel="noopener noreferrer">`),
 * images (`<img src="images/..." alt="...">`), `<br>`, `<strong>`, etc.
 * HTML is passed through `DomSanitizer.sanitize(HTML, …)` so links/images work when safe.
 * Author fragments only in `content.data.ts` (trusted), not from user input.
 */
@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective implements OnInit, OnChanges, OnDestroy {
  @Input() appTooltip = '';

  private controller: TooltipController | null = null;
  private readonly sanitizer = inject(DomSanitizer);

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.bindController();
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.bindController();
  }

  ngOnDestroy(): void {
    this.controller?.detach();
    this.controller = null;
  }

  private bindController(): void {
    this.controller?.detach();
    if (!this.appTooltip) return;
    this.controller = new TooltipController(this.el.nativeElement, this.appTooltip, this.sanitizer);
  }
}
