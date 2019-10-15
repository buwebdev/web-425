import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>User Detail for User: {{ userId }}</h2>
      </div>
    </div>
  `,
  styles: [ `
    .container {
      margin-top: 20px; 
    }
    h2 {
      color: darkorange;
    }
  `]
})
export class UserComponent implements OnInit {
  userId: string;

  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
