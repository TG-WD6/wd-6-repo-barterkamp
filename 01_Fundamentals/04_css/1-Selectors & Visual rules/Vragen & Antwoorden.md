## Opdracht 1

**Je kunt op 3 verschillende manieren CSS in je HTML inladen. Op welke 3 manieren kun je dat doen? Leg ook voor elke wijze uit wat het precies inhoud.**

1. Intern. Door de CSS regels te schrijven tussen <style> en </style> in de <head> sectie van het HTML document. Probleem hiervan is dat je bij een grote pagina heel veel css regels krijg bovenop de html regels. Bovendien zal je dat naar iedere HTML pagina moeten kopieren. Als er iets veranderd in de CSS zal je dit per pagina aan moeten passen.

```html
<head>
  <style type="text/css">
    body {
      background-color: aqua;
    }

    p {
      color: red;
    }
  </style>
</head>
```

2. Inline. De style attribute wordt gebruikt binnen het sepcifieke HTML element dat je wilt stylen. Dit is slecht voor performance als er veel stijlen zijn voor 1 element.

Voorbeeld:

```html
<p style="color: blue;">Dit is een paragraph.</p>
```

3. Extern met behulp van een externe stylesheet. Dit is de gewenste methode. Je kan achteraf in 1 keer de stylen van alle HTML pagina's aanpassen die linken naar deze stylesheet. Dit scheelt een boel werk en is goed voor performance.

Je voegt in de head een referentie naar deze stylesheet toe:

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

## Opdracht 2

**CSS pas je toe met een bepaalde syntax. Hoe ziet zo'n syntax eruit? Kun je ook uitleggen wat elk element uit de syntax betekent?**

selector {
property: value;
}

- Met de selector selecteer je het element dat je wilt stylen. Dit kan het element zelf zijn of een class of iedere

- De property is de hetgeen dat je wilt aanpassen, bijvoorbeeld background-color

- De value is de waarde die je aan de property wilt geven, bijvoorbeeld een kleur of een numerieke waarde voor een font-size.

## Opdracht 3

**Er zijn verschillende selectors, bijvoorbeeld;**

**- type selectors**
**- class selectors**
**- ID selectors**
**- descendant selectors**

**Maak van de bovengenoemde selectors voorbeelden. Geef in je antwoord ook aan wat de voordelen zijn van elke selector.**

- met de type selector selecteer je een specifiek HTML element, bijvoorbeeld een paragraph (p) of een heading (h1)

In CSS ziet dat eruit als

```html
p { color: red; }
```

- met de class selector selecteer je een element op basis van de classname die je dit element meegeeft. bijvoorbeeld

```html
<p class="paragraph">dit is een paragraph met een classname</p>
```

In CSS ziet dat eruit als

```html
.paragraph { color: red; }
```

- met de id selector selecteer je een element op basis van de id name die je dit element meegeeft. bijvoorbeeld

```html
<p id="paragraph">dit is een paragraph met een id</p>
Je kan een id maar 1 keer gebruiken op een pagina. Het is de selector met de
hoogste specificiteit.
```

```hrml
#paragraph {
color: red;
}
```

- met de descendant selector target je de elementen die afstammen van een parent element. In het onderstaande voorbeeld worden alle p die afstammen van de body rood gemaakt.

```hrml
body p {
color: red;
}
```

De type selector is het minst specifiek gevolgt door de class selector en de id selector.

## Opdracht 8

**Leg in eigen woorden uit wat met cascade en inheritance wordt bedoeld. Maak voorbeelden om je antwoord uit te leggen.**

Cascade moet je zien als een waterval. Alles css regels worden van boven naar beneden gelezen en uitgevoerd. Dit betekend dat als je bovenin bijvoorbeeld een h1 selector hebt met color:red en veel verder in de cascade dezelfde h1 selector met color:green, dan krijgt de H1 een groene, kleur omdat deze later in de cascade komt en dezelfde spcificiteit heeft als de bovenliggende h1.

Inheritance wil zeggen dat eigenschappen overgeërfd kunnen worden van een parent element. Een voorbeeld hiervan is de font-family. Als je de font veranderd in de body dan zullen alle elementen op de pagina dezelfde font erven (immers, alle elementen zijn een child van de body). Tenzij je specifiek aangeeft dat een bepaald element een andere font-family moet krijgen.
