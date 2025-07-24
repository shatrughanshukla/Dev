/*
Greet Function

    Greet Function:

        Define a function named greet() that takes a parameter name. 
        Inside the function, return a greeting message using the provided name. For example, if the name is "Alice", return "Hello, Alice!".
        Call the greet function with your name as the argument. 
        Log the result to the console.

    GreetDefault Function:

        Define another function similar to greet but name it greetDefault. 
        This function should have a default parameter name set to "Guest".
        If no name is provided when calling this function, it should return "Hello, Guest!".
        Call the greetDefault function without any arguments and log the result to the console.

    Rewrite Greet as a Function Expression:

        Rewrite the greet function as a function expression and store it in a variable called greetFunction.
        Call the greetFunction with your name as the argument and log the result to the console.

    Rewrite Greet as an Arrow Function:

        Rewrite the greet function as an arrow function with a separate name greetArrow.
        Call the greetArrow() function with your name as the argument and log the result to the console.
*/

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Shatrughan"));

function greetDefault(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greetDefault());

const greetFunction = function (name) {
  return "Hello, " + name + "!";
};
console.log(greetFunction("Shatrughan"));

const greetArrow = (name) => {
  return "Hello, " + name + "!";
};
console.log(greetArrow("Shatrughan"));