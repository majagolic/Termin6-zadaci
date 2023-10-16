let niz = ["Pera", "Djura", "Mika"];

function fja(niz, callbackIspis) {
    let out = "";
    for (let i = 0; i < niz.length; i++) {
        out += `${i + 1}. ${niz[i]}\n`;
    }
    callbackIspis(out);
}

fja(niz, console.log);
fja(niz, alert);