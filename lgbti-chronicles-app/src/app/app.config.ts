import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        // 🛠️ Cambiamos a 'disabled' temporalmente para que no choque con el anclaje dinámico
        scrollPositionRestoration: 'disabled' 
      })
    )
  ]
};
