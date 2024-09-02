var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// Enlever le dernier élément
secretMessage.pop();

// Ajouter 'to' et 'program' à la fin
secretMessage.push('to', 'program');

// Changer 'easily' par 'right'
secretMessage[6] = 'right';

// Supprimer le premier élément
secretMessage.shift();

// Ajouter 'Programming' en début de tableau
secretMessage.unshift('Programming');

// Remplacer la série de cinq mots par 'know'
secretMessage.splice(4, 5, 'know');

// Afficher le message secret dans la console
console.log(secretMessage.join(' '));
