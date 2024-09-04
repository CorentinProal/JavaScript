console.log("Partie 7");
console.log(jsonDatas);

// Création de l'objet de traduction des types
const tradType = {
    car: "Voiture",
    house: "Maison",
    game: "Jeu",
    videoGame: "Jeux Vidéo",
    show: "Spectacle",
};


console.log(tradType);

function affichage() {
    for (let article of jsonDatas) {
        const typeTraduit = tradType[article.type] || article.type;
        article.typeTraduit = typeTraduit;
        console.log(article.type, " Traduction :", article.typeTraduit);
    }
}

affichage();