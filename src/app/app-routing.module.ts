import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'pre-auth',
    loadChildren: () => import('./modules/pre-auth/pre-auth.module').then( m => m.PreAuthModule)
  },
  {
    path:'',
    redirectTo: 'pre-auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
