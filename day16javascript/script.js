let rand = Math.random();
let first, second, third;
if (rand < 0.33) {
  first = "Crazy";
} else if (rand < 0.66 && rand >= 0.33) {
  first = "Amazing";
} else {
  first = "Fire";
}

 rand = Math.random();
if (rand < 0.33) {
  second = "Engine";
} else if (rand < 0.66 && rand >= 0.33) {
  second = "Clothes";
} else {
  second = "Foods";
}

 rand = Math.random();
if (rand < 0.33) {
  third = "Hub";
} else if (rand < 0.66 && rand >= 0.33) {
  third = "Bros";
} else {
  third = "Ltd";
}
console.log(first,second,third)