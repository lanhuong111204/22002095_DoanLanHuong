class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo(): void {
        console.log(`Họ và tên: ${this.name}`);
        console.log(`Tuổi: ${this.age}`);
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);  
        this.grade = grade;
    }

    displayAllInfo(): void {
        super.displayInfo();  
        console.log(`Lớp/Khối: ${this.grade}`);
    }
}

const student1 = new Student("Doan Lan Huong", 18, "12A1");
student1.displayAllInfo();
