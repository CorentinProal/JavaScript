// // Création de l'objet de traduction des types
// const tradType = {
//     car: "Voiture",
//     house: "Maison",
//     game: "Jeu",
//     videoGame: "Jeux Vidéo",
//     show: "Spectacle",
// };




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

afficheArticles();

