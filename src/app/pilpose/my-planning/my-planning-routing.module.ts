import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPlanningPage } from './my-planning.page';

const routes: Routes = [
  {
    path: '',
    component: MyPlanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPlanningPageRoutingModule {}
