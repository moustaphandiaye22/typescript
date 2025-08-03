"use strict";
// Explication : Contrôle d'accès aux propriétés et méthodes.
// Le mot-clé private empêche l'accès direct aux propriétés et méthodes d'une classe depuis l'extérieur.
// Le mot-clé public permet l'accès direct aux propriétés et méthodes d'une classe depuis l'extérieur.
// Le mot-clé protected permet l'accès aux propriétés et méthodes d'une classe depuis l'extérieur et depuis les classes héritées.
// exemple de private, public  en TypeScript
class Avion {
    constructor(nom, vitesse, altitude) {
        this.nom = nom;
        this.vitesse = vitesse;
        this.altitude = altitude;
    }
    afficherDetails() {
        console.log(`Nom : ${this.nom}, Vitesse : ${this.vitesse}, Altitude : ${this.altitude}`);
    }
    calculerVitesse() {
        return this.vitesse * 2; // Méthode privée
    }
}
const avion = new Avion("Boeing 747", 900, 10000);
avion.afficherDetails(); // Affiche les détails de l'avion avion.afficherDetails();
// console.log(avion.vitesse); // Erreur : vitesse est privé
// console.log(avion.calculerVitesse()); // Erreur : calculerVitesse est privé
