var karte = [ {"boja": "tref", "broj": "4" }, { "boja": "herc", "broj": "4" }, { "boja": "tref", "broj": "1" }, { "boja": "herc", "broj": "J" }, { "boja": "herc", "broj": "1" }, { "boja": "pik", "broj": "4" }, { "boja": "karo", "broj": "Q" }, { "boja": "karo", "broj": "9" }, { "boja": "herc", "broj": "A" }, { "boja": "karo", "broj": "9" }, { "boja": "tref", "broj": "1" }, { "boja": "herc", "broj": "1" }, { "boja": "pik", "broj": "J" }, { "boja": "pik", "broj": "4" }, { "boja": "karo", "broj": "9" }, { "boja": "pik", "broj": "3" }, { "boja": "pik", "broj": "1" }, { "boja": "tref", "broj": "6" }, { "boja": "pik", "broj": "7" }, { "boja": "karo", "broj": "8" }, { "boja": "pik", "broj": "3" }, { "boja": "tref", "broj": "7" }, { "boja": "karo", "broj": "J" }, { "boja": "karo", "broj": "2" }, { "boja": "herc", "broj": "A" }, { "boja": "tref", "broj": "7" }, { "boja": "pik", "broj": "A" }, { "boja": "pik", "broj": "3" }, { "boja": "tref", "broj": "K" }, { "boja": "herc", "broj": "A" }, { "boja": "karo", "broj": "2" }, { "boja": "tref", "broj": "J" }, { "boja": "herc", "broj": "J" }, { "boja": "herc", "broj": "K" }, { "boja": "herc", "broj": "4" }, { "boja": "tref", "broj": "9" }, { "boja": "herc", "broj": "7" }, { "boja": "karo", "broj": "9" }, { "boja": "karo", "broj": "2" }, { "boja": "herc", "broj": "8" }, { "boja": "tref", "broj": "3" }, { "boja": "herc", "broj": "3" }, { "boja": "tref", "broj": "4" }, { "boja": "karo", "broj": "A" }, { "boja": "pik", "broj": "7" }, { "boja": "tref", "broj": "10" }, { "boja": "herc", "broj": "Q" }, { "boja": "karo", "broj": "1" }, { "boja": "herc", "broj": "4" }, { "boja": "herc", "broj": "9" }, { "boja": "pik", "broj": "Q" }, { "boja": "herc", "broj": "K" }, { "boja": "karo", "broj": "J" }, { "boja": "karo", "broj": "Q" }, { "boja": "herc", "broj": "1" }, { "boja": "pik", "broj": "6" }, { "boja": "herc", "broj": "9" }, { "boja": "herc", "broj": "6" }, { "boja": "herc", "broj": "9" }, { "boja": "tref", "broj": "5" }, { "boja": "herc", "broj": "J" }, { "boja": "tref", "broj": "7" }, { "boja": "karo", "broj": "A" }, { "boja": "herc", "broj": "2" }, { "boja": "herc", "broj": "10" }, { "boja": "pik", "broj": "4" }, { "boja": "tref", "broj": "3" }, { "boja": "pik", "broj": "Q" }, { "boja": "pik", "broj": "10" }, { "boja": "herc", "broj": "2" }, { "boja": "herc", "broj": "3" }, { "boja": "pik", "broj": "2" }, { "boja": "pik", "broj": "3" }, { "boja": "herc", "broj": "8" }, { "boja": "herc", "broj": "4" }, { "boja": "pik", "broj": "3" }, { "boja": "pik", "broj": "8" }, { "boja": "pik", "broj": "9" }, { "boja": "pik", "broj": "1" }, { "boja": "herc", "broj": "6" }, { "boja": "karo", "broj": "4" }, { "boja": "tref", "broj": "J" }, { "boja": "karo", "broj": "3" }, { "boja": "herc", "broj": "1" }, { "boja": "herc", "broj": "10" }, { "boja": "pik", "broj": "6" }, { "boja": "herc", "broj": "4" }, { "boja": "herc", "broj": "Q" }, { "boja": "karo", "broj": "10" }, { "boja": "karo", "broj": "K" }, { "boja": "herc", "broj": "5" }, { "boja": "tref", "broj": "2" }, { "boja": "pik", "broj": "1" }, { "boja": "tref", "broj": "4" }, { "boja": "tref", "broj": "7" }, { "boja": "karo", "broj": "7" }, { "boja": "herc", "broj": "J" }, { "boja": "herc", "broj": "4" }, { "boja": "pik", "broj": "1" }, { "boja": "herc", "broj": "2" }, { "boja": "karo", "broj": "Q" }, { "boja": "herc", "broj": "Q" }, { "boja": "pik", "broj": "4" }, { "boja": "tref", "broj": "10" }];
console.log(karte);

var mapa = {};

/*
for(var i = 0; i < karte.length; i++) {
    var karta = karte[i];
}
*/

for(var karta of karte) {
    if(karta.broj != "7") {
        continue;
    }

    if(!(karta.boja in mapa)) {
        mapa[karta.boja] = 0;
    }

    mapa[karta.boja] += 1;
}

var maxBoja = "";
var maxBroj = Number.NEGATIVE_INFINITY;

for(var boja in mapa) {
    if(mapa[boja] > maxBroj) {
        maxBroj = mapa[boja];
        maxBoja = boja;
    }
}

let counter = 0;
for(var i = 0; i < karte.length; i++) {
    if(karte[i].boja == maxBoja) {
        counter++;
    }
}

document.write(`<h1>Procentualan broj ${maxBoja} karti u 
                    spilu je ${(counter / karte.length) * 100}</h1>`)


