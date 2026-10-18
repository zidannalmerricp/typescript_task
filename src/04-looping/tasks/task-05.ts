/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [98, 90, 82, 70, 96, 88, 76, 60, 85, 93];

let gold = 0;
let silver = 0;
let bronze = 0;
let noMedal = 0;
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += scores[i];

  if (scores[i] >= 95) {
    gold++;
  } else if (scores[i] >= 85) {
    silver++;
  } else if (scores[i] >= 75) {
    bronze++;
  } else {
    noMedal++;
  }
}

console.log("Gold Medal:", gold);
console.log("Silver Medal:", silver);
console.log("Bronze Medal:", bronze);
console.log("No Medal:", noMedal);
console.log("Average Score:", total / scores.length);