import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  private products: Array<Product>;

  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  ngOnInit() {

   this.products = [
     new Product(1,'Tensorflow',1.99,3.5,"Google Deep Learning Framework",["AI","OpenSource"]),
     new Product(2,'Tensorflow',1.99,2.5,"Google Deep Learning Framework",["Book","OpenSource"]),
     new Product(3,'Tensorflow',1.99,1.5,"Google Deep Learning Framework",["AI","OpenSource"]),
     new Product(4,'Tensorflow',1.99,4.5,"Google Deep Learning Framework",["AI","OpenSource"]),
     new Product(5,'Tensorflow',1.99,2.5,"Google Deep Learning Framework",["AI","OpenSource"]),
     new Product(6,'Tensorflow',1.99,3.5,"Google Deep Learning Framework",["Book","OpenSource"]),
   ] 

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