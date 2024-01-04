import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroItemsComponent } from './restro-items.component';

describe('RestroItemsComponent', () => {
  let component: RestroItemsComponent;
  let fixture: ComponentFixture<RestroItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestroItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestroItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
