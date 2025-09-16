import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';



@NgModule({
  declarations: [SideMenuComponent, TopBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[SideMenuComponent,TopBarComponent]
})
export class CoreModule { }
