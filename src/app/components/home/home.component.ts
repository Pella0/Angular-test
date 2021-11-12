import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product'
import { Card } from '../../model/Card';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  data: Card[] = []
  /*TENTATIVE AJOUT pannier a partir de home*/
  /*
  product: Product = {id: 0, name:'', price:0, picture:'', stock:0}
  panier: Card[] = localStorage.getItem('monpanier') === 'null' ?
    (JSON.parse(localStorage.getItem('monpanier') || 'string')) : ([]);*/

  

  constructor(private productService: ProductService, private router: Router) {
  }
  /*TENTATIVE AJOUT pannier a partir de home*/
/*
  onAddClick(datum:Card) {
    console.log(datum);

    this.panier.push(datum);
    if(localStorage.getItem('monpanier') === null) {
      localStorage.setItem('monpanier', JSON.stringify(this.panier));
    }
    else{
      let myobj = JSON.parse(localStorage.getItem('monpanier') || 'string');
      myobj.push(datum);
      localStorage.setItem('monpanier',JSON.stringify(myobj));
    }
  }
*/
  onLikeClick(datum:number) {
    console.log(datum);
  }
  onCardClick(datum:number) {
    this.router.navigateByUrl("product/"+ datum)
  }

  ngOnInit() {
    
    this.productService.getProducts().subscribe((products: Product[]) => {
      
      this.data = products.map((product) => {
        return { title: product.name, subTitle: product.price + ' €', image: product.picture, id: product.id}
      })

    });
  }
}
