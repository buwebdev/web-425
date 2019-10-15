/*
============================================
; Title:  name-generator.ts
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to create functions and variables in TypeScript
;===========================================
*/

// variables
let firstName: string = 'Richard';
let lastName: string = 'Krasso';

// function
function myName(firstName: string, lastName: string): string {
    return 'Hello ' + firstName + ' ' + lastName;
}

// output
console.log(myName(firstName, lastName));
