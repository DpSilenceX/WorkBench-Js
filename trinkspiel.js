let shotCount,yourName,question,saufSpiel;
saufSpiel = Boolean(prompt('Hat der Unterricht begonnen?'));
 
if (saufSpiel == true) {
    yourName = prompt('Bitte gib deinen Namen ein!');
}
 
shotCount = 0;
 
//### while Loop ####
 
while (saufSpiel == true) {
    question = (confirm('Hat jemand eine Frage gestellt?'));
 
function saufen() {
    ++shotCount;
    console.log(yourName + ' muss jetzt einen Shot trinken');
}
 
if (question == true) {
    saufen();
    console.log('Hinter damit!');
    console.log(yourName + ' ' + 'hat bereits' + ' ' + shotCount + ' ' + 'shots getrunken');
} else {
    console.log('leider bekommst du nichts zu trinken');
    break;
}
if (shotCount == 10) {
    console.log('Du bist viel zu voll um am Unterricht weiter teilzunehmen!');
    console.log('Hör auf zu saufen und leg dich ins Bett du Alkoholiker!');
    break;
}
 
}
