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
          rgba(248, 244, 239, 0.75) 0%,
          rgba(248, 244, 239, 0.9) 100%
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
        background: rgba(245, 240, 232, 0.9);
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
        color: var(--color-ink);
        letter-spacing: 0.02em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .page-main {
        position: relative;
        z-index: 1;
        width: 70%;
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-xl) var(--space-xl) var(--space-2xl);
      }
      .comments-text {
        font-size: 1.05rem;
        line-height: 1.85;
        color: var(--color-ink);
      }
      .comments-text::first-letter {
        font-family: var(--font-display);
        font-size: 3rem;
        float: left;
        line-height: 1;
        margin-right: 0.35rem;
        margin-top: 0.05rem;
        color: var(--color-ink);
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
