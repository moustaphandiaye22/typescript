"use strict";
// Explication : Objet clé/valeur plus puissant qu’un objet classique.
// il  est possible d'utiliser n'importe quel type pour les clés et les valeurs.
// les Map sont particulièrement utiles pour stocker des données où l'ordre d'insertion est important ou lorsque les clés ne sont pas des chaînes de caractères ou des symboles.
// Exemple d'utilisation de Map :
const map = new Map();
map.set("nom", "John");
map.set("age", 30);
map.set("ville", "New York");
console.log(map.get("nom")); // Affiche : John
console.log(map.get("age")); // Affiche : 30
console.log(map.get("ville")); // Affiche : New York
// On peut également itérer sur les entrées d'une Map
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// Affiche :
// nom: John
// age: 30
// ville: New York
// On peut également vérifier si une clé existe dans la Map
console.log(map.has("nom")); // Affiche : true
console.log(map.has("pays")); // Affiche : false
