/* Die Satzbau-Maschine | Arrays */

/***** 1.0. ARRAYS *****/

//Arrays allow collections of data

//#region
/*
    let arr;
    arr = new Array(); // constructor notation
    arr = []; // literal notation
    arr = [2,6,7,12]; // array with numerical data, length of 4
    arr = [true, false]; // array with boolean values, length of 2
    arr = ["Ich","bin","Max","Mütze"]; // array with strings,  length of 4
    ausgabe(arr);
    ausgabe(arr.length);
    ausgabe(arr[0]); // index, ALWAYS starting with 0
*/
//#endregion

/* 1a. Loops (for-loop) */

/* For-loop as repetitive structure*/

/*  for (let i = 0; i < 10; i++) {0
    //const element = array[index];
    ausgabe(i);    
}*/

/* For-loop for the index of an array (Iteration)
    let arr = ["Ich","bin","der","coole","Max","Mütze"]; 
    for (let i = 0; i < arr.length; i++) {0
        //const element = array[index];
        ausgabe(arr[i]);    
    }*/

/***** considering *****/

/* 1. Einer Variablen kann ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: AUFSUMMIERUNG*/

//#region - better: with a loop
/* Zu "Fuss" - DRY !!!
let a = 0; //Anfangswert
ausgabe("inhalt von a: " + a);
a = a + 1; // a = 0 + 1
ausgabe("inhalt von a: " + a);
...
*/


/*better: with a loop
let a = 0; //Anfangswert
for (let i = 0; i < 5; i++) {
    ausgabe("in der loop a: " + a);
    a += 1;  
}
ausgabe("nach der loop a: " + a);
*/
//#endregion

/* 1a. Einer Variablen kann ih eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: KONKATENATION (Verkettung) eines Strings // TRANSPONIERUNG*/

//#region 
/*let str = ""; //Anfangswert
let addStr = "Test";
let gap = " ";
let dot = ".";
for (let i = 0; i < 5 ; i++){
    str += addStr + gap;    
}
ausgabe(str += dot);    
*/
//#endregion

/***** 02b. Funktionalität mit Array 2 *****/

ausgabe(getSentenceArr2(["Ich","bin"])); //TEST
ausgabe(getSentenceArr2(["Ich","bin","der","coole"])); //TEST
ausgabe(getSentenceArr2(["Ich","bin","der","coole","Max","Mütze"])); //TEST
function getSentenceArr2(arr) {
    let str = "";
    let gap = " ";
    let dot = ".";
    
    for (let i = 0; i < arr.length ; i++){
        if (i != arr.length-1) {
            str += arr[i] + gap;        
        } else {
            str += arr[i] + dot;    
        }
    }
    
    
    return str;
}

/***** 02a. Funktionalität mit Array 1*****/

// critique | considering:
// word1,word2,... word100 :: semantic structure
// => TRANSFORMATION
// arr[0],arr[1],... arr[100] :: numeric structure (0,1,2,3,... n)
// => transformed a semantic issue to a numeric issue

//ausgabe(getSentenceArr(["Ich","bin","Max","Mütze"])); // Test
/*function getSentenceArr(arr) {
    let gap = " ";
    let dot = ".";
    let str = arr[0] + gap +
              arr[1] + gap +
              arr[2] + gap +
              arr[3] +
              dot;
    
    return str;
}
*/

/***** 01. Funktionalität mit Einzelparametern *****/
// --> "Ich bin Max Mütze."
//ausgabe(getSentence("Ich","bin","Max","Mütze")); // Test

/*function getSentence(word1,word2,word3,word4) {
    let gap = " ";
    let dot = ".";
    let str = word1 + gap +
              word2 + gap +
              word3 + gap +
              word4 +
              dot;
    return str;
    //return "Ich bin Max Mütze.";
}
*/

// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
};