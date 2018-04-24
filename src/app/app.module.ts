import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';


import { NgZorroAntdModule } from 'ng-zorro-antd';


import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

import { HttpInterceptorsService } from './services/http-interceptors.service';
import { RouterLoginInterceptorsService, RouterUnLoginInterceptorsService } from './services/router-interceptors.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions, router: Router, notice: NotificationsService) {
  return new HttpInterceptorsService(backend, defaultOptions, router, notice)
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, {
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions, Router, NotificationsService]
  },
    RouterLoginInterceptorsService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
