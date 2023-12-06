import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPlanningPage } from './my-planning.page';

describe('MyPlanningPage', () => {
  let component: MyPlanningPage;
  let fixture: ComponentFixture<MyPlanningPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyPlanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
