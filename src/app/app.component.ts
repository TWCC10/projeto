import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName ='joaquim';

  userData ={
    email: 'opasale@gmail.com',
    role: 'admin',
   };
   
  title = 'projeto';
}
