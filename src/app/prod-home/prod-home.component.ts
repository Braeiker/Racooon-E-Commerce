import { Component, OnInit } from '@angular/core';
import { Product, products, products2, products3, products4 } from '../../prodInVendita'; 

@Component({
  selector: 'app-prod-home',
  templateUrl: './prod-home.component.html',
  styleUrls: ['./prod-home.component.css']
})
export class ProdHomeComponent implements OnInit {
  productList1: Product[] = products;
  productList2: Product[] = products2;
  productList3: Product[] = products3;
  productList4: Product[]= products4;

  constructor() { }

  ngOnInit(): void {
  }
}
