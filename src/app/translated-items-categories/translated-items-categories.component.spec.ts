import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatedItemsCategoriesComponent } from './translated-items-categories.component';

describe('TranslatedItemsCategoriesComponent', () => {
  let component: TranslatedItemsCategoriesComponent;
  let fixture: ComponentFixture<TranslatedItemsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatedItemsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatedItemsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
