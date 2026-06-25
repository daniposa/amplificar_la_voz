import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
    // 🛠️ Configuración compatible con tu versión de Angular para activar el scroll por fragmentos (#)
    provideRouter(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top'
    })
  ]
};
