// you can write js here

console.log('Partie 5');

/* Code avant changement étape 6
let input = "Turpentine and turtles";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let letter of input) {
    if (vowels.indexOf(letter.toLowerCase()) !== -1) {
        resultArray.push(letter);
    }
}
console.log(resultArray);
 */

// Code après changement étape 6
let input = "Turpentine and turtles";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    let isVowel = false;
    for (let j = 0; j < vowels.length; j++) {
        if (letter.toLowerCase() === vowels[j]) {
            isVowel = true;
            break;
        }
    }
    if (isVowel) {
        resultArray.push(letter);
    }
}

// Formatage du résultat
let resultString = resultArray.join('').toUpperCase();

console.log("Phrase Humain :", input);
console.log("Trad  baleine :", resultString);