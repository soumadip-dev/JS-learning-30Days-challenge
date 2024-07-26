// Activity 1: Class Definition

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Task 1: Method to return a greeting message
  greeting() {
    return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }

  // Task 2: Method to update age
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }

  // Task 5: Static method for a generic greeting
  static genericGreeting() {
    return 'Hello, welcome!';
  }

  // Task 7: Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Task 8: Setter for updating name
  set fullName(name) {
    const parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

// Activity 2: Class Inheritance

class Student extends Person {
  static studentCount = 0; // Task 6: Static property for student count

  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age);
    this.studentId = studentId;
    Student.studentCount++;
  }

  // Task 3: Method to return the student ID
  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }

  // Task 4: Overridden greeting method to include student ID
  greeting() {
    return `Hello, my name is ${this.fullName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }

  // Static method to get the total number of students
  static getStudentCount() {
    return `Total students: ${Student.studentCount}`;
  }
}

// Activity 5: Private Fields (Optional)

class Account {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    } else {
      console.log('Invalid deposit amount');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
    } else {
      console.log('Invalid withdraw amount');
    }
  }

  get balance() {
    return this.#balance;
  }
}

// Usage examples

// Activity 1: Creating an instance of Person and updating age
const person1 = new Person('John', 'Doe', 30);
console.log(person1.greeting());
person1.updateAge(31);

// Activity 2: Creating an instance of Student
const student1 = new Student('Jane', 'Smith', 22, 'S123456');
console.log(student1.getStudentId());
console.log(student1.greeting());
console.log(Student.getStudentCount()); // Outputs: Total students: 1

// Activity 3: Static method call
console.log(Person.genericGreeting());

// Activity 4: Using getters and setters
const person2 = new Person('Alice', 'Johnson', 28);
console.log(person2.fullName);
person2.fullName = 'Alice Williams';
console.log(person2.fullName);

// Activity 5: Creating an Account instance and testing methods
const myAccount = new Account(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.balance);
