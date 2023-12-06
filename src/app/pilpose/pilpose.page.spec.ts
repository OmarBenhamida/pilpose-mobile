import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilposePage } from './pilpose.page';

describe('PilposePage', () => {
  let component: PilposePage;
  let fixture: ComponentFixture<PilposePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PilposePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
