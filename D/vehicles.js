// https://www.youtube.com/watch?v=4hA7G3gup-4&vl=en
// nature of code - dan shiffman
// steering = desired - current velocity

// todo - group behaviors?


let particlesize = 40;
var fleecondition = 50;

function Vehicle(x,y){
  this.pos = createVector(random(width),random(height));
  this.target = createVector(x,y);
  // this.vel = createVector();
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = particlesize;
  // this.maxspeed = 5; // desired vel is always max speed
  // this.maxforce = 0.3;
  this.maxspeed = 10; // desired vel is always max speed
  this.maxforce = 1;
}

Vehicle.prototype.behaviors = function(){
  // var seek = this.seek(this.target);
  // this.applyForce(seek);
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX,mouseY);
  var flee = this.flee(mouse);

  // weights
  arrive.mult(1);
  flee.mult(5);

  this.applyForce(arrive);
  this.applyForce(flee);

  // todo Add Jitter
}

// add forces to acceleration, accumulates
Vehicle.prototype.applyForce = function(f){
  this.acc.add(f);
}

// todo read more about prototype
Vehicle.prototype.update = function(){
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  // clear acceleration
  this.acc.mult(0);
}

Vehicle.prototype.show = function(){
  // stroke(255);
  // strokeWeight(particlesize);
  // point(this.pos.x, this.pos.y);
  fill(255);
  // stroke(0);
  // strokeWeight(10);
  noStroke();
  textSize(particlesize);
  text(letter,this.pos.x, this.pos.y);
}

// pure 'seek' alg
Vehicle.prototype.seek = function(target){
  // get a vector, from the object, to the thing it's seeking
  var desired = p5.Vector.sub(target, this.pos);
  desired.setMag(this.maxspeed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce); // NOTE: awesome function!
  return steer;
}

// 'arrive' alg , go to the target, not fast as possible
// slower if i'm closer... (no over-shooting)
Vehicle.prototype.arrive = function(target){
  // get a vector, from the object, to the thing it's seeking
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100){
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce); // NOTE: awesome function!
  return steer;
}

// pure 'seek' alg, but oposite direction from mouse
Vehicle.prototype.flee = function(target){
  // get a vector, from the object, to the thing it's seeking
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < fleecondition){
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0,0);
  }
}
