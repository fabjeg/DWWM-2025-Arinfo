// exercice 1
chaine = [1, 2, 3, 4, 5, 6];

function longueurChaine(chaine) {
  console.log("longueur de ma chaine ====>", chaine.length);
}

// exercice 2

const array = ["voiture", 4, "table", "chaussures", 7, 9];

function elementPresent(tableau, element) {
  return tableau.includes(element);
}

longueurChaine(array);

console.log(elementPresent(array, "table"));

// exercice 3

function compterElements(tableau) {
  return tableau.length;
}
console.log("Quantité ===>", compterElements(array));

// exercice 4

function chaineEnMots(phrase) {
  return phrase.split("");
}
const phrase = "voiture table chaussures ordinateur";

console.log("tableau :", chaineEnMots(phrase));

// exercice 5

const nombres = [2, 5, 8, 1, 10, 3];

function filtrerNombres(tableau) {
  return tableau.filter((nombre) => typeof nombre === "number");
}

const resultat = filtrerNombres(nombres, 5);

console.log(resultat);

// exercice 6
let personne = {
  nom: "Alice",
  age: 25,
};
function ajouterPropriete(objet, cle, valeur) {
  objet[cle] = valeur;
  return objet;
}

const newPropriété = ajouterPropriete(personne, "ville", "paris");

console.log(newPropriété);

// exercice 7

const nombres2 = [2, 5, 8, 1, 10, 3];
const array2 = ["voiture", 4, "table", "chaussures", 7, 9];

function fusionnerTableaux(tableau1, tableau2) {
  return tableau1.concat(tableau2);
}
const fusion = fusionnerTableaux(nombres2, array2);

console.log("tableau fusion :", fusion);

// exercice 8

function inverserTableau(tableau) {
  return tableau.reverse();
}

console.log("tableau inversé ===>", inverserTableau(array));

// exercice 9

function extraireSousTableau(tableau, debut, fin) {
  return tableau.slice(debut, fin);
}
const extraction = extraireSousTableau(nombres2, 1, 5);

console.log("tableau extrait ===>", extraction);

// exercice 10

function remplacerMot(phrase, ancienMot, nouveauMot) {
  return phrase.replace(ancienMot, nouveauMot);
}
const maPhrase =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const nouveauMot = remplacerMot(maPhrase, "Lorem", "charli");

console.log("nouveaux mot ===>", nouveauMot);
