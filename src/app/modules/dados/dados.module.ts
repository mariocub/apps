import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DadosComponent } from './dados.component';

const routes: Routes = [
  {
    path: '',
    component: DadosComponent
  }
];

@NgModule({
  declarations: [
    DadosComponent
  ],
  imports: [
    RouterModule.forChild(routes), CommonModule
  ],
  exports: [
  ],
  providers: [],
})
export class DadosModule { }