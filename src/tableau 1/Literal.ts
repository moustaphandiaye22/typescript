// Explication : Restreint un type à une ou plusieurs valeurs fixes.
// Les littéraux sont des valeurs qui sont utilisées pour représenter des données spécifiques.
// Ils sont utilisés pour restreindre un type à une ou plusieurs valeurs fixes.
// Les littéraux sont déclarés en utilisant des guillemets simples ou doubles.
// Un littéral est une valeur qui est utilisée pour représenter une donnée spécifique.

type Couleur = "rouge" | "vert" | "bleu"; // Littéral de type string
const Couleur: Couleur = "rouge";
console.log(Couleur); // Affiche : rouge
// Un littéral de type number
type Nombre = 1 | 2 | 3; // Littéral de type number
const Nombre: Nombre = 1;
console.log(Nombre); // Affiche : 1
// Un littéral de type boolean
type EstActif = true | false; // Littéral de type boolean
const EstActif: EstActif = true;
console.log(EstActif); // Affiche : true