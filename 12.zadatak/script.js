function deljivoSaTri(broj) {
    if (broj % 3 === 0) {
        return true;
    }
    return false;
}

function paranPozitivanBroj(broj) {
    if (broj % 2 === 0 && broj >= 0) {
        return true;
    }
    return false;
}

function filter(niz, callback) {

    let nizNovi = [];

    niz.forEach(element => {

        if (callback(element) == true) {
            nizNovi.push(element);
        }

    });
    return nizNovi;
}
let n = [-21, -17, -3, -1, 2, 3, 5, 8, 9, 12, 14, 15];

console.log(n);
console.log(filter(n, deljivoSaTri));
console.log(filter(n, paranPozitivanBroj));