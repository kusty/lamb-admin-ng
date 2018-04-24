import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class TourismService {

  constructor(private http: Http) { }

  getPoiList(params): Observable<any> {
    return this.http.get('poi/getList', params);
  }
}
