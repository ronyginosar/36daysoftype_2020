let vehicles = [];
var font;
let letterSize = 400;
let letter = 'c';
let spread = 3;
let lettermask;
let spots = [];
let mwindowWidth;
let mwindowHeight;

function preload() {
	font = loadFont('assets/Caladea-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	textFont(font);
	let locx = windowWidth*2/7;
	let locy = windowHeight*6/8;

	// C letter
	// stroke(255);
	// strokeWeight(1);
	// noFill();
	// textFont(font);
	// textSize(800);
	// text('C', 100, 700);

	// C letter shape
	cbounds = font.textToPoints('C', locx, locy, letterSize);
	for (var i = 0 ; i < cbounds.length ; i+=spread){
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
