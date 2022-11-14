import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Frida", type: "Dog", age: 7},
    {name: "Bob", type: "Horse", age: 15}
  ];

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = 'O pet '+ animal.name + ' tem ' + (animal.age) +' anos!';
  }

  removeAnimal(animal:Animal){
    console.log('removendo o animal');
    this.animals = this.listservice.remove(this.animals,animal)
  }

  constructor(private listservice: ListService) { }

  ngOnInit(): void {
  }

  

}
