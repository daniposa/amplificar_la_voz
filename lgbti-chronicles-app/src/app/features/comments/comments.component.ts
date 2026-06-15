import { Component, inject, SecurityContext } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import { COMMENTS_CONTENT } from '../../core/data/comments/comments.content';
import { HighlightTooltipsDirective } from '../../shared/directives/highlight-tooltips.directive';
import { TextParserService } from '../../core/services/text-parser.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [RouterLink, HighlightTooltipsDirective],
  template: `
    <div class="comments-page" style="background-image: url('images/background_2.jpg')">
      <div class="page-overlay"></div>

      <header class="page-header">
        <a class="back-btn" routerLink="/">&#8592;</a>
        <h1 class="page-title">Comentarios: sobre el proceso de traducción</h1>
      </header>

      <main class="page-main">
        <div 
          class="comments-text" 
          [innerHTML]="contentHtml"
          [appHighlightTooltips]="tooltips"
        ></div>
      </main>
    </div>
  `,
  styles: [
    `
      .comments-page {
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
          rgba(248, 244, 239, 0.15) 100%
        );
        pointer-events: none;
        z-index: 0;
      }
      .page-header {
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        max-height: 15vh;
        padding: var(--space-sm) var(--space-xl) var(--space-sm)
          calc(var(--space-sm) + 44px + var(--space-md));
        border-bottom: 1px solid var(--color-border);
        background: rgba(219, 175, 90, 0.9);
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
        color: #2e4a3b;
        letter-spacing: 0.02em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .page-main {
        position: relative;
        z-index: 1;
        width: 90%;
        max-width: 1400px;
        margin: 0 auto;
        padding: var(--space-xl) var(--space-md) var(--space-2xl);
      }

      .comments-text {
        font-size: 1.05rem;
        line-height: 1.85;
        color: #2e4a3b;
      }
      
      .comments-text ::ng-deep p {
        text-align: justify;
        text-justify: inter-word;
        text-indent: 2rem;
        color: #2e4a3b;
        margin: 0 0 var(--space-md) 0;
      }

      .comments-text ::ng-deep .highlight {
        font-weight: bold;
        color: #2e4a3b; 
        cursor: help;
        border-bottom: 1px dotted #3779a9;
      }
      .comments-text ::ng-deep .identificador {
        display: block;
        text-align: right;
        text-indent: 0;
        margin-top: var(--space-lg);
        color: inherit;
      }
      
      .comments-text ::ng-deep .seccion-lectura {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 40px;
        align-items: start;
        margin-bottom: var(--space-3xl);
      }

      .comments-text ::ng-deep .seccion-lectura.invertida {
        grid-template-columns: 1.5fr 1fr;
      }

      .comments-text ::ng-deep .columna-imagen {
        position: -webkit-sticky;
        position: sticky;
        top: 15vh;
      }

      .comments-text ::ng-deep .columna-imagen img {
        width: auto;
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 8px;
        display: block;
        margin: 0 auto;
      }
      .comments-text ::ng-deep blockquote {
        margin: var(--space-md) var(--space-xl); /* Varía el espacio horizontal para empujar todo el bloque hacia adentro */
        color: inherit; /* Mantiene exactamente tu color original #2e4a3b */
      }

      /* 2. Ajustes para los párrafos de la cita: sin sangría inicial y 2 puntos más pequeños */
      .comments-text ::ng-deep blockquote p {
        text-indent: 0 !important; /* Elimina por completo la sangría de la primera línea */
        text-align: justify;
        margin-bottom: var(--space-sm);
        color: inherit;
        
        /* Reducimos el tamaño de la letra exactamente 2 puntos (de 1.05rem a 0.85rem) */
        font-size: 0.95rem; 
        
        .comments-text ::ng-deep .referencia {
        /* 1. Justificado del texto */
        text-align: justify;
        text-justify: inter-word;
        
        /* 2. Truco tipográfico para lograr la Sangría Francesa */
        padding-left: 2rem;      /* Empuja todo el párrafo hacia la derecha */
        text-indent: -2rem !important; /* Jala SOLO la primera línea hacia la izquierda */
        
        /* 3. Margen inferior para que las referencias no se peguen entre sí */
        margin: 0 0 var(--space-md) 0;
        color: inherit;
      }
      }
    `,
  ],
})
export class CommentsComponent {
  private sanitizer = inject(DomSanitizer);
  private parser = inject(TextParserService);

  readonly contentHtml: SafeHtml = this.getProcessedHtml(COMMENTS_CONTENT?.text ?? '');
  readonly tooltips: Record<string, string> = COMMENTS_CONTENT?.tooltips ?? {};

  private getProcessedHtml(rawText: string): SafeHtml {
    const parsedHtml = this.parser.markedTextToHtml(rawText);
    const clean = this.sanitizer.sanitize(SecurityContext.HTML, parsedHtml) ?? '';
    return this.sanitizer.bypassSecurityTrustHtml(clean);
  }
}
