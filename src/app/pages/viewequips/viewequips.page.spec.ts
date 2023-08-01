import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewequipsPage } from './viewequips.page';

describe('ViewequipsPage', () => {
  let component: ViewequipsPage;
  let fixture: ComponentFixture<ViewequipsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewequipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
