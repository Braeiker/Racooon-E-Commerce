import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products, } from '../../prodInVendita'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product  = products[0];

  error:string = "Sometinghs went WRONG!";

  success : boolean = true; 
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;

    const productIdFromRoute = Number(routeParams.get('id'));
  
    let prodotto= products.find(product => product.id === productIdFromRoute);
    
    if (prodotto != undefined) {
      this.product=prodotto;
    }else{
      this.success=false
    }
    
    
}
}

