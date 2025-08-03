// Explication : redéfinir une méthode héritée.
// Le mot-clé override permet de redéfinir une méthode héritée d'une classe parente.
// Il est utilisé pour indiquer qu'une méthode dans une classe dérivée remplace une méthode de la classe parente.
// Exemple d'utilisation du mot-clé override en TypeScript

class Animal {
        crier() {
        console.log("L'animal fait du bruit");
    }
}

class Mounton extends Animal {
    override crier() {
        console.log("Le mounton bêle");
    }
}

const monMounton = new Mounton();
monMounton.crier(); // Affiche : Le mounton bêle
