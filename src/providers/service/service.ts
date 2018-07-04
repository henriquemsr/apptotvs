import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceProvider {

  constructor(public http: Http) {

    console.log('Hello ServiceProvider Provider');

  }

  getPhotos() {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);
    return this.http.get('http://jsonplaceholder.typicode.com/photos', options)
      .map(res => res.json());
  }


}//final Provider
