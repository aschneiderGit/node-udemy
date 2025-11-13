const person = {
  name: "Aimé",
  age: 27,
  greetArrayFunction: () => {
    console.log("Hello array function, I am " + this.name);
  }, // here this is undefined bc related to the parent caller
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();
person.greetArrayFunction();
