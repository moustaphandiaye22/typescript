// Explication : Exécute une fonction pour chaque élément du tableau.
// La méthode forEach() en JavaScript est utilisée pour exécuter une fonction sur chaque élément d'un tableau.
// Elle prend une fonction de rappel (callback) comme argument, qui est exécutée pour chaque élément du tableau.
// La fonction de rappel prend trois arguments : l'élément actuel, son index et le tableau lui-même.
// Elle ne retourne pas de valeur, mais peut être utilisée pour effectuer des opérations sur chaque élément du tableau.
function forEachExample(arr: number[], callback: (element: number, index: number, array: number[]) => void): void {
    arr.forEach(callback); 
}

const arr = [1, 2, 3, 4, 5];
forEachExample(arr, (element, index, array) => {
    console.log(`Élément à l'index ${index} : ${element}`);
});

