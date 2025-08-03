"use strict";
// Explication : Une classe qui accepte des types variables.
// Une classe générique permet de créer des classes qui peuvent travailler avec différents types de données.
// Les classes génériques sont utiles pour créer des structures de données réutilisables et flexibles.
// Elles permettent de définir des types de données lors de l'instanciation de la classe afin de rendre le code plus flexible et réutilisable.
class Boite {
    constructor(contenu) {
        this.contenu = contenu;
    }
    obtenirContenu() {
        return this.contenu;
    }
    afficherContenu() {
        console.log(`Le contenu de la boîte est : ${this.contenu}`);
    }
}
// Exemple d'utilisation de la classe générique Boite
const boiteDeNombre = new Boite(123);
const boiteDeTexte = new Boite("Bonjour je suis une classe générique en TypeScript");
boiteDeNombre.afficherContenu(); // Affiche : Le contenu de la boîte est : 123
boiteDeTexte.afficherContenu(); // Affiche : Le contenu de la boîte est : Bonjour je suis une classe générique en TypeScript
