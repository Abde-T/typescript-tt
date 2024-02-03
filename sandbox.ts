let character = 'mario';
let age = 30
let isBlackBelt = false

const circ = (diameter:number) => {
  return diameter * Math.PI 
}

console.log(circ(10))

//Arrays

let names = ['luigi', 'mario', 'yoshi', 10] //if you only define one type in the array they you can only add or change the same type to it
names.push('josh')
names.push(2)

//Objects
let ninja = {
  name:'jhon',
  belt:'black',
  age:50,
}
ninja['rank']='master'

ninja = {
  name:'mark',
  belt:'white',
  age:20,
}

console.log(ninja)


//explicit types
let char:string;
let agee:number;
let blackBelt:boolean;

//arrays
let words: string[] = [];
let numbers: number[] = [];

//union types
let x : string | number 
let y: (string|number|boolean)[];

//objects
let NinjaType: {name:string ,belt:string ,age:number};

//any

let a : any
let b : any[]