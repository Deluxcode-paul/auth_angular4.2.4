import { Component, OnInit, ViewChild, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';

import { SignUp } from '../../_interfaces/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  headerOffsetTop: number  = 0;
  goal = null;
  gender = null;

  loading = false;
  error = '';

  user: SignUp;

  @ViewChild('header') header: ElementRef;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.user = new SignUp;
  }

  ngOnInit() {
    this.onWindowScroll();

    this.gender = 1;
  }

  @HostListener("window:scroll", [])
  @HostListener("window:resize", [])
  onWindowScroll() {
    const rect = this.header.nativeElement.getBoundingClientRect();
    this.headerOffsetTop = rect.top + window.pageYOffset - document.documentElement.clientTop;
  }

  takeGoal(item) {
    this.goal = item;
  }

  takeGender(item) {
    this.gender = item;
  }

  save() {
    console.log(this.user);

    this.loading = true;

    this.authenticationService.signup(this.user)
        .subscribe(
          result => {
            if (result.status === true) {
                this.router.navigate(['/']);
            } else {
                this.error = result.message;
                this.loading = false;
            }
          },
          error => {
            this.error = error.json().message;
            this.loading = false;
          }
        );
  }

  toTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  setGender(value) {
    this.user.gender = value;
  }
}
