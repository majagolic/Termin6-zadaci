let niz1 = ["Pera", "Djura", "Mika"];
let niz2 = ["Peric", "Djuric", "Mikic"];

function ispisiParove(niz1, niz2, callbackIspis) {

    if (niz1.length !== niz2.length) {
        console.log("Nizovi nisu iste duzine!")
        return;
    }
    let par = "";
    for (let i = 0; i < niz1.length; i++) {

        par += `${i + 1}. ${niz1[i]} ${niz2[i]}\n`;
    }
    callbackIspis(par);
}



ispisiParove(niz1, niz2, alert);

ispisiParove(niz1, niz2, console.log);