/*
    Student Data

        Define and Populate the student Object:

            Define a variable named student and assign it an empty object.
            Add properties to the student object for name, email, and age. Set their values to your own name, email, and age.
            Log the name property of the student object to the console.

        Update the student Object:

            Update the age property of the student object to a random value, say 10.
            Log the age property of the student object to the console to see the updated property.

        Add Method and Nested Object to student:

            Add a method called greet to the student object that logs a greeting message using the name property, e.g., "Hello, Alice!". Call the greet method to see the greeting message.
            Add a new object called address inside the student object as its property. The address object should have properties for country, city, and pin_code. Set their values to your address details.
            Log the country property of the address object to the console.
            Update the pin_code property of the address object to a new pin code. Log the address object to the console to see the updated pin_code property.

        Create and Populate the friend Object:

            Create a new object named friend with the same properties as the student object, but with values representing a friend's name, email, age, and address. The object should also have the greet method.
            Call the greet method and log the friend object to the console.

        Create and Populate the topper Object:

            Create a new object named topper with the same properties as the student object, but with values representing a topper’s name, email, age, and address. The object should also have the greet method.
            Call the greet method and log the topper object to the console.

        Define and Use the Student Class:

            Define a class called Student that takes parameters for name, email, age, country, city, and pin_code.
            Inside the class's constructor, set these parameters as properties of the new object. The country, city, and pin_code properties should be added inside the address object in a nested way.
            Add the greet method inside the class.
            Add a method called getFullAddress to the Student class that returns the full address of the student in this format (India, Bangalore - 560038).

        Create and Log Student Objects:

            Create objects of the Student class for yourself, your friend, and another student. Log these objects to the console to see the created objects.
            Call the greet Method and getFullAddress Method on Student Objects:
            Call the greet method on each student object and log the result to the console.
            Call the getFullAddress method on each Student object and log the result to the console.

*/

let student = {};
student.name = "shatrughan";
student.email = "shatrughanshukla00@gmail.com";
student.age = 21;
console.log(student.name);

student.age = 10;
console.log(student.age);

student.greet = function () {
  console.log("Hello, " + this.name + "!");
};

student.address = {
  country: "India",
  city: "Delhi",
  pin_code: 110044,
};

console.log(student.address.country);

student.address.pin_code = 110042;
console.log(student.address);

let friend = {
  name: "anonymous",
  age: 22,
  email: "anonymous01234@gmail.com",
  greet: function () {
    console.log("Hii, " + this.name + "!");
  },
  address: {
    country: "USA",
    city: "New York",
    pin_code: 107008,
  },
};
friend.greet();
console.log(friend);

let topper = {
  name: "Me",
  age: 22,
  email: "meeeeee00@gmail.oc",
  greet: function () {
    console.log("Hii, " + this.name + "!");
  },
  address: {
    country: "India",
    city: "New Delhi",
    pin_code: 110044,
  },
};

topper.greet();
console.log(topper);

class Student {
  constructor(name, email, age, country, city, pin_code) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = {
      country: country,
      city: city,
      pin_code: pin_code,
    };
  }
  greet() {
    console.log("Hii " + this.name + "!");
  }

  getFullAddress() {
    return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
  }
}

const student1 = new Student(
  "Shatrughan Shukla",
  "shatrughanshukla00@gmail.com",
  20,
  "India",
  "Delhi",
  110044
);
const student2 = new Student(
  "Aman Verma",
  "aman@gmail.com.com",
  21,
  "India",
  "Mumbai",
  110041
);
const student3 = new Student(
  "Divya Sharma",
  "divya@gmail.com.com",
  22,
  "India",
  "Bangalore",
  110042
);

console.log(student1);
console.log(student2);
console.log(student3);

student1.greet();
student2.greet();
student3.greet();

console.log(student1.getFullAddress());
console.log(student2.getFullAddress());
console.log(student3.getFullAddress());
