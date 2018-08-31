import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPicturesComponent } from './food-pictures.component';

describe('FoodPicturesComponent', () => {
  let component: FoodPicturesComponent;
  let fixture: ComponentFixture<FoodPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
