// Explication : Ensemble de constantes nommées.
// En TypeScript, une énumération (enum) est un moyen de définir un ensemble de constantes nommées.

// Exemple d'énumération en TypeScript
enum Couleure {
    Rouge = "Rouge",
    Vert = "Vert",
    Bleu = "Bleu",
}

// Affichage des valeurs de l'énumération
console.log(Couleure.Rouge); // Affiche "Rouge"
console.log(Couleure.Vert); // Affiche "Vert"
console.log(Couleure.Bleu); // Affiche "Bleu"

let cou :Couleure = Couleure.Rouge
console.log(cou); // Affiche "Rouge"