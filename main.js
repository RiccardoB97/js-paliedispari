// Palidroma:
// Chiedere all’utente di inserire una parola 
var wordArray = []
var reversedWordArray = []
function checkPalindrome(word) {
    for (var i = 0; i < word.length; i++) {
        wordArray.push(word[i]);
        reversedWordArray.push(word[i]);
    }
    reversedWordArray.reverse()
    for (var i = 0; i <= wordArray.length; i++) {
        if (wordArray[i] == reversedWordArray[i]) {
            reversedWordArray[i + 1]
            if (i == wordArray.length) {
                return console.log('La parola è palindroma');
            }
        } else {
            return console.log("La parola non è palindroma");
        }
    }
}

checkPalindrome(prompt('Insert a word'))



// Creare una funzione per capire se la parola inserita è palindroma


//Pari e Dispari:
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.