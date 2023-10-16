function uvecaj(broj) {
    return broj * 2;
}

function umanji(broj) {
    return broj / 2;
}

function map(niz, transformator) {
    let retVal = [];
    for(let i = 0; i < niz.length; i++) {
        let noviBroj = transformator(niz[i]);
        retVal.push(noviBroj);
    }
    return retVal;
}

let n = [1, 2, 3, 4, 5];

console.log(n);
console.log(map(n, uvecaj));
console.log(map(n, umanji));
console.log(map(n, Math.sqrt));