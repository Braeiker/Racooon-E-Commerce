import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module


@Component({
  selector: 'app-tab-site',
  templateUrl: './tab-site.component.html',
  styleUrls: ['./tab-site.component.css']
})
export class TabSiteComponent {
  constructor(private router: Router) {} // Inject the Router module
  @ViewChild('badgeLink') badgeLink!: ElementRef;

  ngOnInit(): void {
    // Il metodo ngOnInit è vuoto o può contenere operazioni iniziali
  }

  navigateToProdHome(id: number) {
    // Use the navigate method with the correct route path
    this.router.navigate(['']); // Change '/seconda' to the correct route path
  }
}
