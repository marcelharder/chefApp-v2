/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListTraineesComponent } from './listTrainees.component';

describe('ListTraineesComponent', () => {
  let component: ListTraineesComponent;
  let fixture: ComponentFixture<ListTraineesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTraineesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTraineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
