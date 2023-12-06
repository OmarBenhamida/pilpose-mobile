import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeuilleTempsPage } from './feuille-temps.page';

describe('FeuilleTempsPage', () => {
  let component: FeuilleTempsPage;
  let fixture: ComponentFixture<FeuilleTempsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeuilleTempsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
