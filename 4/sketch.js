/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var x_pos;
var y_pos;
var collectable;
var canyon;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	x_pos = 0;
	y_pos = 0;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
	trees_x = [-150, -300, -450, -500, -700, -735, -900, -1000, -1150, -1500, -1650, 150, 300, 450, 500, 700, 735, 900, 1000, 1150, 1500, 1650, 1800, 1950, 2150, 2500, 2900, 3150, 3300, 3450, 3500, 3700, 3735, 3900, 4000, 4150, 4500, 4650, 4800, 4950, 5150, 5500, 5900];
	
	clouds = [{x_pos: -150, y_pos: 100},
			  {x_pos: -350, y_pos: 200},
			  {x_pos: -800, y_pos: 150},
			  {x_pos: -1100, y_pos: 150},
			  {x_pos: -1400, y_pos: 50},
			  {x_pos: -1800, y_pos: 100},
			  {x_pos: -2100, y_pos: 200},
			  {x_pos: -2250, y_pos: 150},
			  {x_pos: -2600, y_pos: 200},
			  {x_pos: 150, y_pos: 100},
			  {x_pos: 350, y_pos: 200},
			  {x_pos: 800, y_pos: 150},
			  {x_pos: 1100, y_pos: 150},
			  {x_pos: 1400, y_pos: 50},
			  {x_pos: 1800, y_pos: 100},
			  {x_pos: 2100, y_pos: 200},
			  {x_pos: 2250, y_pos: 150},
			  {x_pos: 2600, y_pos: 200},
			  {x_pos: 2750, y_pos: 100}, 
			  {x_pos: 2950, y_pos: 100},
			  {x_pos: 3150, y_pos: 200},
			  {x_pos: 3600, y_pos: 150},
			  {x_pos: 3900, y_pos: 150},
			  {x_pos: 4200, y_pos: 50},
			  {x_pos: 4600, y_pos: 100},
			  {x_pos: 4900, y_pos: 200},
			  {x_pos: 5050, y_pos: 150},
			  {x_pos: 5400, y_pos: 200},
			  {x_pos: 5550, y_pos: 100}];
	
	mountains = [{x_pos:-345, y_pos: 100},
				 {x_pos:-445, y_pos: 100},
				 {x_pos:-845, y_pos: 100},
				 {x_pos:-1545, y_pos: 100},
				 {x_pos:-1645, y_pos: 100},
				 {x_pos:-2045, y_pos: 100},
				 {x_pos:-2345, y_pos: 100},
				 {x_pos:345, y_pos: 100},
				 {x_pos:445, y_pos: 100},
				 {x_pos:845, y_pos: 100},
				 {x_pos:1545, y_pos: 100},
				 {x_pos:1645, y_pos: 100},
				 {x_pos:2045, y_pos: 100},
				 {x_pos:2345, y_pos: 100},
				 {x_pos:2445, y_pos: 100},
				 {x_pos:2845, y_pos: 100},
				 {x_pos:3545, y_pos: 100},
				 {x_pos:3645, y_pos: 100},
				 {x_pos:4045, y_pos: 100},
				 {x_pos:4345, y_pos: 100},
			 	 {x_pos:4445, y_pos: 100},
				 {x_pos:4845, y_pos: 100},
				 {x_pos:5545, y_pos: 100},
				 {x_pos:5645, y_pos: 100}];
	
	canyon = [{x_pos: -200, width: 100},
			  {x_pos: -900, width: 100},
			  {x_pos: -1800, width: 100},
			  {x_pos: -2900, width: 100},
			  {x_pos: 200, width: 100},
			  {x_pos: 900, width: 100},
			  {x_pos: 1800, width: 100},
			  {x_pos: 2900, width: 100},
			  {x_pos: 3900, width: 100},
			  {x_pos: 4900, width: 100},
			  {x_pos: 5900, width: 100}];
	
	collectable = [
		{x_pos: -430, y_pos: 110, size: 35},
		{x_pos: -1130, y_pos: 110, size: 35},
	    {x_pos: -1630, y_pos: 110, size: 35},
		{x_pos: -2530, y_pos: 110, size: 35},
		{x_pos: 230, y_pos: 110, size: 35},
		{x_pos: 930, y_pos: 110, size: 35},
	    {x_pos: 1630, y_pos: 110, size: 35},
		{x_pos: 2430, y_pos: 110, size: 35},
		{x_pos: 3130, y_pos: 110, size: 35},
		{x_pos: 3730, y_pos: 110, size: 35},
		{x_pos: 4530, y_pos: 110, size: 35},
		{x_pos: 5230, y_pos: 110, size: 35}];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
	
	push();
	translate(scrollPos,0);

	// Draw clouds.
	for(var i = 0; i < clouds.length; i++)
	{
		noStroke();
		fill(255, 255, 255);
		ellipse(clouds[i].x_pos, clouds[i].y_pos, 123, 123);

		noStroke();
		fill(255, 255, 255);
		ellipse(clouds[i].x_pos - 60, clouds[i].y_pos -10, 73, 73);

		noStroke();
		fill(255, 255, 255);
		ellipse(clouds[i].x_pos +60, clouds[i].y_pos+20, 73, 73);	
	}

	// Draw mountains.
	for(var i = 0; i < mountains.length; i++)
	{
		noStroke();
		
		fill(190, 160, 40);
		triangle(mountains[i].x_pos - 30, 			 mountains[i].y_pos + 332, 			 mountains[i].x_pos +100, 		 	 mountains[i].y_pos, 				 mountains[i].x_pos +230, 			 mountains[i].y_pos +332);
		
		fill(170, 150, 40);
		triangle(mountains[i].x_pos +50, 			 mountains[i].y_pos + 332,
				 mountains[i].x_pos +100, mountains[i].y_pos,
				 mountains[i].x_pos +230, mountains[i].y_pos + 332);	
	}


	// Draw trees.
	for(var i = 0; i < trees_x.length; i++)
	{
		//tree	
		fill(140, 100, 40);
		rect(trees_x[i] + 25, height/2 + 44, 25, 100);

		//branches
		fill(0, 225, 0);
		triangle(trees_x[i] - 10, height/2 + 44, trees_x[i] + 35, height/2 - 20, trees_x[i] + 80, height/2 + 44);
		triangle(trees_x[i] - 10, height/2 + 14, trees_x[i] + 35, height/2 - 60, trees_x[i] + 80, height/2 + 14);
		triangle(trees_x[i] - 10, height/2 - 16, trees_x[i] + 35, height/2 - 100, trees_x[i] + 80, height/2 - 16);
	}
	

	// Draw canyons
	for(var i =0; i < canyon.length; i++ )
	{
		fill(0,0,0);
		rect(canyon[i].x_pos, 432, canyon[i].width, 143);
		fill(110, 0, 0);
		triangle(canyon[i].x_pos, 575, canyon[i].x_pos +25, 500, canyon[i].x_pos +50, 575);
		triangle(canyon[i].x_pos + 50, 575, canyon[i].x_pos +75, 500, canyon[i].x_pos +100, 575);
	}

	// Draw collectable items
	for(var i = 0; i < collectable.length; i++)
	{
		fill(255, 215, 0);
		stroke(0);
		ellipse(collectable[i].x_pos + 100, collectable[i].y_pos + 310, collectable[i].size);
		fill(242, 185, 35);
		ellipse(collectable[i].x_pos + 100, collectable[i].y_pos +310, collectable[i].size - 10);	
	}
	pop();

	// Draw the game character - this must be last
	fill(40, 38, 230);
	rect(gameChar_x - 10, gameChar_y - 40, 20, 35);
	
	fill(230, 190, 30);
	stroke(0);  
	ellipse(gameChar_x, gameChar_y - 45, 15, 15);
	rect(gameChar_x + 10, gameChar_y - 35, 5, 15);
	rect(gameChar_x - 15, gameChar_y - 35, 5, 15);
	
	fill(0);
	rect(gameChar_x - 6,gameChar_y -5, 5, 9);
	rect(gameChar_x + 2,gameChar_y -5, 5, 9);
	
	

	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
