let vehicles = [];
var font;
let letterSize = 600;
let letter = 'e';
let spread = 15;
let lettermask;
let spots = [];
let mwindowWidth;
let mwindowHeight;
let particlesize = 20; // little letters

function preload() {
	font = loadFont('assets/Alegreya-ExtraBoldItalic.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	// pixelDensity(1); // THE HOLY GRAIL! retina o.w scales up...
	// but lowes quality. so...
	d = pixelDensity();
	// console.log(d);
	textFont(font);
	let locx = windowWidth*1/7;
	let locy = windowHeight*7/8;

	// D letter mask for paving
	lettermask = createGraphics(windowWidth, windowHeight);
	lettermask.textFont(font);
	lettermask.textSize(letterSize/d);
	lettermask.fill(255);
	lettermask.text('E', locx/d , locy/d);
	lettermask.loadPixels();


	for (var i = 0 ; i < lettermask.width ; i+=spread ){
		for (var j = 0 ; j < lettermask.height ; j+=spread ){
			index = i+j*lettermask.width*d;
			var c = lettermask.pixels[index*4];
			var b = brightness(c);
			if (b > 1) {
				// spots.push(createVector(i,j)); //only draw circles on white pixels
				var vehicle = new Vehicle(i,j);
				vehicles.push(vehicle);
			}
		}
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
