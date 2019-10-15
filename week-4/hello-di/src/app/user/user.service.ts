import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable()
export class UserService {
  getUser(): User {
    return new User(0, "Richard", "Krasso", "1000 Galvin Road S, Bellevue, NE 68005");
  }
}
