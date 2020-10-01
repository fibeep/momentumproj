const display_m1= document.querySelector("#in_mass1");
const display_m2= document.querySelector("#in_mass2");
const display_v1= document.querySelector("#in_velocity1");
const display_v2= document.querySelector("#in_velocity1");
const display_vF= document.querySelector("#output-vF");

const m1 = parseInt(prompt("enter mass 1"));
const m2 = parseInt(prompt("enter mass 2"));
const v1 = parseInt(prompt("enter velocity 1"));
const v2 = parseInt(prompt("enter velocity 2"));

const h1 = document.querySelector('h1') // selects the h1 tag
h1.innerHTML = 'Inelastic Collision' // Changes the text content of the tag

var pos1 = 0;
var pos2 = 500;

var p1 = 0;
var p2 = 500;
var m3 = m1 + m2;

var shape1 = rect(pos1,50,m1,m1);
let shape2 = rect(pos2,50,m2,m2);



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


    } else if (pos1 >= pos2 && pos2 <= pos1) {
    noStroke();
    fill(250,250,100);
    rect(pos1, 50, m1 + m2, (m1 + m2));
    rect(pos2, 50, m2 + m1, (m2 + m1));

    Collision();
  
    }
  
}

function Collision() {

  const vF = (m1 * v1 + m2 * v2) / (m1 + m2);

  const display_m1= document.querySelector("#identity_1");
  const display_m2= document.querySelector("#identity_2");
  const display_v1= document.querySelector("#identity_3");
  const display_v2= document.querySelector("#identity_4");

  display_m1.innerHTML = `\n  mass 1:     ${m1}`;
  display_m2.innerHTML = `\n  mass 2:     ${m2}`;
  display_v1.innerHTML = `\n  velocity 1: ${v1}`;
  display_v2.innerHTML = `\n  velocity 2: ${v2}`;

  display_vF.innerHTML = vF.toFixed(2);

  console.log(vF);
}

