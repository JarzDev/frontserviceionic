import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewclientPage } from './newclient.page';

describe('NewclientPage', () => {
  let component: NewclientPage;
  let fixture: ComponentFixture<NewclientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
