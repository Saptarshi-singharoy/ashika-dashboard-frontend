import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoAndDontsComponent } from './do-and-donts.component';

const routes: Routes = [
  {
    path:'',
    component: DoAndDontsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoAndDontsRoutingModule { }
