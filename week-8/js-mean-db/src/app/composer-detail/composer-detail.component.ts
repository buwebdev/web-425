import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-composer-detail',
  templateUrl: './composer-detail.component.html',
  styleUrls: ['./composer-detail.component.css']
})
export class ComposerDetailComponent implements OnInit {

  composerId: string;
  composer: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient ) {
    this.composerId = this.route.snapshot.paramMap.get('id');

    this.http.get('/api/composers/' + this.composerId).subscribe(data => {
      this.composer = data;
      console.log(this.composer);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }
}
