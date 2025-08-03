// mais utilisé pour des effets comme l'enregistrement, la modification ou la journalisation.
// Exemple d'utilisation d'un décorateur de classe en TypeScript
function decorateurDeClasse(constructor: Function) {
    console.log(`Décorateur de classe appliqué à : ${constructor.name}`);
    constructor.prototype.decorated = true; // Ajoute une propriété décorée
}


@decorateurDeClasse
class Produit {
    constructor(public nom: string, public prix: number) {}

    afficher(): void {
        console.log(`Produit : ${this.nom}, Prix : ${this.prix}`);
    }
}
const p = new Produit("Ordinateur", 1500);
p.afficher();