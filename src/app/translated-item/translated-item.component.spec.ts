import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatedItemComponent } from './translated-item.component';

describe('TranslatedItemComponent', () => {
  let component: TranslatedItemComponent;
  let fixture: ComponentFixture<TranslatedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
