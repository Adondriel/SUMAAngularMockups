/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FourColListComponent } from './four-col-list.component';

describe('FourColListComponent', () => {
  let component: FourColListComponent;
  let fixture: ComponentFixture<FourColListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourColListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourColListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
