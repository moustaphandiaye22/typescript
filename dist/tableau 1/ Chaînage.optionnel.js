"use strict";
// Explication : Accède à une propriété sans erreur si l'objet est nul.
// Le point d'interrogation (?) permet d'accéder à une propriété sans erreur si l'objet est nul.
// il est utilisé pour éviter les erreurs de type null ou undefined lors de l'accès à une propriété.
// il est particulièrement utile dans les cas où l'objet peut être nul ou indéfini.
// Exemple d'utilisation de l'opérateur optionnel en TypeScript
var _a, _b;
const combatant = {
    nom: "siteu",
    poids: 180,
    taille: 1.80,
    ecurie: {
        nom: "lamsar",
        pays: "senegal",
    },
};
console.log((_a = combatant.ecurie) === null || _a === void 0 ? void 0 : _a.nom);
// Affiche : lamsar
console.log((_b = combatant.ecurie) === null || _b === void 0 ? void 0 : _b.pays);
// Affiche : senegal
// console.log(combatant.ecurie?.ville);
// Affiche : undefined
