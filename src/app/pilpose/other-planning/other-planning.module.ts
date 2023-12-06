import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherPlanningPageRoutingModule } from './other-planning-routing.module';

import { OtherPlanningPage } from './other-planning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherPlanningPageRoutingModule
  ],
  declarations: [OtherPlanningPage]
})
export class OtherPlanningPageModule {}
