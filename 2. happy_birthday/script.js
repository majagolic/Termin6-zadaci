function generickaCestitka(person, event) {                             //callback
    document.write("Happy " + event + " to you.<br>");
    document.write("Happy " + event + " to you.<br>");
    document.write("Happy " + event + " dear " + person + ".<br>");
    document.write("Happy " + event + " to you.<br>");
}

function greeter(text, callback) {
    //"pera,birthday"
    var delovi = text.split(",");
    var osoba = delovi[0];
    var dogadjaj = delovi[1];

    if (typeof callback === "function") {
        callback(osoba, dogadjaj);
    }

}

greeter("mika,slava", generickaCestitka);

function generickaCestitkaKonzola(person, event) {                   //callback
    console.log("Happy " + event + " to you.");
    console.log("Happy " + event + " to you.");
    console.log("Happy " + event + " dear " + person);
    console.log("Happy " + event + " to you.");
}

greeter("mika,slava", generickaCestitkaKonzola);



