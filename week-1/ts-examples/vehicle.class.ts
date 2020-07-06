/**
 * Title: vehicle.class.ts
 * Author: Professor Krasso
 * Date: 21 April 2020
 * Description: Vehicle class that implements the Vehicle interface
 */

import { IVehicle } from "./vehicle.interface";

class Vehicle implements IVehicle {
    year: number;
    make: string;
    model: string;

    constructor() {
        this.year = 2019;
        this.make = "Jeep";
        this.model = "Wrangler"
    }

    toString(): string {
        return `Year: ${this.year}\nMake: ${this.make}\nModel: ${this.model}`
    }
}

let jeep = new Vehicle();

// Default values 
console.log("\-- DEFAULT VALUES --");
console.log(jeep.toString());

// Assign new values
console.log("\n-- UPDATED VALUES --")
jeep.year = 2020;
jeep.make = "Jeep";
jeep.model = "Gladiator";

console.log(jeep.toString());