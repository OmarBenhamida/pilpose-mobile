import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilposePageRoutingModule } from './pilpose-routing.module';

import { PilposePage } from './pilpose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilposePageRoutingModule
  ],
  declarations: [PilposePage]
})
export class PilposePageModule {}
