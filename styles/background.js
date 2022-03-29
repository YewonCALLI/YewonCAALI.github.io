let bubbles =[];
let circles = [];
let numBubbles = 1;
let numCircles = 1;
const SEGMENTS = 200;
let j=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 255,255,10);

} 

function mousePressed(){
		let r = random(30,70);
		let b = new Bubble(mouseX,mouseY,r);
        let c = new Circle(mouseX,mouseY,random(12,18),random(50,60),10,100);
		bubbles.push(b);
        circles.push(c);
}


function draw() {
    clear();
    blendMode(DIFFERENCE);
	background(0);

    
    while(j<15){
    let b1 = new Bubble(random(width),random(height),50);
    let c1 = new Circle(random(width),random(height),random(12,18),random(50,60),10,100);
    bubbles.push(b1);
    circles.push(c1);
    j++;
    }

	for (let i=0; i < bubbles.length; i++){
		bubbles[i].show();
		bubbles[i].move();
	}
	
    for (let i=0; i < circles.length; i++){
		circles[i].show();
		circles[i].move();
	}

}

class Bubble {
	constructor(x,y,r,xVel,yVel,c){
		this.x = x;
		this.y = y;
		this.r = r;
        this.xVel = random(-3,3);
        this.yVel = 0;
        this.c =color(0, 0, random(0,360));
	}
	
	move(){
		this.x += this.xVel;
		//this.y += this.yVel;
      this.xVel += random(-0.2,0.2);
      //this.yVel += random(-0.2,0.2);
      	if(this.x<0) {
			this.x = 0;
          this.xVel = -this.xVel;
		}
		else if(this.x>width) {
			this.x = width;
          this.xVel = -this.xVel;
		}
		if(this.y<0) {
			this.y = 0;
          this.yVel = -this.yVel;
		}
		else if(this.y>height) {
			this.y = height;
          this.yVel = -this.yVel;
		}
      	this.xVel *= 0.995;
		this.yVel *= 0.995;
	}
	
	show(){
		fill(this.c);
      noStroke();
		ellipse(this.x, this.y, this.r*2,this.r*2);
      
	}
}

class Circle {
	constructor(x,y,vNnum,nm,sm,fcm){
		this.x = x;
		this.y = y;
        this.xVel = random(-3,3);
        this.yVel = 0;
        this.c =color(0, 0, random(0,360));
        this.vNnum = vNnum;
        this.nm = nm;
        this.sm = sm;
        this.fcm = fcm;
	}
	
	move(){
		this.x += this.xVel;
		//this.y += this.yVel;
      this.xVel += random(-0.2,0.2);
      //this.yVel += random(-0.2,0.2);
      	if(this.x<0) {
			this.x = 0;
          this.xVel = -this.xVel;
		}
		else if(this.x>width) {
			this.x = width;
          this.xVel = -this.xVel;
		}
		if(this.y<0) {
			this.y = 0;
          this.yVel = -this.yVel;
		}
		else if(this.y>height) {
			this.y = height;
          this.yVel = -this.yVel;
		}
      	this.xVel *= 0.995;
		this.yVel *= 0.995;
	}
	
	show(){
    push();
    let dr = TWO_PI/this.vNnum;
	beginShape();
	for(let i = 0; i  < this.vNnum + 2; i++){
		let ind = i%this.vNnum;
		let rad = dr *ind;
		let r = height*0.3 + noise(frameCount/this.nm + ind) * height*0.1 + sin(frameCount/this.sm + ind)*height*0.05;
		curveVertex(this.x+cos(-rad)*r*0.4, this.y-sin(rad)*r*0.4);
	}
	endShape();
	pop();
}
}