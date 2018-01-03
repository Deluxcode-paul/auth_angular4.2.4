import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getUser()
        .subscribe(users => {
            this.user = users.data;
        });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
