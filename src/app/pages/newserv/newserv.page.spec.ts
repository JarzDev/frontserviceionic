import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewservPage } from './newserv.page';

describe('NewservPage', () => {
  let component: NewservPage;
  let fixture: ComponentFixture<NewservPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewservPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
