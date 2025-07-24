/*

    Todo List Application

        Define the Array of Tasks:

            Define an array called tasks.
            Populate the array with several objects, each representing a task in the to-do list with properties such as id, description, dueDate, status, and any other relevant details.

        Create the Task Class:

            Create a class called Task that can be used to create new task objects, which can then be added to the tasks array.
            The class should have a constructor that initializes the properties: id, description, dueDate, status, and any other relevant details.

        Define the displayTasks Function:

            Define a function called displayTasks.
            Use the forEach method to iterate over the tasks array.
            Log each task in the format: TaskDescription - DueDate (Status).

        Define the addTask Function:

            Define a function called addTask that takes task details as input: id, description, dueDate, status.
            Inside the function, create a new task object using the Task class.
            Add the new task object to the tasks array.

        Define the updateTask Function:

            Define a function called updateTask that takes a task id and a status as arguments.
            Use the find method to locate the task with the matching id in the tasks array.
            If the task is found, update its details.
            Define another function called updateTaskWithMap, which does the same thing as updateTask, but uses the map function instead.

        Define the removeTask Function:

            Define a function called removeTask that takes a task id as an argument.
            Use the filter method to create a new array that excludes the task with the matching id.
            Update the tasks array with the new array.

*/


let tasks = [
  {
    id: 1,
    description: "Buy groceries",
    dueDate: "2025-07-20",
    status: "pending",
  },
  {
    id: 2,
    description: "Complete assignment",
    dueDate: "2025-07-22",
    status: "in progress",
  },
  {
    id: 3,
    description: "Call mom",
    dueDate: "2025-07-18",
    status: "completed",
  },
];

class Task {
  constructor(id, description, dueDate, status) {
    this.id = id;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
  }
}

function displayTasks() {
  tasks.forEach((task) => {
    console.log(`${task.description} - ${task.dueDate}(${task.status})`);
  });
}

function addTask(id, description, dueDate, status) {
  let newTask = new Task(id, description, dueDate, status);
  tasks.push(newTask);
}

function updateTask(id, status) {
  let task = tasks.find((task) => task.id == id);
  if (task) {
    task.status = status;
  }
}

function updateTaskWithMap(id, status) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, status: status } : task
  );
}

function removeTask(id) {
  tasks = tasks.filter((task) => task.id != id);
}
