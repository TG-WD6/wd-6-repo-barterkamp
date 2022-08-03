## Opdracht 1.2

1. This is a string with the value number

2. - This is a boolean with the value true
   - This is a boolean with the value false
   - This is a undefined with the value undefined
   - This is a number with the value 22
   - This is a bigint with the value 22
   - Uncaught TypeError: can't convert symbol to string. Als je Symbol zonder haakjes invoerd geeft hij het volgende resultaat: This is a function with the value function Symbol() {[native code]}
   - This is a object with the value null
   - This is a object with the value [object Object]
   - This is a object with the value [object Object]
   - This is a function with the value function calculateSomething() {}

## Opdracht 1.3

1. De string "55".
2. Het getal 10.
3. - true (de getallen zijn hetzelfde, alleen het type is anders, maar dat maakt voor de 'loose equality operator' niet uit. Deze operator kijkt alleen naar de waarden aan beide zijden en niet naar het data type).
   - false. De === wordt ook wel de strict equality operator genoemd. Zowel het getal als datatype moet hetselfde zijn, ander evalueert deze altijd naar false.
   - false. Immers de values zijn hetzelfde alleen het type is anders.
   - true. de string 5 en het cijfer 5 zijn inderdaad verschillend.

## Opdracht 1.4

1. De increment operator ++ verhoogt de waarde met 1. Bij ++increment zit de increment operator in de zogenoemde _prefix_ vorm. Deze _prefix_ vorm geeft de nieuwe waarde terug (in dit geval 1 + 1 = 2). Als de increment operator achter de variable staat dat zit hij in de zogenoemde _postfix_ vorm.De geeft de oude waarde terug (voorafgaande aan de increment). In dit geval is ddat het getal 2.

```js
let increment = 1;
console.log(++increment); // 2
console.log(increment++); // 2
```

2. De increment zit eerst in de _postfix_ vorm. Deze operator geeft dus de oude waarde terug (in dit geval 1).
   Vervolgens krijgt de variable een increment in de _prefix_ vorm. In dat geval veranderd de eerdere waarde in 2 en wordt er 1 bij opgeteld.

```js
let increment = 1;
console.log(increment++); // 1
console.log(++increment++); // 3
```

**_The prefix and postfix increment both increase the value of a number by 1. The only difference between the two is their return value. The former increments (++) first, then returns the value of x, thus ++x. The latter returns the value of x first, then increments (++), thus x++._**

3. - Dit geeft de als uitkomst het cijfer 4. Het cijfer 10 past 2x in het cijfer 20 en dan blijft er 4 over tot 24. De remainder is dus 4.

   - Dit geeft 2.4 want 24 gedeeld door 10 is 2.4

4. de variable someNumber wijst naar de waarde "Tekst" Dit is een string en dus een truthy value. De _not_ operator verandert thruty naar false dus de uitkomst in false.

**_Essentially, the operator reverses the logical value associated with the expression on which it operates._**

5. - 5 = false (5 is a truthy value)
   - boolean = false (boolean is a truthy value)
   - false = true (false is a falsy value dus het tegenovergestelde is true)
   - "false" = false (een string is een truthy value dus het tegenovergestelde is false)
   - true = false (true is een truthy value)
   - null = true (null is een falsy value dus het tegenovergestelde is true)
   - undefinded = true (undefined is een falsty value dus het tegenovergestelde is true)

6. De += operator kan je gebruiken als shorthand voor het optellen van iets. Bijvoorbeeld:

```js
let someNumber = 1;
someNumber = someNumber + 1;
console.log(someNumber); // 2
```

Bovenstaande kan korter gemaakt worden met += wat in principe hetzelfde is als someNumber + 1

```js
let someNumber = 1;
someNumber += someNumber;
console.log(someNumber); // 2
```

Bovenstaande kan nog korter gemaakt worden met de increment operator:

```js
let someNumber = 1;
++someNumber;
console.log(someNumber); // 2
```

7. geeft hetzelfde resultaat als hierboven alleen voor de andere operators.
