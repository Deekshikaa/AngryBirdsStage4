class Slingshot{
    constructor(bodyA, pointB){
        var soptions={
            bodyA : bodyA,
            pointB :pointB,
            stiffness : 0.01,
            length : 0,
        }
        this.sling = Constraint.create(soptions);
        this.pointB=pointB;
        World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA=null;
    }

    display(){
      if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
      }
     
    }
}