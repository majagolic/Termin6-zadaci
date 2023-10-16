var karte = [{ "boja": "tref", "broj": "4" }, { "boja": "herc", "broj": "4" }, { "boja": "tref", "broj": "1" }, { "boja": "herc", "broj": "J" }, { "boja": "herc", "broj": "1" }, { "boja": "pik", "broj": "4" }, { "boja": "karo", "broj": "Q" }, { "boja": "karo", "broj": "9" }, { "boja": "herc", "broj": "A" }, { "boja": "karo", "broj": "9" }, { "boja": "tref", "broj": "1" }, { "boja": "herc", "broj": "1" }, { "boja": "pik", "broj": "J" }, { "boja": "pik", "broj": "4" }, { "boja": "karo", "broj": "9" }, { "boja": "pik", "broj": "3" }, { "boja": "pik", "broj": "1" }, { "boja": "tref", "broj": "6" }, { "boja": "pik", "broj": "7" }, { "boja": "karo", "broj": "8" }, { "boja": "pik", "broj": "3" }, { "boja": "tref", "broj": "7" }, { "boja": "karo", "broj": "J" }, { "boja": "karo", "broj": "2" }, { "boja": "herc", "broj": "A" }, { "boja": "tref", "broj": "7" }, { "boja": "pik", "broj": "A" }, { "boja": "pik", "broj": "3" }, { "boja": "tref", "broj": "K" }, { "boja": "herc", "broj": "A" }, { "boja": "karo", "broj": "2" }, { "boja": "tref", "broj": "J" }, { "boja": "herc", "broj": "J" }, { "boja": "herc", "broj": "K" }, { "boja": "herc", "broj": "4" }, { "boja": "tref", "broj": "9" }, { "boja": "herc", "broj": "7" }, { "boja": "karo", "broj": "9" }, { "boja": "karo", "broj": "2" }, { "boja": "herc", "broj": "8" }, { "boja": "tref", "broj": "3" }, { "boja": "herc", "broj": "3" }, { "boja": "tref", "broj": "4" }, { "boja": "karo", "broj": "A" }, { "boja": "pik", "broj": "7" }, { "boja": "tref", "broj": "10" }, { "boja": "herc", "broj": "Q" }, { "boja": "karo", "broj": "1" }, { "boja": "herc", "broj": "4" }, { "boja": "herc", "broj": "9" }, { "boja": "pik", "broj": "Q" }, { "boja": "herc", "broj": "K" }, { "boja": "karo", "broj": "J" }, { "boja": "karo", "broj": "Q" }, { "boja": "herc", "broj": "1" }, { "boja": "pik", "broj": "6" }, { "boja": "herc", "broj": "9" }, { "boja": "herc", "broj": "6" }, { "boja": "herc", "broj": "9" }, { "boja": "tref", "broj": "5" }, { "boja": "herc", "broj": "J" }, { "boja": "tref", "broj": "7" }, { "boja": "karo", "broj": "A" }, { "boja": "herc", "broj": "2" }, { "boja": "herc", "broj": "10" }, { "boja": "pik", "broj": "4" }, { "boja": "tref", "broj": "3" }, { "boja": "pik", "broj": "Q" }, { "boja": "pik", "broj": "10" }, { "boja": "herc", "broj": "2" }, { "boja": "herc", "broj": "3" }, { "boja": "pik", "broj": "2" }, { "boja": "pik", "broj": "3" }, { "boja": "herc", "broj": "8" }, { "boja": "herc", "broj": "4" }, { "boja": "pik", "broj": "3" }, { "boja": "pik", "broj": "8" }, { "boja": "pik", "broj": "9" }, { "boja": "pik", "broj": "1" }, { "boja": "herc", "broj": "6" }, { "boja": "karo", "broj": "4" }, { "boja": "tref", "broj": "J" }, { "boja": "karo", "broj": "3" }, { "boja": "herc", "broj": "1" }, { "boja": "herc", "broj": "10" }, { "boja": "pik", "broj": "6" }, { "boja": "herc", "broj": "4" }, { "boja": "herc", "broj": "Q" }, { "boja": "karo", "broj": "10" }, { "boja": "karo", "broj": "K" }, { "boja": "herc", "broj": "5" }, { "boja": "tref", "broj": "2" }, { "boja": "pik", "broj": "1" }, { "boja": "tref", "broj": "4" }, { "boja": "tref", "broj": "7" }, { "boja": "karo", "broj": "7" }, { "boja": "herc", "broj": "J" }, { "boja": "herc", "broj": "4" }, { "boja": "pik", "broj": "1" }, { "boja": "herc", "broj": "2" }, { "boja": "karo", "broj": "Q" }, { "boja": "herc", "broj": "Q" }, { "boja": "pik", "broj": "4" }, { "boja": "tref", "broj": "10" }];
var slike = ["A", "J", "Q", "K"]; //Da li je karta[i] slika moze se proveriti sa slike.includes(karte[i].broj);

/*
brojKarataPoBoji = {
    herc: 15,
    karo: 45,
    pik: 8,
    tref: 40
}

brojSlikaPoBoji = {
    herc: 5, - ukupno ih je 15, a od toga ostanu samo oni koji su A, J, Q, K
    karo: 30,
    pik: 2,
    tref: 8
}
*/
var brojKarataPoBoji = {}; //herc, tref, pik, karo

var brojSlikaPoBoji = {}; //A, J, Q, K

for (var karta of karte) {
    if (slike.includes(karta.broj)) {
        if (!(karta.boja in brojSlikaPoBoji)) { // Proveri da li ta boja (tipa, herc) postoji u objektu brojSlikaPoBoji kao polje
            brojSlikaPoBoji[karta.boja] = 0;
        }
        brojSlikaPoBoji[karta.boja] += 1;
    }

    if (!(karta.boja in brojKarataPoBoji)) {
        brojKarataPoBoji[karta.boja] = 0;
    }
    brojKarataPoBoji[karta.boja] += 1;

}

console.log(`tref: ${brojSlikaPoBoji.tref * 100 / brojKarataPoBoji.tref} %`);
console.log(`herc: ${brojSlikaPoBoji.herc * 100 / brojKarataPoBoji.herc} %`);
console.log(`pik: ${brojSlikaPoBoji.pik * 100 / brojKarataPoBoji.pik} %`);
console.log(`karo: ${brojSlikaPoBoji.karo * 100 / brojKarataPoBoji.karo} %`);