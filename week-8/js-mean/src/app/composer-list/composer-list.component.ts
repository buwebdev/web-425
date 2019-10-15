import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  columnHeaders: string[] = ['id', 'firstName', 'lastName'];
  rows: any;

  constructor(private http: HttpClient) {
    this.http.get('/api/composers').subscribe(data => {
      this.rows = data
    })
  }

  ngOnInit() {
  }
}
