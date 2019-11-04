import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { LeconsService } from '../service/lecons.service';
import { Lecon } from '../entity/lecon';

declare var Prism: any;

@Component({
  selector: 'app-lecons',
  templateUrl: './lecons.component.html',
  styleUrls: ['./lecons.component.css']
})
export class LeconsComponent implements OnInit, AfterViewChecked {

  parLecon = true;
  numLecon = 0;
  lecons: Lecon[] = [];

  constructor(private ls: LeconsService) { }

  ngOnInit() {
    this.ls.fetchAll()
      .then(lecons => {
        this.lecons = lecons;
      });
  }

  ngAfterViewChecked(): void {
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

  selectLecon(lecon: number) {
    if (lecon === -1) {
      this.parLecon = false;
    } else {
      this.numLecon = lecon;
      this.parLecon = true;
    }
  }

}
