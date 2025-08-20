"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Họ và tên: ${this.name}`);
        console.log(`Tuổi: ${this.age}`);
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        super.displayInfo();
        console.log(`Lớp/Khối: ${this.grade}`);
    }
}
const student1 = new Student("Doan Lan Huong", 18, "12A1");
student1.displayAllInfo();
