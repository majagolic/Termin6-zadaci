/*Zadatak 10

Napraviti program koji, uz pomoć forEach funkcije, prolazi kroz niz brojeva i ispisuje njihove stepenovane vrednosti (Funkcija Math.pow), 
za vrednosti stepena koristiti drugi niz.
Ukoliko niz1 sadrži [1, 2, 3, 4 , 5], niz2 sadrži vrednosti [2, 3, 4, 5, 6] ispis će biti:
1. 1
2. 1.4142135623730951
3. 1.7320508075688772
4. 2
5. 2.23606797749979

Koristiti callbacke (funkciju proslediti for each): funkcija koja treba da implementira zadatak treba da kao parametar primi callback funkciju za ispis, 
pri pozivu kao callback funkciju proslediti ili console.log ili alert.
*/

let nizA = [1, 2, 3, 4, 5];
let nizB = [2, 3, 4, 5, 6];

function ispisiParove(niz1, niz2, callbackIspis) {

    if (niz1.length !== niz2.length) {
        console.log("Nizovi nisu iste duzine!")
        return;
    }
    let message = "";

    niz1.forEach(function (el, index) {

        message += `${index + 1}. ${Math.pow(el, niz2[index])}\n` //a el je niz1[index]
    });

    callbackIspis(message);
}
ispisiParove(nizA, nizB, alert); // alert mi je callbackIspis



