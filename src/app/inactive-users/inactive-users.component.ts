import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService,
              private counterService: CounterService) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);

    // Dùng cách inject 1 service (cần khai báo ở app module) vào 1 service khác (cần có @injectable + inject qua constructor)
    // this.counterService.counter('inactive to active');
  }
}
