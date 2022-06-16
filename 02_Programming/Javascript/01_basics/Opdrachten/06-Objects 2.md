## Opdracht 6.1

1.

**Object Constructor**

```js
const petOne = new Object();

petOne.name = "Bas";
petOne.species = "Dog";

console.log(petOne);
```

_prototype_: Object { … }

**Object literal**

```js
const petTwo = {
  name: "catniss",
  species: "cat",
};

console.log(petTwo);
```

_prototype_: Object { … }

**Function constructor**

```js
function PetThree(name, species) {
  this.name = name;
  this.species = species;
}

let myPet = new PetThree("Jojo", "Rabbit");
console.log(myPet);
```

_prototype_: Object { … }

**Singleton Constructor**

```js
const petFour = new (function () {
  (this.name = "Leonardo"), (this.species = "Turtle");
})();

console.log(petFour);
```

**Class-based Constructor**

```js
class PetFive {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

const Fufu = new PetFive("Fufu", "Hamster");

console.log(Fufu);
```

2.

```js
const dog = Object.create(petOne);
const cat = Object.create(petTwo);
const rabbit = Object.create(myPet);
const turtle = Object.create(petFour);
const hamster = Object.create(Fufu);
```

De pets zijn het prototype van dog, cat etc.

3.

```js
const people = [
  { name: "Dianne", age: 38 },
  { name: "Sander", age: 43 },
  { name: "Gerard", age: 73 },
  { name: "Anne", age: 38 },
  { name: "Marjo", age: 74 },
];
console.log(people);

people.sort((a, b) => a.age - b.age);
console.log(people);

//
```

## Opdracht 6.2
