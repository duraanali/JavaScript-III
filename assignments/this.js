
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When you use "this" for global scope, you are asking for the window/global scope and it will show everything under Window.
* 2. The next principle is Implicit Binding which means that whenever you call a function and there is dot before the word you use to call the function, it's an implicit binding.
* 3. The third principle is called NEW BINDING and it refers to the creation of a new object using the constructor.
* 4. The fourth principle is called Explicit binding, it refers to when you use CALL, APPLY or BIND to explicitly tell the keyword where the 'this' keyword is referring to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const sayAge = function () {
    console.log(this.age)
}

const myAge = {
    age: 30
};

sayAge.call(myAge);

// Principle 2

// code example for Implicit Binding
const me = {
    name: 'Duraan',
    age: 30,
    sayName: function () {
        console.log(this.name);
    }
};

me.sayName();

// Principle 3

// code example for New Binding

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person("Mohamed", "Adan", 75, "brown");

console.log(myFather.firstName);


// Principle 4

// code example for Explicit Binding

const sayName = function () {
    console.log('My name is ' + this.name);
}

const duraan = { 
    name: 'Duraan', 
    age: 30, 
};

sayName.call(duraan);