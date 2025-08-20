class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfo(): void {
        console.log(`Hãng xe: ${this.brand}`);
        console.log(`Dòng xe: ${this.model}`);
        console.log(`Năm sản xuất: ${this.year}`);
    }
}

const car1 = new Car("Toyota", "Camry", 2025);
car1.showInfo();
