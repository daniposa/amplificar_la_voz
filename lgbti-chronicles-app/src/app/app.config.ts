import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withAnchorScrolling } from '@angular/router'; // 🛠️ Añadimos withAnchorScrolling

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // 🛠️ Pasamos la función como segundo parámetro para activar el scroll por fragmentos (#)
    provideRouter(routes, withAnchorScrolling(),withScrollPositionRestoration('top'))
  ]
};
