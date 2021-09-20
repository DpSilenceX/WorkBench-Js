/***** Variablen 01 *******/

// das ist ein Zeilenkommentar
/**
 * das
 * ist
 * ein
 * Blockkommentar
 */

//Ausgabe
//console.log("Hello world!");
//console.log(firstName);

//Deklaration + Zuweisung I

/*
let firstName; //Deklaration (Definition)
firstName = "Timm"; //Wertzuweisung
//console.log(firstName); //Ausgabe
let familyName = "Thaler"; //Deklaration + Wertzuweisung
//console.log(familyName); //Ausgabe
console.log(firstName+" "+familyName);
//Deklaration + Zuweisung II
let firstName,familyName;
firstName = prompt("Bitte Vornamen eingeben:");
familyName = prompt("Bitte Nachnamen eingeben:");
console.log("Hallo, "+firstName+" "+familyName+"!");
//JS ist eine untypisierte Sprache
let test; //Deklaration
test = "hi"; //string
//test = 2; //int
//test = true; //boolean
console.log("Typ: " + typeof test);
console.log("Inhalt: " + test);
*/

/***** Variablen 02 *******/

/*
//Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;
//Wertzuweisung | Assignment
let date = new Date();
let year = date.getFullYear();
//console.log(year);
//console.log(date);
ageJohn = 25;
ageMark = 30;
//operation (Differenz)
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;
console.log("aktuelles jahr: " + year);
console.log("birthYearJohn: "+ birthYearJohn);
console.log("birthYearMark: "+ birthYearMark); 
*/

/***** Variablen 03 *******/

/*
let ageJohn,ageMark;
ageJohn = 25;
ageMark = 30;
//Operation (Vergleich/(Test)
let isJohnOlder = (ageJohn > ageMark);
console.log(isJohnOlder);
*/

/***** Variablen 04 *******/
//Zusammenfassung Datentypen

let nix;
let ageJohn = 25;
firstName = "Timm";
let isJohnOlder = (10 > 5);
console.log("nix: " + typeof nix);
console.log("ageJohn: " + typeof ageJohn);
console.log("firstName: " + typeof firstName);
console.log("isJohnOlder: " + typeof isJohnOlder);

//eof