import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  
  {
    path: '',
    component: AppComponent,
  },
     {
       path: 'piano',
       loadChildren: () => import ("./modules/piano/piano.module").then(m => m.PianoModule),
     },
     {
      path: 'dados',
      loadChildren: () => import ("./modules/dados/dados.module").then(m => m.DadosModule),
    },
  {  path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
