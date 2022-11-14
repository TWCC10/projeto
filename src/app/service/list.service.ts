import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  remove(animals: Animal[],animal: Animal){  //essa remoção como é front deveria ter sido feita no arquivo do componente
    return animals.filter((a) => animal.name !== a.name); //mas é um exemplo caso essa remoção fosse feita no back
  }
}
