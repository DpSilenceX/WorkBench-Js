/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}

/***** BTN *****/
let btn = document.getElementById("trigBtn");

/***** STATUS *****/
let status = true;

/***** EVENT-Listener *****/
window.addEventListener("load",toggleStatus);

btn.addEventListener("click",toggleStatus);

/***** BUSINESS-LOGIC *****/
// TOGGLE => most important

function toggleStatus() {
    status = !status;
    updateView();
}

/***** Tools *****/

/***** Änderung in der View-Schicht *****/

//Umschaltung des gesamten View
function updateView() {
    if (status) {
        // night-mode
        classNameSwitcher("night");
        switchBtnTxt("day");
    } else {
        // day-mode
        classNameSwitcher("day");
        switchBtnTxt("night");       
    }
}
//Modul: Umschaltung Klasse | Test:

//classNameSwitcher("night");
//classNameSwitcher("day");

function classNameSwitcher(modestr) {
    document.body.className = modestr;
    document.body.children[0].className = modestr;
    document.body.children[1].className = modestr;
}
//Umschaltung BtnTxt | Test

function switchBtnTxt(modestr){
    btn.innerHTML = modestr;
}