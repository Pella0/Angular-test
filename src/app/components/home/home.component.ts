import {Component} from '@angular/core';
import {PRODUCTS} from "../../../../mock-data";
import {Product} from "../../model/Products";
import {Card} from "../../model/Card";
import {ProductService} from "../../services/product.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private productService: ProductService){

}

data:Card[]= [];

ngOnInit(){
  this.productService.getProducts().subscribe((products) => {
    this.data= products.map((product)=>{
      return {title: product.name, subTitle: product.price + ' €', image: product.picture }
    })
  });
}
}
