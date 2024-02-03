var character = 'mario';
var age = 30;
var isBlackBelt = false;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(10));
//Arrays
var names = ['luigi', 'mario', 'yoshi', 10]; //if you only define one type in the array they you can only add or change the same type to it
names.push('josh');
names.push(2);
//Objects
var ninja = {
    name: 'jhon',
    belt: 'black',
    age: 50,
};
ninja['rank'] = 'master';
ninja = {
    name: 'mark',
    belt: 'white',
    age: 20,
};
console.log(ninja);
//explicit types
var char;
var agee;
var blackBelt;
//arrays
var words = [];
var numbers = [];
//union types
var x;
var y;
//objects
var NinjaType;
//any
var a;
var b;
