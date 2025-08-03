// Explication 
// Interface : contrat : définit un ensemble de méthodes et de propriétés que les classes doivent implémenter.
// Classe abstraite : partiellement implémentée : définit un ensemble de méthodes et de propriétés que les classes doivent implémenter.
// Une classe abstraite peut contenir des méthodes abstraites (sans implémentation) et des méthodes concrètes (avec implémentation).
// Une classe abstraite ne peut pas être instanciée directement, mais elle peut être étendue par des classes concrètes.
// Une classe abstraite est utilisée pour définir un ensemble de méthodes et de propriétés communes à plusieurs classes concrètes.
// Une classe abstraite peut être étendue par des classes concrètes qui doivent implémenter les méthodes abstraites de la classe abstraite.
// Exemple d'interface et de classe abstraite en TypeScript
interface Animal {
    nom: string;
    crier(): void;
}

abstract class Mammifere implements Animal {
    constructor(public nom: string) {}
    abstract crier(): void;
}

class Chien extends Mammifere {
    crier(): void {
        console.log(`${this.nom} aboie.`);
    }
}

class Chat extends Mammifere {
    crier(): void {
        console.log(`${this.nom} miaule.`);
    }
}

const chien = new Chien("Rex");
chien.crier(); // Affiche : Rex aboie.

const chat = new Chat("Minou");
chat.crier(); // Affiche : Minou miaule.