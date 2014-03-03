"use strict";

/*
	Name: Animal.js
	Author: Julienne Ablay
	Last Modified: 3/25/2013
	Description: Function constructor that creates an Animal
	Dependencies: requires global variables: CANVAS_WIDTH,CANVAS_HEIGHT
*/

window.Animal = (function(){
	
	function Animal(x,y,speed,color){
		//ivars - unique for every instance
		this.x = x;
		this.y = y;
		this.active = true;
		if(isFaceLeft == true){ this.xVelocity = -speed; }
		else {this.xVelocity = speed; }
		this.yVelocity = 0;
		this.width = 50;
		this.height = 50;
		this.color = color;
		this.angle = Math.random()*360;
		
		//falling variables
				//constat/half PI
				this.halfPI = (Math.PI)/2;
				//amount of time to spend in the air when jumping
				this.fallHangTime = 5;
				//speed to progress along the sine wave that
				//defines the jumping arc
				this.fallCosWaveSpeed = getRandomInt(0.5,1);//((Math.PI)/0.8),
				//current position on the sine wave that
				//defines the jump arc
				this.fallCosWavePos = 0;
				//the rate to fall at
				this.fallMultiplier = 25;
		
	} //end Animal constructor
	
	//Animal methods - all instances share one copy of each function
	//through .prototype
	
	Animal.prototype.inBounds = function() {
		return this.x >= 0 && this.x <= CANVAS_WIDTH &&
			this.y >= 0 && this.y <= CANVAS_HEIGHT;
	};
	
	Animal.prototype.update = function(dt) {
		this.x += this.xVelocity *dt;
		this.y += this.yVelocity *dt;
		this.angle += 5;
		
		//last position on cosine wave
			var lastHeight = (this.fallCosWaveSpeed *dt);
			//new position on sine wave
			this.fallCosWavePos += this.fallCosWaveSpeed * dt;
			//we have fallen off the bottom of the cosine wave, so
			//continue falling at a predetermined speed
			if(this.fallCosWavePos >= (Math.PI/2))
				this.y += 10;
			else
				this.y += (Math.sin(this.fallCosWavePos)*10 + Math.sin(lastHeight));
		
		this.active = this.active && this.inBounds();
	};
	
	Animal.prototype.draw = function(ctx){
		ctx.fillStyle = this.color;
		//ctx.fillRect(this.x,this.y,this.width,this.height);
		var halfW = this.width/2;
		var halfH = this.height/2;
		
		if(this.color == "grey")
		var image = "bunnyImage";
		else //it will be orange!
		var image = "tigerImage";
		
		ctx.save();
		ctx.translate(this.x,this.y);
		ctx.rotate(dtr(this.angle));
		//ctx.drawImage(this.image,-halfW,-halfH, this.width, this.height);
		
		
		ctx.drawImage(images[image],
			0,0,50,50,
			-halfW, -halfH, this.width, this.height);
			
		ctx.restore();
	
	};
	
	return Animal; //return the Animal constructor

})(); //self executing anonymous function