import { Injectable } from '@angular/core';
import { User } from '../entity/user';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  serviceDomain = '';
  servicePath = '/sapi/public/index.php/api/users.jsonld';

  users: User[] = [];

  get serviceUrl() {
    return this.serviceDomain + this.servicePath;
  }

  constructor(private http: HttpClient) {
    this.serviceDomain = document.querySelector('app-root').getAttribute('data-domain');
  }

  fetchUsers(reload: boolean = false): Promise<User[]> {
    if (!reload && this.users.length !== 0) {
      return Promise.resolve(this.users);
    }
    return this.http.get(this.serviceUrl)
      .toPromise()
      .then((data: any) => {
        this.users = data['hydra:member'].map(item => new User(item));
        this.users.sort((a, b) => {
          const fn1 = a.fullname.toLowerCase();
          const fn2 = b.fullname.toLowerCase();
          if (fn1 > fn2) {
            return 1;
          } else if (fn1 < fn2) {
            return -1;
          }
          return 0;
        });
        return this.users;
      });
  }

  getUserById(id): Promise<User> {
    return this.fetchUsers()
      .then((users: User[]) => users.find(user => user.id === id));
  }

}
