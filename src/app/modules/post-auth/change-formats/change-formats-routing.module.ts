import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeFormatsComponent } from './change-formats.component';

const routes: Routes = [
  {
    path:'',
    component: ChangeFormatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeFormatsRoutingModule { }
