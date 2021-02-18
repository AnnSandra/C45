class Player{

    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(300,700,50,50,options);
        this.image=loadImage("images/boy1.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(0)
        image(this.image,200,550,200,200);
    }

}