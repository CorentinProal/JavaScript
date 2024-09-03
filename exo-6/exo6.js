// Cours 8 de Codecademy
console.log("Partie 6");
/*
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au-dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo["cars"]);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo["bathrooms"]);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);
*/

let team = {
    players: [
        {
            firstName: "Pablo",
            lastName: "Pedro",
            age: 11
        },
        {
            firstName: "Mani",
            lastName: "Rock",
            age: 27
        },
        {
            firstName: "Alex",
            lastName: "Triomph",
            age: 19
        }
    ],
    games: [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: "Wildcats",
            teamPoints: 35,
            opponentPoints: 31
        },
        {
            opponent: "Tigers",
            teamPoints: 38,
            opponentPoints: 40
        }
    ],
    addPlayer: function(firstName, lastName, age) {
        this.players.push({
            firstName: firstName,
            lastName: lastName,
            age: age
        });
    }
};

team.addPlayer("Yanis", "Coen", 8);
console.log(team);
