// Explication : Une interface peut en étendre une autre.
// Une interface peut étendre une ou plusieurs interfaces.
// Lorsque vous étendez une interface, vous ajoutez des membres supplémentaires à l'interface.
// Exemple d'utilisation de l'héritage entre interfaces en TypeScript

interface Footballer {
    nom:string,
    age:number,
    club:string,
}
interface Joueur extends Footballer {

    poste:string,
}
interface FootballerWithGoals extends Joueur {
    goals:number,
}

interface FootballerWithAssists extends Joueur {
    assists:number,

}

interface FootballerWithGoalsAndAssists extends FootballerWithGoals, FootballerWithAssists {
    goals:number,
    assists:number,
}
const joueur: FootballerWithGoalsAndAssists = {
    nom: "Lionel Messi",
    age: 35,
    club: "PSG",
    poste: "Attaquant",
    goals: 50,
    assists: 20,
}
console.log(`Nom: ${joueur.nom}, Age: ${joueur.age}, Club: ${joueur.club}, Poste: ${joueur.poste}, Goals: ${joueur.goals}, Assists: ${joueur.assists}`);
// Affiche : Nom: Lionel Messi, Age: 35, Club: PSG, Poste: Attaquant, Goals: 50, Assists: 20