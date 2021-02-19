import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NieuwPage } from './nieuw.page';

const routes: Routes = [
  {
    path: '',
    component: NieuwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NieuwPageRoutingModule {}
