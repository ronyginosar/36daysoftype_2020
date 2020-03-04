let vehicles = [];
var font;
let textSize = 400;

function preload() {
	font = loadFont('assets/Caladea-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	textFont(font);

	// C letter
	// stroke(255);
	// strokeWeight(1);
	// noFill();
	// textFont(font);
	// textSize(800);
	// text('C', 100, 700);

	// C letter shape
	cbounds = font.textToPoints('C', windowWidth/4, windowHeight*2/3, textSize);
	for (var i = 0 ; i < cbounds.length ; i++){
		var b = cbounds[i];
		var vehicle = new Vehicle(b.x, b.y);
		vehicles.push(vehicle);
		// stroke(255);
		// strokeWeight(4);
		// point(b.x, b.y);
	}
}

function draw() {
  background(0);
	for (var i = 0 ; i < vehicles.length ; i++){
		var v = vehicles[i];
		v.behaviors();
		v.update();
		v.show();
	}
}
