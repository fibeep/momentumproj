/* global 
*  noStroke fill colorMode
*/

let m1 = parseInt(prompt("Pleas input first mass"));
let m2 = parseInt(prompt("Please input second mass"));
let v1 = 0 + parseInt(prompt("Please input first velocity"));
let v2 = 500 - parseInt(prompt("Please input second velocity"));

let shape1 = rect(10,100,m1,m1);
let shape2 = rect(290,100,m2,m2);

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  background(90);
}

function draw() {

  //This red shape is coming from the right!
  //At the moment it stops once it reaches the width divide by 2, which is half of the with
  if (v1 <= width/2) {
    rect(v1, 50, m1, m1);
    v1 += 1;
  }

  //This blue shape is going to the left!
  //At the moment it stops once it reaches the width divide by 2, which is half of the with
  if (v2 >= width/2) {
    rect(v2, 50, m2, m2);
    v2 -= 1;
  }
}

function Collision(m1,v1,m2,v2) {
    vF = ((m1 * v1) + (m2 * v2)) / (m1 + m2)
    return vF
}

