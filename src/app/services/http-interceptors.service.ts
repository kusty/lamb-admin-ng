import { Injectable } from '@angular/core';
import { Http, RequestOptions, ConnectionBackend, RequestOptionsArgs, URLSearchParams, Request, Response, Headers } from '@angular/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/Rx';

@Injectable()
export class HttpInterceptorsService extends Http {
  private http: Http;
  private base_url: string = environment.API_URL;
  private userService: UserService;
  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private router: Router,
    private noticeService: NotificationsService) {
    super(backend, defaultOptions);
    this.userService = new UserService(this.http);
  }

  get(path: string, search?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers();
    this.setAuthorizationHeader(headers);
    return this.intercept(super.get(this.base_url + path, { headers, search })
      .share())
      .map((res: Response) => res.json());
  }

  post(path: string, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers();
    this.setAuthorizationHeader(headers);
    return this.intercept(super.post(this.base_url + path, options, { headers }))
      .share()
      .map((res: Response) => res.json());
  }

  put(path: string, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers();
    this.setAuthorizationHeader(headers);
    return this.intercept(super.post(this.base_url + path, options, { headers }))
      .share()
      .map((res: Response) => res.json());
  }

  delete(path: string, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers();
    this.setAuthorizationHeader(headers);
    return this.intercept(super.post(this.base_url + path, options, { headers }))
      .share()
      .map((res: Response) => res.json());
  }

  setAuthorizationHeader(headers: Headers): void {
    const token = this.userService.getToken();
    headers.append('Authorization', `Bearer ${token}`);
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    observable.subscribe((res) => {
      if (res.json().status !== 200) {
        if (res.json().status === 604) {
          this.userService.clearUserInfo();
          this.router.navigate(['/user/login']);
          return false;
        } else {
          this.noticeService.error('', res.json().msg);
        }
      }
    }, (err) => {
      console.log(err);
    });
    return observable;
  }

}
