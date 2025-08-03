"use strict";
//  Les décorateurs  Explication : Ajout de comportement à une classe ou une propriété.
// Les décorateurs sont des fonctions qui peuvent être appliquées à des classes, des méthodes, des propriétés ou des paramètres.
// Ils permettent d'ajouter des métadonnées ou de modifier le comportement d'une classe ou d'une propriété.
// Les décorateurs sont souvent utilisés pour la validation, la journalisation ou l'implémentation de fonctionnalités répétitives.
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function decorators(constructor) {
    console.log(`Classe décorée : ${constructor.name}`);
}
let zhomme = (() => {
    let _classDecorators = [decorators];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var zhomme = _classThis = class {
        constructor(nom, age) {
            this.nom = nom;
            this.age = age;
        }
    };
    __setFunctionName(_classThis, "zhomme");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        zhomme = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return zhomme = _classThis;
})();
let femmel = (() => {
    let _classDecorators = [decorators];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var femmel = _classThis = class {
        constructor(nom, age) {
            this.nom = nom;
            this.age = age;
        }
    };
    __setFunctionName(_classThis, "femmel");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        femmel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return femmel = _classThis;
})();
// Exemple d'utilisation des décorateurs
const homme = new zhomme("Moustapha", 30);
const femm = new femmel("Amina", 25);
console.log(`Homme : ${homme.nom}, Age : ${homme.age}`);
console.log(`Femme : ${femm.nom}, Age : ${femm.age}`);
