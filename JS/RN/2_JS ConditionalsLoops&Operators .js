// Operators
// 1.) Arithmetic Operators ~
console.log(5+3);
console.log(5-3);
console.log(5*3);
console.log(5/3);
console.log(5%3);
console.log(5**3);


// 2.) Assignment Operator ~
let x = 10;
let y = 20;
x += y; // ~~ x = x + y;
console.log(x);
x -= y;
console.log(x);
x *= y;
console.log(x);
x /= y;
console.log(x);
x %= y;
console.log(x);
x **= y;
console.log(x);

// 3.) Type Conversion ~
let z = "120"
console.log(z);
console.log(typeof z);
let t = Number(z);
console.log(t);
console.log(typeof t);

let f = "121ac"
console.log(Number(f)); // gives NaN ~~ means not a number;
let g = 345;
console.log(String(g)); // gives 345 as string;
console.log(Number(true)); // gives 1 as answer;
console.log(Number(false)); // gives 0 as answer;
console.log(Number(null)); // gives 0;
console.log(typeof null); // gives type as object;
console.log(Number(undefined)); // gives NaN;
console.log(typeof Number(undefined)); // gives type as number;
console.log(typeof undefined); // gives type as undefined;
console.log(Number(0/0)); // gives NaN;
console.log(typeof true); // ~~ true;
console.log(String(true)); // ~~ "true";
console.log(typeof String(true));
console.log(Boolean(4)); // gives true;
console.log(Boolean(0)); // gives false;
console.log(typeof Boolean(0)); // gives boolean;
console.log(Boolean("Hello Worls")); // gives true;
console.log(Boolean("")); // gives false;

// 4.) Comparision Operator ~
let m = 100;
let n = 200;
console.log(m<n);
console.log(m>n);
console.log(m<=n);
console.log(m>=n);
n = "100";
console.log(m==n); // when we compare number and string, it converts string into number to check. ans here is true;
console.log(m===n); // strict checking, it checks type first then does the comaprision. ans here is false;

// ECMA Script defines the JS rules !!

// Computer Science Challenge
let a = 0.1;
let b = 0.2;
// a+b should give 0.3
let c = a+b;
console.log(c);
// soln is, Whenever you’re taking input from the user, don’t consider it as a number consider it as a string.

// Classical Cases
// i.) Null is loosely equal to undefined only.
console.log(null==undefined); // gives true; loose equality.
console.log(null===undefined); // gives false; strict equality.

// ii.) <,>,<=,>= (null -> number, undefined -> NaN).
console.log(null>=0); // gives true
console.log(null<=0); // gives true
console.log(null>0); // gives false
console.log(null<0); // gives false
console.log(null<= undefined); // gives false, not comparable
console.log(0 >= undefined); // gives flase, not comparable 

console.log("Rohit">"Mohit") // gives true, compares value by value R(82) > M(77)
console.log("Rohit">"mohit") // gives false,  R(82) < m(109)

console.log(10 >= "10"); // gives true as while comparing string changes into number 
console.log(10 > "10"); // gives false
console.log(10 > true); // gives true as while comparing true becomes 1; 

console.log(null>=""); // gives true as 0 >=0;
console.log(null>""); // gives false as 0 !> 0;

// console.log(Nan == Nan); // gives false;

// for loop
for(let i = 0; i<10; i++){
    console.log(i);
}

// while loop
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

// Do-While loop
let j = 0;
do{
    console.log(j);
    j++;
}while(j<10);

// if-else and else-if conditions
let age = 20;
if(age < 18){
    console.log("Kid");
}
else if(age >= 60){
    console.log("Old");
}
else console.log("Young");

// Logical && and || operator
console.log(true&&true);
console.log(true&&false);
console.log(false&&false);
console.log(false&&true);

console.log(true||true);
console.log(true||false);
console.log(false||false);
console.log(false||true);
 
let s = "Shatrughan";
let u = "Shukla";
let k = s&&u;
console.log(k);
    // "Shatrughan" → truthy
    // "Shukla" → truthy
    // So it returns the last value → "Shukla"

let l = "";
k = l&&u;
console.log(k);
    // "" (empty string) → falsy
    // So it returns the first falsy value → ""

let v = null;
k = v&&u; // it alse returns nothing as 1st element is null means falsy val;
console.log(k);
    // null → falsy
    // So it returns null.

let d;
k = d&&u;
console.log(k);
    // x is undefined
    // undefined is falsy
    // && returns the first falsy value

let o = 0;
let e = 20;
console.log(o&&e); //0 is falsy && returns the first flasy value 0;

/*
    && does NOT return true/false directly.
    It returns:
        The first falsy value
        Or the last value if all are truthy
*/

/*
|| or

|| does NOT return true/false directly.
It returns:

     The first truthy value
     Or the last value if all are falsy

If the first value is truthy → return it immediately
If the first value is falsy → check the next value
Keep going until a truthy value is found

*/

"Hello" || "World"   // → "Hello"
"" || "World"        // → "World"
null || undefined    // → undefined
0 || 5               // → 5

// Bitwise & and | operator
console.log(5 & 3); // gives 1
console.log(5 & 4); // gives 4
// & (Bitwise AND)
// Compares numbers bit by bit
// Returns 1 only if both bits are 1

console.log(5 | 3); // gives 7