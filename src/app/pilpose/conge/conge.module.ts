import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongePageRoutingModule } from './conge-routing.module';

import { CongePage } from './conge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongePageRoutingModule
  ],
  declarations: [CongePage]
})
export class CongePageModule {}
