import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name :string = 'thiago';
  numero:Number = 1;
  profission = 'Progamador';
  hobbies = ['lanchar','jogar','ver anime'];
  car = {
    name: 'Fusca',
    year: '1800', 
  };

  constructor() { }

  ngOnInit(): void {
  }

}
