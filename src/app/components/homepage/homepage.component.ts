import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  isModalActive: boolean;
  constructor() { }

  ngOnInit() {
    this.isModalActive = !this.isModalActive;
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

}
