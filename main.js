let randomQuestion =
  "Would you rather see something/someone from the past or from the future?";
console.log(randomQuestion);

let x = mathFunction(4, 8);
document.getElementById("test1").innerHTML = x;

function mathFunction(x, y) {
  //the x & y parameters translate to the 4 & 8 parameters set in the invocation
  return x + y + " is the result of 8 + 4";
}

console.log(x);

const playerChar = {
  class: "Barbarian",
  race: "Kobold",
  level: 3,
  path: "Path of Wild Magic",
};

document.getElementById("test2").innerHTML =
  "The player character is a " + playerChar.race + " " + playerChar.class;

let veggies = "Broccoli, Carrot, Tomato, Green Bean";
let twoVeggies = veggies.slice(10, 24);
document.getElementById("test3").innerHTML =
  twoVeggies + "  were sliced from the list"; //the carrot & tomato were sliced out of the veggies list due to the numerical parameters
