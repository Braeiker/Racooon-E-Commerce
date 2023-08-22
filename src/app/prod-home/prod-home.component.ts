import { Component, OnInit } from '@angular/core';
import { Product, products, } from '../../prodInVendita'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-home',
  templateUrl: './prod-home.component.html',
  styleUrls: ['./prod-home.component.css']
})
export class ProdHomeComponent implements OnInit {
  productList1: Product[] = products;
 
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    // Il metodo ngOnInit è vuoto o può contenere operazioni iniziali
  }

  navigaAllaSecondaPagina(id:number) {
      this.router.navigate(['test/'+id]); // Cambia '/seconda' con il percorso corretto
  }
}
