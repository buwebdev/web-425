import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  username: string
  password: string

  onClear() {
    this.username = ''
    this.password = ''
  }

  onSubmit() {
    alert('Username: ' + this.username + '\nPassword: ' + this.password)
  }
}
