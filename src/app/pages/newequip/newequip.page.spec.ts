import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewequipPage } from './newequip.page';

describe('NewequipPage', () => {
  let component: NewequipPage;
  let fixture: ComponentFixture<NewequipPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewequipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
