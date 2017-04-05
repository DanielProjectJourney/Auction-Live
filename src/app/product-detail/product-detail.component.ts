import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/route’;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productTitle: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.routeInfo.
  }

}
