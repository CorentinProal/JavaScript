// you can write js here

console.log('Partie 5');

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


/*
Traducteur en langage baleine
1. Initialisation des variables
input : chaîne de caractères à traduire
vowels : tableau contenant les voyelles
resultArray : tableau vide pour stocker le résultat
2. Règles de traduction
Utiliser uniquement les voyelles
Pas d'espaces
Toutes les lettres en majuscules
3. Parcours de la chaîne d'entrée
Utiliser une boucle for pour itérer sur chaque caractère
4. Identification des voyelles
Méthode 1 : Utiliser indexOf() pour vérifier si le caractère est une voyelle
Méthode 2 (bonus) : Utiliser une boucle imbriquée pour comparer avec le tableau de voyelles
5. Construction du résultat
Utiliser push() pour ajouter les voyelles trouvées à resultArray
6. Formatage du résultat final
Utiliser join('') pour concaténer les éléments de resultArray sans séparateur
Utiliser toUpperCase() pour mettre le résultat en majuscules
7. Affichage du résultat
Afficher la phrase originale et sa traduction
 */