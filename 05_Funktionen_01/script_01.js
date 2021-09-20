
/***** Funktionen 01 *****/

//#region ####Trinkspiel####
/*
let shotCount,yourName,question;
yourName = prompt('Bitte gib deinen Namen ein!');
shotCount = 0;
//### Ab hier loopen

question = (confirm('Hat Frank eine Frage gestellt?'));

function saufen() {
    ++shotCount;
    console.log(yourName + ' muss jetzt einen Shot trinken');
};

if (question == true) {
    console.log('Hinter damit!');
    saufen();
} else {
    console.log('leider bekommst du nichts zu trinken');
};

console.log(yourName + ' ' + 'hat bereits' + ' ' + shotCount + ' ' + 'schluecke getrunken');

*/
//#endregion

//#region function test
function test() {
    console.log('Hallo Welt');
};

//#endregion

//#region function ausgabeNamen

function ausgabeNamen() {
    let firstName = 'Frank';
    console.log('Hallo ' + firstName + '!');
};
//#endregion

//#region function with parameter
function ausgabeNamenParam(firstName) {
    if (firstName == undefined ||firstName == '') {
    firstName = 'nobody';
    }
    console.log('Hallo ' + firstName + '!');
};

//ausgabeNamenParam('Welt');
//ausgabeNamenParam('Frank');
//ausgabeNamenParam();
//ausgabeNamenParam(prompt('Bitte Namen eingeben'));

//#endregion

//#region function with multiple parameters

function ausgabeNamenParams(firstName, familyName) {
    let gap = ' ';
    let outputStr = 'Hallo ' + firstName + gap + familyName + '!'
    console.log(outputStr);
};

//ausgabeNamenParams('Welt','Frank');
// ausgabeNamenParams(prompt('Bitte Vornamen eingeben:'),prompt('Bitte Nachnamen eingeben:'));

//#endregion

//#region string zusammensetzen
output(getString('Hallo','Welt'));
function getString(firstName, familyName) {
    let gap = ' ';
    let outputStr = firstName + gap + familyName + '!';
    return outputStr; // Daten werden an den Call gesendet aus einer Lokalen
    console.log('huhu'); // wird nicht ausgegeben weil "return" die funktion beendet
}

function output(outputStr) {
    console.log(outputStr);
}

//#endregion

