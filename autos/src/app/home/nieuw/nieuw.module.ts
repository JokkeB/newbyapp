import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NieuwPageRoutingModule } from './nieuw-routing.module';

import { NieuwPage } from './nieuw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NieuwPageRoutingModule
  ],
  declarations: [NieuwPage]
})
export class NieuwPageModule {}
