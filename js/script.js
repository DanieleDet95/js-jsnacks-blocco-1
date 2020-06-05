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




//----------------------------- ESERCIZIO 5 ------------------------------------
// Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato
// da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

// Inserimento numero dall'numeroUtente con validazione numerica
do {
  var N = parseInt(prompt('Inserisci numeri di array'));
} while (isNaN(N));
console.log(N);

// Dichiarazione array
var array = [];

// Invocazione funzione genera N array
for (var j = 0; j < N; j++) {
  for (var i = 0; i < 10; i++) {
    array[i] = generaNumeriCasuali();
  }
  console.log(array);
  document.getElementById('risultatoNArray').innerHTML += array + '<br><br>';
}

// --------------------------- FUNZIONI ----------------------------------------
// Funzione che genera numeri casuali da 1 a 100
function generaNumeriCasuali() {
  var valore = Math.floor(Math.random() * 100 + 1);
  return valore;
}




//----------------------------- ESERCIZIO 6 ------------------------------------
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista
// di cognomi, Gatsby vuole generare una falsa lista di invitati.

// Dichiarazione array
var nomi = ['Angelo', 'Daniele', 'Donato', 'Gigi', 'Fabio', 'Stefano'];
var cognomi = ['Riviello', 'Detommaso', 'Varrese', 'Vitucci', 'Meliddo', 'Parisi'];
var nomeCognome = [];
console.log(nomi);
console.log(cognomi);

for (var i = 0; i < nomi.length; i++) {
  // Generazione indici casuali
  nomeCasuale = Math.floor(Math.random() * nomi.length);
  cognomeCasuale = Math.floor(Math.random() * cognomi.length);

  // Assegnazione valori casuali alla variabile
  var nome = nomi[nomeCasuale];
  var cognome = cognomi[cognomeCasuale];

  nomeCognome[i] = nome + ' ' + cognome;
}

document.getElementById('risultatoLista').innerHTML = nomeCognome;
console.log(nomeCognome);




//----------------------------- ESERCIZIO 7 ------------------------------------
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà
// tanti quanti l’altro.

// Dichiarazione dei due array
var array1 = [10, 20, 30, 40, 50, 60, 70];
var array2 = [10, 20, 30, 40];
console.log(array1);
console.log(array2);

while (array1.length != array2.length) {
  if (array1.length < array2.length) {
    array1.push(Math.floor(Math.random() * 100 + 1));    //Se la seconda é piu lunga
  } else {
    array2.push(Math.floor(Math.random() * 100 + 1));    //Se la prima é piu lunga
  }
}
document.getElementById('risultatoArray1').innerHTML = array1;
document.getElementById('risultatoArray2').innerHTML = array2;




//----------------------------- ESERCIZIO 8 ------------------------------------
// Crea due tag div con due id diversi: un div avrà il testo colorato di rosso
// mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in
// verde i numeri pari.

// Dichiarazione variabili globali e array numeri
var bloccoPari = document.getElementById('pari');
var bloccoDispari = document.getElementById('dispari');
var array = [1, 2, 3, 4, 5, 6, 7, 8];

// Impostazione colore testo sui div
bloccoPari.style.color = "green";
bloccoDispari.style.color = "red";

// Controllo sui numeri dell'array
for (var i = 0; i < array.length; i++) {
  if (array[i] % 2) {
    bloccoDispari.innerHTML += array[i] + ' '; // Dispari e stampa su blocco dispari
  } else{
    bloccoPari.innerHTML += array[i] + ' ';    // Pari e stampa su blocco pari
  }
}
