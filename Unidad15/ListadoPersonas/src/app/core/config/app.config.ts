import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { PERSONA_REPOSITORY_TOKEN } from '../../data/interfaces/repositories/ipersona.repository';
import { PersonaApiRepository } from '../../data/repositories/persona-api.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    // Default repository binding for personas. Using API repository to fetch from Azure.
    { provide: PERSONA_REPOSITORY_TOKEN, useClass: PersonaApiRepository },
    // Also provide the concrete API repository so it can be injected directly into the ViewModel.
    PersonaApiRepository
  ]
};
