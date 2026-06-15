import { Component, inject, SecurityContext } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import { COMMENTS_CONTENT } from '../../core/data/comments/comments.content';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="comments-page" style="background-image: url('images/background_2.jpg')">
      <div class="page-overlay"></div>

      <header class="page-header">
        <a class="back-btn" routerLink="/">&#8592;</a>
        <h1 class="page-title">Comentarios de la traducción</h1>
      </header>

      <main class="page-main">
        <div class="comments-text" [innerHTML]="contentHtml"></div>
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
        /* Leave room on the left for the fixed sitemap hamburger button. */
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
        width: 90%;           /* <-- Subimos de 70% a 90% para reducir el espacio muerto a los lados */
        max-width: 1400px;    /* <-- Permitimos que se expanda más en pantallas grandes */
        margin: 0 auto;
        padding: var(--space-xl) var(--space-md) var(--space-2xl);
      }

      .comments-text {
        font-size: 1.05rem;
        line-height: 1.85;
        color: #2e4a3b;
      }
      
      /* Formato general de los párrafos */
      .comments-text ::ng-deep p {
        text-align: justify;
        text-justify: inter-word;
        text-indent: 2rem;
        color: #3779a9;
        margin: 0 0 var(--space-md) 0;
      }

      /* ── CONTENEDOR EN DOS COLUMNAS (La magia anti-licuadora) ── */
      .comments-text ::ng-deep .seccion-lectura {
        display: grid;
        grid-template-columns: 1fr 1.5fr; /* Divide el espacio: la imagen y el texto */
        gap: 40px;                        /* Espacio de separación entre las dos columnas */
        align-items: start;
        margin-bottom: var(--space-3xl);  /* Espacio libre antes de la siguiente sección */
      }

      /* Si quieres intercalar: esta clase hace que el texto vaya primero y la imagen a la derecha */
      .comments-text ::ng-deep .seccion-lectura.invertida {
        grid-template-columns: 1.5fr 1fr;
      }

      /* Contenedor interno para que el sticky funcione perfecto */
      .comments-text ::ng-deep .columna-imagen {
        position: -webkit-sticky;
        position: sticky;
        top: 15vh;                        /* Altura en la que se congela la imagen al bajar */
      }

      /* Ajuste de las imágenes dentro de su columna */
      .comments-text ::ng-deep .columna-imagen img {
        width: auto;
        max-width: 100%;              /* No permite que se desborde de la columna */
        max-height: 80vh;             /* <-- ¡LA MAGIA! Limita el alto al 70% de la pantalla */
        object-fit: contain;          /* Fuerza a la imagen a mostrarse completa sin recortes */
        border-radius: 8px;
        display: block;
        margin: 0 auto;
      }
      
    `,
  ],
})
export class CommentsComponent {
  private sanitizer = inject(DomSanitizer);

  readonly contentHtml: SafeHtml = this.toSafeHtml(COMMENTS_CONTENT);

  private toSafeHtml(html: string): SafeHtml {
    const clean = this.sanitizer.sanitize(SecurityContext.HTML, html) ?? '';
    return this.sanitizer.bypassSecurityTrustHtml(clean);
  }
}
