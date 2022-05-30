## Opdracht 1

**De belangrijkste waardes van “position” zijn static, relative, absolute, fixed & sticky. Leg voor elke uit wat ze doen.**

- **static**: Dit is de standaard waarde van een element. Het element is geplaatst volgens de standaard flow van het document. De top, right, bottom, left properties en de z-index hebben geen invloed.

- **Relative**: Hiermee verschuift het element relatief ten opzichte van zijn **_normale positie_** maar het element wordt niet uit de normale flow gehaald. Als het element met relative positioning is verschoven dan heeft dat geen invloed op de omringende elementen binnen de container. Deze behouden hun positie. Maar hij kan wel buiten de container schuiven met bijvoorbeeld een negatieve waarde. Je kan de top, right, bottom, left properties een positieve of negatieve waarde meegeven.

- **Absolute**: Met abolute positionering verplaats je een element relatief ten opzichte van zijn **_container_**. (de container moet dan wel een position: relative; krijgen.) Het element wordt uit de normale flow van de pagina gehaald. Vanuit het oogpunt van de parent container bestaat het element dus niet meer. Deze is als het ware in een nieuw laag geplaatst. De cosequentie is dat de omringende elementen gerenderd worden alsof het absoluut gepositioneerde element niet bestaat.

- **Fixed**: Het element wordt uit de normale flow gehaald en relatief ten opzicht van de **_viewport_** geplaatst. Als het element binnen een container zat, dan zal hij uit de container breken. Deze vorm van positionering kan gebruikt worden voor bijvoorbeeld een navigatiebalk bovenaan de pagina te plaatsen.

**_Positions static & relative keep their natural space in the flow of the document, while the absolute & fixed don’t — their space is removed and they have a floating behavior._**

- **Sticky**: Met position:sticky; kan je bijvoorbeeld een header vastzetten in zijn container en zodra de bodem van de container is bereikt dan scollt de pagina gewoon verder zonder dat je de header nog ziet. Het element wordt dus sticky geplaatst ten opzichte van zijn container en niet ten opzichte van de viewport zoals bij position fixed het geval is.
