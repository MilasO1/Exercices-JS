
var adresseCollectees = 1336;
var adresseSupp = 256;
var lapinLettre = 2;
var tortueLettre = 1.50;
var approvisionnement = 500;

var taxe = 12 / 100;
var hugo = 2350;
var amis = 1000;

var tempAjd = 23;
var jour = 0;

//Ex 0
console.log(28 + 6);

//Ex 1 
console.log((6 * 4 + 2) / 2);

//Ex 2
console.log((adresseCollectees + adresseSupp) * lapinLettre);

//Ex 3
console.log((adresseCollectees + adresseSupp) * tortueLettre + approvisionnement);

//Ex 4
while (tempAjd < 35) {
    tempAjd = tempAjd + 2;
    jour = jour + 3
}
console.log(tempAjd, jour);

//Ex 5 
console.log((hugo - (hugo * taxe)) + amis);
