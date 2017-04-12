import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {

  private products : Product[] = [
    new Product(1, 'Tensorflow', 1.99, 3.5, "Google Deep Learning Framework", ["AI", "OpenSource"]),
    new Product(2, 'Tensorflow', 1.99, 2.5, "Google Deep Learning Framework", ["Book", "OpenSource"]),
    new Product(3, 'Tensorflow', 1.99, 1.5, "Google Deep Learning Framework", ["AI", "OpenSource"]),
    new Product(4, 'Tensorflow', 1.99, 4.5, "Google Deep Learning Framework", ["AI", "OpenSource"]),
    new Product(5, 'Tensorflow', 1.99, 2.5, "Google Deep Learning Framework", ["AI", "OpenSource"]),
    new Product(6, 'Tensorflow', 1.99, 3.5, "Google Deep Learning Framework", ["Book", "OpenSource"])
  ];

  private comments : Comment[] = [
    new Comment(1, 1, "2017-02-02 22:22:22", "张三", 3, "东西不错"),
    new Comment(2, 1, "2017-03-03 22:22:22", "李四", 4, "东西不错"),
    new Comment(3, 1, "2017-04-04 22:22:22", "王五", 5, "东西不错"),
    new Comment(4, 1, "2017-05-05 22:22:22", "赵六", 6, "东西不错")
  ];

  constructor() {}

  getProducts():Product[] {
    return this.products;
  }

  getProduct(id : number) : Product {
    return this
      .products
      .find((product) => product.id == id);
  }

  getCommentsForProductId(id:number): Comment[]{
    return this.comments.filter((comment: Comment) => comment.productId ==id);
  }

}

export class Product {
  constructor(public id : number, public title : string, public price : number, public rating : number, public desc : string, public categories : Array < string >) {}
}

export class Comment {
  constructor(public id : number, public productId : number, public timestamp : string, public user : string, public rating : number, public content : string) {}
}