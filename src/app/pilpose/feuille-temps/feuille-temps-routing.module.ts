import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeuilleTempsPage } from './feuille-temps.page';

const routes: Routes = [
  {
    path: '',
    component: FeuilleTempsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeuilleTempsPageRoutingModule {}
