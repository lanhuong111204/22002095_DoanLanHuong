class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Tên không được để trống.");
        }
    }
}

const user1 = new User("Huong");

console.log(user1.name); 

user1.name = "Lan Huong ";    
console.log(user1.name); 

user1.name = "";         
