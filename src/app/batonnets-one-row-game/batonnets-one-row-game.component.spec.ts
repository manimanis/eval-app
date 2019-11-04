import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatonnetsOneRowGameComponent } from './batonnets-one-row-game.component';

describe('BatonnetsOneRowGameComponent', () => {
  let component: BatonnetsOneRowGameComponent;
  let fixture: ComponentFixture<BatonnetsOneRowGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatonnetsOneRowGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatonnetsOneRowGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
