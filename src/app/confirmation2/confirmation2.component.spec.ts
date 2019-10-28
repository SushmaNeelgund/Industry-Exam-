import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmation2Component } from './confirmation2.component';

describe('Confirmation2Component', () => {
  let component: Confirmation2Component;
  let fixture: ComponentFixture<Confirmation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Confirmation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirmation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
