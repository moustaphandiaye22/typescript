// Explication : Récupérer les clés d’un type comme type.
// Le type `Keyof` permet d'obtenir les clés d'un type comme un type union.
// Il est utile pour créer des types dynamiques basés sur les propriétés d'un autre type et pour assurer la sécurité des types dans les opérations de manipulation d'objets.
type user = {
    nom: string;
    age: number;
    email: string;
};

type userKeys = keyof user; // "nom" | "age" | "email"