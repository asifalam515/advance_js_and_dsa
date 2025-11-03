const players = [
  {
    id: 1,
    name: "Erling Haaland",
    team: "Manchester City",
    country: "Norway",
    goals: 42,
    assists: 8,
    matchesPlayed: 48,
    year: 2024,
  },
  {
    id: 2,
    name: "Kylian Mbappé",
    team: "Paris Saint-Germain",
    country: "France",
    goals: 39,
    assists: 10,
    matchesPlayed: 46,
    year: 2024,
  },
  {
    id: 3,
    name: "Harry Kane",
    team: "Bayern Munich",
    country: "England",
    goals: 44,
    assists: 7,
    matchesPlayed: 47,
    year: 2024,
  },
  {
    id: 4,
    name: "Lionel Messi",
    team: "Inter Miami",
    country: "Argentina",
    goals: 32,
    assists: 18,
    matchesPlayed: 41,
    year: 2024,
  },
  {
    id: 5,
    name: "Cristiano Ronaldo",
    team: "Al Nassr",
    country: "Portugal",
    goals: 38,
    assists: 6,
    matchesPlayed: 45,
    year: 2024,
  },
];
const highestScorer = players.reduce((previous, current) => {
  return previous.goals > current.goals ? previous : current;
});
console.log(highestScorer);
