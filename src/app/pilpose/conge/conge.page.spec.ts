import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CongePage } from './conge.page';

describe('CongePage', () => {
  let component: CongePage;
  let fixture: ComponentFixture<CongePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CongePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
