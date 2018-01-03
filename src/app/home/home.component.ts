import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerOffsetTop: number  = 0;
  model: any = {};
  loading = false;
  error = '';

  @ViewChild('header') header: ElementRef;

  constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.onWindowScroll();

    if(this.authenticationService.checkUser()) {
      this.router.navigate(['/dashboard']);
    }
  }

  @HostListener("window:scroll", [])
  @HostListener("window:resize", [])
  onWindowScroll() {
    const rect = this.header.nativeElement.getBoundingClientRect();
    this.headerOffsetTop = rect.top + window.pageYOffset - document.documentElement.clientTop;
  }

  toTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  to(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
        .subscribe(
            result => {
              if (result.status === true) {
                this.loading = false;
                this.router.navigate(['/dashboard']);
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

}
