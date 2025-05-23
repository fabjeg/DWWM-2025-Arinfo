// exercice 1

const array = [1, 2, 3, 4, 5];

array.forEach((element) => {
  console.log("le nombre est :", element);
});

// exercice 2

function sommeTableau(tableau) {
  return tableau.reduce((acc, valeur) => acc + valeur, 0);
}

console.log("somme", sommeTableau(array));

// exercice 3

const array2 = ["chat", "voiture", "ordinateur", "maison", "chaise", "stylo"];

function motPlusLong(tableauMots) {
  let motLePlusLong = "";
  tableauMots.forEach((mot) => {
    if (mot.length > motLePlusLong.length) {
      motLePlusLong = mot;
    }
  });
  return motLePlusLong;
}

console.log("mot le plus long ===>", motPlusLong(array2));

// exercice 4

function inverserChaine(chaine) {
  return chaine.reverse();
}

console.log("tableau inversé ====>", inverserChaine(array2));

//exercice 5️

function compterVoyelles(chaine) {
  let compteur = 0;
  const voyelles = "aeiou";

  for (let i = 0; i < chaine.length; i++) {
    if (voyelles.includes(chaine[i])) {
      compteur++;
    }
  }
  return compteur;
}

const phraseTest =
  "Les nuages cachent parfois les plus beaux couchers de soleil.";

console.log("nombre de voyelles ===>", compterVoyelles(phraseTest));

//exercice 6️

function nombresPairs(tableau) {
  const pairs = [];
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] % 2 === 0) {
      pairs.push(tableau[i]);
    }
  }
  return pairs;
}

console.log("nombre paire ===>", nombresPairs(array));

//exercice 7

const array3 = {
  a: "somestring",
  b: 42,
  c: false,
};

function compterProprietes(objet) {
  return Object.keys(objet).length;
}

console.log("nombre de propriétés ====>", compterProprietes(array3));

//exercice 8️

let produits = [
  { nom: "Stylo", prix: 2 },
  { nom: "Cahier", prix: 5 },
  { nom: "Gomme", prix: 1 },
];

function extraireNoms(produits) {
  return produits.map((prod) => {
    return `Nom: ${prod.nom}, Prix : ${prod.prix}€`;
  });
}
console.log("noms des produits ===>", extraireNoms(produits));

//exercice 9

function factorielle(n) {
  let f = 1;
  for (i = 1; i <= n; i++) {
    f = f * i;
  }
  return f;
}

console.log("factorielle ===>", factorielle(5));

//exercice 10

function estTrie(tableau) {
  for (let i = 0; i < tableau.length - 1; i++) {
    if (tableau[i] > tableau[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log("ordre croissant ===>", estTrie(array));
