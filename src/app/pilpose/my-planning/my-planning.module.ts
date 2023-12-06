import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPlanningPageRoutingModule } from './my-planning-routing.module';

import { MyPlanningPage } from './my-planning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPlanningPageRoutingModule
  ],
  declarations: [MyPlanningPage]
})
export class MyPlanningPageModule {}
