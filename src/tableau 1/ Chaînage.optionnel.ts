// Explication : Accède à une propriété sans erreur si l'objet est nul.
// Le point d'interrogation (?) permet d'accéder à une propriété sans erreur si l'objet est nul.
// il est utilisé pour éviter les erreurs de type null ou undefined lors de l'accès à une propriété.
// il est particulièrement utile dans les cas où l'objet peut être nul ou indéfini.
// Exemple d'utilisation de l'opérateur optionnel en TypeScript

const combatant = {
    nom:"siteu",
    poids: 180,
    taille: 1.80,
    ecurie:{
        nom: "lamsar",
        pays: "senegal",
    },
};
console.log(combatant.ecurie?.nom);
// Affiche : lamsar
console.log(combatant.ecurie?.pays);
// Affiche : senegal
// console.log(combatant.ecurie?.ville);
// Affiche : undefined
