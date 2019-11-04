import { Component, OnInit, Input } from '@angular/core';
import { TranslatedItem } from '../entity/translated-item';

@Component({
  selector: 'app-translated-items-list',
  templateUrl: './translated-items-list.component.html',
  styleUrls: ['./translated-items-list.component.css']
})
export class TranslatedItemsListComponent implements OnInit {

  @Input() items: TranslatedItem[] = [];

  constructor() { }

  ngOnInit() {
    // this.ts.fetch()
    //   .then(items => this.items = items);
  }

}
