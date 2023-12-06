import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeuilleTempsPageRoutingModule } from './feuille-temps-routing.module';

import { FeuilleTempsPage } from './feuille-temps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeuilleTempsPageRoutingModule
  ],
  declarations: [FeuilleTempsPage]
})
export class FeuilleTempsPageModule {}
