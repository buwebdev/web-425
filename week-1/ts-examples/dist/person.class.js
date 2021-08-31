"use strict";
/**
 * Title: person.class.ts
 * Author: Professor Krasso
 * Date: 21 April 2020
 * Description: Person class that implements a Person interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var myName = new Person("Richard", "Krasso");
console.log("My name is " + myName.firstName + " " + myName.lastName);
