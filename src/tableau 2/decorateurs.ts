//  Les décorateurs  Explication : Ajout de comportement à une classe ou une propriété.
// Les décorateurs sont des fonctions qui peuvent être appliquées à des classes, des méthodes, des propriétés ou des paramètres.
// Ils permettent d'ajouter des métadonnées ou de modifier le comportement d'une classe ou d'une propriété.
// Les décorateurs sont souvent utilisés pour la validation, la journalisation ou l'implémentation de fonctionnalités répétitives.

function decorators(constructor: Function) {
    console.log(`Classe décorée : ${constructor.name}`);
}

@decorators
class zhomme {
    constructor(public nom: string, public age: number) {}
}
@decorators
class femmel {
    constructor(public nom: string, public age: number) {}
}
// Exemple d'utilisation des décorateurs
const homme = new zhomme("Moustapha", 30);
const femm = new femmel("Amina", 25);
console.log(`Homme : ${homme.nom}, Age : ${homme.age}`);
console.log(`Femme : ${femm.nom}, Age : ${femm.age}`);
