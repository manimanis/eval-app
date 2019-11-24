import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batonnets-one-row-game',
  templateUrl: './batonnets-one-row-game.component.html',
  styleUrls: ['./batonnets-one-row-game.component.css']
})
export class BatonnetsOneRowGameComponent implements OnInit {

  batonnets: number[] = new Array(21).fill(0);
  nbreBatonnets = 21;
  selectedCount = 0;
  player1Name = 'Joueur 1';
  player2Name = 'Joueur 2';
  tourJoueur;
  gameOver = true;

  constructor() { }

  ngOnInit() {
    this.tourJoueur = this.player1Name;
  }

  batonnetClicked(num: number) {
    this.selectedCount = this.batonnets.reduce((p, c) => p + ((c === 1) ? c : 0), 0);

    if (this.selectedCount === 4 && this.batonnets[num] === 0) {
      alert('Vous ne pouvez pas sélectionner plus de 4 batonnets!');
      return;
    }

    if (this.batonnets[num] === 0 && this.selectedCount < 4) {
      this.batonnets[num] = 1;
    } else if (this.batonnets[num] === 1) {
      this.batonnets[num] = 0;
    }
    this.selectedCount = this.batonnets.reduce((p, c) => p + ((c === 1) ? c : 0), 0);
  }

  jouerTour() {
    this.batonnets = this.batonnets.map(b => (b === 1) ? -1 : b);
    this.nbreBatonnets = this.batonnets.reduce((p, c) => p + ((c >= 0) ? 1 : 0), 0);
    this.tourJoueur = (this.tourJoueur === this.player1Name) ? this.player2Name : this.player1Name;
    this.selectedCount = 0;
    if (this.nbreBatonnets === 0) {
      alert(`${this.tourJoueur} a gagné!`);
      this.gameOver = true;
    }
  }

  rejouer() {
    this.batonnets = this.batonnets.fill(0);
    this.nbreBatonnets = 21;
    this.selectedCount = 0;
    this.tourJoueur = this.player1Name;
    this.gameOver = false;
  }

}
