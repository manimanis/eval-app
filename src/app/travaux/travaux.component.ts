import { Component, OnInit } from '@angular/core';
import { TravauxService } from '../service/travaux.service';
import { Travail } from '../entity/travail';
import { UsersService } from '../service/users.service';
import { User } from '../entity/user';

@Component({
  selector: 'app-travaux',
  templateUrl: './travaux.component.html',
  styleUrls: ['./travaux.component.css']
})
export class TravauxComponent implements OnInit {

  travaux: Travail[] = [];
  users: User[] = [];

  constructor(private ts: TravauxService, private us: UsersService) { }

  ngOnInit() {
    this.ts.dataSubscribe().subscribe(data => this.travaux = data);
    this.ts.fetchTravaux();
    this.us.fetchUsers()
      .then(users => this.users = users);
  }

}
