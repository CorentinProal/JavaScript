console.log("Partie 7");
console.log(jsonDatas);

tradType = {
    car: "Voiture",
    house: "Maison",
    game: "Jeu",
    videoGame: "Jeux Vidéo",
    show: "Spectacle",
};
function afficheArticles(filtre = '') {
    const listeArticles = document.getElementById('info');
    listeArticles.innerHTML = '';
    jsonDatas.forEach((article) => {
        const typeTraduit = tradType[article.type] || article.type;
        if (filtre === '' || article.type.toLowerCase() === filtre.toLowerCase() || typeTraduit.toLowerCase() === filtre.toLowerCase()) {
            listeArticles.innerHTML += `<li>
Nom : ${article.name} <br>
Type : ${typeTraduit} <br>
Prix : ${article.price} <br>
Quantité : ${article.quantity} <br><br></li>`;
        }
    });
} afficheArticles();
