// Explication : Une classe implémente une interface.
// Une interface définit un contrat que les classes doivent respecter.
// Une classe peut implémenter une ou plusieurs interfaces.
// Une classe qui implémente une interface doit fournir une implémentation pour toutes les méthodes de l'interface.
// Une classe qui implémente une interface peut également avoir des méthodes supplémentaires.
// Une classe qui implémente une interface peut également avoir des propriétés supplémentaires.
// Une classe qui implémente une interface peut également avoir des propriétés et des méthodes privées.
// Une classe qui implémente une interface peut également avoir des propriétés et des méthodes protégées.
// Une classe qui implémente une interface peut également avoir des propriétés et des méthodes publiques.
// Une classe qui implémente une interface peut également avoir des propriétés et des méthodes statiques.
// Une classe qui implémente une interface peut également avoir des propriétés et des méthodes abstraites.
// Exemple d'implémentation d'une interface en TypeScript

interface Ipersonne{
    parler(): void; // Méthode à implémenter
    marcher(): void; // Méthode à implémenter

    
}
class Personnes implements Ipersonne {
    nom: string;
    age: number;

    constructor(nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }

    parler(): void {
        console.log(`${this.nom} dit bonjour!`);
    }

    marcher(): void {
        console.log(`${this.nom} marche.`);
    }
}
// Exemple d'utilisation de l'interface Ipersonne
const personne = new Personnes("tapha", 22);
personne.parler();
personne.marcher();
