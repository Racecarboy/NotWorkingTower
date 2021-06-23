class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.polygon = loadImage("polygon.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        image(this.polygon,200,20);
        imageMode(CENTER);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}