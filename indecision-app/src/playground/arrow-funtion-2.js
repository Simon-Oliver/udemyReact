const add = (a, b) => {
  //  console.log(arguments);
  return a + b;
};

console.log(add(10, 5));

const user = {
  name: 'Max Muster',
  cities: ['Berlin', 'Perth', 'Uster'],
  printPlacesLived() {
    return this.cities.map(e => this.name + 'has lived in ' + e);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(n => n * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
