## Opdracht 1

**Wat zijn de eigenschappen van block boxes en inline boxes?**

Een inline box wordt net als een inline-element op dezelfde regel geplaatst, maar in tegenstelling tot een inline element kan de height en width van een inline-block element wel aangepast worden.

Block elementen beginnen altijd op een nieuwe regel en zijn bij default net zo breed als de pagina.

## Opdracht 3

**Wat gebeurt er als je een width en een height toevoegt aan de span tag ( <span> ) van vorige opdracht?**

Dan gebeurd er niets. Width en height hebben geen invloed op een inline element.

## Opdracht 4

**Leg uit wat de volgende termen betekenen: content, padding, margin en border.**

Onderstaande termen leg ik uit aan de hand van een ingelijste foto.

- Content: De ruimte die bepaalt wordt door de inhoud van het HTML element (dus de ruimte die de text of de plaatje etc.inneemt). Dit is de foto binnen de lijst.
- Padding: de ruimte tussen de content en de border (de ruimte binnen het element). Deze kan je vergelijken met een passepartout rondom de foto. De padding wordt gebruikt om ruimte tussen de inhoud en de border te creeren (bijvoorbeeld bij een button).
- Margin: de ruimte buiten het element (tussen de border en het volgende element). De margin wordt meestal gebruikt om ruimte tussen elementen te creeren. Als je bijvoorbeeld twee ingelijste foto's naast elkaar ophangt, dan is de ruimte tussen deze foto's de margin.
- Border: de lijn rondom het element. Vergelijkbaar met de lijst van de foto.

## Opdracht 5

**Als je ruimte wilt maken tussen de border en content, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.**

Dan gebruik je de padding property:

```html
<style>
  button {
    padding: 1rem 2rem;
  }
</style>
```

```html
<button>Klik Hier</button>
```

## Opdracht 6

**Als je ruimte wilt maken tussen de border en buiten de box, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.**

Dan gebruik je de margin property:

```html
<style>
  button {
    padding: 1rem 2rem;
    margin-right: 1rem;
  }
</style>
```

```html
<button>Button 1</button> <button>Button 2</button>
```

## Opdracht 7

**Maak nu een blok met width: 100px, height: 100px, margin: 5px, padding 5px en border-width: 5px.**

**Hoe breed is de box?**
120px.

**Hoe hoog is de box?:**
120px.

**Wat merk je op met width en height?:**
De border en padding worden bij de width en height opgeteld waardoor de box groter is dan de width en height die je hebt gespecificeerd.

## Opdracht 8

**Welke CSS property kun je gebruiken om ervoor te zorgen dat de waarde van width en height de totale breedte en hoogte is van het blok van de voorgaande opdracht?**

box-sizing: border-box;
