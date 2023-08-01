import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewcontactPage } from './viewcontact.page';

describe('ViewcontactPage', () => {
  let component: ViewcontactPage;
  let fixture: ComponentFixture<ViewcontactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewcontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
