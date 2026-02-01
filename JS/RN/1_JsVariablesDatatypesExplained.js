let name = "Rohit";
name = "SHATRUGHAN";
console.log(name);
const age = "SHUKLA";
// age = "SHUKLA JI"; // can't chenge age's value!
console.log(name, age);

// Problem with var!
var x = 50;
var x = 40;
console.log(x);
if (true) {
  var y = "lpa";
}
console.log(x, y);
// var respects only global and functional scope !! not any other! + it val could be chmaged any no of times.
if (true) {
  let z = 80;
  let m = "lpa";
  console.log(z, m); // will work;
}
// console.log(z,m); // will not work;

// DataTypes
// Primitive DataType: number, string, boolean, undefined, null, bigint, symbol;

// number
let a = 10;
let b = 2.86;
console.log(a, b);
console.log(typeof a, typeof b);

// string
let k = "Shatru is the";
let i = "King!";
console.log(k, i);
console.log(typeof k, typeof i);


// boolean;
let t = true;
let f = false;
console.log(t, f);
console.log(typeof t, typeof f);


// BigInt
let numX = 242353245636522432423432432422322222353456;
let numY = 242353245636522432423432432422322222353456n;
console.log(numX, numY);
console.log(typeof numX, typeof numY);


// undefined
let u;
console.log(u);
console.log(typeof u);

// const u; ERROR! it's compulsory to assign a value to const;

// null
let n = null;
console.log(n);
console.log(typeof n); // The Famous legacy bug of JS!
/*
    Diff b/w null and const;
    let weather = current_weather("Dwarka");
    25 // 25 deg celsius
    null // temp exist but not able to find currently, try again later (given by the developer);
    undefined // temp doesn't exist (given by the system);
*/

// symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1, id2);
console.log(id1 == id2);
console.log(typeof id1, typeof id2);

// Non Primitive data type: Array, Object, Function;

// Array
let arr = [12, 34, 45, 67, "Rohit", "Shatrughan", null, true, false];
console.log(arr);
console.log(typeof arr);


// Object
// Rohit 24244540 22 gen What is meant by this?
let user = {
  name: "Rohit",
  aNo: 24244540,
  age: 22,
  category: " gen",
};
console.log(typeof user);
// object is a collection of related data and actions stored as key–value pairs.

// Function: a reusable block of code that performs a specific task when called.
function hello() {
  console.log("Hello!!");
}
hello();

// In js, We can store the function in a variable;
let s = function hello() {
    console.log("Hello!!");
}
console.log(s);
s();
console.log(typeof s);
console.log(typeof hello);

// Primitive data-type is immutable.
let str = "Rohit"
str[0] = "M";
console.log(str[0]);
console.log(str);
str = "Mohit";
console.log(str);
// so we can reassign new value in a var but can't change the values;

// Non-Primitve data types are mutable.
let arrX = [10, 20, 30, 40];
arrX.push(90);
console.log(arrX);
arrX[0] = 0; 
console.log(arrX); 

let objX = {
    name: "Mohan",
    age: 22
}
console.log(objX);
objX.name = "Rohan";
console.log(objX);

// pass by value: Primitive
let g = 10;
let h = g;
h = 20;
console.log(g, h); 

// pass by reference: Non-Primitive
let objM = {
    name: "Rohan",
    age: 22
}
let objN = objM;
objN.name = "Mohan";
objN.age = 23;
console.log(objM);
console.log(objN);
