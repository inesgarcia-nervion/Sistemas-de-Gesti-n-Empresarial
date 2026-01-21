import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConnectionService {
  // Return the base URL for the API. Adjust for your environment.
  getConnectionString(): string {
    return 'https://ines-frhqgndaghcnfpds.italynorth-01.azurewebsites.net';
  }
}
