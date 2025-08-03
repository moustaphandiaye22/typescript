"use strict";
// Explication : readonly empêche la modification d’un attribut.
class architecte {
    constructor(name) {
        this.name = name;
    }
}
const architecte1 = new architecte("Moustapha NDIAYE");
console.log(architecte1.name);
// architecte1.name = "Moustapha NDIAYE"; // Erreur :
// Cannot assign to 'name' because it is a read-only property.
