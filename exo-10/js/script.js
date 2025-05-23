// exercide 1

let personne = {
  nom: "Dupont",
  prenom: "Jean",
  age: 30,
};

let ageFutur = personne.age + 1;

console.log(
  `je m'appelle ${personne.prenom} ${personne.nom} et j'ai ${ageFutur} ans l'année prochaine`
);

// exercice 2

let surface = {
  longueur: 5,
  largeur: 3,
};

let surfaceTotale = surface.longueur * surface.largeur;

console.log(
  `le rectangle de longueur ${surface.longueur} cm et de largeur ${surface.largeur} cm a pour surface ${surfaceTotale} cm²`
);

// exercice 3

let temperatureKelvin = 900;
let temperatureCelsius = temperatureKelvin - 273.15;

console.log(` la temperature de ${temperatureCelsius}
°Celsius vaut ${temperatureKelvin} en Kelvin`);

// exercice 4

function comparer() {
  let x = parseFloat(document.getElementById("x").value);
  let y = parseFloat(document.getElementById("y").value);
  let message = "";

  if (x > y) {
    message = `${x} est plus grand que ${y}`;
  } else {
    message = `${x} est plus petit que ${y}`;
  }

  document.getElementById("p1").innerHTML = message;
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnComparer").addEventListener("click", comparer);
});

// exercice 5
let date = new Date(2012, 1, 20, 3, 12);

console.log("la date ===>", date);

// exercice 6

function getWeekday(date) {
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}
console.log("jourDeLaSemaine ==>", getWeekday(date));

// exercice 7

function getLocalDay(date) {
  const day = date.getDay();

  //   if (day === 0) {
  //     return 7;
  //   } else {
  //     return day;
  //   }

  return day === 0 ? 7 : day;
}
console.log("Jour de la semaine ==>", getLocalDay(date));

// exercice 8

function getDateAgo(date, days) {
  const dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy;
}
console.log("Il y a quelques jours ==>", getDateAgo(date, 1));

// exercice 9

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0);
}

console.log("Le dernier jour du mois ==>", getLastDayOfMonth(2012, 1));
