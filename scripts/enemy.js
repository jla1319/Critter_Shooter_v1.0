"use strict";
/*
	Name: Enemy.js
	Author: Lee Ezell
	Last Modified: 4/02/2013
	Description: Function constructor that creates a Boy or Old Lady
	Dependencies: requires global variables: CANVAS_WIDTH,CANVAS_HEIGHT
*/

window.Enemy = (function(){

	function Enemy(x, width, height, speed, color, isLeft){
		this.active = true;
		
		this.color = color;
		
		this.x = x;
		//if the color is grey for the kids, then the y will be slightly lower
		if(color == "grey")
			this.y = CANVAS_HEIGHT - 200;
		else
			this.y = CANVAS_HEIGHT - 220;
		this.xVelocity = speed;
		this.yVelocity = 0;
		this.width = width;
		this.height = height;
		this.isFacingLeft = isLeft;
		this.tiles = 16; //how many frames before you loop
		this.counter = 0;
	};
	
	Enemy.prototype.inBounds = function(){
		return this.x >= 0 && this.x <= CANVAS_WIDTH &&
		this.y >= this.y <= CANVAS_HEIGHT;
	};
	
	//ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
	Enemy.prototype.draw = function(ctx){
		/*ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.width,this.height);*/
		
		var halfW = this.width/2;
		var halfH = this.height/2;
		var count, frameNumber, xoff, xsum;
		count = Math.floor(this.counter/8);
		frameNumber = count % this.tiles;
		xoff = (this.width*6) * count;
		xsum = xoff + 2*this.width*6;
	//	console.log(count);
		
		//ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
		if(this.isFacingLeft == true){
			if(this.color == "grey"){
				ctx.drawImage(images["boyImage"],
				xsum, 0, 470, 545,
				this.x-halfW,this.y-halfH,this.width,this.height);
			}
			else {
				ctx.drawImage(images["grannyImage"],
				xsum, 0, 545, 804,
				this.x-halfW,this.y-halfH,this.width,this.height);
			}
			
			
			
		}else{
			
			if(this.color == "grey"){
				ctx.drawImage(images["boyImage"],
				xoff, 0, 470, 545,
				this.x-halfW,this.y-halfH,this.width,this.height);
			}
			else {
				ctx.drawImage(images["grannyImage"],
				xoff, 0, 543, 804,
				this.x-halfW,this.y-halfH,this.width,this.height);
			}
			
		}
	};
	
	Enemy.prototype.update = function(dt){
		if(this.counter >= 12){
		 this.counter = 0;
		}else{
			this.counter++;
			console.log(this.counter);
		}
		this.x += this.xVelocity * dt;
		this.y += this.yVelocity;
		this.active = this.active && this.inBounds();
	};
	
	Enemy.prototype.explode = function(){
		console.log("You've been hit!");
		this.active = false;
	};
	
	Enemy.prototype.run = function(){
		console.log("Run away!");
		this.xVelocity = -this.xVelocity * 10;
	};
	
	return Enemy;

})();