class God {
  static create() {
    const adam = new Man("Adam");
    const eve = new Woman("Eve");
    return [adam, eve];
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
    this.gender = "male";
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
    this.gender = "female";
  }
}

// Test Cases
const [adam, eve] = God.create();

console.log(adam instanceof Man); // true
console.log(eve instanceof Woman); // true
console.log(adam instanceof Human); // true
console.log(eve instanceof Human); // true
console.log(adam.name); // Adam
console.log(eve.name); // Eve
console.log(adam.gender); // male
console.log(eve.gender); // female
