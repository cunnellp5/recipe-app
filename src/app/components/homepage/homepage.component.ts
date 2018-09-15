import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  isModalActive: boolean;
  birthdayModal: boolean;
  constructor() { }

  ngOnInit() {
    this.isModalActive = !this.isModalActive;
    this.birthDayCheck();
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  birthDayCheck() {
    let year = new Date().getUTCFullYear();
    let birthday = new Date(`September 3 ${year}`);
    let month = new Date().getMonth();
    let day = new Date().getDay();
    if(month === birthday.getMonth() && day === birthday.getDay()) {
      return true;
    } else {
      return false;
    }
  }

}
