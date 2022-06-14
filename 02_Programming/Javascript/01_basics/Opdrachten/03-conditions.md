## Opdracht 3.1

1. == (gelijk aan). Deze operator vergelijkt de linker operand met de rechter operand waarbij het datatype niet
   hetzelfde hoeft te zijn. Deze operator zorgt voor type coercion om de vergelijking loppend te maken.
   === (strikt gelijk aan). Bij deze operator moet het datatype van beide operands hetzelfde zijn. Alleen dan is het resultaat true.

2. '>' staat voor _groter dan_ en >= staat voor _Groter dan of gelijk aan_. Hetzelfde geldt voor de andere operators alleen dan andersom (_kleiner dan_ en _kleiner dan of gelijk aan_).

3.

```js
let x = 4;
let y = 8;
if (x === 4 && y == 8) {
  console.log("Result!");
}
```

4.

```js
let x = 4;
let y = 8;
if (x === 4 || y == 8) {
  console.log("Result!");
}
```

5.

```js
let x = 4;
let y = 8;
if (x == !4 || y == !8) {
  console.log("Dit resultaat is niet te zien");
} else {
  console.log("Result");
}
```

6. Je kan de _&&_ gebruiken

7, 8, 9, 10, 11

```js
let x = 6;

if (x > 5 && x < 10) {
  console.log(`${x} zit tussen de 6 en 9`);
} else if (x >= 11 && x <= 20) {
  console.log(`${x} is groter dan 11 EN kleinder dan 20`);
} else if (x === 21 || x === 23) {
  console.log(`${x} is 21 of 23`);
} else if (x < 35 || (x >= 40 && x <= 45)) {
  console.log(`${x} is kleiner dan 35 OF tussen de 40 en 45`);
} else console.log("ander getal");
```

## Opdracht 3.2

1.

```js
let y = 20;

if (y === 3 || y > 4 || y > 11 || y < 3) {
  console.log(y);
} else console.log("klopt niet");
```

2. Er gebeurt niets onverwachts.

3.

```js
let month = 13;

if (month === 1) {
  console.log("Januari");
} else if (month === 2) {
  console.log("Februari");
} else if (month === 3) {
  console.log("Maart");
} else if (month === 4) {
  console.log("April");
} else if (month === 5) {
  console.log("Mei");
} else if (month === 6) {
  console.log("Juni");
} else if (month === 7) {
  console.log("Juli");
} else if (month === 8) {
  console.log("Augustus");
} else if (month === 9) {
  console.log("September");
} else if (month === 10) {
  console.log("Oktober");
} else if (month === 11) {
  console.log("November");
} else if (month === 12) {
  console.log("December");
} else {
  console.log("Geen geldige maand");
}
```

4.

```js
let maand = 5;

switch (maand) {
  case 1:
    console.log("Januari");
    break;
  case 2:
    console.log("Februari");
    break;
  case 3:
    console.log("Maart");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("Mei");
    break;
  case 6:
    console.log("Juni");
    break;
  case 7:
    console.log("Juli");
    break;
  case 8:
    console.log("Augustus");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("Oktober");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Geen geldige maand");
}
```

5.

```js
let x = 3;
let results;

results = x <= 4 && x >= 0 ? (results = 2) : (results = 5);
console.log(results);
// resultaat = 2
```
