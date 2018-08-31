import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailViewComponent } from './recipe-detail-view.component';

describe('RecipeDetailViewComponent', () => {
  let component: RecipeDetailViewComponent;
  let fixture: ComponentFixture<RecipeDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
