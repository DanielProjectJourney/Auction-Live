import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  private products: Array<Product>;

  private imgUrl = 'http://placehold.it/320x150';

  constructor(private productService:ProductService) { }

  ngOnInit() {
   this.products = this.productService.getProducts();
  }

}


export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){}
}