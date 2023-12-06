import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherPlanningPage } from './other-planning.page';

const routes: Routes = [
  {
    path: '',
    component: OtherPlanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherPlanningPageRoutingModule {}
