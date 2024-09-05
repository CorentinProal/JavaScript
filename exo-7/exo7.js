// // Création de l'objet de traduction des types
// const tradType = {
//     car: "Voiture",
//     house: "Maison",
//     game: "Jeu",
//     videoGame: "Jeux Vidéo",
//     show: "Spectacle",
// };
//
//
// console.log(tradType);
//
// function affichage() {
//     for (let article of jsonDatas) {
//         const typeTraduit = tradType[article.type] || article.type;
//         article.typeTraduit = typeTraduit;
//         console.log(article.type, " Traduction :", article.typeTraduit);
//     }
// }
//
// affichage();


// function afficheType() {
//     const infoUl = document.getElementById('info');
//
//     jsonDatas.forEach((article) => {
//         const liElement = document.createElement('li');
//         liElement.innerHTML = `
//             Nom : ${article.name} <br>
//             Type: ${article.type} <br>
//             Description: ${article.description} <br>
//             Price: ${article.price} <br>
//             Quantity: ${article.quantity} <br><br>
//         `;
//         infoUl.appendChild(liElement);
//     });
//
//     // Move this line inside the function
//     Child(liElement);
// }
//
// afficheType();



console.log("Partie 7");
console.log(jsonDatas);

function afficheArticles(filtre = '') {
    const listeArticles = document.getElementById('info');
    listeArticles.innerHTML = '';

    jsonDatas.forEach((article) => {
        if (filtre === '' || article.type.toLowerCase() === filtre.toLowerCase()) {
            listeArticles.innerHTML += `
                <li>
                    Nom : ${article.name} <br>
                    Type : ${article.type} <br>
                    Prix : ${article.price} <br>
                    Quantité : ${article.quantity} <br><br>
                </li>
            `;
        }
    });
}

const champSaisie = document.createElement('input');
champSaisie.placeholder = 'Entrez le type d\'article';

const boutonFiltre = document.createElement('button');
boutonFiltre.textContent = 'Filtrer';
boutonFiltre.onclick = () => afficheArticles(champSaisie.value);

document.body.insertBefore(boutonFiltre, document.getElementById('info'));
document.body.insertBefore(champSaisie, boutonFiltre);

afficheArticles();

