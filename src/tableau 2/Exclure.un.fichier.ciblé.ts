// // Explication : On peut exclure un ou plusieurs fichiers dans le fichier tsconfig.json.
// // Cela permet de ne pas inclure certains fichiers dans la compilation TypeScript.
// {
//   "exclude": ["test.ts"]
// }
// // Cela empêche tsc de compiler test.ts.


// // Exclure tous les fichiers .dev.ts
// // Explication : Utiliser un pattern dans tsconfig.json.
//  {
//   "exclude": ["**/*.dev.ts"]
// }
// // Tous les fichiers terminant par .dev.ts sont ignorés par le compilateur.

//  Exclure .dev.ts de tout répertoire
// Identique au précédent – **/*.dev.ts signifie dans n'importe quel dossier, à n'importe quelle profondeur.


// Exclure les fichiers de node_modules
// Explication : C’est automatique par TypeScript, mais on peut l’écrire pour être explicite :
// {
//   "exclude": ["node_modules"]
// }
