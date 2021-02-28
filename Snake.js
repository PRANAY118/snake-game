class Snake {	

    constructor(){
       this.snakeXPosition = [];    
       this.snakeYPosition = [];    
       this.xdir = 0;               
       this.ydir = 0;              
       this.tailCount = 1;
       this.x = 20;                 
       this.y = 20;                
       this.snakeImg =[];
      }
   

    update(){   
        if(!this.gameOver()){
          this.x += this.xdir;


          this.y += this.ydir;

       
          if(this.snakeXPosition.length >= this.tailCount){  
             
         
          this.snakeXPosition.shift();
         
          this.snakeYPosition.shift();
          }

         
          this.snakeXPosition.push(this.x);
          
      
          this.snakeYPosition.push(this.y);

      }
      }
   
   eat(x,y){   

      if(this.x===x && this.y===y){  
       
       this.tailCount++;
       return true;   
      }
       else{
       return false;  
       }
      }
      destroy(x,y){
        if(this.x===x && this.y===y){  
         
          this.tailCount--;
          return true;   
        }
         else{
         return false;
        }

      }
   
   gameOver(){   
   
        if(this.x > 800 || this.x < 0 || this.y > 400 || this.y < 0){
       
       
          background("red");
          stroke("red");
          strokeWeight(2.7);
          fill("blue");
        
          textSize(27);
          text("Refresh to restart",290,100);
          textSize(30);
          text("GAME OVER !",300,50);       
          return true;
         }
          else return false;
        }

      display(){
      
        
        for(var i= 0;i<this.tailCount;i++){

      
       var x = this.snakeXPosition[i];
       var y = this.snakeYPosition[i];
          fill("blue");
          rect(x,y,20,20);      
        }
   }
   }