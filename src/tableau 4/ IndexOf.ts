// Explication : Retourne l’index de la première occurrence d’un élément.
// La méthode indexOf en TypeScript permet de trouver l'index de la première occurrence d'un élément dans un tableau.
// Elle retourne l'index de l'élément si trouvé, ou -1 si l'élément n'est pas trouvé.
const rappeur : string[] = ["Drake", "Kendrick Lamar", "J Cole", "Lil Wayne", "Jay-Z"];
const index = rappeur.indexOf("Jay-Z");
console.log(index); // Affiche 4


const joueurs = ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé"];
const indexe = joueurs.indexOf("Neymar");
console.log(indexe); // Affiche 2 (l'index de "Neymar" dans le tableau joueurs)