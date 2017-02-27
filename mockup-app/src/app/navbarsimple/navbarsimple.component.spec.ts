import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsimpleComponent } from './navbarsimple.component';

describe('NavbarsimpleComponent', () => {
  let component: NavbarsimpleComponent;
  let fixture: ComponentFixture<NavbarsimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarsimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
