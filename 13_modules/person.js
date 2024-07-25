const person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  },
};
module.exports = person;
