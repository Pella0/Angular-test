import { Component, OnInit } from '@angular/core';
interface Person {name:string, age:number}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  julien: Person = {name:'julien', age:29}
  persons: Person[]= [
    this.julien,
    {name:'julien', age:29},
    {name:'eddy', age:32},
    {name:'toto', age:16},
  ]
  constructor(){
    this.julien.age= 35;
  }
}

