import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then(m=> m.SignInModule)
  },
  {path:'forgot-password',
    loadChildren: () => import('./forget-password/forget-password.module').then(m=>m.ForgetPasswordModule)
  },
  {
    path:'',
    redirectTo: 'sign-in',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreAuthRoutingModule { }
