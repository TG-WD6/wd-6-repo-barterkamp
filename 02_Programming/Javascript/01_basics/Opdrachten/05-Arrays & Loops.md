## Opdracht 5.1

1.

```js
const numbersArray = [1, 3, 5, 2, 8, 6, 7, 10, 9, 4];
console.log(numbersArray);
```

2.

```js
const fruitsArray = ["Appel", "Aardbei", "Banaan", "Sinasappel", "Peer"];
console.log(fruitsArray);
// ["Appel", "Aardbei", "Banaan", "Sinasappel", "Peer"]
```

3.

```js
console.log(fruitsArray[0], fruitsArray[1]);
```

4.

```js
const fruitsArray = ["Appel", "Aardbei", "Banaan", "Sinasappel", "Peer"];
const randomIndex = Math.floor(Math.random() * numbersArray.length);
console.log(fruitsArray[randomIndex]);
```

5.

```js
console.log(fruitsArray.length);
```

6.

```js
console.log(fruitsArray[randomIndex % fruitsArray.length]);
// geeft een index van 0 t/m 4 ofwel alle elementen in de fruitsArray
```

7.

```js
fruitsArray[0] = "Peer";
console.log(fruitsArray);
// [ "Peer", "Aardbei", "Banaan", "Sinasappel", "Mandarijn" ]
```

8.

```js
[fruitsArray[0], fruitsArray[1]] = [fruitsArray[1], fruitsArray[0]];
console.log(fruitsArray);
// ["Aardbei", "Peer", "Banaan", "Sinasappel", "Mandarijn"];
```

## Opdracht 5.2

1.

**for loop**

```js
for (let i = 0; i < dutchSports.length; i++) {
  console.log(dutchSports[i]);
}
```

2.

**for...in loop**

```js
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

for (let sports in dutchSports) {
  console.log(dutchSports[sports]);
}
```

**for...of loop**

```js
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

for (let sports of dutchSports) {
  console.log(sports);
}
```

3.

```js
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}
```

4.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(j);
  }
}
```

5.

```js
for (let i = 1; i <= 3; i++) {
  // i = 1, i = 2, i = 3
  for (let j = 1; j <= 10; j++) {
    // j = 1 t/m 10
    console.log(i * j);
    // door j te vermenigvuldigen met i krijg je iedere iteratie een andere uitkomst
  }
}
```

6.

```js
let arr = [0, 1];
// loop door 50 getallen en begin bij index 2
for (let i = 2; i <= 50; i++) {
  // tel bij iedere iteratie de laatste 2 indices op bij total
  arr[i] = arr[i - 2] + arr[i - 1];
  // push het resultaat in de array
  arr.push(arr[i]);
}
console.log(arr);
```

7.

```js
const bubbleArray = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];

for (let i = 0; i < bubbleArray.length; i++) {
  let swapped = false;
  for (let j = 0; j < bubbleArray.length; j++) {
    // als het cijfer op index j groter is dan het cijfer op de naastgelegen index, swap dan de variables en zet swapped op true.
    if (bubbleArray[j] > bubbleArray[j + 1]) {
      [bubbleArray[j], bubbleArray[j + 1]] = [
        bubbleArray[j + 1],
        bubbleArray[j],
      ];
      swapped = true;
      if (!swapped) break;
    }
  }
}

console.log(bubbleArray);
```

## Opdracht 5.3

1.

```js
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

dutchSports.push("Zeilen", "Zwemmen");
console.log(dutchSports);
// Array(5) [ "Voetbal", "Hockey", "Schaatsen", "Zeilen", "Zwemmen" ]
```

2.

```js
dutchSports.unshift("Volleybal");
console.log(dutchSports);
// Array(6) [ "Volleybal", "Voetbal", "Hockey", "Schaatsen", "Zeilen", "Zwemmen" ]
```

3.

```js
const ballSport = dutchSports.filter((element) => element.includes("bal"));
console.log(ballSport);
// [ "Volleybal", "Voetbal" ]
```

4.

**optie 1: door de array loopen en iedere iteratie de index 1 plek terugzetten**

```js
for (let i = 0; i < dutchSports.length; i++) {
  if (dutchSports[i] === "Voetbal" || dutchSports[i] === "Volleybal") {
    dutchSports.splice(i, 1);
    i--;
    // Tijdens de eerste iteratie wordt Volleybal uit de array gesloopt. Tijdens de volgende iteratie zit voetbal op de index van volleybal maar als gevolg van de increment kijkt de loop nu naar de index ernasst en wordt voetbal overgeslagen. Door er weer 1 af te halen kijkt de loop naar de juiste index.
  }
}

console.log(dutchSports);
```

**optie 2: in omgekeerde volgorde door de array loopen**

```js
for (let i = dutchSports.length - 1; i >= 0; i--) {
  if (dutchSports[i] === "Voetbal" || dutchSports[i] === "Volleybal") {
    dutchSports.splice(i, 1);
  }
}

console.log(dutchSports);
```

5.

```js
console.log(dutchSports.sort());
```

6.

```js
for (let sport of dutchSports) {
  console.log(sport);
}
```

7.

```js
// creer een lege array
let sportsLength = [];
// loop door de dutchSports array
for (let i = 0; i < dutchSports.length; i++) {
  // push de lengte van de array items naar de lege array
  sportsLength.push(dutchSports[i].length);
}

console.log(sportsLength);
// Array(4) [ 6, 9, 6, 7 ]
```

## Opdracht 5.4

1. **Filter**: Filtert de elementen in de oorspronkelijke array op basis van een bepaalde conditie en plaatst alleen de elementen die aan deze conditie voldoen (die true zijn) in een nieuwe array. **De oorspronkelijk array blijft intact.** Als geen van de elementen aan de condition voldoet wordt er een lege array opgeleverd.

```js
const numbersArray = [200, 400, -400, 3000, -70, 1300];
const positiveNumbers = numbersArray.filter((elements) => elements > 0);
console.log(positiveNumbers);
```

2. **Find**: De find() method geeft alleen het eerste element terug dat aan een bepaalde conditie voldoet (dus true is).

```js
const numbersArray = [200, 400, -400, 3000, -70, 1300];
const find3000 = numbersArray.find((element) => element === 3000);
console.log(find3000);
```

3. **Some**: Met some() kijk je of een bepaald element in de array zit op basis van een condition (bijvoorbeeld een getal groter dan 0). Dit geeft true of false als resultaat.

```js
const numbersArray = [200, 400, -400, 3000, -70, 1300];
console.log(numbersArray.some((element) => element > 400));
//true
```

4. **every**: Vergelijkbaar met some, maar nu moeten _alle_ elementen in de array voldoen aan een bepaalde conditie.

```js
const numbersArray = [200, 400, -400, 3000, -70, 1300];
console.log(numbersArray.every((element) => element > 0));
// false
```

5. **includes**: Achterhaalt of een bepaald element wel of niet in de array zit op basis van strict equality. Geeft een true of false resultaat.

```js
const numbersArray = [200, 400, -400, 3000, -70, 1300];
console.log(numbersArray.includes(-400));
//true
```
