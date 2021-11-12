import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/model/Panier';
import { Card } from 'src/app/model/Card';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  newLocalArray: Panier[] = [];

  constructor() { }

  ngOnInit(): void {

    
    if(localStorage.getItem('monpanier') !== 'null') {
      let myLocalArray = JSON.parse(localStorage.getItem('monpanier') || 'string');

      myLocalArray.map((product: Card) => {
        
        this.newLocalArray.push({ id: product.id, price: parseFloat(product.subTitle), title:product.title })

      })
      console.log(this.newLocalArray)
    }
    else{
      return console.log('coucou')
    }
  }

}
