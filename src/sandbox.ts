let character = 'mario';
let age = 30
let isBlackBelt = false

const circ = (diameter:number) => {
  return diameter * Math.PI 
}

console.log(circ(10))

//* Arrays

let names = ['luigi', 'mario', 'yoshi', 10] //if you only define one type in the array they you can only add or change the same type to it
names.push('josh')
names.push(2)

//* Objects
let ninja = {
  name:'jhon',
  belt:'black',
  age:50,
}
// ninja['rank']='master'

ninja = {
  name:'mark',
  belt:'white',
  age:20,
}

console.log(ninja)


//* explicit types
let char:string;
let agee:number;
let blackBelt:boolean;

//* arrays
let words: string[] = [];
let numbers: number[] = [];

//* union types
let x : string | number 
let y: (string|number|boolean)[];

//* objects
let NinjaType: {name:string ,belt:string ,age:number};

//* any

let a : any
let b : any[]


//* Function Basics
let greet:Function;
greet=():string =>{
  return 'Hello World';
}

//* function signature
//& ex1 
let fn1: (a:string, b:string) => void
fn1 = (name:string, value:string) => {
  console.log(`${name} is ${value}`)
}

//& ex2
let fn2: (a:number, b:number, c:string) => number;
fn2 = (name:number, value:number, action:string) => {
  if(action == 'greet'){
    return name + value
  } else{
    return name - value
  }
}

//& ex3
let fn3: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number };

fn3 = (obj: person) => {
  console.log(`${obj.name} is ${obj.age}`)
}



