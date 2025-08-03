// Explication : Avec ?, la propriété n’est pas obligatoire.
// Les attributs et méthodes optionnels dans une interface permettent de définir des propriétés ou des méthodes qui ne sont pas obligatoires.
// Cela permet de créer des interfaces plus flexibles, où certaines propriétés peuvent être omises sans compromettre la validité de l'objet.
// Les propriétés optionnelles sont définies en ajoutant un point d'interrogation (?) après le nom de la propriété.
// Les méthodes optionnelles sont définies de la même manière, en ajoutant un point d'interrogation après le nom de la méthode.
interface Utilisateur {
    nom: string;
    age?: number; // Propriété optionnelle
    email?: string; // Propriété optionnelle
    afficherInfo(): void; // Méthode obligatoire
    envoyerEmail?(): void; // Méthode optionnelle
}
// Exemple d'utilisation de l'interface Utilisateur
const utilisateur1: Utilisateur = {
    nom: "moustapha ndiaye",
    afficherInfo() {
        console.log(`Nom: ${this.nom}`);
    }
};
// afficher les informations de l'utilisateur
utilisateur1.afficherInfo();