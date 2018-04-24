import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { RouterLoginInterceptorsService } from './services/router-interceptors.service';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tourism/poi',
    pathMatch: 'full',
  },
  {
    path: 'tourism',
    redirectTo: 'tourism/poi',
    pathMatch: 'full',
  },
  {
    path: 'tourism',
    component: FullLayoutComponent,
    canActivate: [RouterLoginInterceptorsService],
    data: {
      title: '旅游管理'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/tourism/tourism.module#TourismModule',
      }
    ]
  },
  {
    path: 'user',
    component: SimpleLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './pages/user/user.module#UserModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
