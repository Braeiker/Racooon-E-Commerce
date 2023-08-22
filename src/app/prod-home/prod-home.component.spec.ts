import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdHomeComponent } from './prod-home.component';

describe('ProdHomeComponent', () => {
  let component: ProdHomeComponent;
  let fixture: ComponentFixture<ProdHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdHomeComponent]
    });
    fixture = TestBed.createComponent(ProdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
