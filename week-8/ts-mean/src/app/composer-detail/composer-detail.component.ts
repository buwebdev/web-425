import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

interface Composer {
  id?: number,
  firstName?: string,
  lastName?: string
}

@Component({
  selector: 'app-composer-detail',
  templateUrl: './composer-detail.component.html',
  styleUrls: ['./composer-detail.component.css']
})
export class ComposerDetailComponent implements OnInit {

  composer: Composer

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.http.get<Composer>('/api/composer/' + this.route.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.composer = data
        console.log(this.composer)
      }, (err: HttpErrorResponse) => console.log(`Error: ${err}`))
  }

  ngOnInit() {
  }
}
