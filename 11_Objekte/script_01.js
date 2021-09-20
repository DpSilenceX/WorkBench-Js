

/***** Erinnerung: Arrays *******/
// let arr;
// arr = ["Ich","bin","Max"];
// ausgabe(arr[2]);


let person = {
                firstName:'Max',
                familyName:'Müller',
                salary:[120000, 180000],
                hasAccess: true,
                sayHello: function()
                {
                    return 'Hi, ich bin ' + this.firstName;
                }
};

ausgabe(person);
ausgabe(person.firstName);
ausgabe(person.familyName);
ausgabe(person.salary[0]);
ausgabe(person.hasAccess);
ausgabe(person.sayHello());

let txt = 'Ich bin ' + person.firstName + ' ' + person.familyName +
            ' und verdiene zwischen ' + person.salary[0] + ' - ' + 
             person.salary[1] + ' €.';
ausgabe(txt);


/** Ausgabe */
function ausgabe(outputStr) {
        console.log(outputStr);
    }

