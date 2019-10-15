import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable} from "rxjs";
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

  users: User[] = [
    {id: 1, firstName: "Johann", lastName: "Bach", address: "505 Main Street"},
    {id: 2, firstName: "Wolfgang", lastName: "Mozart", address: "1000 S Main Street"},
    {id: 3, firstName: "Ludwig", lastName: "Beethoven", address: "300 Main Street"},
    {id: 4, firstName: "Giuseppe", lastName: "Verdi", address: "2001 N Main Street"},
    {id: 5, firstName: "Frederic", lastName: "Chopin", address: "601 E Main Street"}
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return Observable.of(this.users);
  }
}
