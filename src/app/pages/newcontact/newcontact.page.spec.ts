import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewcontactPage } from './newcontact.page';

describe('NewcontactPage', () => {
  let component: NewcontactPage;
  let fixture: ComponentFixture<NewcontactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewcontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
