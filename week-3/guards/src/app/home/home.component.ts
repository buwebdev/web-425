import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h1 class="home">Home Component</h1>
  `,
  styles: [ `
    .home { background-color: red; }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
