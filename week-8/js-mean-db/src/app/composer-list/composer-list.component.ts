import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname'];
  composers: any;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('/api/composers').subscribe(data => {
      this.composers = data;
      console.log(this.composers);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }
}
