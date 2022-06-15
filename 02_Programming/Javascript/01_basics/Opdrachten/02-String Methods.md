## Opdracht 2.1

1.

```js
let someKittens =
  "De poes van de buurman heeft kittens gehad! Hij vraagt of wij kittens willen";

let eersteZin = someKittens.slice(0, someKittens.indexOf("!") + 1);
console.log(eersteZin);
// "De poes van de buurman heeft kittens gehad!

let tweedeZin = someKittens.slice(someKittens.indexOf("Hij"));
console.log(tweedeZin);
// "Hij vraagt of wij kittens willen."
```

2.

```js
console.log(someKittens.toUpperCase());
// DE POES VAN DE BUURMAN HEEFT KITTENS GEHAD! HIJ VRAAGT OF WIJ KITTENS WILLEN
```

3.

```js
console.log(someKittens.indexOf("kittens")); // 29

console.log(someKittens.lastIndexOf("kittens")); // 62
```

4.

```js
console.log(someKittens.charAt(29)); // k

console.log(someKittens.charAt(62)); // k
```

## Opdracht 2.2

1. Als _indexEnd_ groter is dan _startIndex_ dan wordt er een substring gevormd die begint op positie _indexEnd_ -1 en eidigt op _startIndex_.

2. Als _indexEnd_ groter is dan _startIndex_ dan is de output een empty string.

**_The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case. _**

3. Als 1 of beide argumenten negatief is dan wordt deze als 0 beschouwd en wordt er vanaf dat punt een substring gevormd.

4. Als je negatieve getallen in de slice() method gebruikt dan telt deze terug vanaf het einde van de string.

## Opdracht 2.3

```js
let someKittens = "Die nieuwe kittens zijn zo schattig!";
let kittensArr = someKittens.split(" ");
console.log(kittensArr);
// Array op basis van de spatie: [ "Die", "nieuwe", "kittens", "zijn", "zo", "schattig!" ]
```
