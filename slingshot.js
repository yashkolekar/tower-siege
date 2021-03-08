class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
         
        image(this.sling1,190,90,50,130);
        image(this.sling2,155,100,50,65);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

           
            push()
            strokeWeight(4);
            stroke(48,22,8)
            line(pointA.x-25, pointA.y, pointB.x-50, pointB.y+10);
            line(pointA.x-25,pointA.y,pointB.x,pointB.y)
            pop()

            image(this.sling3,pointA.x-30,pointA.y-10,10,20);
        }
    }
    
}