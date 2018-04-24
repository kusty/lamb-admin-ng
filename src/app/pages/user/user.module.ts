import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user.routing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterUnLoginInterceptorsService } from '../../services/router-interceptors.service';
@NgModule({
  imports: [UserRoutingModule, FormsModule],
  declarations: [
    LoginComponent
  ],
  providers: [RouterUnLoginInterceptorsService]
})
export class UserModule { }
