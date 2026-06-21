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
    <div class="comments-page">
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
        /* 🎨 COLOR SÓLIDO SELECCIONADO */
        background-color: #e4dff5;
        position: relative;
      }
      .page-overlay {
        position: fixed;
        inset: 0;
        background: linear-gradient(
          to bottom,
          rgba(248, 244, 239, 0.05) 0%,
          rgba(248, 244, 239, 0.1) 100%
        );
        pointer-events: none;
        z-index: 0;
      }
      
      /* 📌 CABECERA COMPLETA FLOTANTE (STICKY) */
      .page-header {
        position: -webkit-sticky;
        position: sticky;
        top: 0; 
        z-index: 10; 
        box-sizing: border-box;
        max-height: 15vh;
        padding: var(--space-sm) var(--space-xl) var(--space-sm)
          calc(var(--space-sm) + 44px + var(--space-md));
        border-bottom: 1px solid var(--color-border);
        background: rgba(178, 161, 230, 0.95); 
        backdrop-filter: blur(4px); 
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
        text-indent: 2rem; /* Sangría en primera línea para todos los párrafos estándar */
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
        top: 18vh; 
      }

      .comments-text ::ng-deep .columna-imagen img {
        width: auto;
        max-width: 100%;
        max-height: 75vh;
        object-fit: contain;
        border-radius: 8px;
        display: block;
        margin: 0 auto;
      }
      .comments-text ::ng-deep blockquote {
        margin: var(--space-md) var(--space-xl);
        color: inherit;
      }

      .comments-text ::ng-deep blockquote p {
        text-indent: 0 !important;
        text-align: justify;
        margin-bottom: var(--space-sm);
        color: inherit;
        font-size: 0.95rem; 
      }
      
      .comments-text ::ng-deep .referencia-francesa {
        display: block;
        text-align: justify;
        text-justify: inter-word;
        padding-left: 2.5rem; 
        margin-left: -2.5rem;
        margin-bottom: var(--space-md);
        font-size: 1.05rem;
        line-height: 1.85;
        color: #2e4a3b;
      }

      .comments-text ::ng-deep .bloque-completo {
  width: 75%;
  max-width: 950px;
  margin: var(--space-2xl) auto;
}

/* 🖼️ Contenedor de la Imagen Centrada */
.comments-text ::ng-deep .bloque-completo figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: var(--space-2xl) 0;
  padding: 0;
}

/* Elemento Imagen del bloque */
.comments-text ::ng-deep .bloque-completo figure img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
  margin: var(--space-xs) auto;
}

/* 🏷️ TÍTULO de la imagen: Con la tipografía del cuerpo (`--font-body`) */
.comments-text ::ng-deep .bloque-completo figure .titulo-imagen,
.comments-text ::ng-deep .bloque-completo figure h3 {
  text-align: left;
  width: 100%;
  text-indent: 0 !important; /* Rompe la sangría del p común */
  margin: 0 0 var(--space-xs) 0;
  
  /* 📝 Cambiado a la fuente del cuerpo para que se lea igual al resto del texto */
  font-family: var(--font-body); 
  
  font-size: 1.1rem; /* Un pelín más grande o puedes dejarlo en 1.05rem como el texto */
  font-weight: bold; /* O 600, para que resalte sutilmente pero con la misma fuente */
  color: #2e4a3b;
}

/* 📝 NOTA/FUENTE de la imagen */
.comments-text ::ng-deep .bloque-completo figure figcaption,
.comments-text ::ng-deep .bloque-completo figure .nota-imagen {
  text-align: left;
  width: 100%;
  text-indent: 0 !important;
  margin: var(--space-xs) 0 0 0;
  font-size: 0.9rem;
  font-style: italic;
  color: var(--color-ink-muted);
  line-height: 1.4;
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
