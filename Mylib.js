function bounceOff(gameObj1,gamObj2){
    if(gameObj1.x- gameObj2.x<gameObj1.width/2+gameObj2.width/2 && 
       gameObj2.x - gameObj1.x <gameObj2.width/2+gameObj1.width/2){
       gameObj1.velocityX = gameObj1.velocityX * (-1);
       gameObj2.velocityX = gameObj2.velocityX *(-1); 
    
    }
    if (gameObj1.y - gameObj2.y<gameObj1.height/2+gameObj2.height/2 &&
        gameObj2.y - gameObj1.y< gameObj1.height/2+gameObj2.height/2){
          gameObj1.velocityY = gameObj1.velocityY * (-1);
          gameObj2.velocityY = gameObj2.velocityY * (-1);
        }
    }