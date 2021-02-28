    
	var snake;	
	var stone;
	
	var obstacleX,obstacleY;
	var foodX,foodY;
	var apple;
	var playBtn;
	var playBtnImg;
	var gameState = "start";

	function preload(){
		 apple = loadImage("Images/apple.png");
		 playBtnImg = loadImage("Images/play.png");
		 bg = loadImage("Images/bg.png");
		 snakeLogoImg = loadImage("Images/start.png");
		 stone = loadImage("Images/stone.png");
		
	}

	function setup() {
	 createCanvas(600,400);

	 snake = new Snake();
	
	 obstacleLocation();
	 foodLocation();
	 frameRate(3);

	 playBtn = createSprite(200,200,90,40);
	 playBtn.addImage(playBtnImg);
	 playBtn.scale = 0.4;

	 snkgame = createSprite(200,70,250,120);
	 snkgame.addImage(snakeLogoImg);
	 snkgame.scale = 0.8;

	
	}
	
	function draw() {
	 background(bg); 
	
	 if(gameState === "start"){
		 playBtn.visible = true;
		 snkgame.visible = true;
	    }

	 if(gameState === "start" && mousePressedOver(playBtn)){
		 playBtn.visible = false;
		 snkgame.visible = false;
		 gameState = "play";
	    }

	 if(gameState === "play"){
			snake.update();
			
		
			if(snake.eat(foodX,foodY)){
			
				foodLocation();
			}
			if(snake.destroy(obstacleY,obstacleX)){
				obstacleLocation();
				
			}
			snake.display();
		
			image(apple,foodX,foodY,20,20);  
			image(stone,obstacleY,obstacleX,20,20);
		   
			snake.gameOver();
		}
		
	 drawSprites();
	}
	
  
	function keyPressed(){    
	 if(keyCode === LEFT_ARROW){
        snake.xdir = -20;
        snake.ydir = 0;
	 }
	 else if(keyCode === RIGHT_ARROW){
        snake.xdir = 20;
        snake.ydir = 0;        
	 }
	 if(keyCode === UP_ARROW){
        snake.xdir = 0;
        snake.ydir = -20;        
	 }
	 if(keyCode === DOWN_ARROW){
        snake.xdir = 0;
        snake.ydir = 20;
	 }
	}
	
	
	function foodLocation (){       

	
	 foodX = floor(random(0,40))*20;
	 foodY = floor(random(0,20))*20;
	}

	function obstacleLocation(){
		
		obstacleX = floor(random(0,40))*20;
		obstacleY = floor(random(0,20))*20;
	}
