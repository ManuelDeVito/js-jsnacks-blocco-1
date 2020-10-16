// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

// Chiedo il numero all'utente.

var numero_utente = parseInt(prompt('Inserisci il tuo numero'));
    console.log(numero_utente);

// Utilizzo un ciclo for per calcolare il cubo dei primi numeri N.

for (var i = 1; i <= numero_utente; i++) {
    console.log('i = ' + i);
    var potenza_cubo = Math.pow(i, 3);
    console.log('i alla 3a = ' + potenza_cubo);
}
