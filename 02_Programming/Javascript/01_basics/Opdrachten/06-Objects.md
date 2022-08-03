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

const dog = new PetFive("Bas", "Dog");
const hamster = new PetFive("Fufu", "Hamster");
const cat = new PetFive("Catniss", "Cat");
const rabbit = new PetFive("JoJo", "Rabbit");
const turtle = new PetFive("Leonardo", "Turtle");

console.log(Fufu);
```

2.

```js
const petProto = {
  name: this.name,
  species: this.species,
};

const dog = Object.create(petProto);
dog.name = "Bas";
dog.species = "Dog";
console.log(dog);

const rabbit = Object.create(petProto);
rabbit.name = "JoJo";
rabbit.species = "Rabbit";
console.log(rabbit);

const cat = Object.create(petProto);
cat.name = "catniss";
cat.species = "cat";
console.log(cat);

const turtle = Object.create(petProto);
turtle.name = "Leonardo";
turtle.species = "Turtle";
console.log(turtle);

const hamster = Object.create(petProto);
hamster.name = "Fufu";
hamster.species = "Hamster";
console.log(hamster);
```

Het prototype van de pets is petProto

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
