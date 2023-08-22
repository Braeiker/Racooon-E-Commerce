import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSiteComponent } from './tab-site.component';

describe('TabSiteComponent', () => {
  let component: TabSiteComponent;
  let fixture: ComponentFixture<TabSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabSiteComponent]
    });
    fixture = TestBed.createComponent(TabSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
