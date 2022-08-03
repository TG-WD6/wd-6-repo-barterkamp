## Opdracht 1

**Bij CSS Grid wordt vaak gebruikgemaakt van een speciale lengte-eenheid: “fr”. Onderzoek wat deze doet en beschrijf het in je eigen woorden.**

fr staat voor fractional. Dit is een speciale eenheid die een flexibele lengte creert. Het beschrijft een fractie van de ruimte in de grid container. Als je bijvoorbeeld een grid met 2 colms hebt die beide 1fr breed zijn dan worden beide columns evenredig verdeeld over de grid container. Als 1 column 2fr breed is en de ander 1fr dan wordt de eerste column twee keer zo groot omdat deze 2 keer zoveel ruimte inneemt in de container.

## Opdracht 6

**Wat is het verschil tussen justify/align/place-items en justify/align/place-content?**

**_justify-items_**
Wordt gebruikt om grid items langs de row-as binnen de grid-column te positioneren.
De waarden zijn: start, end, center en stretch.

**_align-items_**
Wordt gebruikt om grid-items langs de column-as binnen de rid-column te positioneren.
De waarden zijn: start, end, center en stretch.

**_place-items_**
Dit is de shorthand voor justify-items en align-items.
M.b.v. place-items: center worden de grid-items horizontaal en verticaal gecentreerd in de grid-columns.

De property accepteert 2 waarden: de eerste refereert naar align-items en de tweede naar justify-items.

**_justify-content_**
Wordt gebruikt om alle grid-items langs de row-as binnen de grid-container te positioneren. De waarden zijn start, end, center, stretch, space-around, space-between, or space-evenly.

**_align-content_**
Wordt gebruikt om alle grid-items langs de column-as binnen de grid-container te positioneren.

**_place-content_**
Dit is de shorthand voor align-content en justify-content.
