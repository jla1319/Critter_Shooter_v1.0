"use strict";

/*
	Name:  Player.js
	Author: Julienne Ablay, Lee Ezell
	Last Modified: 3/30/2013
	Description: Single object representing the player
	Dependencies: requires global variables: CANVAS_WIDTH,CANVAS_HEIGHT
*/

	/*Jumping variables from http://www.brighthub.com/internet/web-development/articles/40516.aspx#imgn_1*/

window.player = (function() {
	var player = {
			active: true,
			color: "yellow",
				x: 320,
				y:  400,
				width: 80,
				height: 100,
				speed: 150,
				tiles: 4, //how many frames before you loop
				counter: 0,
				draw: function(ctx){
					var halfW = this.width/2;
					var halfH = this.height/2;
					var count, frameNumber, xoff, xsum;
					count = Math.floor(this.counter/5);
					frameNumber = count % this.tiles;
					xoff = frameNumber * this.width;
					
					xsum = 320 + xoff;
					
					//ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
					if(isFaceLeft == true){
						ctx.drawImage(images["playerwalkImage"],
						xoff, 0, 80, 100,
						this.x-halfW,this.y-halfH,this.width,this.height);
						console.log(xoff);
					}else{
						ctx.drawImage(images["playerwalkImage"],
						xsum, 0, 80, 100,
						this.x-halfW,this.y-halfH,this.width,this.height);
						console.log(xsum);
					}
				//	console.log(isFaceLeft);
				},
				
				
				//Jumping variables
				//maximum height of jump
				jumpHeight: 7,
				//constat/half PI
				halfPI: (Math.PI)/2,
				//amount of time to spend in the air when jumping
				jumpHangTime: 0.5,
				//speed to progress along the sine wave that
				//defines the jumping arc
				jumpSinWaveSpeed: 6,//((Math.PI)/0.8),
				//current position on the sine wave that
				//defines the jump arc
				jumpSinWavePos: 0,
				//the rate to fall at
				fallMultiplier: 25,
				//true when the player is on the ground, false otherwise
				grounded: true
				
				
		
	
	}; //end player
	
	return player;
})();