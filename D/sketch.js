let vehicles = [];
var font;
let letterSize = 400;
let letter = 'd';
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
	pixelDensity(1); // THE HOLY GRAIL! retina o.w scales up...
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

	// C letter mask for paving
	lettermask = createGraphics(windowWidth, windowHeight);
	lettermask.textFont(font);
	lettermask.textSize(letterSize);
	lettermask.fill(255);
	lettermask.text(letter, locx , locy);
	lettermask.loadPixels();


	for (var i = 0 ; i < lettermask.width ; i+= 10){
		for (var j = 0 ; j < lettermask.height ; j+= 10){
			index = i+j*lettermask.width;
			var c = lettermask.pixels[index*4];
			var b = brightness(c);
			if (b > 1) {
				// spots.push(createVector(i,j)); //only draw circles on white pixels
				var vehicle = new Vehicle(i,j);
				vehicles.push(vehicle);
			}
		}
	}
	// C letter shape
	// cbounds = font.textToPoints(letter, locx, locy, letterSize);
	// for (var i = 0 ; i < cbounds.length ; i+=spread){
	// 	var b = cbounds[i];
	// 	var vehicle = new Vehicle(b.x, b.y);
	// 	vehicles.push(vehicle);
	// 	// stroke(255);
	// 	// strokeWeight(4);
	// 	// point(b.x, b.y);
	// }
}


function draw() {
  background(0);
	for (var i = 0 ; i < vehicles.length ; i++){
		var v = vehicles[i];
		v.behaviors();
		v.update();
		v.show();
	}

	// for (var i = 0; i < spots.length; i++) {
	// 	stroke(255);
	// 	strokeWeight(1);
	// 	point(spots[i].x,spots[i].y);
	// }

	// sanity check
	// textFont(font);
	// textSize(letterSize);
	// fill(255);
	// text(letter, windowWidth/7 , windowHeight*7/8);

	// sanity check #2
	// image(lettermask,0,0);
}
