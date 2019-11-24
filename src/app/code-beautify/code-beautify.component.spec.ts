import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBeautifyComponent } from './code-beautify.component';

describe('CodeBeautifyComponent', () => {
  let component: CodeBeautifyComponent;
  let fixture: ComponentFixture<CodeBeautifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeBeautifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBeautifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
