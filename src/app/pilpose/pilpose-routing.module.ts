import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilposePage } from './pilpose.page';

const routes: Routes = [
  {
    path: '',
    component: PilposePage
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'my-planning',
    loadChildren: () => import('./my-planning/my-planning.module').then( m => m.MyPlanningPageModule)
  },
  {
    path: 'other-planning',
    loadChildren: () => import('./other-planning/other-planning.module').then( m => m.OtherPlanningPageModule)
  },
  {
    path: 'feuille-temps',
    loadChildren: () => import('./feuille-temps/feuille-temps.module').then( m => m.FeuilleTempsPageModule)
  },
  {
    path: 'conge',
    loadChildren: () => import('./conge/conge.module').then( m => m.CongePageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilposePageRoutingModule {}
