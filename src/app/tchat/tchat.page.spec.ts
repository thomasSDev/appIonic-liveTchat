import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatPage } from './tchat.page';

describe('TchatPage', () => {
  let component: TchatPage;
  let fixture: ComponentFixture<TchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
