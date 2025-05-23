// exercice1
let phrase = "Je teste si tu trouve le mot chat";
let resultat = phrase.match(/chat/);
console.log("result", resultat);
// exercice 2
let regex = /^[A-Z]/;
console.log("majuscule", regex.test(phrase));

// exercice 3
let regex2 = /^\d+$/;
const nombre = "1221656481656";

console.log("nombre", regex2.test(nombre));

// exercice 4

let regexPostal = /^\d{5}$/;
let codePostale = "56370";

console.log("code postal", regexPostal.test(codePostale));

// exercice 5️

let regexMail = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;

const exEmail = [
  "john.doe@example.com",
  "jane_doe123@domain.co.uk",
  "invalid-email@",
  "noatsymbol.com",
  "alice@.com",
  "bob@domain",
  "valid.email+test@gmail.com",
  "user@sub.domain.com",
  "user name@domain.com",
  "user@domain..com",
  "contact@exemple.fr",
  "test@localhost",
];

exEmail.forEach((val) => {
  console.log(`${val}  ${regexMail.test(val) ? "valide" : "invalide"}`);
});

// exercice 6

let regexNumbMobil = /^0[1-9](\s\d{2}){4}$/;
const numeros = [
  "06 12 34 56 78",
  "01 23 45 67 89",
  "07 98 76 54 32",
  "0612345678",
  "071234567",
  "08123456789",
  "06.12.34.56.78",
  "06-12-34-56-78",
  "06 12 34 5678",
  "06 12 3456 78",
  "06 12 34 56 7a",
  "1234567890",
  "06 12 34 56",
  "06 12 34 56 789",
  "+33 6 12 34 56 78",
];

numeros.forEach((value) => {
  console.log(`${value} ${regexNumbMobil.test(value) ? "valide" : "invalide"}`);
});
// exercice 7

let regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
const motsDePasse = [
  "Motdepasse1",
  "password",
  "Pass123",
  "12345678",
  "MotDePasse",
  "abcDEF12",
  "ABcd12",
  "securePassword9",
  "SHORT1",
  "Mdp1234",
  "Motdepasse!",
  "motdepasse1",
  "PASSWORD1",
  "BonMotDePasse1",
  "ok123ABC",
];
motsDePasse.forEach((mp) => {
  console.log(`${mp} ${regexPassword.test(mp) ? "correcte" : "invalide"}`);
});

// exercice 8

regexNomComplet = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

const prenoms = [
  "Jean Dupont",
  "marie Curie",
  "Pierre curie",
  "Alice Martin",
  "jean dupont",
  "JeanDupont",
  "Jean  Dupont",
  "Jean ",
  " Dupont",
  "Émilie Zola",
  "Chloé Dufresne",
  "René Descartes",
];

prenoms.forEach((pren) => {
  console.log(
    "prenom nom",
    `${pren} ${regexNomComplet.test(pren) ? "correcte" : "incorrecte"}`
  );
});

// exercice 9️

let regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

const dates = [
  "01/01/2024",
  "29/02/2020",
  "31/12/1999",
  "15/08/2023",
  "00/01/2022",
  "32/01/2022",
  "15/13/2022",
  "31/04/2023",
  "12-12-2022",
  "1/1/2022",
  "01/1/2022",
  "01/01/22",
  "29/02/2023",
];

dates.forEach((date) => {
  console.log(
    "date :",
    `${date} ${regexDate.test(date) ? "correcte" : "incorrecte"}`
  );
});

// exercice 9️

let regexPoint = /\.$/;
phraseTest = "Ceci est une phrase.";
console.log(regexPoint.test(phraseTest));
