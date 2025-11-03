// scenario:count every survey and group by response
const surveyResponses = [
  "A",
  "B",
  "A",
  "C",
  "B",
  "A",
  "D",
  "C",
  "B",
  "A",
  "C",
  "D",
  "B",
  "A",
  "C",
  "B",
  "D",
  "A",
  "C",
  "B",
];

const counts = surveyResponses.reduce((accumulator, response) => {
  if (accumulator[response]) {
    accumulator[response] += 1;
  } else {
    accumulator[response] = 1;
  }
  return accumulator;
}, {});
console.log(counts);
