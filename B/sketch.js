let p1 = { x: 100, y: 200 },
		p2 = { x: 300, y: 250 },
		p3 = { x: 300, y: 350 },
		p4 = { x: 100, y: 400 };

let pointWeight = 10;
let lineWeight = 1;

function preload() {

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// var1 = random(-50,50);
	// var2 = random(-50,50);
	// xshift = random(-30,30);
	// xshift2 = random(-30,30);
	// repetitions = random(2,10);
	// linerepetitions = random(1,7);
	frameRate(2);

}

function draw() {
	background(0);
	stroke(255);
	noFill();

	// randomize shifts for each frame
	// xshift = random(-30,30);
	// xshift2 = random(-30,30);
	repetitions = random(2,10);
	linerepetitions = random(1,7);


	for (let i = 0; i < linerepetitions; i++) {
		var1 = random(-50,50);
		var2 = random(-50,50);
		xshift = random(-30,30);
		xshift2 = random(-30,30);

		beginShape();
		strokeWeight(pointWeight);
		point(p1.x-xshift,p1.y+var1);
		strokeWeight(lineWeight);
		line(p1.x-xshift,p1.y+var1,p4.x-xshift,p4.y+var2);
		strokeWeight(pointWeight);
		point(p4.x-xshift,p4.y+var2);
		endShape();

		translate(0,p4.y/2);

		beginShape();
		strokeWeight(pointWeight);
		point(p1.x-xshift2,p1.y+var1);
		strokeWeight(lineWeight);
		line(p1.x-xshift2,p1.y+var1,p4.x-xshift2,p4.y+var2);
		strokeWeight(pointWeight);
		point(p4.x-xshift2,p4.y+var2);
		endShape();

		translate(0,-p4.y/2);
		translate(p2.x/10,0);
	}

	translate(-linerepetitions*p2.x/10,0);

	for (let i = 0; i < repetitions; i++) {
		beginShape();
		strokeWeight(pointWeight);
		point(p1.x,p1.y);
		strokeWeight(lineWeight);
		bezier(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		strokeWeight(pointWeight);
		point(p4.x,p4.y);
		endShape();

		translate(0,p4.y/2);

		beginShape();
		strokeWeight(pointWeight);
		point(p1.x,p1.y);
		strokeWeight(lineWeight);
		bezier(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		strokeWeight(pointWeight);
		point(p4.x,p4.y);
		endShape();

		translate(0,-p4.y/2);
		translate(random(-20,100),0);
		}
}
