

var array = [];


for (var i = 0; i < 6; i++) {

    var numero_utente = parseInt(prompt('Inserisci il tuo numero'));


if (numero_utente % 2 != 0 ) {
    array.push(numero_utente)
}

}

console.log('Inserito dentro array = ' + array);
