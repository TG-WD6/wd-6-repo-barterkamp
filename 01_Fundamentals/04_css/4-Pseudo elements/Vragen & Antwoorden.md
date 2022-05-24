## Opdracht 1

**Er zijn 14 verschillende pseudo-elementen. Beschrijf ze alle 14 kort en maak voor elk een voorbeeld.**

**_Let op! Ik heb de experimentele pseudo-elementen buiten beschouwing gelaten_**

1. **::after**
   Geeft je de mogelijkheid om content toe te voegen aan de pagina zonder  
   dit in de HTML te plaatsen. ::after is last child van het geselecteerde element. Kan je bijvoorbeeld gebruiken om een cosmetisch elementje toe te voegen via de content property

   **_Both the ::before and ::after pseudo-elements create a child element inside an element only if you define a content property._**

2. **::backdrop**
   maakt een achtergrond die het hele viewport beslaat en wordt direct achter een dialoogvenster of ander element geplaatst die in fulscreen mode wordt geplaatst.Als het element of het dialoogvenster niet de hele display beslaat dan wordt deze opgevuld door de backdrop.

3. **::before**
   Geeft je de mogelijkheid om content toe te voegen aan de pagina zonder dit in de HTML te plaatsen. ::before is de first child van het geselecteerde element. Kan je bijvoorbeeld gebruiken om een cosmetisch elementje toe te voegen via de content property

4. **::cue**
   Stelt je in staat om WebVTT cues (de captions van een <video> element) te stylen.

5. **::first-letter**
   Kan je gebruiken om alleen de eerste letter in een header of paragraph te stylen. Bijvoorbeeld om een drop cap te genereren.

   **_You can only use :first-letter on block containers. Therefore, it won't work if you try to add it to an element that has display: inline._**

6. **::first-line**
   Wordt gebruikt om alleen de eerste regel van een stuk tekst te stylen. Maar alleen als er sprake is van display block, inline-block, list-item, table-caption of table-cell.

7. **::file-selector-button**
   Stelt je in staat om de file selector button te stylen (een <input> met type="file")

8. **::marker**
   Stelt je in staat om de bullits of cijfers van een <ul> of <ol> te stylen of de pijl in <summary> element.

9. **::part()**

10. **::placeholder**
    Stelt je in staat om de placeholder tekst binnen input fields te stylen.

11. **::selection**
    stelt je in staat om de look van geselecteerde tekst op de site aan te passen.

12. **::slotted()**
