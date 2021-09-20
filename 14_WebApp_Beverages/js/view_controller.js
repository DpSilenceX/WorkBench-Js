
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: checkk
	Check Daten :: 
    Btn. Trigger :: checkk
    Business-Logic (Alter --> Getränk) :: check
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:
// controller();

function controller() {
    ausgabe(updateImg(checkAge(getInput())));
}



// Trigger - Btn 
let btn = document.getElementById('trigBtn');
btn.addEventListener('click',actOnClick);

// Trigger - Input
let field = document.getElementsByName('eingabe')[0];
field.addEventListener('input',isInputValid);

// Event-Dispatcher
function actOnClick() {
    if (isInputValid()) {
        controller();
    } else {
        ausgabe('Du hast kein Alter angegeben!');
    }
}
// Check auf korrekte Eingaben ...
function isInputValid() {
    let inputStr = field.value;
    let pattern = /^[0-9]{1,3}$/g;
    let condition = pattern.test(inputStr);

    if (!condition) {
        field.value = '';
        updateImg(data.default.bev);
    }

    return condition;
}

// Modul Eingabe | Test:
function getInput() {
    let inputField = document.getElementsByName('eingabe')[0];
    let age = parseInt(inputField.value);
    return age;
}


// ausgabe(checkAge(3));
// ausgabe(checkAge(7));
// ausgabe(checkAge(13));
// ausgabe(checkAge(18));
// ausgabe(checkAge(101));

// Modul: Business-Logic (Mapping) | Test:
function checkAge(age) {
    switch (true) {
        case (age >= data.milk.lower ) && (age <= data.milk.upper):
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;
        default:
            return data.default.bev;
    }
}


// Modul: Bild aktualisieren | Test:
// ausgabe(updateImg('cola'));
function updateImg(imgName) {
    let img =   document.getElementById('bevImg');
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName;
}


//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}