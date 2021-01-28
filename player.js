class Player {
    constructor (){
        this.name = null;
        this.distance = 0
        this.index = 0
        this.rank = 0
        }

    update (){
        var playerindex ="players/player"+this.index; 
        database.ref (playerindex).set({
        name:this.name , 
        distance:this.distance
        })

    }
    updateplayercount (count)
    {
        database.ref ('/').update({
            playercount : count
        })
    }
    getcount(){ 
        var gameStateRef = database.ref('playercount');
         gameStateRef.on("value",function(data){ playercount = data.val(); 
        }) }

        updateCarsEnd(rank)
    {
        database.ref ('/').update({
            CarsEnd : rank

        })
    }
    getCarsEnd(){ 
        var gameStateRef = database.ref('CarsEnd');
         gameStateRef.on("value",(data)=> { this.rank = data.val(); 
        }) } 

    static getplayerinfo (){
            var playerinfo = database.ref ('players');
            playerinfo.on ("value",function (data){ 
            allplayers = data.val ();
            })
        }
}
