import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productTitle: string;
  productPrice: number;
  productDescription: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.routeInfo.snapshot.params["prodTitle"];
    this.productPrice = this.routeInfo.snapshot.params['prodPrice'];
    this.productDescription = this.routeInfo.snapshot.params['prodDesc'];
    
  }

}
