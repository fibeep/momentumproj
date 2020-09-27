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

let p1 = 0;
let p2 = 500;
let m3 = m1 + m2;

let shape1 = rect(pos1,50,m1,m1);
let shape2 = rect(pos2,50,m2,m2);

display_m1.innerHTML = m1;
display_m2.innerHTML = m2;
display_v1.innerHTML = v1;
display_v2.innerHTML = v2;


function setup() {
  frameRate(9)
  createCanvas(500, 500);
  
}

function draw() {

  if (pos1 <= pos2) {
    noStroke();
    fill(250,0,0);
    rect(pos1, 50, m1, m1);
    rect(0, 50, p1, m1);

    pos1 += v1;
    p1 += v1 
  }

  if (pos2 >= pos1) {
    noStroke();
    fill(0,0,250);
    rect(pos2, 50, m2, m2);
    rect(500, 50, p2, m2);

    pos2 -= v2;
    p2 -= v2 * 1;

    }

  if (pos1 >= pos2 && pos2 <= pos1) {
    noStroke();
    fill(250,250,100);
    rect(pos1, 50, m1, m1);
    rect(pos2, 50, m2, m2);

    }
  
}

function Collision() {
  const vF = (m1 * v1 + m2 * v2) / (m1 + m2);

  display_vF.innerHTML = vF;

  console.log(vF);
  
}

