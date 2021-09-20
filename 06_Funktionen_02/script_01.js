
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: done
*/

//#region Konsolenausgabe 4 ###outputStr
function ausgabe(outputStr) {
    console.log(outputStr);
}
//ausgabe('Hallo Welt');

//#endregion

//#region Addition 3 ###addieren
function addieren(a,b) {
    return a + b;
}
//ausgabe(addieren(17,53));
//#endregion

//#region Subtraktion 3 ###subtrahieren
function subtrahieren(a,b) {
    return a - b;
}
//ausgabe(subtrahieren(53,17));
//#endregion

//#region Multiplikation 3###multiplikation
function multiplikation(a,b) {
    return a * b;
}
//ausgabe(multiplikation(53,17));
//#endregion

//#region Divison 3 ###division
function division(a,b) {
    if (b == 0) {
    return ('Durch 0 kann nicht geteilt werden');
    } else {
    return a/b;
    }
    
}
//ausgabe(division(53,17));
//#endregion

//#region Auswahl Rechenart     ###Rechner###
// ausgabe(rechner('+',1,1));
// ausgabe(rechner('-',4,2));
// ausgabe(rechner('*',5,13));
// ausgabe(rechner('/',15,1));

function rechner(op,a,b) {
    switch (op) {
        case '+':
            return addieren(a,b);
        case '-':
            return subtrahieren(a,b);
        case '*':
            return multiplikation(a,b);
        case '/':
            return division(a,b);
        default:
            return 'Oops something went wrong';
    }
}

//#endregion

start();
function start() {
    ausgabe(rechner(getOp(),getZahl('1'),getZahl('2')));
}

// ausgabe(getZahl('1'));
// ausgabe(getZahl('2'));

function getZahl(numStr) {
    let zahl = parseInt(prompt('Bitte Zahl ' + numStr + ' eingeben'));

    while (isNaN(zahl)) {
        zahl = parseInt(prompt('Das ist keine Zahl. Bitte wiederholen sie den Vorgang!'));
    }
        return zahl;
}



function getOp() {
    let op = prompt('Bitte Operator eingeben');

    while (!isOpValid(op)) {
        op = prompt('Bitte einen korrekten Operator eingeben');
    }
        return op;
}


function isOpValid(op) {
/* //schreibweise 1 
    switch (op) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
        }

*/ //schreibweise 2 
    return op == '+' || op == '-' || op == '*' || op == '/';
}