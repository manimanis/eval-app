import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-translated-item',
  templateUrl: './translated-item.component.html',
  styleUrls: ['./translated-item.component.css']
})
export class TranslatedItemComponent implements OnInit {

  @Input() titre = '';
  @Input() algorithme = '';
  @Input() python = '';

  @Input() afficherTitre = true;

  constructor() { }

  ngOnInit() {
  }

}
