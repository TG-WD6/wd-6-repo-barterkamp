## Opdracht 1

**Er zijn 14 verschillende pseudo-elementen. Beschrijf ze alle 14 kort en maak voor elk een voorbeeld.**

1. **::after**
   Geeft je de mogelijkheid om content toe te voegen aan de pagina zonder dat je deze content eerst in de HTML plaatst. ::after is de last child van het geselecteerde element. Kan je bijvoorbeeld gebruiken om een cosmetisch element toe te voegen via de content property.

   **_Both the ::before and ::after pseudo-elements create a child element inside an element only if you define a content property._**

2. **::backdrop**
   Maakt een achtergrond die de hele viewport beslaat en wordt direct achter een dialoogvenster of ander element geplaatst die in fulscreen mode is geplaatst. Als het element of het dialoogvenster niet de hele display beslaat dan wordt deze opgevuld door de backdrop.

3. **::before**
   Geeft je de mogelijkheid om content toe te voegen aan de pagina zonder zonder dat je deze content eerst in de HTML plaatst. ::before is de first child van het geselecteerde element. Kan je bijvoorbeeld gebruiken om een cosmetisch elementje toe te voegen via de content property

4. **::cue**
   Stelt je in staat om WebVTT cues (de captions van een <video> element) te stylen.

5. **::first-letter**
   Kan je gebruiken om alleen de eerste letter in een header of paragraph te stylen. Bijvoorbeeld om een drop cap te genereren.

   **_You can only use :first-letter on block containers. Therefore, it won't work if you try to add it to an element that has display: inline._**

6. **::first-line**
   Wordt gebruikt om alleen de eerste regel van een stuk tekst te stylen. Maar alleen als er sprake is van display block, inline-block, list-item, table-caption of table-cell.

7. **::file-selector-button**
   Stelt je in staat om de file selector button te stylen (een <input> met type="file")

8. **::grammar-error** (experimenteel)
   vertegenwoordigd een text segment die een user agent, zoals een browser, bestempelt heeft als grammaticaal incorrect.

9. **::marker**
   Stelt je in staat om de bullits of cijfers van een <ul> of <ol> te stylen of de pijl in een <summary> element.

10. **::part()**
    Stelt je in staat om elementen binnen de schaduw-DOM op te maken van buiten de schaduw-DOM.

11. **::placeholder**
    Stelt je in staat om de placeholder tekst binnen input fields te stylen.

12. **::selection**
    stelt je in staat om de look van geselecteerde tekst op de site aan te passen.

13. **::spelling-error**
    Vergelijkbaar met ::grammar-error alleen betreft het dan verkeerde spelling i.p.v verkeerde grammatica.

14. **::target-text**
    Hiermee kunnen auteurs kiezen hoe ze een gedeelte van de tekst willen markeren waarnaar toe gescrolled is.
