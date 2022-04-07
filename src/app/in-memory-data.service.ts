import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Strange', puntos: 153 },
      { id: 12, name: 'Narco', puntos: 1000 },
      { id: 13, name: 'Wanda', puntos: 52 },
      { id: 14, name: 'Luis', puntos: 963 },
      { id: 15, name: 'Daniel', puntos: 500 },
      { id: 16, name: 'Hector', puntos: 206 },
      { id: 17, name: 'Yuta', puntos: 1 },
      { id: 18, name: 'Martha', puntos: 442 },
      { id: 19, name: 'Nagito', puntos: 777 },
      { id: 20, name: 'Lucas', puntos: 34 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}