const display_vF= document.querySelector("#output-vF");
const display_m1= document.querySelector("#in_mass1");
const display_m2= document.querySelector("#in_mass2");
const display_v1= document.querySelector("#in_velocity1");
const display_v2= document.querySelector("#in_velocity1");

const h1 = document.querySelector('h1') // selects the h1 tag
h1.innerHTML = 'Inelastic Collision' // Changes the text content of the tag

const m1 = parseInt(prompt("Pleas input first mass"));
const m2 = parseInt(prompt("Please input second mass"));
const v1 = parseInt(prompt("Please input first velocity"));
const v2 = parseInt(prompt("Please input second velocity"));

let pos1 = 0;
let pos2 = 500;

let shape1 = rect(0,100,m1,m1);
let shape2 = rect(500,100,m2,m2);

function setup() {
  frameRate(12)
  createCanvas(500, 500);

}

function draw() {

  if (pos1 <= pos2) {
    noStroke();
    fill(250,0,0);
    rect(pos1, 50, m1, m1);

    pos1 += v1;

  }

  if (pos2 >= pos1) {
    noStroke();
    fill(0,0,250);
    rect(pos2, 50, m2, m2);

    pos2 -= v2;

    }

}

function Collision() {
  const vF = (m1 * v1 + m2 * v2) / (m1 + m2);

  display_vF.innerHTML = vF;
  display_m1.innerHTML = m1;
  display_m2.innerHTML = m2;
  display_v1.innerHTML = v1;
  display_v2.innerHTML = v2;

  console.log(vF);
  
}

