import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteCodeComponent } from './paste-code.component';

describe('PasteCodeComponent', () => {
  let component: PasteCodeComponent;
  let fixture: ComponentFixture<PasteCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
