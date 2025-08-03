"use strict";
// Explication : Convertir un tableau en chaîne de caractères avec un séparateur.
function joinExample(arr, separator) {
    return arr.join(separator);
}
const join1 = ["Hello", "TypeScript", "World"];
const join2 = ["a", "b", "c", "d", "e"];
const joinResult1 = joinExample(join1, "-");
const joinResult2 = joinExample(join2, "-");
console.log(`Le tableau est maintenant join ${joinResult1}`);
// Le tableau est maintenant join Hello-TypeScript-World
console.log(`Le tableau est maintenant join ${joinResult2}`);
// Le tableau est maintenant join a-b-c-d-e
