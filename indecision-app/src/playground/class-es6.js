class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I'm ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year${
      this.age > 1 || this.age === 0 ? 's' : ''
    } old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm visisting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Student('Max', 45, 'Computer');
console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());
const other = new Student(undefined, 1);
console.log(other.getGreeting());

const traveler = new Traveler('Bill', 30, 'Peru');
console.log(traveler.getGreeting());

const traveler2 = new Traveler('Urs', 30);
console.log(traveler2.getGreeting());
