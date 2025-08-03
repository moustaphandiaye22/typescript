"use strict";
class Mammifere {
    constructor(nom) {
        this.nom = nom;
    }
}
class Chien extends Mammifere {
    crier() {
        console.log(`${this.nom} aboie.`);
    }
}
class Chat extends Mammifere {
    crier() {
        console.log(`${this.nom} miaule.`);
    }
}
const chien = new Chien("Rex");
chien.crier(); // Affiche : Rex aboie.
const chat = new Chat("Minou");
chat.crier(); // Affiche : Minou miaule.
