// look up using reduce
// key value pair
// {
//   1: "Argentina",
//   2: "France",
//   3: "Portugal"
// }
const countries = [
  { id: 1, name: "Argentina" },
  { id: 2, name: "France" },
  { id: 3, name: "Portugal" },
];
const players = [
  { id: 1, name: "Messi" },
  { id: 2, name: "Mbappé" },
  { id: 3, name: "Ronaldo" },
];

const lookUpCountriesTable = countries.reduce((acc, country) => {
  acc[country.id] = country.name;
  return acc;
}, {});
const lookUpPlayersTable = players.reduce((acc, player) => {
  acc[player.id] = player.name;
  return acc;
});
const player = lookUpPlayersTable["3"];
console.log(player);
