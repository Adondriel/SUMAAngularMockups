/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThreeColListComponent } from './three-col-list.component';

describe('ThreeColListComponent', () => {
  let component: ThreeColListComponent;
  let fixture: ComponentFixture<ThreeColListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
