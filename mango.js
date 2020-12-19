class Mango{
    constructor(x,y){ //accept x and y positions
       //Create the Mango using Bodies.rectangle

       var options = {
           isStatic:true,
           'restitution':0,
           'friction':1,
       }
       this.body = Bodies.rectangle(x,y,50,50,options)
       this.width=50;
       this.height=50;
       
       World.add(world,this.body);

       this.image = loadImage("sprites/mango.png");
        
         //add the image
    

       
       
    }
    display(){
        //display the Mango - use push,pop,translate,rotate,image
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
}