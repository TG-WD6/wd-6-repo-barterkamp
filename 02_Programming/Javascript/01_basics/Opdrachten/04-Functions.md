## Opdracht 4.1

1.

```html
<button onclick="clickme()">Click Me!</button>
```

```js
function clickme() {
  console.log("Hello World!");
}
```

2.

```html
<input type="text" id="input" />
```

```js
const inputEL = document.getElementById("input");
```

3.

```html
<input type="text" id="input" onchange="logInput(value)" />
```

```js
const inputEl = document.getElementById("input");

function logInput(inputEl) {
  console.log(inputEl.value);
}
```

4.

```js
const inputEl = document.getElementById("input");

function logInput(inputEl) {
  return inputEl.value * 2;
}

const result = logInput(inputEl);
console.log(result);
```

## Opdracht 4.2

1.

- **_document.getElementsByClassName_**. Je selecteert een HTML element op basis van een class. Hiermee creëer je een HTML collection van alle elementen die deze class hebben. Dit is een soort array maar geen echte array. Je kan er een array van creeeren met array.from() of met de spread operator.

- **_document.getElementsByTagName_**. Selecteert een HTML element op basis van de tag en geeft een HTML collectie met deze tags terug.

Bovenstaande methods zijn eigenlijk outdated en vervangen door querySelector omdat deze krachtiger en korter is.

- De **_querySelector_** scant het document van boven naar beneden en selecteert het eerste element dat gespecificeerd is in de quertSelector method. Dit kan een claas, id, tag etc zijn. Het negeert de rest.

- Met **_querySelectorAll()_** kan je meerdere elementen met dezelfde classname selecteren en opslaan in een variable. De variable wijst dan naar een zogenoemde nodelist die vergelijkbaar is met een array en waar je, in tegenstelling tot de eerste 2 selecters, direct met een for loop doorheen kunt loopen.

- Met **_element.innerHTML_** kan je de HTML inhoud van het HTML element lezen of wijzigen.

```js
const body = document.querySelector("body");
console.log(body.innerHTML);
```

**Resultaat:**

```html
<h1>JS sandbox</h1>
<button onclick="clickme()">Click Me!</button>
<input type="text" id="input" onchange="logInput(inputEl)" />
<script src="sandbox.js"></script>
```

```js
body.innerHTML = "<h1>IK HEB ALLE HTML TUSSEN DE BODY TAGS VERVANGEN</h1>";
```

**Resultaat:**

```html
<h1>IK HEB ALLE HTML TUSSEN DE BODY TAGS VERVANGEN</h1>
```

- Met **_element.innerText_** kan je alle tekst binnen een element verkrijgen of vervangen.

2.  > The **onchange** event triggers when the element has finished changing. For text inputs that means that the event occurs when it loses focus.
    > The **oninput** event triggers every time after a value is modified by the user.

## Opdracht 4.3

1. Iedere keer als je op de button klikt wordt er een nieuw random getal gegenereert tussen de 0 en < 1

```html
<button onclick="randomNumber()">Click Me for a random number!</button>
```

```js
function randomNumber() {
  console.log(Math.random());
}
```

2. De functie zal nooit de waarde van x loggen tenzij je er 1 bij optelt

3. > Math.min() en Math.max() geven respectievelijk het laagste en het hoogste getal in een getallenreeks.

voorbeeld:

```js
console.log(Math.min(1, 5, 6, 3, 8, 9, 8, 3, 0, 2)); // 0
console.log(Math.max(1, 5, 6, 3, 8, 9, 8, 3, 0, 2)); // 9
```

## Opdracht 4.4

1.

```js
function whatsYourName(name) {
  if (
    name.toLowerCase() === "sander" ||
    name.toLowerCase() === "marko" ||
    name.toLowerCase() === "bart" ||
    name.toLowerCase() === "junier" ||
    name.toLowerCase() === "szymon"
  ) {
    return `${name} is a member of group one`;
  } else return `Error, ${name} is not a member of group 1`;
}
```

2.

```js
const whatsYourName = function (name) {
  if (
    name.toLowerCase() === "sander" ||
    name.toLowerCase() === "marko" ||
    name.toLowerCase() === "bart" ||
    name.toLowerCase() === "junier" ||
    name.toLowerCase() === "szymon"
  ) {
    return `${name} is a member of group one`;
  } else return `Error, ${name} is not a member of group 1`;
};

const call = function (callback) {
  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", `<div>${callback}</div>`);
};

call(whatsYourName("Bart"));
```

3.

```js
const whatsYourName = (name) => {
  if (
    name.toLowerCase() === "sander" ||
    name.toLowerCase() === "marko" ||
    name.toLowerCase() === "bart" ||
    name.toLowerCase() === "junier" ||
    name.toLowerCase() === "szymon"
  ) {
    return `${name} is a member of group one`;
  } else return `Error, ${name} is not a member of group 1`;
};

const call = function (callback) {
  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", `<div>${callback}</div>`);
};

call(whatsYourName("Bart"));
```
