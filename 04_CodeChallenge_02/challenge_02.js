/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

let yourName, yourAge;
yourName = prompt('Bitte gib deinen Namen ein!');
yourAge = prompt('Bitte gib dein Alter ein!')
//#region Switch Case Lösung

switch (true) {
    case (yourAge <= 5):
        console.log(yourName + ' darf' + ' ' + 'Milch' + ' ' + 'trinken');
        break;
    case (yourAge <= 12):
        console.log(yourName + ' darf' + ' ' + 'Saft' + ' ' + 'trinken');
        break;
    case (yourAge <= 17):
        console.log(yourName + ' darf' + ' ' + 'Cola' + ' ' + 'trinken');
        break;
    case (yourAge >= 18):
        console.log(yourName + ' darf' + ' ' + 'Tequila' + ' ' + 'trinken');
        break;

    default:
        console.log('Es wurden keine Angaben gemacht');
        break;
}

//#endregion
//#region If Schleife Lösung
/*
if (yourAge <= 5 ) {
    console.log(yourName + ' darf' + ' ' + 'Milch' + ' ' + 'trinken');
} else if (yourAge <= 12 ) {
    console.log(yourName + ' darf' + ' ' + 'Saft' + ' ' + 'trinken');
} else if (yourAge <= 17 ) {
    console.log(yourName + ' darf' + ' ' + 'Cola' + ' ' + 'trinken');
} else if (yourAge >= 18 ) {
    console.log(yourName + ' darf' + ' ' + 'Tequila' + ' ' + 'trinken');
} else {
    console.log('Es wurden keine Angaben gemacht');
}
*/
//#endregion