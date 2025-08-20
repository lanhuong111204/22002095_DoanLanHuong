"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        }
        else {
            console.log("Tên không được để trống.");
        }
    }
}
const user1 = new User("Huong");
console.log(user1.name);
user1.name = "Lan Huong ";
console.log(user1.name);
user1.name = "";
