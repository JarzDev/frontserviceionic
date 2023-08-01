import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewservPage } from './viewserv.page';

describe('ViewservPage', () => {
  let component: ViewservPage;
  let fixture: ComponentFixture<ViewservPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewservPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
