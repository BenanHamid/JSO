# CSS(Cascading StyleSheets)
## Inleiding
- CSS wordt gebruikt voor de opmaak (=uitzicht of stijl) van een webpagina
- CSS werkt op _properties_ van HTML elementen. Enkele voorbeelden van properties zijn:
    - background-color: achtergrondkleur
    - border-color: kleur van de rand
    - cursor: het type cursor dat gebruikt moet worden wanneer de muisaanwijzer over het element beweegt
    - font-size: de font-grootte
    - text-decoration: bijvoorbeeld onderlijnd of doorstreept
    - transform: een 2D of 3D transformatie van een element zoals een rotatie
- Properties krijgen _values_ (waarden). 
- De combinatie van een property en een value noemt men ook een _declaration_, bijvoorbeeld  
margin: 30px 0px;  
De property wordt gevolgd door een dubbele punt en de value. Die value kan, zoals in dit voorbeeld, bestaan uit een reeks waarden. Een declaration wordt afgesloten met een puntkomma.
- Declarations worden in _declaration_ blocks gezet. Een declaration block bestaat uit één of meerdere declarations tussen accolades:  
{  
&nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;  
&nbsp;&nbsp;&nbsp;&nbsp;line-height: 1.15;  
&nbsp;&nbsp;&nbsp;&nbsp;-ms-text-size-adjust: 100%;  
&nbsp;&nbsp;&nbsp;&nbsp;-webkit-text-size-adjust: 100%;  
}
- Om te definiëren op welke elementen een declaration block van toepassing is, gebruikt men _CSS-selectors_. In het volgende voorbeeld wordt het declaration block toegepast op het html-element:  
html {  
&nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;  
&nbsp;&nbsp;&nbsp;&nbsp;line-height: 1.15;  
&nbsp;&nbsp;&nbsp;&nbsp;-ms-text-size-adjust: 100%;  
&nbsp;&nbsp;&nbsp;&nbsp;-webkit-text-size-adjust: 100%;  
}  
Dit is een voorbeeld van een _css-ruleset_, of korter, een _css-rule_.
## CSS selectors
Er zijn verschillende soorten selectors die we kunnen gebruiken:
- *: de _universal selector_. Het declaration block wordt toegepast op alle elementen in het html-document.
- _elementnaam_: het declaration block wordt toegepast op alle elementen met die naam. In het vorige hoofdstuk hebben we het voorbeeld van het html-element gezien.
- #id: elk html-element kan een id-attribuut krijgen. De waarde van dat attribuut moet uniek zijn in het html-document. Het declaration block zal dus maar op één element toegepast worden. In een html-document waarin het volgende element staat:  
\<p id="eerste">Dit is de eerste paragraaf\</p>  
zal het volgende declaration block alleen worden toegepast op dit paragraaf-element:  
#eerste {  
&nbsp;&nbsp;&nbsp;&nbsp;margin: 30px 15px;  
}  
Een id wordt echter meer gebruikt door JavaScript dan door CSS. 
- .class: elk element kan een class-attribuut krijgen. In tegenstelling tot een id moet de waarde van een class-attribuut niet uniek zijn in een HTML-document. Een class-attribuut kan meerdere waarden krijgen. De verschillende waarden worden gescheiden door een spatie. Stel dat we het volgende html-element zouden hebben:  
\<p class="speciaal apart">Dit een speciale paragraaf\</p>  
Het volgende declaration block zal op deze paragraaf worden toegepast:  
.speciaal {  
&nbsp;&nbsp;&nbsp;&nbsp;margin: 30px 15px;  
}
- We kunnen ook selectors combineren. Wanneer we alleen p-elementen met de class speciaal een opmaak willen meegeven, zal de rule er als volgt uitzien:  
p.speciaal {  
&nbsp;&nbsp;&nbsp;&nbsp;margin: 30px 15px;  
}
- Wanneer verschillende selectors hetzelfde declaration block moeten krijgen, kunnen we ze tezamen zetten en scheiden door een komma:  
.speciaal, .eerste, a {  
&nbsp;&nbsp;&nbsp;&nbsp;margin: 30px 15px;  
}  
In het vorige voorbeeld wordt het declaration block toegepast op alle a-elementen, alle elementen met als class speciaal  en alle elementen met als class .eerste.
- We kunnen ook rules definiëren die van toepassing zijn op child-elementen. In het volgende voorbeeld wordt de rule alleen toegepast op li-elementen die een direct child-element zijn van een element met als class .menu:  
.menu > li {  
&nbsp;&nbsp;&nbsp;&nbsp;float: left;  
}

Voor een volledig overzicht van mogelijke selectors verwijzen we naar het [Mozilla Developer Network][mdn_selectors_overzicht].
## Cascading
De naam _Cascading_ komt van het feit dat meerdere rules van toepassing kunnen zijn op een element. Stel dat we de volgende html-code hebben:  
\<p class="eerste">Dit is de eerste paragraaf\</p>  
en de volgende rulesets:  
p {  
&nbsp;&nbsp;&nbsp;&nbsp;font-size: 150%;  
}  
.eerste {  
&nbsp;&nbsp;&nbsp;&nbsp;font-size: 50%;  
}  
Een element kan maar één fontgrootte hebben. Welke van deze rules wint dan?

De volgende regels gelden zijn hiervoor van belang. Ten eerste is er de specificiteit. Meer specifieke rules krijgen voorrang. Van laagste voorrang naar hoogste voorrang krijgen we zo bijvoorbeeld:
1. Element rule
2. Class rule
3. ID rule
Maar de specificiteit wordt ook beïnvloed door de vorm van de rule. Een rule met een child element zal voorrang krijgen op een rule zonder child element. In de volgende HTML-code:  
\<ul class="menu">  
&nbsp;&nbsp;&nbsp;&nbsp;\<li class="menuitem aandacht">eerste\</li>  
\</ul>
En de volgende CSS-rules:  
.menu > .menuitem {  
&nbsp;&nbsp;&nbsp;&nbsp;float: left;  
}  
.menuitem {  
&nbsp;&nbsp;&nbsp;&nbsp;float: right;  
}  
zal float:left winnen. Een childelement .menuitem van een .menu element krijgt voorrang op een regel voor een .menuitem element.
 
[mdn_selectors_overzicht]: https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors