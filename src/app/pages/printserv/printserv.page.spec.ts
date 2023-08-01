import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintservPage } from './printserv.page';

describe('PrintservPage', () => {
  let component: PrintservPage;
  let fixture: ComponentFixture<PrintservPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrintservPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
