var pokemons = [
  "audino",
  "bagon",
  "baltoy",
  "banette",
  "bidoof",
  "braviary",
  "bronzor",
  "carracosta",
  "charmeleon",
  "cresselia",
  "croagunk",
  "darmanitan",
  "deino",
  "emboar",
  "emolga",
  "exeggcute",
  "gabite",
  "girafarig",
  "gulpin",
  "haxorus",
  "heatmor",
  "heatran",
  "ivysaur",
  "jellicent",
  "jumpluff",
  "kangaskhan",
  "kricketune",
  "landorus",
  "ledyba",
  "loudred",
  "lumineon",
  "lunatone",
  "machamp",
  "magnezone",
  "mamoswine",
  "nosepass",
  "petilil",
  "pidgeotto",
  "pikachu",
  "pinsir",
  "poliwrath",
  "poochyena",
  "porygon2",
  "porygonz",
  "registeel",
  "relicanth",
  "remoraid",
  "rufflet",
  "sableye",
  "scolipede",
  "scrafty",
  "seaking",
  "sealeo",
  "silcoon",
  "simisear",
  "snivy",
  "snorlax",
  "spoink",
  "starly",
  "tirtouga",
  "trapinch",
  "treecko",
  "tyrogue",
  "vigoroth",
  "vulpix",
  "wailord",
  "wartortle",
  "whismur",
  "wingull",
  "yamask",
];

let matchWords = (pokemonName, pokemosArray) => {
  let arrayAux = [];
  arrayAux.push(pokemonName);
  let newPokemosArray = pokemosArray.filter((nameAux) => {
    if (nameAux !== pokemonName) {
      return true;
    }
  });
  if (newPokemosArray.length == 0) {
    return arrayAux;
  }

  validPath = newPokemosArray.filter((pokemonItarator) => {
    if (pokemonItarator.substr(0, 1) == pokemonName.substr(-1)) {
      return true;
    }
  });

  if (validPath.length == 0) {
    return arrayAux;
  }

  let biggerRoad = [];
  validPath.forEach((nameAux) => {
    result = matchWords(nameAux, newPokemosArray);
    if (biggerRoad.length < result.length) {
      biggerRoad = result;
    }
  });

  return arrayAux.concat(biggerRoad);
};
var pokemosCoicidence = [];
pokemons.forEach((pokemonName) => {
  pokemosCoicidence = matchWords(pokemonName, pokemons);
});

console.log(pokemosCoicidence);
//'yamask', 'kangaskhan', 'nosepass', 'seaking', 'girafarig', 'gabite', 'emboar', 'registeel', 'landorus', 'simisear', 'relicanth', 'heatmor', 'rufflet', 'trapinch', 'haxorus', 'spoink', 'kricketune', 'exeggcute', 'emolga', 'audino'