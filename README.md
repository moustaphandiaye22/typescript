# 📚 Projet d'Apprentissage TypeScript

Un projet pédagogique complet pour maîtriser TypeScript, organisé en 5 modules progressifs avec des exemples pratiques et détaillés.

## 🚀 Aperçu du Projet

Ce projet est une collection complète d'exemples TypeScript organisés de manière pédagogique, allant des concepts fondamentaux aux patterns avancés. Chaque module contient des exemples pratiques avec explications détaillées.

## 📁 Structure du Projet

```
TypeScript/
├── src/
│   ├── tableau 1/     # Concepts Fondamentaux et POO
│   ├── tableau 2/     # Syntaxe Moderne et Outils
│   ├── tableau 3/     # Système de Types
│   ├── tableau 4/     # Méthodes de Tableaux
│   └── tableau 5/     # Concepts Avancés
├── dist/              # Fichiers compilés
├── tsconfig.json      # Configuration TypeScript
└── README.md          # Cette documentation
```

## 📖 Modules d'Apprentissage

### 📘 Tableau 1 - Concepts Fondamentaux et POO
**Focus : Classes, interfaces, héritage et concepts de base**

- **Classes et Héritage**
  - `Classe.générique.ts` - Classes génériques et paramètres de type
  - `Override.ts` - Redéfinition de méthodes héritées
  - `Héritage.entre.interfaces.ts` - Extension d'interfaces

- **Interfaces**
  - `Interface.comme.type.de.fonction.ts` - Interfaces pour typer les fonctions
  - `Attributs..méthodes.optionnels.dans.une.interface.ts` - Propriétés optionnelles
  - `Attribut.en.lecture.seule.dans.une.interface.ts` - Propriétés readonly

- **Encapsulation**
  - `public.private.ts` - Modificateurs d'accès
  - `constructor.prive.ts` - Constructeurs privés
  - `Getters.et.setters.ts` - Accesseurs de propriétés

- **Types de Base**
  - `Tuple.ts` - Types tuples
  - `Literal.ts` - Types littéraux
  - `Keyof.ts` - Opérateur keyof

### 📗 Tableau 2 - Syntaxe Moderne et Outils
**Focus : Fonctionnalités ES6+ et outils de développement**

- **Déclaration de Variables**
  - `let - var - const.ts` - Portée et mutabilité des variables

- **Destructuration**
  - `Déstructuration.ts` - Destructuration d'objets
  - `Déstructuration.(tableaux).ts` - Destructuration de tableaux

- **Opérateurs Modernes**
  - `Spread.operator.ts` - Opérateur de propagation
  - `Nullish.coalescing.ts` - Opérateur de coalescence

- **Décorateurs**
  - `decorateurs.ts` - Introduction aux décorateurs
  - `Ajout.de.décorateurs.de.classe.ts` - Décorateurs de classe
  - `Ajout.de.décorateurs.de.propriété.ts` - Décorateurs de propriété

- **Configuration et Outils**
  - `tsconfig.ts` - Configuration TypeScript
  - `Exclure.un.fichier.ciblé.ts` - Exclusion de fichiers

### 📙 Tableau 3 - Système de Types
**Focus : Types primitifs, unions, fonctions et énumérations**

- **Types Primitifs**
  - `String.ts` - Type string et méthodes
  - `Boolean.ts` - Type boolean
  - `Array.ts` - Types de tableaux

- **Types Complexes**
  - `Type.union.ts` - Types union
  - `Type.never.ts` - Le type never
  - `Type.object.ts` - Types d'objets

- **Fonctions**
  - `Le.type.FUNCTION.ts` - Typage des fonctions
  - `Fn.avec.retour.ts` - Fonctions avec valeur de retour
  - `Type.de.retour.de.fonction.ts` - Types de retour

- **Types Personnalisés**
  - `Alias.ou.type.personnalisé.ts` - Alias de types
  - `Type.objet.anonyme.ts` - Types d'objets anonymes
  - `Enum.ts` - Énumérations

### 📕 Tableau 4 - Méthodes de Tableaux
**Focus : Manipulation et transformation des tableaux**

- **Méthodes de Recherche**
  - `Find.ts` - Recherche d'éléments
  - `IndexOf.ts` - Index d'un élément
  - `LastIndexOf.ts` - Dernier index d'un élément

- **Méthodes de Transformation**
  - `Filter.ts` - Filtrage d'éléments
  - `Reduce.ts` - Réduction de tableau
  - `ReduceRight+reduceLeft.ts` - Réduction directionnelle

- **Méthodes d'Itération**
  - `Foreach.ts` - Itération sur éléments
  - `Some.ts` - Vérification partielle
  - `Every.ts` - Vérification totale

- **Manipulation**
  - `Pop.ts` / `Push.ts` - Ajout/suppression en fin
  - `Shift.ts` / `Unshift.ts` - Ajout/suppression en début
  - `Splice.ts` - Modification de tableau

### 📔 Tableau 5 - Concepts Avancés
**Focus : Génériques, types utilitaires et patterns avancés**

- **Génériques**
  - `Fonction.générique.ts` - Fonctions génériques
  - `Paramètres.génériques.avec.valeur.par.défaut.ts` - Valeurs par défaut

- **Types Avancés**
  - `Intersection.de.types.ts` - Intersection de types
  - `Héritage.entre.types.ts` - Héritage de types
  - `Unknown.ts` - Le type unknown

- **Patterns Avancés**
  - `Arrow.function.ts` - Fonctions fléchées
  - `Callback.ts` - Fonctions de rappel
  - `Discrimination.de.type.ts` - Discrimination de types

## ⚙️ Configuration

### Prérequis
- Node.js (version 16+)
- TypeScript (installé globalement ou localement)

### Installation
```bash
# Cloner le projet
git clone <url-du-repo>
cd TypeScript

# Installer TypeScript (si pas déjà fait)
npm install -g typescript

# Compiler les fichiers
tsc
```

### Configuration TypeScript
Le projet utilise une configuration TypeScript moderne :
- **Target** : ES2016
- **Module** : CommonJS
- **Strict mode** : Activé
- **Source** : `./src`
- **Output** : `./dist`

## 🚀 Utilisation

### Compilation
```bash
# Compiler tous les fichiers
tsc

# Compiler en mode watch
tsc --watch

# Compiler un fichier spécifique
tsc src/tableau1/Classe.générique.ts
```

### Exécution
```bash
# Exécuter un fichier compilé
node dist/tableau1/Classe.générique.js

# Exécuter directement avec ts-node (si installé)
npx ts-node src/tableau1/Classe.générique.ts
```

## 📝 Organisation Pédagogique

Le projet suit une progression logique :

1. **🎯 Fondamentaux** (Tableau 1) : Classes, interfaces, héritage
2. **🔧 Syntaxe moderne** (Tableau 2) : ES6+, outils de développement
3. **🏗️ Système de types** (Tableau 3) : Types de base, unions, fonctions
4. **⚡ Pratique** (Tableau 4) : Manipulation concrète des données
5. **🚀 Expertise** (Tableau 5) : Concepts avancés et patterns

## 🎯 Objectifs d'Apprentissage

À la fin de ce projet, vous maîtriserez :
- ✅ La programmation orientée objet en TypeScript
- ✅ Le système de types avancé
- ✅ Les fonctionnalités modernes d'ES6+
- ✅ La manipulation efficace des tableaux
- ✅ Les patterns avancés et les génériques
- ✅ Les décorateurs et métaprogrammation

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 📞 Contact
moustaphand20@gmail.com

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

*Bon apprentissage avec TypeScript ! 🚀*
