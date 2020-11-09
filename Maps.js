//1 Dice Problem
let roll = new Map();
let dice;
for (let i = 1; i < 7; i++) {
    roll.set(i, 0);
}
do {
    dice = Math.floor(Math.random() * 10) % 6 + 1;
    roll.set(dice, roll.get(dice) + 1);
} while (roll.get(dice) < 10);
console.log("Dice roll")
for (let [key, value] of roll.entries()) {
    console.log(key + " " + value);
}
console.log("Maximum times :", [...roll.entries()].reduce((a, e) => e[1] > a[1] ? e : a));
console.log("Minimum times :", [...roll.entries()].reduce((a, e) => e[1] < a[1] ? e : a));

//2 Birth month of 50 individuals
{
    let birthMonth = new Map();
    for (let i = 1; i <= 12; i++) {
        birthMonth.set(i, 0);
    }
    for (let j = 0; j < 50; j++) {
        personMonth = Math.floor(Math.random() * 12) + 1;
        birthMonth.set(personMonth, birthMonth.get(personMonth) + 1);
    }
    console.log("Birth Month Map of 50 Individuals")
    for (let [key, value] of birthMonth.entries()) {
        console.log(key + " " + value);
    }
}