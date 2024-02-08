"use strict";
let character = 'mario';
let age = 30;
let isBlackBelt = false;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(10));
//* Arrays
let names = ['luigi', 'mario', 'yoshi', 10]; //if you only define one type in the array they you can only add or change the same type to it
names.push('josh');
names.push(2);
//* Objects
let ninja = {
    name: 'jhon',
    belt: 'black',
    age: 50,
};
// ninja['rank']='master'
ninja = {
    name: 'mark',
    belt: 'white',
    age: 20,
};
console.log(ninja);
//* explicit types
let char;
let agee;
let blackBelt;
//* arrays
let words = [];
let numbers = [];
//* union types
let x;
let y;
//* objects
let NinjaType;
//* any
let a;
let b;
//* Function Basics
let greet;
greet = () => {
    return 'Hello World';
};
//* function signature
//& ex1 
let fn1;
fn1 = (name, value) => {
    console.log(`${name} is ${value}`);
};
//& ex2
let fn2;
fn2 = (name, value, action) => {
    if (action == 'greet') {
        return name + value;
    }
    else {
        return name - value;
    }
};
//& ex3
let fn3;
fn3 = (obj) => {
    console.log(`${obj.name} is ${obj.age}`);
};
