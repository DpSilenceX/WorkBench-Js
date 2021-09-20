
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/


let firstNumber,secondNumber;
firstNumber = prompt('Bitte die erste Zahl eingeben');
secondNumber = prompt('bitte die zweite Zahl eingeben');
//1te Lösung
summe = Number(firstNumber) + Number(secondNumber);
//2te Lösung
//summe = +firstNumber + +secondNumber;
console.log('Die Summe der Zahlen ist: ' + summe);

