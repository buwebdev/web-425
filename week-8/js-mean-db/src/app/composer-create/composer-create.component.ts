import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-composer-create',
  templateUrl: './composer-create.component.html',
  styleUrls: ['./composer-create.component.css']
})
export class ComposerCreateComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [null, Validators.compose([ Validators.required ])],
      lastName: [null, Validators.compose([ Validators.required ])]
    });
  }

  createComposer() {
    const firstName = this.form.controls['firstName'].value;
    const lastName = this.form.controls['lastName'].value;

    console.log('First Name: ' + firstName + '\nLast Name: ' + lastName);

    this.http.post('/api/composers', {
      firstName: firstName,
      lastName: lastName
    }).subscribe(res => {
      this.router.navigate(['/'])
    }, err => {
      console.log(err);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
