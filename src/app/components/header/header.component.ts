import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  constructor(
    private el: ElementRef
  ) { }

  onMouseEnter(event: MouseEvent) {
    const elem = this.el.nativeElement;
    const linkCoords = elem.getBoundingClientRect();

    console.log(this.el.nativeElement);
  }

  ngOnInit() {
  }

}
