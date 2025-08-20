"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Hãng xe: ${this.brand}`);
        console.log(`Dòng xe: ${this.model}`);
        console.log(`Năm sản xuất: ${this.year}`);
    }
}
const car1 = new Car("Toyota", "Camry", 2025);
car1.showInfo();
