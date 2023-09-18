// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average
//     score), and print the winner to the console. Also include
//     the average score in the outpu

let johns1 = 89;
let johns2 = 120;
let johns3 = 103;
let johnsavr = (johns1 + johns2 + johns3)
console.log("johns team", johnsavr);

let mikes1 = 116;
let mikes2 = 94;
let mikes3 = 123;
let mikesavr = (mikes1 + mikes2 + mikes3)
let highest = mikesavr;

if (highest > johnsavr) {
  console.log("Mike's team is The Winner Team!" + " " + highest);
}

// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).

let jon1 = 69;
let jon2 = 70;
let jon3 = 71;
jonavg = jon1 + jon2 + jon3;
console.log(jonavg);

let mik1 = 69;
let mik2 = 70;
let mik3 = 71;
mikavg = mik1 + mik2 + mik3;
console.log(mikavg);
if (jonavg === mikavg) {
  console.log("Draw between the mik and jon teams");
}

// 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134, and 105 points. Like before, log the average
// winner to the console.
 