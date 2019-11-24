import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serviceDomain = '';
  servicePath = '/soumission/public/authenticate/index';

  get serviceUrl() {
    return this.serviceDomain + this.servicePath;
  }

  constructor(private http: HttpClient) {
    this.serviceDomain = document.querySelector('app-root').getAttribute('data-domain');
  }

  loginUser(username, password): Observable<any> {
    return this.http.post(this.serviceUrl, {
      op: 'login',
      username,
      password
    }, {
      responseType: 'json',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  logoutUser() {
    return fetch(this.serviceUrl, {
      headers: {
        accept: 'application/json',
        'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        'upgrade-insecure-requests': '1'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        op: 'logout'
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }
}
