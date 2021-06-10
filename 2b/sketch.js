/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = 100;
	gameChar_y = 430;

	treePos_x = width/2.2;
	treePos_y = height/2;
	
	canyon = {x_pos: 200, width: 100};
	
	collectable = {x_pos: 70, y_pos: 100, size: 50};
	
	mountain = {x_pos:345, y_pos: 100};
	
	cloud = {x_pos: 800, y_pos: 100};
	
	
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
	
	//draw the mountain
	noStroke();
    fill(190, 160, 40);
    triangle(mountain.x_pos, mountain.y_pos + 332, mountain.x_pos +  100, mountain.y_pos, mountain.x_pos + 230, mountain.x_pos + 85);
    fill(190, 150, 40);
    triangle(mountain.x_pos +50, mountain.y_pos + 332, mountain.x_pos +100, mountain.y_pos, mountain.x_pos +230, mountain.y_pos + 332);
	
	//draw tree
	
	fill(140, 100, 40);
    rect(treePos_x + 25, treePos_y + 44, 25, 100);
    
	//branches
    fill(0, 225, 0);
    triangle(treePos_x - 10, treePos_y + 44, treePos_x + 35, treePos_y - 20, treePos_x + 80, treePos_y + 44);
    triangle(treePos_x - 10, treePos_y + 14, treePos_x + 35, treePos_y - 60, treePos_x + 80, treePos_y + 14);
    triangle(treePos_x - 10, treePos_y - 16, treePos_x + 35, treePos_y - 100, treePos_x + 80, treePos_y - 16);

	//draw the canyon
	fill(0,0,0);
    rect(canyon.x_pos, 432, canyon.width, 143);
    fill(110, 0, 0);
    triangle(canyon.x_pos, 575, canyon.x_pos +25, 500, canyon.x_pos +50, 575);
    triangle(canyon.x_pos + 50, 575, canyon.x_pos +75, 500, canyon.x_pos +100, 575);
	
	//draw the collectable item
	fill(255, 215, 0);
    ellipse(collectable.x_pos + 100, collectable.y_pos + 310, collectable.size);
    fill(242, 185, 35);
    ellipse(collectable.x_pos + 100, collectable.y_pos +310, collectable.size - 10);
	
	//draw the cloud
	noStroke();
    fill(255, 255, 255);
    ellipse(cloud.x_pos, cloud.y_pos, 123, 123);
    
    noStroke();
    fill(255, 255, 255);
    ellipse(cloud.x_pos - 60, cloud.y_pos -10, 73, 73);
    
    noStroke();
    fill(255, 255, 255);
    ellipse(cloud.x_pos +60, cloud.y_pos+20, 73, 73);
	
	//draw the game char
	fill(40, 38, 230);
	rect(gameChar_x, gameChar_y - 40, 20, 35);
	
	fill(230, 190, 30);
	ellipse(gameChar_x + 10, gameChar_y - 45, 15, 15);
	rect(gameChar_x - 5, gameChar_y - 35, 5, 15);
	rect(gameChar_x + 20, gameChar_y - 35, 5, 15);
	
	fill(0);
	rect(gameChar_x + 2,gameChar_y -5, 5, 9);
	rect(gameChar_x + 10, gameChar_y -5, 5, 9);
	
}

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
