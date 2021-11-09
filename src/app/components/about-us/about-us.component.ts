import { Component } from '@angular/core';

interface Person {name: string, age: number}

export class ButtonTypesExample {}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  //styles: ['mat-card {background: red}']
})
export class AboutUsComponent {
  persons: Person[] = [
    {name: 'julien', age:29},
    {name: 'eddy', age:31},
    {name: 'toto', age:15}
  ]

}
