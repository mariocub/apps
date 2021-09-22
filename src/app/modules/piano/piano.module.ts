import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PianoComponent } from './piano.component';

const routes: Routes = [
  {
    path: '',
    component: PianoComponent
  }
];

@NgModule({
  declarations: [
    PianoComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
  ],
  providers: [],
})
export class PianoModule { }
