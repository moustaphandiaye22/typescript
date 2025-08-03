
// Explication : Un constructeur initialise un objet. this fait référence à l'objet courant.
// le constructeur  est une méthode spéciale qui est appelée lors de la création d'un objet à partir d'une classe.
// le constructeur et le methode this refere  à l'objet courant.
// Exemple de constructeur et de méthode this en TypeScript
// le constructeur et le methode this refere  --- IGNORE ---
class   Personne{
    nom:string;
    prenom:string;
    age:number;
    constructor(nom:string, prenom:string, age:number){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    afficher (){
        console.log("Nom : " + this.nom);
        console.log("Prenom : " + this.prenom);
        console.log("Age : " + this.age);
    }
}
const P =new Personne("ndiaye", "Mor", 18);
P.afficher();


class Compte{
    solde:number;
    numero:number;
    constructor(solde:number,numero:number){
        this.solde =solde;
        this.numero = numero;
    }
    afficher(){
        console.log("solde :" +this.solde);
        console.log("numero :" +this.numero);
    }
}
const C = new Compte(1000,123456789);
C.afficher();
