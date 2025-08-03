// Explication : Objet dans un autre objet.
// En TypeScript, un objet imbriqué est un objet qui contient un autre objet comme propriété.
// Cela permet de structurer les données de manière hiérarchique et de regrouper des informations connexes.
// Exemple d'utilisation d'un objet imbriqué en TypeScript
type Adresse = {
    rue: string; // Propriété rue de type string
    ville: string; // Propriété ville de type string
    codePostal: string; // Propriété codePostal de type string
};  
type Perso = {
    nom: string; 
    age: number; 
    adresse: Adresse; 
};
let perso: Perso = {
    nom: "coach wane", 
    age: 30, 
    adresse: { 
        rue: "123 rue principale", 
        ville: "Dakar", 
        codePostal: "12345" 
    }
};
// Exemple d'utilisation de l'objet imbriqué
console.log(perso.nom); 
console.log(perso.age); 
console.log(perso.adresse.rue); 
console.log(perso.adresse.ville); 
console.log(perso.adresse.codePostal); 