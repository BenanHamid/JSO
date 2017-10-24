// bron: https://egghead.io/lessons/ecmascript-6-default-values-for-function-parameters?course=learn-es6-ecmascript-2015

function greet(message, name){
	console.log(message +", " + name);
}
greet();  // undefined, undefined

// default params worden pas ondersteund vanaf Node 6
// (zie http://node.green om te weten welke versie van NodeJS welke zaken van es6 ondersteunt)
function greet2(message, name="Baptist"){
	console.log(message +", " + name);
}
greet2();  // undefined, Baptist
greet2("Hello");  // Hello, Baptist
greet2("Hello", "Roeland");  // Hello, Roeland