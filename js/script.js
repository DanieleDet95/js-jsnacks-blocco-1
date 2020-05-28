// ------------------ ESERCIZO 1 PAROLA PIÚ LUNGA ------------------------------
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Richiesta prima parola e validazione
primaParola = prompt('Inserire prima parola');
while (!(isNaN(primaParola))) {
  primaParola = prompt('Errore inserire un valore corretto,inserire prima parola');
}

// Richiesta seconda parola e validazione
secondaParola = prompt('Inserire seconda parola');
while (!(isNaN(secondaParola))) {
  secondaParola = prompt('Errore inserire valore corretto,inserire seconda parola');
}

// Verifica parola piú lunga con stampa
var risultatoParola = document.getElementById('risultatoParola');
if( primaParola > secondaParola){
  // Prima parola piú lunga
  risultatoParola.innerHTML = 'La prima parola é piú lunga';
} else if ( secondaParola > primaParola ) {
  // Seconda parola piú lunga
  risultatoParola.innerHTML = 'La seconda parola é piú lunga';
} else {
  // Lunghezza parole uguale
  risultatoParola.innerHTML = 'Le due parole hanno lunghezze uguali';
}

// --------------------- ESERCIZO 2 SOMMA NUMERI  ---------------------------
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// Dichiarazioni variabili
var num;
var somma = 0;
var risultatoSomma = document.getElementById('risultatoSomma');

// Inserimento numeri con FOR
for (var i = 0; i < 5; i++) {
  num = parseInt(prompt('Inserisci numero:'));
  while (isNaN(num)) {
    num = parseInt(prompt('Errore,Inserisci valore numerico:'));
  }
  // Somma valori
  somma += num;
}

// Inserimento numeri con WHILE
// i = 0;
// while (i < 5) {
//   num = parseInt(prompt('Inserisci numero:'));
//   while (isNaN(num)) {
//     num = parseInt(prompt('Errore,Inserisci valore numerico:'));
//   }
//   // Somma valori
//   somma += num;
//   i++;
// }

// Stampa valore somma
risultatoSomma.innerHTML = 'La somma dei numeri é ' + somma;

// ---------------------------- ESERCIZO 3 INVITATI  ---------------------------
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Inserimento invitati e biglietto
var invitati = ['daniele', 'angelo', 'stefano', 'gigi'];
var risultatoInvitati = document.getElementById('risultatoInvitati');
var biglietto = false;

// Richiesta nome invitato con validazione alfabetica e compilata
do {
  var nome = prompt('Dimmi il tuo nome');
} while (!(isNaN(nome)) || nome == '');

// Controllo del nome nella lista
var i = 0
while ((biglietto === false) && (i < invitati.length)) {
  if (nome == invitati[i]) {
    // Se il nome é presente
    biglietto = true;
  }
  i++;
}

// Puo entrare o meno
if (biglietto === true) {
  risultatoInvitati.innerHTML = ('Puoi entrare');
} else {
  risultatoInvitati.innerHTML = ('Non puoi entrare');
}

// ------------------------- ESERCIZO 4 SOMMA UNITI  ---------------------------
// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le
// cifre che compongono il numero.

// Richiesta all'utente i 4 numeri
// Con validazione di quattro valori numerici e pieni
do {
  var numeri = prompt('Inserisci i 4 numeri da sommare');
} while (numeri.length != 4 || isNaN(numeri) || numeri == '');

// Divisione della stringa in array e dichiarazioni variabili
var arrayNumeri = numeri.split("");
var risultatoSommaUniti = document.getElementById('risultatoSommaUniti');
var somma = 0;

// Somma dei valori
for (var i = 0; i < arrayNumeri.length; i++) {
  somma += parseInt(arrayNumeri[i]);
}

// Stampa della somma
risultatoSommaUniti.innerHTML = somma;
