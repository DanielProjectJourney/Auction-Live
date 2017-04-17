import * as express from 'express';
import * as path from 'path';
import {Server} from  'ws';

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client')));
//app.get('/', (req,res)=> res.send('Hello Auction'));

export class Product {
  constructor(public id: number,
    public title: string,
    public img: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>) { }
}

export class Comment {
  constructor(public id: number, public productId: number, public timestamp: string, public user: string, public rating: number, public content: string) { }
}

const products: Product[] = [
  new Product(1, 'Wolverine',"http://uproxx.files.wordpress.com/2016/02/hugh-jackman-wolverine.jpg?quality=100&w=650", 800.99, 3.55, "Regenerative healing factor", ['power']),
  new Product(2, 'Professor X',"https://i.kinja-img.com/gawker-media/image/upload/s--FQEqGSUh--/c_scale,fl_progressive,q_80,w_800/ixwrisofg9s4igoibjct.jpg" ,2999.99, 5.0, "Mind control", ['mind']),
  new Product(3, 'Magneto', "http://img.cinemablend.com/cb/7/d/5/7/7/1/7d5771aff34028b7544269011dcf64e82b1497bf94d6c702c1fbb84099f74182.jpg",2999.99, 5.0, "Magnetism manipulation and generation of magnetic force fields", ['power', 'mind']),
  new Product(4, 'Cyclops',"http://m.aceshowbiz.com/webimages/news/00027328.jpg", 500.99, 2.5, "Optic force blasts", ['power']),
  new Product(5, 'Fake Ironman', "http://i1.piimg.com/567571/04e132e86f99bf5c.jpg",0.00, 0.0, "Daniel's Friend (Chandler). Attack Power -9999", ['mind']),
  new Product(6, 'DeadPool',"http://s3.foxmovies.com/foxmovies/production/films/103/images/featured_content/111-front.jpg",2000.99, 4.0, "SUPER-HEALING,CHAOTIC MIND", ['power', 'mind']),

]

const comments: Comment[] = [
  new Comment(1, 1, "2017-02-02 22:22:22", "Daniel", 3, "He is my idol"),
  new Comment(2, 1, "2017-03-03 22:22:22", "Chandler", 4, "I agree with Daniel"),
  new Comment(3, 1, "2017-04-04 22:22:22", "Ryan", 5, "Good! Acutally, I am the same super power like him."),
  new Comment(4, 2, "2017-05-05 22:22:22", "Julian", 6, "Genius like me"),
  new Comment(5, 5, "2020-02-02 20:20:20", "A kid", 0, "I think I can defeat him, even I am 5 years old")
]

app.get('/',(req, res) => res.send('Hello Auction'));

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

const subscriptions = new Map<any, number[]>();

const wsServer = new Server({ port: 8085 });
wsServer.on("connection", websocket => {
  websocket.send("这个消息是服务器主动推送的");
  websocket.on("message", message => {
    let messageObj = JSON.parse(message);
    let productIds = subscriptions.get(websocket) || [];
    subscriptions.set(websocket, [...productIds, messageObj.productId]);
  })
});

const currentBids = new Map<number,number>();


setInterval(() => {

  products.forEach( p => {
    let currentBid = currentBids.get(p.id) || p.price;
    let newBid = currentBid + Math.random() * 1000;
    currentBids.set(p.id, newBid);
  });

  subscriptions.forEach((productIds: number[], ws) => {
    if(ws.readyState === 1){
      let newBids = productIds.map( pid => ({
        product:pid,
        bid: currentBids.get(pid)
      }));
      ws.send(JSON.stringify(newBids));
    }else{
      subscriptions.delete(ws);
    }
  });

}, 2000);
