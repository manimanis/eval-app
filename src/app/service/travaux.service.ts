import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, Subject } from 'rxjs';
import { Travail } from '../entity/travail';
import { UsersService } from './users.service';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class TravauxService {

  serviceDomain = '';
  servicePath = '/sapi/public/index.php/api/travauxes.jsonld?order[date_envoi]=desc&order[user_id]=asc';

  travauxSubject: Subject<Travail[]> = new Subject<Travail[]>();
  travaux: Travail[] = [];

  get serviceUrl() {
    return this.serviceDomain + this.servicePath;
  }

  constructor(private http: HttpClient, private usersService: UsersService) {
    this.serviceDomain = document.querySelector('app-root').getAttribute('data-domain');
  }

  emitData() {
    this.travauxSubject.next(this.travaux);
  }

  dataSubscribe(): Subject<Travail[]> {
    return this.travauxSubject;
  }

  fetchTravaux() {
    return this.http.get(this.serviceUrl)
      .subscribe((data: any) => {
        this.travaux = data['hydra:member'].map(item => {
          const travail = new Travail(item);
          this.usersService.getUserById(travail.userId)
            .then((user: User) => travail.user = user);
          return travail;
        });
        this.emitData();
      });
  }
}
