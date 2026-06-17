import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PAGE_CONFIG, LANDING_BUTTONS, LANDING_CREDITS } from '../../core/data/content.data';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="landing" style="background-image: url('images/background_1.jpg')">
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

            <div class="legal-col col-nuestro-logo">
              <img src="images/logos/logo_texto.png" alt="Logo LGBTI Chronicles" class="footer-img img-proyecto-redondo" />
            </div>

            <div class="legal-col col-patrocinadores">
              <img src="images/logos/logo_escuela_verde.avif" alt="Logo Universidad de Antioquia" class="footer-img img-udea" />
              <img src="images/logos/logo_fundacion.avif" alt="Logo Fundación Patrocinadora" class="footer-img img-fundacion" />
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
        min-height: 3.6em;
        display: flex;
        align-items: flex-end;
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
        background: rgba(248, 244, 239, 0.45);     
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
        margin: 0;
        padding: 0;
      }
      .credits-line {
        font-family: var(--font-body);
        font-size: 0.95rem;
        line-height: 1.8;
        color: var(--color-ink-muted);
        margin-bottom: var(--space-sm);
      }
      .credits-line:last-child {
        margin-bottom: 0;
      }
      .credits-label {
        color: var(--color-ink);
        font-weight: 600;
        display: block;                               
        margin-bottom: var(--space-xs);
      }
      .credits-names {
        font-style: italic;
        display: block;                               
      }

      .legal-footer {
        margin-top: var(--space-xl);
        padding: var(--space-md) var(--space-lg);
        border: 1px solid var(--color-border);
        border-radius: 8px;                         
        background: rgba(248, 244, 239, 0.45);
        backdrop-filter: blur(2px); 
        box-shadow: var(--shadow-card);
        text-align: left;
      }
      .legal-three-columns {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-lg);
      }
      .legal-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      .col-patrocinadores {
        flex: 0 0 190px;
        align-items: center;
        gap: var(--space-sm);
      }
      
      .img-udea {
        max-height: 58px;
        width: auto;
      }
      .img-fundacion {
        max-height: 50px;
        width: auto;
      }

      .col-nuestro-logo {
        flex: 0 0 130px;
        align-items: center;
      }
      .img-proyecto-redondo {
        max-height: 120px;
        width: auto;
      }

      .col-texto-derechos {
        flex: 1 1 0;
        text-align: left;
        font-family: var(--font-body);
      }
      .txt-patrimoniales {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--color-ink);
        margin: 0 0 var(--space-xs) 0;
      }
      .txt-licencia {
        font-size: 0.85rem;
        color: var(--color-ink-muted);
        line-height: 1.4;
        margin: 0 0 var(--space-xs) 0;
      }
      .cc-logo-wrapper {
        display: block;
        margin-top: 4px;
      }
      .img-cc {
        height: 28px;
        width: auto;
        opacity: 0.85;
      }

      @media (max-width: 850px) {
        .legal-three-columns {
          flex-direction: column;
          gap: var(--space-lg);
          text-align: center;
        }
        .col-patrocinadores {
          flex: auto;
          flex-direction: row; 
          gap: var(--space-xl);
          justify-content: center; /* Asegura el centrado correcto en móviles */
        }
        .col-texto-derechos {
          text-align: center;
        }
        .cc-logo-wrapper {
          display: flex;
          justify-content: center;
        }
      }
    ` 
  ],
})
export class LandingComponent {
  defaultTitle = PAGE_CONFIG.title.es;
  displayedTitle = this.defaultTitle;

  buttons = LANDING_BUTTONS;
  credits = LANDING_CREDITS;

  onHoverButton(routerLink: string): void {
    if (routerLink.includes('/en')) {
      this.displayedTitle = 'Amplifying the voices of victims to avoid repetition';
    } else if (routerLink.includes('/fr')) {
      this.displayedTitle = 'Amplifier la voix des victimes pour éviter la répétition';
    } else {
      this.displayedTitle = this.defaultTitle;
    }
  }

  onLeaveButton(): void {
    this.displayedTitle = this.defaultTitle;
  }
}
