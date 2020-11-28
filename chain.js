class Chain{
    constructor(a,b){
        var options = {
            bodyA :a,
            bodyB:b,
            length:100,
            stiffness:0.4,
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        }
display(){
  var PosA = this.chain.bodyA.position;
  var PosB = this.chain.bodyB.position;
  line(PosA.x,PosA.y,PosB.x,PosB.y);


}
        
    }
