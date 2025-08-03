"use strict";
// Explication : Empêche d'instancier directement une classe.
// le constructeur est une méthode spéciale qui est appelée lors de la création d'un objet à partir d'une classe.
// le constructeur privé est une méthode spéciale qui est appelée lors de la création d'un objet à partir d'une classe.
// le constructeur privé est une méthode spéciale qui est appelée lors de la création d'un objet à partir d'une classe.
// Exemple de constructeur privé en TypeScript
class Singleton {
    constructor() {
        // Initialisation de l'objet
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
// const s = new Singleton (); erreur ca ne pas instancier directement une classe avec un constructeur privé
const s = Singleton.getInstance(); // Utilisation de la méthode statique pour obtenir l'instance
console.log(s); // Affiche l'instance de Singleton
// autre exemple de constructeur privé
class ComptePrive {
    // le constructeur privé empêche l'instanciation directe de la classe
    // et force l'utilisation de la méthode statique getInstance pour obtenir l'instance unique
    constructor(solde, numero) {
        this.solde = solde;
        this.numero = numero;
    }
    static getInstance() {
        if (!ComptePrive.instance) {
            ComptePrive.instance = new ComptePrive(0, 0); // Initialisation avec des valeurs par défaut
        }
        return ComptePrive.instance;
    }
}
// const c = new ComptePrive (); erreur ca ne pas instancier directement une classe avec un constructeur privé
const c = ComptePrive.getInstance(); // Utilisation de la méthode statique pour obtenir l'instance
console.log(c); // Affiche l'instance de ComptePrive
