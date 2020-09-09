/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
var x = 0;
var y = 0;
function draw() {
    clear();
    x = x + 0.1;
    y = y + 0.1;
  // stel vulkleur in
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(300+250*sin(x),300+250*cos(y),80,80);
  ellipse(300+250*sin(x),300+125*cos(y)*cos(y),80,80);
  ellipse(300+125*sin(x)*sin(x),300+250*cos(y),80,80);
}