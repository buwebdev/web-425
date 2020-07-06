/**
 * Title: person.class.ts
 * Author: Professor Krasso
 * Date: 21 April 2020
 * Description: Person class that implements a Person interface 
 */

import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Richard", "Krasso");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);