// Explication : Décore une propriété avec un comportement.
// Les décorateurs de propriété sont des fonctions qui peuvent être appliquées à des propriétés d'une classe.
// Ils permettent d'ajouter des métadonnées ou de modifier le comportement d'une propriété.
// Les décorateurs de propriété sont souvent utilisés pour la validation, la journalisation ou l'implémentation de fonctionnalités répétitives.
// Exemple d'utilisation d'un décorateur de propriété en TypeScript

// function decorateurDePropriete(target: any, propertyKey: string) {
//     let value: any;

//     const getter = () => {
//         console.log(`Getter pour ${propertyKey} appelé`);
//         return value;
//     };

//     const setter = (newValue: any) => {
//         console.log(`Setter pour ${propertyKey} appelé avec la valeur : ${newValue}`);
//         value = newValue;
//     };

//     Object.defineProperty(target, propertyKey, {
//         get: getter,
//         set: setter,
//         enumerable: true,
//         configurable: true
//     });
// }
// declare class Pers {
//     // @decorateurDePropriete
//     public nom: string;

//     // @decorateurDePropriete
//     public age: number;

//     constructor(nom: string, age: number) {
//         this.nom = nom;
//         this.age = age;
//     }

//     afficherle(): void {
//         console.log(`Nom: ${this.nom}, Age: ${this.age}`);
//     }
// }