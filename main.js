function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.way");
	mario_coin = loadSound("coin.way");
	mario_gameover = loadSound("gameover.way");
	mario_die = loadSound("mariodie.way");
	mario_kick = loadSound("kick.way");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);

	video = createCanvas(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }
  
function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }

  noseX = "";
  noseY = "";
  GameStatus = "";

function startGame()
{
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game Is Loading";
}

function game()
{
	console.log("noseX = " + noseX +",noseY = "+ noseY);
	initializeInDraw();
	moveEnvironment(mario);
	drawSprites();
}
function draw() {
	game()
}








