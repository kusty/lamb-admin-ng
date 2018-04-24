import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RouterUnLoginInterceptorsService } from '../../services/router-interceptors.service';
const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'login',
        canActivate: [RouterUnLoginInterceptorsService],
        component: LoginComponent,
        data: {
          title: 'login'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
