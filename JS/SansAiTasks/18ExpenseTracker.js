/*

    Expense Tracker

        Define the Array of Expenses:

            Define an array called expenses.
            Populate the array with several objects, each representing an expense with properties such as id, name, amount, date, and any other relevant details.

        Create the Expense Class:

            Create a class called Expense that can be used to create new expense objects, which can then be added to the expenses array.
            The class should have a constructor that initializes the properties: id, name, amount, date, and any other relevant details.

        Define the displayExpenses Function:

            Define a function called displayExpenses.
            Use the forEach method to iterate over the expenses array.
            Log each expense in the format: ExpenseName - Amount (Date).

        Define the addExpense Function:

            Define a function called addExpense that takes expense details as input: id, name, amount, date.
            Inside the function, create a new expense object using the Expense class.
            Add the new expense object to the expenses array.

        Define the updateExpense Function:

            Define a function called updateExpense that takes an expense id and an amount as arguments.
            Use the find method to locate the expense with the matching id in the expenses array.
            If the expense is found, update its details.
            Define another function called updateExpenseWithMap, which does the same thing as updateExpense, but uses the map function instead.

        Define the removeExpense Function:

            Define a function called removeExpense that takes an expense id as an argument.
            Use the filter method to create a new array that excludes the expense with the matching id.
            Update the expenses array with the new array.

*/

let expenses = [
  { id: 1, name: "Groceries", amount: 1200, date: "2025-07-10" },
  { id: 2, name: "Electricity Bill", amount: 800, date: "2025-07-12" },
  { id: 3, name: "Internet Recharge", amount: 500, date: "2025-07-14" },
];

class Expense {
  constructor(id, name, amount, date) {
    (this.id = id),
      (this.name = name),
      (this.amount = amount),
      (this.date = date);
  }
}

function displayExpenses() {
  expenses.forEach((expense) => {
    console.log(`${expense.name} - ${expense.amount}(${expense.date})`);
  });
}

function addExpense(id, name, amount, date) {
  const newExpense = new Expense(id, name, amount, date);
  expenses.push(newExpense);
}

function updateExpense(id, amount) {
  const expense = expenses.find((item) => item.id == id);
  if (expense) {
    expense.amount = amount;
  }
}

function updateExpenseWithMap(id, amount) {
  expenses = expenses.map((expense) =>
    expense.id === id ? { ...expense, amount: amount } : expense
  );
}

// for comparision

// function updateExpenseWithMap(id, newAmount) {
//   expenses = expenses.map(exp => {
//     if (exp.id === id) {
//       return { ...exp, amount: newAmount };
//     }
//     return exp;
//   });
// }

function removeExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
}