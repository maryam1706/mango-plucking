class Stone{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        //use Bodies.circle to create the stone
    this.body = Bodies.circle(x,y,50,options);
    this.radius=50;

    World.add(world,this.body);
    }

    display(){
        //use push pop translate rotate image
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);

        ellipse(0, 0, this.radius);
        pop();
    }
}