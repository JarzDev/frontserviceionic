import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewclientPage } from './viewclient.page';

describe('ViewclientPage', () => {
  let component: ViewclientPage;
  let fixture: ComponentFixture<ViewclientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
