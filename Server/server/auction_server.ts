import * as express from 'express';
import {Server} from  'ws';

const app = express();

export class Product {
  constructor(public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>) { }
}

export class Comment {
  constructor(public id: number, public productId: number, public timestamp: string, public user: string, public rating: number, public content: string) { }
}

const products: Product[] = [
  new Product(1, 'Wolverine', 1.99, 3.55, "This is the first product", ['physical', 'Tech']),
  new Product(2, 'No2_Product', 2.99, 2.5, "This is the second Product", ['book', 'Fashion']),
  new Product(3, 'No3 Product', 3.99, 1.5, "This is the second Product", ['book', 'Fashion']),
  new Product(4, 'No4 Product', 4.99, 2.5, "This is the second Product", ['book', 'Fashion']),
  new Product(5, 'No5 Product', 5.99, 3.5, "This is the second Product", ['book', 'Fashion']),
  new Product(6, 'No6 Product', 6.99, 2.5, "This is the second Product", ['book', 'Fashion']),

]

const comments: Comment[] = [
  new Comment(1, 1, "2017-02-02 22:22:22", "张三", 3, "东西不错"),
  new Comment(2, 1, "2017-03-03 22:22:22", "李四", 4, "东西不错"),
  new Comment(3, 1, "2017-04-04 22:22:22", "王五", 5, "东西不错"),
  new Comment(4, 2, "2017-05-05 22:22:22", "赵六", 6, "东西不错")
];


app.get('/api', (req, res) => {
  res.json(products);
});

app.get('/api/products', (req, res) => {
  let result = products;

  let params = req.query;

  console.log("I am here");
  if(params.title){
    result = result.filter((p) => p.title.indexOf(params.title) !== -1);
  }

  if(params.price && result.length > 0){
    result = result.filter((p) => p.price <= parseInt(params.price));
  }

  if(params.category !== "-1" && result.length > 0)
  {
    result = result.filter((p) => p.categories.indexOf(params.category) !== -1);
  }

  res.json(result);
});

app.get('/api/product/:id', (req, res) => {
  res.json(products.find((product) => product.id == req.params.id));
})

app.get('/api/product/:id/comments', (req, res) => {
  res.json(comments.filter((comment: Comment) => comment.productId == req.params.id));
})

const server = app.listen(8000, "localhost", () => {
  console.log("Server  Start, address: http://localhost:8000")
});

const wsServer = new Server({ port: 8085 });
wsServer.on("connection", websocket => {
  websocket.send("这个消息是服务器主动推送的");
  websocket.on("message", message => {
    console.log("Receive message:" + message)
  })
});


setInterval(() => {
  if (wsServer.clients) {
    wsServer.clients.forEach(client => {
      client.send("This is time sender");
    })
  }
}, 2000);
