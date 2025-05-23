// exercice 1

let nom = "martin";
let anneeNaissance = 2000;

// prompt(`Bonjour Mr ${nom}, vous avez ${2025 - anneeNaissance} ans`);

// exercice 2

let note_maths = 15;
let note_français = 12;
let note_HG = 9;

// prompt(`La moyenne est de ${(note_maths + note_français + note_HG) / 3}`);

// exercice 3

let sexe = "homme";

switch (sexe) {
  case "homme":
    // prompt("Bonjour Monsieur !");
    break;
  case "femme":
    // prompt("Bonjour Madame !");
    break;
  default:
  // prompt("Bonjour !");
}

// exercice 4

let heure = 14;

if (heure < 12) {
  //   prompt("nous somme le matin !");
} else if (heure < 18) {
  //   prompt("nous somme l'apres midi !");
} else {
  //   prompt("nous somme le soir !");
}

// exercice 5

let choix = 2;

switch (choix) {
  case 1:
    // prompt("vous avez choisi le choix 1");
    break;
  case 2:
    // prompt("vous avez choisi le choix 2");
    break;
  case 3:
    // prompt("vous avez choisi le choix 3");
    break;
  default:
  // prompt("choix non valide");
}

// exercice 6

let nombre = 17;

if (nombre % 3 === 0 && nombre % 5 === 0) {
  //   prompt(`${nombre} est un multiple de 3 et de 5.`);
} else {
  //   prompt(`${nombre} n'est pas un multiple de 3 et de 5.`);
}

// exercice 7

for (let i = 0; i < 82; i++) {
  let codePostal = "44" + String(i).padStart(3, "0");
  console.log(codePostal);
}

// exercice 8

let compteur = 0;

while (compteur < 22) {
  if (compteur == 10) {
    console.log("compteur est égal à 10");
  } else {
    console.log(compteur);
  }
  compteur += 2;
}

// exercice 9

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(1, 10));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(1, 10));

// exercice 10

let cible = 691;
let tirage;
let tentatives = 0;

while (tirage !== cible) {
  tirage = Math.floor(Math.random() * 900) + 100;
  tentatives++;
}

console.log(`Trouvé : ${tirage} en ${tentatives} tirages`);

let cible2 = 691;
let tirage2;
let tentatives2;

for (tentatives2 = 1; ; tentatives2++) {
  tirage2 = Math.floor(Math.random() * 900) + 100;

  if (tirage2 === cible2) {
    break;
  }
}

// console.log(`Trouvé : ${tirage2} en ${tentatives2} tirages`);

// exercice 11

const maintenant = new Date();

const jour = String(maintenant.getDate()).padStart(2, "0");
const mois = String(maintenant.getMonth() + 1).padStart(2, "0");
const annee = maintenant.getFullYear();
const heure1 = String(maintenant.getHours()).padStart(2, "0");
const minutes = String(maintenant.getMinutes()).padStart(2, "0");

console.log(
  `Aujourd’hui nous sommes le ${jour}/${mois}/${annee} et il est ${heure1}h${minutes}.`
);

// partie 2

// exercice 1

// let a = parseInt(prompt("Entrez la valeur de a :"));
// let b = parseInt(prompt("Entrez la valeur de b :"));
// let c = parseInt(prompt("Entrez la valeur de c :"));

if (a === b && a === c) {
  console.log("Les trois variables sont égales");
} else if (a === b || a === c || b === c) {
  console.log("Seulement deux des variables sont égales.");
} else {
  console.log("Les trois variables sont différentes.");
}

// exercice 2

// let quantite = prompt("Entrez la quantité :");
// let unite = prompt("Entrez l'unité (K, M, G, T) :").toUpperCase();
let resultat;

switch (unite) {
  case "K":
    resultat = quantite * 1_000;
    break;
  case "M":
    resultat = quantite * 1_000_000;
    break;
  case "G":
    resultat = quantite * 1_000_000_000;
    break;
  case "T":
    resultat = quantite * 1_000_000_000_000;
    break;
  default:
    resultat = "Unité non reconnue";
}

console.log(`Résultat : ${resultat}`);

// exercice 3

// let valeur = prompt(
//   "Entrez une valeur abrégée (ex: 150K, 400M, 5G, 3T ou juste un nombre) :"
// );

let quantite1 = parseFloat(valeur);
let unite1 = valeur[valeur.length - 1].toUpperCase();

let resultat1;

switch (unite1) {
  case "K":
    resultat1 = quantite1 * 1024;
    break;
  case "M":
    resultat1 = quantite1 * 1024 ** 2;
    break;
  case "G":
    resultat1 = quantite1 * 1024 ** 3;
    break;
  case "T":
    resultat1 = quantite1 * 1024 ** 4;
    break;
  case "":
    resultat1 = quantite1;
    break;
  default:
    resultat1 = "Unité non reconnue";
}

console.log(`Résultat en octets : ${resultat1}`);

// exercice 4

let value = 2;

if (typeof value === "number") {
  console.log(`La valeur ${value} est un nombre.`);
} else {
  console.log(`La valeur ${value} n'est pas un nombre.`);
}

switch (Number(value)) {
  case 0:
    console.log("La valeur est égale à 0");
    break;
  case 1:
    console.log("La valeur est supérieure à 0");
    break;
  case 2:
    console.log("La valeur est supérieure à 1");
    break;
  default:
    console.log("Valeur inconnue");
}
