# Extend and Inheritance

## Opdracht 1

**We hebben nu zowel mixins als extends gezien die beiden styling kunnen overnemen. Lees dit artikel en geef een uitleg wanneer we inheritance gebruiken en wanneer we mixins gebruiken.**

**_extends_**
Gebruik je met name als er geen sprake is van dynamic styling maar van statische styles die je met 1 of 2 values wilt aanvullen.

**_mixins_**
Zijn met name handig als je elementen dynamisch wilt stylen. MEt een mixin kan je bijvoorbeeld het ene element een flex-direction column geven en het andere element een flex-direction row. Bijvoorbeeld:

@mixin flex-center($direction) {
display: flex;
justify-content: center;
align-items: center;
flex-direction: $direction;
gap: 40px;
}

## Opdracht 2

```html
$mobile: 320px; .banner { font-family: "Pacifico", cursive; height: 400px;
background-image:
url("/01_Fundamentals/05_sass/opdrachten/images/lemonade.jpg");
background-repeat: no-repeat; background-size: 100%; @media screen and
(max-width: $mobile) { height: 600px; font-size: 1.8rem; } }
```

# Operators

## Opdracht 1

Het plaatje met de class .image krijgt een hoogte van 800 pixels.

## Opdracht 2

Het plaatjes krijgt een hoogte van 500px.

## Opdracht 3

Het plaatjes krijgt een hoogte van 100px.

## Opdracht 4

Er veranderd niets want de height kan geen negatieve waarde krijgen (-100).

## Opdracht 5

Het plaatjes krijgt een hoogte van 600px.

## Opdracht 6

Het plaatjes behoudt zijn height van 750px.

## Opdracht 7

De backslash wordt gezien als een seperator en niet als een divider dus er gebeurd niets.

## Opdracht 8

```html
.img { height: 6; width: 6px; }
```
