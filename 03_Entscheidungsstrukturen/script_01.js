// Entscheidungsstrukturen | control structures
//#region defined variables
let ageJohn, ageMark;
let isJohnOlder,isJohnEqual;

ageJohn = 30;
ageMark = 31;

isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
//#endregion
//#region If Schleife
//console.log(isJohnOlder);
//console.log(isJohnEqual);

/*
if (ageJohn > ageMark) {
    console.log(isJohnOlder);
}

if (ageJohn == ageMark) {
    console.log(isJohnEqual);
} */
//#endregion
//#region If Schleife mit else
/*
if (isJohnOlder) {
    console.log('John ist aelter');
} else {
    console.log('John ist nicht aelter');
};

if (isJohnEqual) {
    console.log('Die beiden sind gleich Alt');
} else {
    console.log('Die beiden sind NICHT gleich Alt');
}; */
//#endregion
//#region tenary operator If Schleife
/*
isJohnOlder ? console.log('John ist aelter') : console.log('John ist nicht aelter');
isJohnEqual ? console.log('Die beiden sind gleich Alt') : console.log('Die beiden sind NICHT gleich Alt');
*/
//#endregion
//#region If schleife mit Else If
/*
if (isJohnOlder) {
    console.log('John ist aelter');
} else if (isJohnEqual) {
    console.log('Die beiden sind gleich Alt');
} else {
    console.log('Mark ist aelter');
};
*/
//#endregion
//#region Switch Case
/*
let firstName, job;
firstName = 'Jane';
job = 'driver';
job = 'diver';
job = 'pilot';
job = 'artist';
job = 'teacher';
job = 'instructor';

switch (job) {
    case 'driver':
        console.log(firstName + ' faehrt TAXI!');
        break;
    case 'diver':
        console.log(firstName + ' taucht in der Elbe');
        break;
    case 'artist':
        console.log(firstName + ' malt ein Bild');
        break;
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' unterrichtet');
        break;

    default:
        console.log(firstName + ' macht etwas anderes');
        break;
}
*/
//#endregion
//#region Switch Case 2

let a = 2;
switch (true) {
    case (a == 1):
        console.log('a ist 1');
        break;
    case (a == 2):
        console.log('a ist 2');
        break;
    default:
        console.log('a hat einen anderen Wert');
        break;
} 

//#endregion
