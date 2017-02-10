import {Inject, Injectable} from "@angular/core";

import {Observable} from "rxjs/Observable";

import {Http, Headers} from "@angular/http";

import "rxjs/add/operator/map";

@Injectable()
export class EventsService {
  static ENDPOINT: string = "/api/events/:id";

  constructor(@Inject(Http) private _http: Http) {

  }
  getAll(): Observable<any> {
    return this._http
        .get(EventsService.ENDPOINT.replace(":id", ""))
        .map((r) => r.json());
  }

  remove(id: string): Observable<any> {
    return this._http
        .delete(EventsService.ENDPOINT.replace(":id", id));
  }

}
