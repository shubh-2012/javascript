let score1 = 0;
let score2 = 0;

let pokemon1, pokemon2;

const player1Score = document.getElementById("p1_score");
const player2Score = document.getElementById("p2_score");

const player1pokemonImg = document.querySelector("#card1 > #img");
const player2pokemonImg = document.querySelector("#card2 > #img");

const player1pokemonName = document.querySelector("#card1 > #name");
const player2pokemonName = document.querySelector("#card2 > #name");

const player1pokemonXP = document.querySelector("#card1 > #experience");
const player2pokemonXP = document.querySelector("#card2 > #experience");

const abilitiesList1 = document.querySelector("#card1 > #abilities");
const abilitiesList2 = document.querySelector("#card2 > #abilities");

function fetchPokemon(randomId1, randomId2) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId1}/`) //fetch is a function that returns promise.
    .then((response) => {
      if (response.ok) {
        return response.json(); //json() also returns a promise
      }
    })
    .then((data) => {
      pokemon1 = data;
      player1pokemonImg.innerHTML = `<img src='${pokemon1.sprites.front_default}'/>`;
      player1pokemonName.textContent = pokemon1.name;
      player1pokemonXP.textContent = pokemon1.base_experience;

      const abilityNames = pokemon1.abilities.map(
        (ability) => ability.ability.name
      );
      abilitiesList1.textContent = "";
      abilityNames.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        abilitiesList1.appendChild(li);
      });
    });
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId2}/`)
    .then((response) => {
      if (response.ok) {
        return response.json(); //json() also returns a promise
      }
    })
    .then((data) => {
      pokemon2 = data;
      player2pokemonImg.innerHTML = `<img src='${pokemon2.sprites.front_default}'/>`;
      player2pokemonName.textContent = pokemon2.name;
      player2pokemonXP.textContent = pokemon2.base_experience;

      const abilityNames2 = pokemon2.abilities.map(
        (ability) => ability.ability.name
      );
      abilitiesList2.textContent = "";
      abilityNames2.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        abilitiesList2.appendChild(li);
      });

      // console.log(pokemon2.base_experience);

      if (pokemon1.base_experience > pokemon2.base_experience) {
        score1++;
        player1Score.textContent = `score:${score1}`;
      } else {
        score2++;
        player2Score.textContent = `score:${score2}`;
      }
    });
}

function fight() {
  let randomId1 = Math.floor(Math.random() * 20) + 1;
  let randomId2 = Math.floor(Math.random() * 20) + 1;
  // console.log(randomId);
  fetchPokemon(randomId1, randomId2);
}
