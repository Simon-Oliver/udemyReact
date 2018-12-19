class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGretting() {
    return `Hi ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year${
      this.age > 1 || this.age === 0 ? 's' : ''
    } old.`;
  }
}

const me = new Person('Max', 45);
console.log(me.getGretting());
const other = new Person(undefined, 1);
console.log(other.getDescription());
