class Sling{
    constructor(bodyA,pointB){
        //create options and contraints
        var options = {
            bodyA: bodyA,
            pointB: pointB,

            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
       //display using line method
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB =  this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
}
