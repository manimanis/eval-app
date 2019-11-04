import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatedItemsListComponent } from './translated-items-list.component';

describe('TranslatedItemsListComponent', () => {
  let component: TranslatedItemsListComponent;
  let fixture: ComponentFixture<TranslatedItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatedItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatedItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
