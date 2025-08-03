// Explication : Une fonction peut avoir plusieurs signatures.

// Exemple de fonction avec plusieurs signatures
function afficher(valeur: string): void;
function afficher(valeur: number): void;
function afficher(valeur: any): void {
    console.log(valeur);
    return valeur;
}
// Exemple d'utilisation
const resultatString = afficher("Bonjour");
const resultatNumber = afficher(42);    
// Affiche : Bonjour
// Affiche : 42