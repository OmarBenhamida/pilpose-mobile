import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherPlanningPage } from './other-planning.page';

describe('OtherPlanningPage', () => {
  let component: OtherPlanningPage;
  let fixture: ComponentFixture<OtherPlanningPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OtherPlanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
