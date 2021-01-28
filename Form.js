class Form {
    constructor (){
        this.title = createElement ('h1');
        this.input = createInput ("Enter your Name");
        this.button = createButton ("Register");
        this.message = createElement("h2");
    } 
    hide (){
        this.title.hide ();
        this.input.hide ();
        this.button.hide ();
        this.message.hide ();
    }
    display (){
    
   
    this.title.html ("Racing Game (BY MAYANK) ");
    this.title.position (100,10);

    
    this.input.position (380,120);

    
    this.button.position (425,400);

    
    this.button.mousePressed (() => { 
    this.input.hide ();
    this.button.hide ();
    player.name = this.input.value ();
    playercount = playercount +1;
    player.index = playercount;
    player.update ()
    player.updateplayercount (playercount);
    this.message.html ("Welcome to the Game "+player.name);
    this.message.position (220,220)
    })             
    
    }
}