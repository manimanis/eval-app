import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslatedItem } from '../entity/translated-item';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  items: TranslatedItem[] = null;

  constructor(private http: HttpClient) { }

  fetch(): Promise<TranslatedItem[]> {
    if (this.items) {
      return Promise.resolve(this.items);
    }

    return this.http.get('assets/translate.json')
      .toPromise()
      .then((data: any[]) => {
        this.items = data.map(item => new TranslatedItem(item));
        return this.items;
      });
  }
}
