// Explication : Contrôle d'accès aux propriétés et méthodes.
// Le mot-clé private empêche l'accès direct aux propriétés et méthodes d'une classe depuis l'extérieur.
// Le mot-clé public permet l'accès direct aux propriétés et méthodes d'une classe depuis l'extérieur.
// Le mot-clé protected permet l'accès aux propriétés et méthodes d'une classe depuis l'extérieur et depuis les classes héritées.
// exemple de private, public  en TypeScript

class Avion {
    private vitesse: number; // Propriété privée
    public nom: string; // Propriété publique
    public altitude: number; // Propriété publique

    constructor(nom: string, vitesse: number, altitude: number) {
        this.nom = nom;
        this.vitesse = vitesse;
        this.altitude = altitude;
    }

    public afficherDetails(): void {
        console.log(`Nom : ${this.nom}, Vitesse : ${this.vitesse}, Altitude : ${this.altitude}`);
    }
    private calculerVitesse(): number {
        return this.vitesse * 2; // Méthode privée
    }


}
const avion = new Avion("Boeing 747", 900, 10000);
avion.afficherDetails(); // Affiche les détails de l'avion avion.afficherDetails();
// console.log(avion.vitesse); // Erreur : vitesse est privé
// console.log(avion.calculerVitesse()); // Erreur : calculerVitesse est privé

