"use strict";
/**
 * Title: vehicle.class.ts
 * Author: Professor Krasso
 * Date: 21 April 2020
 * Description: Vehicle class that implements the Vehicle interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.year = 2019;
        this.make = "Jeep";
        this.model = "Wrangler";
    }
    Vehicle.prototype.toString = function () {
        return "Year: " + this.year + "\nMake: " + this.make + "\nModel: " + this.model;
    };
    return Vehicle;
}());
var jeep = new Vehicle();
// Default values 
console.log("\-- DEFAULT VALUES --");
console.log(jeep.toString());
// Assign new values
console.log("\n-- UPDATED VALUES --");
jeep.year = 2020;
jeep.make = "Jeep";
jeep.model = "Gladiator";
console.log(jeep.toString());
