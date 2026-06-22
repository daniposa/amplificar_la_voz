import { SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Shared hover / click tooltip behavior for a single anchor element.
 * Only one pinned panel is active at a time across the app.
 */
export class TooltipController {
  private tooltipEl: HTMLElement | null = null;
  private pinned = false;
  private readonly boundReposition = (): void => {
    this.positionTooltip();
  };
  private readonly removeMouseEnter: () => void;
  private readonly removeMouseLeave: () => void;
  private readonly removeClick: () => void;

  private static activePinned: TooltipController | null = null;

  constructor(
    private readonly anchor: HTMLElement,
    private readonly tooltipHtml: string,
    private readonly sanitizer: DomSanitizer,
    private readonly decorateAnchor = true,
  ) {
    const onMouseEnter = (): void => {
      if (!this.tooltipHtml || this.pinned) return;
      this.showEphemeral();
    };
    const onMouseLeave = (): void => {
      if (this.pinned) return;
      this.removeTooltip();
    };
    const onClick = (event: MouseEvent): void => {
      event.stopPropagation();
      if (!this.tooltipHtml || this.pinned) return;

      if (TooltipController.activePinned && TooltipController.activePinned !== this) {
        TooltipController.activePinned.unpin();
      }

      this.pinned = true;
      TooltipController.activePinned = this;
      this.removeTooltip();
      this.showPinned();
    };

    if (this.decorateAnchor) {
      this.anchor.style.cursor = 'help';
      this.anchor.style.textDecoration = 'underline';
      this.anchor.style.textDecorationStyle = 'dotted';
      this.anchor.style.textUnderlineOffset = '2px';
    }

    this.anchor.addEventListener('mouseenter', onMouseEnter);
    this.anchor.addEventListener('mouseleave', onMouseLeave);
    this.anchor.addEventListener('click', onClick);

    this.removeMouseEnter = () => this.anchor.removeEventListener('mouseenter', onMouseEnter);
    this.removeMouseLeave = () => this.anchor.removeEventListener('mouseleave', onMouseLeave);
    this.removeClick = () => this.anchor.removeEventListener('click', onClick);
  }

  detach(): void {
    if (TooltipController.activePinned === this) {
      TooltipController.activePinned = null;
    }
    this.unpin();
    this.removeMouseEnter();
    this.removeMouseLeave();
    this.removeClick();
  }

  private unpin(): void {
    this.pinned = false;
    if (TooltipController.activePinned === this) {
      TooltipController.activePinned = null;
    }
    this.removeTooltip();
  }

  private showEphemeral(): void {
    if (!this.tooltipHtml) return;
    this.removeTooltip();
    this.tooltipEl = document.createElement('div');
    this.tooltipEl.className = 'app-tooltip app-tooltip--ephemeral';
    this.setTooltipInnerHtml(this.tooltipEl, this.tooltipHtml);
    
    this.tooltipEl.style.cssText = `
  position: fixed;
  z-index: 2147483647;
  pointer-events: none;
  width: 450px;
  max-width: 90vw;
  text-align: justify;
  text-justify: inter-word;
  
  /* 🪄 RESET DE HERENCIA: Para que no se vea en negrita ni herede márgenes del texto */
  font-weight: normal !important;
  text-indent: 0 !important;
  font-style: normal !important;
`;
    
    this.injectInternalStyles(this.tooltipEl);

    // 🪄 TU SOLUCIÓN: Buscamos el contenedor más cercano del texto para inyectarlo ahí dentro
    const targetContainer = this.anchor.parentElement || document.body;
    targetContainer.appendChild(this.tooltipEl);

    this.positionTooltip();
    this.attachRepositionListeners();
  }

  private showPinned(): void {
    if (!this.tooltipHtml) return;

    const root = document.createElement('div');
    root.className = 'app-tooltip app-tooltip--pinned';
    
    this.tooltipEl.style.cssText = `
  position: fixed;
  z-index: 2147483647;
  pointer-events: none;
  width: 450px;
  max-width: 90vw;
  text-align: justify;
  text-justify: inter-word;
  
  /* 🪄 RESET DE HERENCIA: Para que no se vea en negrita ni herede márgenes del texto */
  font-weight: normal !important;
  text-indent: 0 !important;
  font-style: normal !important;
`;

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'app-tooltip-close';
    closeBtn.setAttribute('aria-label', 'Cerrar explicación');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      this.unpin();
    });
    closeBtn.addEventListener('mousedown', (event) => event.stopPropagation());

    const body = document.createElement('div');
    body.className = 'app-tooltip-body';
    this.setTooltipInnerHtml(body, this.tooltipHtml);

    root.appendChild(closeBtn);
    root.appendChild(body);

    this.tooltipEl = root;
    this.injectInternalStyles(this.tooltipEl);

    // 🪄 TU SOLUCIÓN: El cuadro fijo también se va adentro del árbol del DOM local
    const targetContainer = this.anchor.parentElement || document.body;
    targetContainer.appendChild(this.tooltipEl);

    this.positionTooltip();
    this.attachRepositionListeners();
  }

  private injectInternalStyles(container: HTMLElement): void {
    const styleId = 'app-tooltip-dynamic-styles';
    if (!document.getElementById(styleId)) {
      const styleNode = document.createElement('style');
      styleNode.id = styleId;
      styleNode.innerHTML = `
        .app-tooltip {
          font-size: 0.92rem !important; 
          line-height: 1.5 !important;
        }
        .app-tooltip .identificador {
          display: block !important;
          text-align: right !important;
          text-indent: 0 !important;
          margin-top: 12px !important;
          width: 100% !important;
          font-size: 0.85rem !important;
        }
        .app-tooltip p {
          text-align: justify !important;
          text-justify: inter-word !important;
          margin-bottom: 8px !important;
        }
      `;
      document.head.appendChild(styleNode);
    }
  }

  private attachRepositionListeners(): void {
    window.addEventListener('scroll', this.boundReposition, true);
    window.addEventListener('resize', this.boundReposition);
  }

  private removeTooltip(): void {
    window.removeEventListener('scroll', this.boundReposition, true);
    window.removeEventListener('resize', this.boundReposition);
    if (this.tooltipEl?.parentNode) {
      this.tooltipEl.parentNode.removeChild(this.tooltipEl);
    }
    this.tooltipEl = null;
  }

  private setTooltipInnerHtml(element: HTMLElement, html: string): void {
    element.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, html) ?? '';
  }

  private positionTooltip(): void {
    if (!this.tooltipEl) return;
    
    const rect = this.anchor.getBoundingClientRect();
    const tooltipRect = this.tooltipEl.getBoundingClientRect();
    
    // 📐 Cálculo exacto usando la posición fija de la pantalla
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    let top = rect.top - tooltipRect.height - 8;
    
    // Si no cabe arriba, lo mandamos abajo de la palabra
    if (top < 8) {
      top = rect.bottom + 8;
    }
    
    // Evitamos que se salga por los lados de la pantalla
    if (left < 8) left = 8;
    if (left + tooltipRect.width > window.innerWidth - 8) {
      left = window.innerWidth - tooltipRect.width - 8;
    }
    
    this.tooltipEl.style.left = `${left}px`;
    this.tooltipEl.style.top = `${top}px`;
  }
}
