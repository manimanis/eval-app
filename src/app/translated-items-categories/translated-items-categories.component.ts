import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { TranslateService } from '../service/translate.service';
import { TranslatedItem } from '../entity/translated-item';

declare var Prism: any;

@Component({
  selector: 'app-translated-items-categories',
  templateUrl: './translated-items-categories.component.html',
  styleUrls: ['./translated-items-categories.component.css']
})
export class TranslatedItemsCategoriesComponent implements OnInit, AfterViewChecked {

  categories: string[];
  subcategories: any;
  items: any;
  rawData: TranslatedItem[];

  keywords = '';

  constructor(private ts: TranslateService) { }

  ngOnInit() {
    this.ts.fetch()
      .then((data: TranslatedItem[]) => {
        this.rawData = data;
        this.search(this.keywords);
      });
  }

  ngAfterViewChecked() {
    const algos = document.querySelectorAll('.language-algorithm');
    const python = document.querySelectorAll('.language-python');

    algos.forEach(item => {
      const ic = item.querySelectorAll('.token').length;
      if (ic === 0) {
        Prism.highlightElement(item);
      }
    });

    python.forEach(item => {
      const ic = item.querySelectorAll('.token').length;
      if (ic === 0) {
        Prism.highlightElement(item);
      }
    });
  }

  filterData(data: TranslatedItem[], keywords: string) {
    return data.filter(item => keywords !== '' ? item.contains(keywords) : true);
  }

  prepareData(data: TranslatedItem[]) {
    this.categories = data.map((item) => item.categorie);
    this.categories = this.categories.filter((category, idx) => this.categories.indexOf(category) === idx);
    this.subcategories = {};
    this.categories.forEach(category => this.subcategories[category] = []);
    data.forEach(item => {
          if (!this.subcategories[item.categorie].includes(item.sousCategorie)) {
            this.subcategories[item.categorie].push(item.sousCategorie);
          }
        });
    this.items = {};
    this.categories.forEach(category => {
          this.items[category] = {};
          this.subcategories[category].forEach(subcat => this.items[category][subcat] = []);
        });
    data.forEach((item) => this.items[item.categorie][item.sousCategorie].push(item));
  }

  search(keywords: string) {
    this.keywords = keywords.trim().toLocaleLowerCase();
    this.prepareData(this.filterData(this.rawData, keywords));
  }

}
