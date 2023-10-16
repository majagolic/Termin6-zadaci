/*Zadatak 9

Napraviti program koji, uz pomoć forEach funkcije, prolazi kroz niz brojeva  i ispisuje njihove kvadratne korene (Funkcija Math.sqrt).
Ukoliko niz sadrzi [1, 2, 3, 4 , 5] ispis ce biti:
1. 1
2. 1.4142135623730951
3. 1.7320508075688772
4. 2
5. 2.23606797749979

Koristiti callbacke (funkciju proslediti for each): funkcija koja treba da implementira zadatak treba da kao parametar primi callback funkciju za ispis, 
pri pozivu kao callback funkciju proslediti ili console.log ili alert.*/

let niz = [1, 2, 3, 4, 5];

function ispis(message, callback) {
    callback(message);
}
niz.forEach(function (el, index) {
    ispis(`${index + 1}. ${Math.sqrt(el)}`, console.log);
});

/*
function ispis(niz, callbackIspis) {

    let message = "";

    niz.forEach(function (el, index) {

        message += `${index + 1}. ${Math.sqrt(el)}\n`
    });

    callbackIspis(message);
}

ispis(niz, alert);
*/