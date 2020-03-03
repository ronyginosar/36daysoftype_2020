let font1;
let radius = 150;
let tubeRadius = 70;
let textTexture;
let words = ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'];

function preload() {
  font1 = loadFont('assets/Georgia.ttf');
}

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);

	// Create Textue
  textTexture = createGraphics(2*PI*radius,2*PI*tubeRadius);
	textTexture.background(0);
  textTexture.fill(255);
	textTexture.textFont(font1);
	textTexture.textAlign(CENTER);
  textTexture.textSize(70);
	for(let i = 1; i <=8; i++){
		textTexture.text(words[0], 0, i*54.5);
	}
	noStroke();
}

function draw() {
	background(0);

	// Add text to the texture
	// let wave = (sin(frameCount * 0.005 + (0.005) * 0.005) * 1);
	// textTexture.background(10);
	// textTexture.fill(255);
	// textTexture.text(words[0],750,70);
	// textTexture.translate(0,(sin(frameCount*0.03+300)*4)*2);
	// textTexture.translate(0,wave);
	// for(let i = 0; i <=75; i++){
	// 	for(let j = 0; j <=2; j++){
	// 		textTexture.text(words[indexWord], 750*j,i*70);
	// 	}
	// }

	// rotate scene
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);

	// Create torus
	translate(100, 0);
	// push();
	// rotateZ(radians(45+wave));
	// push();
	texture(textTexture);
	torus(radius, tubeRadius);
	// pop();
	// pop();
}
