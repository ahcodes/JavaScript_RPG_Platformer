/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;


var collectable;
var isFound;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	//2. Create Variables for Interaction
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	
	//Collectable object
	collectable = {x_pos: 70, y_pos: 100, size: 50, isFound: false};
	
	//Canyon object
	canyon = {x_pos: 200, width: 100};
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon 
//	Falling down the canyon [2 marks]
//
//   Write a conditional statement within `draw` to detect when the character is over the canyon. HINT: use gameChar_x and the > and < operators.
//   When the condition is met set `isPlummeting` to `true`.
//   Write another conditional statement within `draw` which detects when `isPlummeting` is `true`.
//   When this condition is met increment `gameChar_y` so that the game character falls quickly.
//   Test that your character falls down the canyon when they pass over it.
	
	fill(0,0,0);
    rect(canyon.x_pos, 432, canyon.width, 143);
    fill(110, 0, 0);
    triangle(canyon.x_pos, 575, canyon.x_pos +25, 500, canyon.x_pos +50, 575);
    triangle(canyon.x_pos + 50, 575, canyon.x_pos +75, 500, canyon.x_pos +100, 575);
	
	if(gameChar_x >= canyon.x_pos && gameChar_x < canyon.x_pos + 100 && gameChar_y >= 432)
		{
			isPlummeting = true;
		}
	if(isPlummeting)
		{
			gameChar_y += 5
		}

	
	
	//draw the collectable item
	if(dist(gameChar_x, gameChar_y, collectable.x_pos + 100, collectable.y_pos + 310) < 40)
		{
			collectable.isFound = true; 
		}
	if(collectable.isFound == false)
		{
			fill(255, 215, 0);
			stroke(0);
			ellipse(collectable.x_pos + 100, collectable.y_pos + 310, collectable.size);
			fill(242, 185, 35);
			ellipse(collectable.x_pos + 100, collectable.y_pos +310, collectable.size - 10);

		}
	

	//5. The Game Character
	
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(40, 38, 230);
		stroke(0);
		rect(gameChar_x - 7.5, gameChar_y - 40, 15, 35);

		fill(230, 190, 30);
		ellipse(gameChar_x, gameChar_y - 45, 15, 15);
		rect(gameChar_x + 2, gameChar_y - 32, 12, 5);

		fill(0);
		rect(gameChar_x,gameChar_y -5, 5, 9);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill(40, 38, 230);
		stroke(0);
		rect(gameChar_x - 7.5, gameChar_y - 40, 15, 35);

		fill(230, 190, 30);
		ellipse(gameChar_x, gameChar_y - 45, 15, 15);
		rect(gameChar_x - 12, gameChar_y - 32, 12, 5);

		fill(0);
		rect(gameChar_x - 4,gameChar_y -5, 5, 9);

	}
	else if(isLeft)
	{
		// add your walking left code
		fill(40, 38, 230);
		stroke(0);
		rect(gameChar_x - 7.5, gameChar_y - 40, 15, 35);

		fill(230, 190, 30);
		ellipse(gameChar_x, gameChar_y - 45, 15, 15);
		rect(gameChar_x + 2, gameChar_y - 32, 5, 15);

		fill(0);
		rect(gameChar_x,gameChar_y -5, 5, 9);

	}
	else if(isRight)
	{
		// add your walking right code
		fill(40, 38, 230);
		stroke(0);
		rect(gameChar_x - 7.5, gameChar_y - 40, 15, 35);

		fill(230, 190, 30);
		ellipse(gameChar_x, gameChar_y - 45, 15, 15);
		rect(gameChar_x - 7, gameChar_y - 32, 5, 15);

		fill(0);
		rect(gameChar_x - 4,gameChar_y -5, 5, 9);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		fill(40, 38, 230);
		stroke(0);
		rect(gameChar_x - 10, gameChar_y - 40, 20, 35);

		fill(230, 190, 30);
		ellipse(gameChar_x, gameChar_y - 45, 15, 15);
		rect(gameChar_x + 10, gameChar_y - 35, 15, 5);
		rect(gameChar_x - 24, gameChar_y - 35, 15, 5);

		fill(0);
		rect(gameChar_x - 8,gameChar_y -5, 5, 9);
		rect(gameChar_x + 4,gameChar_y -5, 5, 9);

	}
	else
	{
		// add your standing front facing code
		fill(40, 38, 230);
		stroke(0);
		rect(gameChar_x - 10, gameChar_y - 40, 20, 35);

		fill(230, 190, 30);
		ellipse(gameChar_x, gameChar_y - 45, 15, 15);
		rect(gameChar_x + 10, gameChar_y - 35, 5, 15);
		rect(gameChar_x - 15, gameChar_y - 35, 5, 15);

		fill(0);
		rect(gameChar_x - 6,gameChar_y -5, 5, 9);
		rect(gameChar_x + 2,gameChar_y -5, 5, 9);

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	
	//6. Make the game character move left and right
	if(isLeft)
		{
			gameChar_x -= 2.5;
		}
	if(isRight)
		{
			gameChar_x += 2.5;
		}
	
	//8. Gravity
	if(gameChar_y < floorPos_y)
		{
			gameChar_y += 2
			isFalling = true;
		}
	else
		{
			isFalling = false;
		}
	
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
	
	//3. Implement Left and Right for keyPress
	if(keyCode == 37)
		{
			console.log("left-arrow")
			isLeft = true;
		}
	else if(keyCode == 39)
		{
			console.log("right-arrow")
			isRight = true;
		}
	//7. Making the Game Character Jump
	else if(keyCode == 32 && gameChar_y == floorPos_y)
		{
			console.log("space-bar")
			gameChar_y -= 100
			
		}
	
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
	
	//4. Implement Left and Right for keyReleased
	if(keyCode == 37)
		{
			console.log("left-arrow")
			isLeft = false;
		}
	else if(keyCode == 39)
		{
			console.log("right-arrow")
			isRight = false;
		}
	
	
}
