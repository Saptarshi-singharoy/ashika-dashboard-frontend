import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAuthComponent } from './post-auth.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PostAuthComponent,
    canActivate:[AuthGuard],
    children: [
{
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: 'client-management',
    loadChildren: () => import('./client-management/client-management.module').then(m=>m.ClientManagementModule)
  },
  {
    path: 'revenue-analysis',
    loadChildren: () => import('./revenue-analysis/revenue-analysis.module').then(m=>m.RevenueAnalysisModule)
  },
  {
    path: 'client-activity',
    loadChildren: () => import('./client-activity/client-activity.module').then(m=>m.ClientActivityModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then(m=>m.DetailsModule)
  },
  {
    path: 'do-and-donts',
    loadChildren: () => import('./do-and-donts/do-and-donts.module').then(m=>m.DoAndDontsModule)
  },
  {
    path: 'change-format',
    loadChildren: () => import('./change-formats/change-formats.module').then(m=>m.ChangeFormatsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m=>m.ProfileModule)
  },
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAuthRoutingModule { }
