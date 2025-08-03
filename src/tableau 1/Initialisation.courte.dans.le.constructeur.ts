// Explication : Déclare et initialise un attribut directement dans les paramètres.
// il s'agit d'une syntaxe concise pour initialiser les propriétés d'une classe.
// il est utilisé pour simplifier le code en évitant de répéter le nom de l'attribut dans le constructeur.
// il est particulièrement utile pour les classes qui ont de nombreux attributs à initialiser.
// il permet d'éviter de répéter le nom de l'attribut dans le constructeur.
// il est également utilisé pour les classes qui ont des attributs qui ne sont pas modifiés après l'initialisation.
// Exemple d'initialisation d'attributs dans le constructeur en TypeScript
// il est utilisé pour simplifier le code en évitant de répéter le nom de l'attribut dans le constructeur.

class Cars{
    constructor(public marque: string, public modele: string, public annee: number) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    afficherDetails(): void {
        console.log(`Marque: ${this.marque}, Modèle: ${this.modele}, Année: ${this.annee}`);
    }
}
// Exemple d'utilisation de la classe Cars
const voiture = new Cars("Toyota", "Camry", 2020);
voiture.afficherDetails();
