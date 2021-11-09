import { Component, OnInit } from '@angular/core';
import {Person} from "../../model/Person";
import {Card} from "../../model/Card";


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  // styles: ['mat-card {background:red}']
})
export class AboutUsComponent implements OnInit{
  persons : Person[] = [
    {name:"julien", age:29},
    {name:"eddy", age:33},
    {name:"toto", age:1}
  ];
  personPicture: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  data:Card[]= [];

  ngOnInit(){
    this.data=this.persons.map((person)=>{
      return {title: person.name, subTitle: person.age + ' ans', image: this.personPicture }
    })
  }
}
