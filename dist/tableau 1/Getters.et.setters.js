"use strict";
// Explication : Encapsulent l'accès à une propriété.
// il est utilisé pour encapsuler l'accès à une propriété d'une classe.
// il permet de contrôler l'accès à une propriété en définissant des méthodes pour la lire et la modifier.
// il est particulièrement utile pour les propriétés qui nécessitent une validation ou un traitement avant d'être lues ou modifiées.
// Exemple d'utilisation de getters et setters en TypeScript
class Maison {
    constructor(adresse) {
        this._adresse = adresse;
    }
    get adresse() {
        return this._adresse;
    }
    set adresse(value) {
        this._adresse = value;
    }
}
const M = new Maison("123 rue principale");
M.adresse = "456 rue principale";
console.log(M.adresse);
