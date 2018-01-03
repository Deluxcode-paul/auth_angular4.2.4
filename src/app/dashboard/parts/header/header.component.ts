import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../dashboard.component.scss']
})
export class HeaderComponent implements OnInit {

  body = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit() {
  }

  openSidebar() {

    if(this.body.classList.contains("sidebar-open")) {

      this.body.classList.remove("sidebar-open");

    } else {

      this.body.classList.add("sidebar-open");

    }

  }

}
