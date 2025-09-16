import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'pre-auth',
    loadChildren: () => import('./modules/pre-auth/pre-auth.module').then( m => m.PreAuthModule)
  },
  {path:'post-auth',
    loadChildren: () => import('./modules/post-auth/post-auth.module').then( m => m.PostAuthModule)
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
