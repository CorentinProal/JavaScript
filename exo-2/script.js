console.log('Partie 2');
const isTesting = true; // Pour heure et date actuelles, il faut inverser true pour false.
let Joursemaine; // Variable pour garder Joursemaine.
let HeureActuelle; // Variable pour garder HeureActuelle.


//← Code pour set les variable etc // → Code de test

if (isTesting) { // Si isTesting est vrai → saisie du jour et l'heure voulu.
    Joursemaine = parseInt(prompt("Entrez le jour de la semaine (0 pour dimanche, 6 pour samedi)"), 10); // Affiche la phrase pour le choix du jour de la semaine.
    HeureActuelle = parseInt(prompt("Entrez l'heure actuelle (0-23)"), 10); // Affiche la phrase pour le choix de l'heure actuelle.
}

else { // Si isTesting est faux → obtention du jour et de l'heure actuels.
    const myDate = new Date(); // Crée un objet Date avec la date et l'heure actuelles.
    Joursemaine = myDate.getDay(); // Récupère Joursemaine sous forme de nombre (0 pour dimanche, 6 pour samedi).
    HeureActuelle = myDate.getHours(); // Récupère HeureActuelle en format 24 heures (0-23).
}

// ← Code de test // → Code de réponse

const Messagesemaine = "Cheh c'est pas encore le week-end"; // Message pour la semaine.
const Messageplusemaine = "Sheeeesh c'est le week-end"; // Message pour le weekend.

// ← Code de réponse // → Code pour le "calcul" de la semaine.

if (Joursemaine === 0 || Joursemaine === 6) { // Si c'est samedi ou dimanche.
    console.log(Messageplusemaine); // Affiche le message du week-end.
} else if (Joursemaine === 5 && HeureActuelle >= 17) { // Si c'est vendredi après 17h.
    console.log(Messageplusemaine); // Affiche le message du week-end.
} else if (Joursemaine === 1 && HeureActuelle < 9) { // Si c'est lundi avant 9h.
    console.log(Messageplusemaine); // Affiche le message du week-end.
} else { console.log(Messagesemaine); } // Affiche le message de la semaine.


// Le TRIPLE = sert à valider la valeur et le type (pour qu'ils soient égaux).
