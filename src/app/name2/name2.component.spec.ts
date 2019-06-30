import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Name2Component } from './name2.component';

describe('Name2Component', () => {
  let component: Name2Component;
  let fixture: ComponentFixture<Name2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Name2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Name2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
