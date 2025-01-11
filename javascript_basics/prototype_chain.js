/**
 * 
 * [[Prototype]] is an internal property of an object that is simply a reference to another object.
 * __proto__ is a property of an object that is used to get or set the [[Prototype]] of an object.
 * prototype is a property of a function that is used to create the [[Prototype]] of objects created by that function.
 * constructor is a property of a function that is used to create the [[Prototype]] of objects created by that function.
 */

function Animal(name) {
    this.name = name;
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}

function Dog(name) {
    Animal.call(this, name);
}



Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let c = new Cat('Kitty');
let d = new Dog('Buddy');

console.log(c instanceof Animal); // true
console.log(d instanceof Animal); // true
console.log(d instanceof Dog); // true
console.log(d instanceof Cat); // false

let cp = c.__proto__;
let dp = d.__proto__;

console.log(cp === Cat.prototype); // true
console.log(dp === Dog.prototype); // true
console.log(cp === dp); // false

let cpp = cp.__proto__;
let dpp = dp.__proto__;

console.log(cpp === Animal.prototype); // true
console.log(dpp === Animal.prototype); // true
console.log(cpp === dpp); // true

let cppp = cpp.__proto__;
let dppp = dpp.__proto__;

console.log(cppp === Object.prototype); // true
console.log(dppp === Object.prototype); // true
console.log(cppp === dppp); // true

let cpppp = cppp.__proto__;
let dpppp = dppp.__proto__;

console.log(cpppp === null); // true
console.log(dpppp === null); // true
console.log(cpppp === dpppp); // true

let apt = Animal.prototype;
let cpt = Cat.prototype;
let dpt = Dog.prototype;

console.log(cpt === dpt); // false
console.log(cpt === apt); // false
console.log(dpt === apt); // false
console.log(cpt === apt); // false

/*

Foo (constructor function)
 │
 ├── prototype ---> Foo.prototype
 │                      │
 │                      └── [[Prototype]] ---> Object.prototype ---> null
 │
 └── [[Prototype]] ---> Function.prototype
                           │
                           └── [[Prototype]] ---> Object.prototype ---> null


Function (constructor function)
 │
 ├── prototype ---> Function.prototype
 │                      │
 │                      └── [[Prototype]] ---> Object.prototype ---> null
 │
 └── [[Prototype]] ---> Function.prototype (self-reference)


Object (constructor function)
 │
 ├── prototype ---> Object.prototype
 │                      │
 │                      └── [[Prototype]] ---> null
 │
 └── [[Prototype]] ---> Function.prototype


Instance of Foo (e.g., `const foo = new Foo()`)
 │
 └── [[Prototype]] ---> Foo.prototype
                           │
                           └── [[Prototype]] ---> Object.prototype ---> null


*/