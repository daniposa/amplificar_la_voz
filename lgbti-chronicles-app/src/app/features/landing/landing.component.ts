import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PAGE_CONFIG, LANDING_BUTTONS, LANDING_CREDITS } from '../../core/data/content.data';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="landing" style="background-image: url('images/background_1.jpg')">
      <div class="landing-overlay"></div>
      <div class="landing-content">
        <h1 class="landing-title">{{ displayedTitle }}</h1>
        
        <div class="landing-buttons">
          @for (button of buttons; track button.routerLink) {
            <a
              class="lang-btn"
              [class.comments-btn]="button.isComments"
              [routerLink]="button.routerLink"
              (mouseenter)="onHoverButton(button.routerLink)"
              (mouseleave)="onLeaveButton()"
            >
              <span class="btn-label">{{ button.label }}</span>
              <span class="btn-sub">{{ button.sub }}</span>
            </a>
          }
        </div>

        <footer class="credits" aria-label="Créditos">
          <h2 class="credits-title">{{ credits.sectionTitle }}</h2>
          <ul class="credits-list">
            @for (line of credits.lines; track $index) {
              <li class="credits-line">
                <span class="credits-label">{{ line.label }}:</span>
                <span class="credits-names" [innerHTML]="line.names"></span>
              </li>
            }
          </ul>
        </footer>

        <section class="legal-footer" aria-label="Información legal y licencias">
          <div class="legal-three-columns">
            
            <div class="legal-col col-patrocinadores">
              <img src="images/logos/logo_escuela_verde.avif" alt="Logo Universidad de Antioquia" class="footer-img img-udea" />
              <img src="images/logos/logo_fundacion.avif" alt="Logo Fundación Patrocinadora" class="footer-img img-fundacion" />
            </div>
            
            <div class="legal-col col-nuestro-logo">
              <img src="images/logos/logo_texto.png" alt="Logo LGBTI Chronicles" class="footer-img img-proyecto-redondo" />
            </div>
            
            <div class="legal-col col-texto-derechos">
              <p class="txt-patrimoniales">
                Derechos patrimoniales, Universidad de Antioquia.
              </p>
              <p class="txt-licencia">
                Este es un artículo en acceso abierto, distribuido según los términos de la licencia 
                <strong>Creative Commons BY-NC-SA 4.0 Internacional</strong>.
              </p>
              
              <div class="cc-logo-wrapper">
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es" target="_blank" rel="noopener noreferrer">
                  <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg" alt="Licencia Creative Commons BY-NC-SA 4.0" class="img-cc" />
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  `,
  styles: [
    `
      .landing {
        min-height: 100vh;
        background-color: var(--color-paper);
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .landing-overlay {
        position: fixed;
        inset: 0;
        background: linear-gradient(
          to bottom,
          rgba(248, 244, 239, 0.1) 0%,
          rgba(248, 244, 239, 0.1) 100%
        );
        pointer-events: none;
        z-index: 0;
      }
      .landing-content {
        position: relative;
        z-index: 1;
        text-align: center;
        padding: var(--space-xl);
        width: 70%;
        max-width: 1200px;
      }
      .landing-title {
        font-family: var(--font-display);
        font-size: clamp(2.2rem, 5.5vw, 3.8rem);
        font-weight: 600;
        color: #ffffff;
        line-height: 1.2;
        letter-spacing: 0.03em;
        margin: 0 0 var(--space-2xl) 0;
        text-shadow: 
          0 2px 4px rgba(0, 0, 0, 0.25), 
          0 4px 12px rgba(74, 67, 51, 0.2),
          0 10px 20px rgba(0, 0, 0, 0.15);
        -webkit-font-smoothing: antialiased;

        /* 🔒 ANCLAJE VISUAL PURO */
        min-height: 3.6em; /* Reserva estricta para 3 líneas de texto */
        display: flex;
        align-items: flex-end; /* Alinea los textos a la base para evitar saltos de posición */
        justify-content: center;
      }
      .landing-buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        gap: var(--space-md);
      }
      .lang-btn {
        display: flex;
        flex: 1 1 0;
        min-width: 0;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: var(--space-lg) var(--space-md);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        background: rgba(248, 244, 239, 0.6);
        text-decoration: none;
        cursor: pointer;
        transition: all 0.25s ease;
        box-shadow: var(--shadow-card);
      }
      .lang-btn:hover {
        background: rgba(245, 240, 232, 0.75);
        border-color: var(--color-accent);
        box-shadow: var(--shadow-soft);
        transform: translateY(-2px);
      }
      .btn-label {
        font-family: var(--font-display);
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--color-ink);
        letter-spacing: 0.03em;
      }
      .btn-sub {
        font-family: var(--font-body);
        font-size: 0.9rem;
        color: var(--color-ink-muted);
        margin-top: var(--space-xs);
        font-style: italic;
      }
      .comments-btn {
        border-color: var(--color-border-soft);
      }
      .comments-btn .btn-label {
        font-size: 1.4rem;
        color: var(--color-ink);
      }
      .credits {
        margin-top: var(--space-2xl);
        padding: var(--space-md) var(--space-lg); 
        border: 1px solid var(--color-border);
        border-radius: 8px;                         
        text-align: left;
        background: rgba(248, 244, 239, 0.45); /* Opacidad igualada */     
        backdrop-filter: blur(2px);                 
      }
      .credits-title {
        font-family: var(--font-display);
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--color-ink);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin: 0 0 var(--space-md) 0;
        text-align: center;
      }
      .credits-list {
        list-style: none;
