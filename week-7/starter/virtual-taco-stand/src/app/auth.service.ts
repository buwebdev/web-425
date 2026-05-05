export interface User {
  empId: number;
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[];
  private authState: BehaviorSubject<boolean>;

  constructor(private cookieService: CookieService, private router: Router) {
    this.users = [
      { empId: 1007, email: 'wizardlywand@hogwarts.com', password: 'Alohomora123' },
      { empId: 1008, email: 'quidditchqueen@hogwarts.com', password: 'Quaffle22' },
      { empId: 1009, email: 'potionmaster@hogwarts.com', password: 'Polyjuice99' },
      { empId: 1010, email: 'mugglemania@hogwarts.com', password: 'Dementor0' },
      { empId: 1011, email: 'spellbinder@hogwarts.com', password: 'Expelliarmus88' }
    ];

    const sessionUserExists = this.cookieService.check('session_user');
    this.authState = new BehaviorSubject<boolean>(sessionUserExists);
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  signin(email: string, password: string) {
    const user = this.users.find(user => user.email === email && user.password === password);

    if (user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout() {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => {});
  }
}
