import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';


@Injectable()
export class ProductService {


  // private comments : Comment[] = [
  //   new Comment(1, 1, "2017-02-02 22:22:22", "张三", 3, "东西不错"),
  //   new Comment(2, 1, "2017-03-03 22:22:22", "李四", 4, "东西不错"),
  //   new Comment(3, 1, "2017-04-04 22:22:22", "王五", 5, "东西不错"),
  //   new Comment(4, 2, "2017-05-05 22:22:22", "赵六", 6, "东西不错")
  // ];

  constructor(private http: Http) {}

  getAllCategories() : string[] {
    return ["physical", 'mind', 'fire'];
  }

  getProducts() : Observable<Product[]>{
    return this.http.get("/api/products").map(res => res.json());
  }

  getProduct(id : number) : Observable<Product> {
    return this.http.get("/api/product/" + id).map(res=>res.json());
  }

  getCommentsForProductId(id : number) : Observable<Comment[]>{
    return this.http.get("/api/product/"+id+"/comments").map(res=>res.json());
  }


}

export class ProductSearchParams {
  constructor(public title : string, public price : number, public category : string){}
}

export class Product {
  constructor(public id : number, public title : string, public price : number, public rating : number, public desc : string, public categories : Array < string >) {}
}

export class Comment {
  constructor(public id : number, public productId : number, public timestamp : string, public user : string, public rating : number, public content : string) {}
}