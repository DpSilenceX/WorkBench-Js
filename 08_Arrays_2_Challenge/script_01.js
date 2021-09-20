/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."
// "Q" (question) --> "?"
// "E" (exclamation) --> "!"


/*** Funktion mit Array als Parameter ***/
// mögliche Tests:

ausgabe(getSentence(["Ich","bin","Peter"],"S"));
ausgabe(getSentence(["Bist","du","Peter"],"Q"));
ausgabe(getSentence(["Ich","bin"],"E"));
ausgabe(getSentence(["Ich","bin"],"#"));

function getSentence(arr,end){
    
    let str = "";
    let gap = " ";
       
    for (let i = 0; i < arr.length ; i++){
        if (i != arr.length-1) {
            str += arr[i] + gap;        
        } else {
            str += arr[i] + getSentenceEnd(end);    
        }
    }  
    return str;
};

function getSentenceEnd(end){
    switch (end){
        case "S":
            return ".";
        case "Q":
            return "?";
        case "E":
            return "!";
        default:
            return " >>wrong input<<";
    }    
};

function ausgabe(outputStr) {
    console.log(outputStr);
};