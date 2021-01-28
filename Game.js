class Game{ 
    constructor(){ } 
    getState(){ 
        var gameStateRef = database.ref('gamestate');
         gameStateRef.on("value",function(data){ gamestate = data.val(); 
        }) }
        
        
        update(state)
        { database.ref('/').update({
             gamestate: state 
            });
        
        }
    Start (){
       if(gamestate === 0){
           player = new Player ();
           player.getcount ();
           form  = new  Form ();
           form.display (); 
       } 
       car1 = createSprite (100,200,50,50);
       car1.addImage (c1);
       car2 = createSprite (200,200,50,50);
       car2.addImage (c2);
       car3 = createSprite (300,200,50,50);
       car3.addImage (c3);
       car4 = createSprite (400,200,50,50);
       car4.addImage (c4);
       cars = [car1,car2,car3,car4]
    }
    play(){
    form.hide ();
        Player.getplayerinfo ();
        player.getCarsEnd ();
        if (allplayers !== undefined){
            background ("brown")
            image (track,0,-displayHeight*4,displayWidth,displayHeight*5);
            var x = 175;
            var y 
            var index = 0; 

            for (var p in allplayers){
                index = index+1
                x = x+200
                y = displayHeight - allplayers [p].distance ;
                cars[index-1].x = x;
                cars[index-1].y = y; 

                if(index == player.index){
                    fill ("yellow");
                   ellipse (x,y,60,60)
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y 
                }
            }

        }
        if (keyDown ("UP_ARROW")){
            player.distance = player.distance+20;
            player.update ();
        }
        if (player.distance>3780){
            gamestate = 2; 
            player.rank = player.rank +1
            player.updateCarsEnd (player.rank) 
        }
        drawSprites ();

    }
    end (){
        console.log ("game end")
        console.log(player.rank)
        rect (displayWidth/2,cars [player.index-1].y-200,400,300);
        fill ("Green")
        text ("Rank : "+ player.rank,displayWidth/2-100,cars[player.index -1].y-200);
    }
    }   