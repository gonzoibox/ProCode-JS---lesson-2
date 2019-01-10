//There is an array

let array = [1,2,3,4,5,6,7,8,9,0];

//Let`s see what within using for loop
for(let i = 0; i < array.length; i++) {
	console.log("Element on posotion " + [i] + " = " + array[i]);
}

//We have an object with some data within it

let currentExchangeRateToUAH = {
	usd: 28.28,
	eur: 32.57,
	gbp: 36.10,
	yen: 0.26,
	zlt: 7.59,
	rub: 0.42
};

//Let us show what it contains with the lelp of for..in loop
for(currencyType in currentExchangeRateToUAH) {
	console.log("One " + currencyType + " = " + currentExchangeRateToUAH[currencyType] + " UAH");
}