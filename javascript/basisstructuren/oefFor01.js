'use strict';

var recipient = "bottle";
var startAantal = 9;
var inhoud = "beer";
var tmp;
for (var aantal = startAantal; aantal > 0; aantal--) {
	/*
	if (aantal > 1) {
		tmp = "s";
	}
	else {
		tmp = "";
	}
	*/
	// met de vraagtekenoperator:
	tmp = aantal > 1 ? "s" : "";
	console.log("%s %s%s of %s on the wall,", aantal, recipient, tmp, inhoud);
	console.log("%s %s%s of %s.", aantal, recipient, tmp, inhoud);
	console.log("Take one down, pass it around,");
	if (aantal > 1) {
		tmp = aantal - 1 > 1 ? "s" : "";
		console.log("%s %s%s of %s on the wall.", (aantal - 1), recipient, tmp, inhoud);
	}
	else {
		console.log("No more %ss of %s on the wall.", recipient, inhoud);
	}
	console.log();
}
console.log("No more %ss of %s on the wall,", recipient, inhoud);
console.log("no more %ss of %s.", recipient, inhoud);
console.log("Go to the store and buy some more,");
console.log("%s %ss of %s on the wall.", startAantal, recipient, inhoud);