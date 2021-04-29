// Palidroma:
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma
var wordArray = []
var reversedWordArray = []
/**
 * ## Checks if a word is a palindrome
 * @param {String} word - the user inserts a word with a prompt
 * @var wordArray - inserts each letter in an array
 * @var reversedWordArray - uses method reverse to reverse wordArray
 * @if checks that every element in wordArray is equal to reversedWordArray, if so, returns a console.log saying that the word is palindrome
 */
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

//Pari e Dispari:
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var userNumber = Number(prompt("Insert a number between 1 and 5"))

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

