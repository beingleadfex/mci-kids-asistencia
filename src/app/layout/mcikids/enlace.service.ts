import { Injectable } from '@angular/core';

import { Enlace } from './enlace';
import { ENLACES } from './mock-enlaces';

@Injectable()
export class EnlaceService {

  getEnlaces(): Promise<Enlace[]> {
    return Promise.resolve(ENLACES);
  }

  getEnlace(id:number): Promise<Enlace> {
    return this.getEnlaces()
              .then(enlaces => enlaces.find(enlace => enlace.id === id));
  }
}
