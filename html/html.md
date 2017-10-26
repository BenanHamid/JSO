# HTML(_HyperText Markup Language_)
## Wat?
- Taal gebruikt in webpagina's
- Kan gelezen en geïnterpreteerd worden door _browsers_  
Een browser is een programma dat gebruikt wordt om te surfen op het internet. Voorbeelden:
    - [Chrome](https://www.google.nl/chrome/browser/desktop/index.html)
    - [Firefox](https://www.mozilla.org/nl/firefox/new/)
    - [Internet Explorer](https://support.microsoft.com/nl-be/products/internet-explorer)
    - [Edge](https://www.microsoft.com/nl-be/windows/microsoft-edge)
    - [Safari](https://support.apple.com/downloads/safari)
    - [Opera](http://www.opera.com/nl)
    - [Lynx](http://lynx.invisible-island.net/lynx2.8.8/index.html)(tekst browser)
- HTML is een taal gebaseerd op tekst, in tegenstelling tot de taal die gebruikt wordt in de programma's (.exe bestanden). Wanneer we op een Windows machine het programma "notepad.exe" bekijken in het programma _kladblok_ ziet dat er als volgt uit: ![notepad_in_notepad]  
(Dit is duidelijk geen bestand dat gebaseerd is op tekst)
## HyperText
- Een tekst die verwijzingen naar een bestand of naar een deel van een bestand bevat.
- Om naar een bestand te kunnen verwijzen moet elk bestand een uniek adres krijgen.(vgl e-mail adres, telefoonnummer, Belgisch rijksregisternummer,...): de Uniform Resource Indicator(_URI_). Met een _resource_ wordt hier een bestand bedoeld. Bijvoorbeeld: ![URI]
- Het bovenstaande voorbeeld is een speciaal geval van een _URI_, namelijk een URL: _Uniform Resource Locator_
- Een _Uniform Resource Locator_ is niet alleen een uniek adres. Het bevat meteen ook genoeg informatie om de resource terug te vinden.
- Een e-mail adres en een telefoonnummer zijn andere voorbeelden van een URL. Een rijksregisternummer is een URI die geen URL is. Het is een _Uniform Resource Name_ (URN).
- Een URL voor een resource op Internet bestaat uit:
    - Een protocol (http, https, ftp): de _taal_ die gebruikt moet worden om de resource op te vragen
    - De naam van de server (of een IP-adres): een unieke naam of een uniek nummer waarmee de computer waarop de resource staat kan worden teruggevonden
    - (optioneel) _:poort_: een getal waardoor de computer weet welk programma gebruikt moet worden om de resource aan te spreken. Meestal wordt de poort niet vermeld omdat elk protocol een default poort heeft(http:80, https:443, ftp:21 zie [default protocol poorten in Wikipedia][default_protocol_poorten]
    - /directorypad/bestandsnaam: de plaats waar het bestand staat op de computer
## Markup Language(algemeen)
- _Markup_ is niet _opmaak_ 
- Opmaak heeft te maken met hoe een document eruit ziet
- Afbakeningstaal(Frans: _langage de balisage_) of onderscheidingstaal (Duits: _Auszeichnungssprache_) zou correcter zijn, maar _opmaaktaal_ klinkt beter in het Nederldands. (markeertaal?)
- Een markuptaal zorgt ervoor dat we in een document een onderscheid kunnen maken tussen de tekst zelf en de informatie over de tekst (meta-informatie)
- Dit document is geschreven in een markuptaal die _markdown_ heet (vandaar de extensie .md)
- Een titel van niveau 1 wordt aangegeven door een # aan het begin van een regel. Een titel van niveau 2 door ##. Een link door een tekst tussen vierkante haakjes, gevolgd door de link tussen ronde haakjes. 
- Een markuptaal voorziet meestal ook een manier om de markuptekens te _escapen_. Dat wil zeggen dat de speciale markuptekens niet als markuptekens moeten worden geïnterpreteerd. Wanneer we tekst in bold willen weergeven in markdown, moeten we twee *-tekens gebruiken. Wanneer we een tekst tussen twee *-tekens niet in bold willen weergeven, zetten we een backslash voor elk van die tekens: \*\*bold\*\*
## Markup Language(HTML)
- HTML wordt gebruikt om aan te geven wat **de betekenis is**  van een stuk tekst, **niet het uitzicht**. ("_Content not Presentation markup_") 
- Een term die men in dit verband soms ziet is _semantic HTML_.
- Een browser koppelt meestal ook een uitzicht aan die betekenis om de betekenis te tonen aan de gebruikers van de browser, maar **HTML wordt niet gebruikt om het uitzicht van een tekst te bepalen**.
- Gebruikers die de pagina bekijken zonder browser, maken gebruik van de betekenis van de tekst. Voorbeelden hiervan zijn: search engines(Google, Bing, ...) en mensen met een visuele beperking(screenreaders)
- Google gebruikt de betekenis van een tekst om het HTML document een _page ranking_ te geven. Een tekst die in een titel staat zegt waarschijnlijk meer over het document dan een tekst die in een paragraaf staat.
- De _afbakeningssymbolen_ in HTML noemt men tags. Een tag wordt tussen < en > gezet: \<h1\>
- De meeste tags duiden een gebied aan. We hebben dus een begin(of start)-tag nodig en een stop(of eind)-tag. Een eindtag staat tussen </ en >. 
- De combinatie van een begintag, de inhoud en de eindtag noemt men een _element_, bijvoorbeeld het h1-element: \<h1>Markup(HTML)\</h1>
- Voor een leeg element heeft men de keuze. Men kan alleen de begintag schrijven (\<br>) of een speciale versie van de begintag (\<br/>)
- Meestal heeft een element ook attributen. Dit is extra informatie (buiten de inhoud) die bij het element hoort. Voor een link-element is dat bijvoorbeeld de URL van de link: \<a href="www.betavzw.org">Beta\</a>. De tekst (of inhoud) is _Beta_. De link staat in het href-attribuut. De namen van de attributen in een begintag moeten uniek zijn. De meeste attributen hebben ook een waarde. Die staat na het =-teken tussen aanhalingstekens. Men heeft hier de keuze tussen enkele aanhalingstekens of dubbele aanhalingstekens. Maar men moet wel consequent zijn. Open- en sluitaanhalingstekens moeten hetzelfde zijn. 
## HTML versies(nu wordt het even ingewikkeld)
- De beschrijving van HTML wordt sinds 1997 bijgehouden het [World Wide Web Consortium (W3C)][W3C]
- De huidige versie is HTML5.
- De term "HTML5" slaat tegenwoordig niet meer alleen op HTML, maar op allerlei technologieën die gebruikt worden om websites te ontwikkelen: HTML, CSS, JavaScript, XML, JSON, SVG, ... 
- Oudere versies van HTML die men nog steeds kan tegenkomen zijn HTML 4.01 en XHTML.
- Omdat de uitwerking van HTML5 te lang op zich liet wachten, vormden mensen die werkzaam waren bij Apple, Mozilla (Firefox) en Opera een aparte werkgroep, de [Web Hypertext Application Technology Working Group][WHATWG].
- De WHATWG versie van HTML5 wordt de _living standard_ genoemd. Er is geen echt versienummer. De term HTML5 verwijst naar de laatste versie van de "standaard" die continu zou moeten wijzigen. 
- De W3C-HTML5 en WHATWG-HTML5 versie lopen sinds 2013 redelijk synchroon. 
- Op 3 oktober 2017 bracht W3C versie HTML 5.1 (2nd edition) uit.  
- Maar belangrijker dan de standaarden is weten welke onderdelen van HTML ondersteund worden door een specifieke browser. Dat kan men natuurlijk terugvinden op de websites van de browserfabrikanten, maar de meeste front-end ontwikkelaars gebruiken hiervoor [Can I Use][caniuse].
- Bij de ontwikkeling van een website moet men rekening houden met de browsers die gebruikt worden door de bezoekers. Informatie hierover kan men vinden in de logbestanden van de computer waarop de website staat of via [Google Analytics][google_analytics].
## De structuur van een HTML document
- Aangezien er verschillende versies zijn van HTML, moet men in het begin van een HTML document definiëren welke versie men gebruikt. Dat gebeurt via een _Document Type Declaration_. Voor HTML5 is dat gelukkig gemakkelijk:  
\<!DOCTYPE html>
- Voor vorige versies was dit een beetje ingewikkelder. Voor HTML 4.01 bijvoorbeeld  
\<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
- Na de Document Type Declaration volgt de open-tag van het HTML-document:  
\<html>
- Op het einde van het document moet het html-element afgesloten worden:  
\</html>
- Een html-element bevat twee _child_-elementen: head en body.
- Een veelgebruikt attribuut van het html-element is _language_:  
\<html lang="nl">  
Dit attribuut wordt gebruikt om aan te geven in welke (mensen)taal het document geschreven is. (belangrijke informatie voor Google en screenreaders)
- Het head-element bevat informatie over het document. De informatie die in het head-element staat, wordt niet getoond in het browserscherm (behalve de titel)
- Het body-element bevat de inhoud van het document. De inhoud wordt getoond in het browser scherm.
- Belangrijke informatie in het head-element is
    - De titel van de pagina (title-element)
    - De _encoding_ of character set van de tekst. Tegenwoordig is dat meestal UTF-8. Dat gebeurt via een meta-element. Dit is een element zonder content.  
     \<meta charset="UTF-8">
    - De viewport die gebruikt moet worden door browsers op mobile apparaten (smartphones en tablets)
    - Verwijzingen naar andere documenten die bij dit document horen, zoals bijvoorbeeld een CSS-document.  
    \<link href="inleiding.css" rel="stylesheet">
- Je kunt de broncode van een HTML document in de browser bekijken door rechts te klikken op het document (niet op een image) en _Paginabron weergeven_ te kiezen.


[notepad_in_notepad]: https://user-images.githubusercontent.com/1955962/31875691-80f64bd6-b7cf-11e7-9357-0f3c6fe7fdeb.png
[URI]: https://user-images.githubusercontent.com/1955962/31876197-d38bce50-b7d1-11e7-88dc-7c97c75ccf30.png
[default_protocol_poorten]: https://nl.wikipedia.org/wiki/TCP-_en_UDP-poorten
[W3C]: https://www.w3.org/
[WHATWG]: https://whatwg.org
[caniuse]: https://caniuse.com
[google_analytics]: https://analytics.google.com/