// Explication : Une classe qui accepte des types variables.
// Une classe générique permet de créer des classes qui peuvent travailler avec différents types de données.
// Les classes génériques sont utiles pour créer des structures de données réutilisables et flexibles.
// Elles permettent de définir des types de données lors de l'instanciation de la classe afin de rendre le code plus flexible et réutilisable.

class Boite<T> {
    private contenu: T;

    constructor(contenu: T) {
        this.contenu = contenu;
    }

    obtenirContenu(): T {
        return this.contenu;
    }
    afficherContenu(): void {
        console.log(`Le contenu de la boîte est : ${this.contenu}`);
    }
}

// Exemple d'utilisation de la classe générique Boite
const boiteDeNombre = new Boite<number>(123);
const boiteDeTexte = new Boite<string>("Bonjour je suis une classe générique en TypeScript");
boiteDeNombre.afficherContenu(); // Affiche : Le contenu de la boîte est : 123
boiteDeTexte.afficherContenu(); // Affiche : Le contenu de la boîte est : Bonjour je suis une classe générique en TypeScript