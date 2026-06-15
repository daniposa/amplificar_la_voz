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

      /* 🌟 NUEVA CLASE: Formato, centrado y comportamiento congelado para el título */
      .comments-text ::ng-deep .titulo-seccion {
        grid-column: 1 / -1;                /* Ocupa todo el ancho de la grilla (vence las columnas) */
        text-align: center;                 /* Centra el texto perfectamente */
        font-family: var(--font-display);
        color: #2e4a3b;
        font-size: 1.75rem;
        font-weight: 600;
        margin: 0 0 var(--space-xl) 0;
        padding: var(--space-sm) 0;
        
        /* Comportamiento Sticky */
        position: -webkit-sticky;
        position: sticky;
        top: 10vh;                          /* Se congela justo abajo del header de la página */
        z-index: 10;
        background-color: rgba(248, 244, 239, 0.9); /* Fondo translúcido tipo pergamino para que el texto al pasar por detrás no empañe la lectura */
        backdrop-filter: blur(4px);         /* Efecto difuminado moderno en el fondo */
        border-bottom: 1px dashed rgba(46, 74, 59, 0.2); /* Línea divisoria sutil */
      }

      /* Evita que al invertir la sección el título intente reubicarse mal */
      .comments-text ::ng-deep .seccion-lectura.invertida .titulo-seccion {
        grid-column: 1 / -1;
      }

      .comments-text ::ng-deep .columna-imagen {
        position: -webkit-sticky;
        position: sticky;
        top: 22vh;                          /* Bajamos un poco el tope para dejarle espacio al título fijado */
      }

      .comments-text ::ng-deep .columna-imagen img {
        width: auto;
        max-width: 100%;
        max-height: 70vh;                   /* Ajustamos el alto máximo para que conviva bien con el título */
        object-fit: contain;
        border-radius: 8px;
        display: block;
        margin: 0 auto;
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
