// Explication : Un décorateur dynamique basé sur un paramètre.
// Il permet de créer des décorateurs qui peuvent être appliqués à des classes, des méthodes ou des propriétés.
// Les décorateurs sont des fonctions qui peuvent modifier le comportement d'une classe, d'une méthode ou d'une propriété.
// Ils sont souvent utilisés pour ajouter des métadonnées ou pour modifier le comportement d'une classe ou d'une méthode.
// Exemple d'utilisation d'un décorateur dynamique basé sur un paramètre en TypeScript

function Log(prefix: string) {
  return function (target: any) {
    console.log(`${prefix}: ${target.name}`);
  };
}
@Log("Classe")
class MyClass {}
// Affiche : Classe: MyClass
// Exemple d'utilisation du décorateur Log
const myInstance = new MyClass();
// Affiche : Classe: MyClass
// Exemple d'utilisation du décorateur Log avec une méthode
class MyotherClass {
  @Log("Méthode")
  maMethode(param1: string, param2: number) {
    console.log(`Exécution de maMethode avec ${param1} et ${param2}`);
  }
}

