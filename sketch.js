let angle = 0; //angolo scale
let angle2 = 0; //angolo move
let diameter = 300; //diametro dell'oggetto palletta

let pallette = []; //array degli oggetti palletta

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 300; i++) {
    //numero di pallette
    let x = random(width);
    let y = random(height);
    pallette[i] = new Palletta(x, y);
  }
}

function draw() {
  background(0,20);

  for (let i = 0; i < pallette.length; i++) {
    pallette[i].scale();
    pallette[i].move();
    pallette[i].border();
    pallette[i].show();
  }
  angle += 0.10; //velocità scale
  angle2 += 0.10; //velocità move (arco del movimento)
}