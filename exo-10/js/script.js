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
