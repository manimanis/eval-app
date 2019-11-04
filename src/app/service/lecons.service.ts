import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lecon } from '../entity/lecon';

@Injectable({
  providedIn: 'root'
})
export class LeconsService {

  items: Lecon[] = null;

  constructor(private http: HttpClient) { }

  fetchAll(): Promise<Lecon[]> {
    if (this.items) {
      return Promise.resolve(this.items);
    }

    return this.http.get('assets/works.json')
      .toPromise()
      .then((data: any) => {
        this.items = data.map(item => new Lecon(item));
        return this.items;
      });
  }
}
