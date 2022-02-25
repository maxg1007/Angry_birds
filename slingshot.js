class Slingshot {

    constructor(bodyA,pointB){

         var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.03,
            length:10

         } 
       this.pointB = pointB;
      this.sling = Constraint.create(options);
      World.add(world,this.sling);

     this.sling1 = loadImage('sprites/sling1.png');
     this.sling2 = loadImage('sprites/sling2.png');
     this.sling3 = loadImage('sprites/sling3.png');

    }

     fly(){

      this.sling.bodyA = null;

     }

    display(){

      image(this.sling1,200,80);
      image(this.sling2,170,80);

     if (this.sling.bodyA){
    var pontoA = this.sling.bodyA.position;
    var pontoB = this.pointB;

    push();
    if(pontoA.x < 220){

    stroke('#54270F');
    strokeWeight(10);
    line(pontoA.x - 20,pontoA.y,pontoB.x - 15,pontoB.y + 5);
    line(pontoA.x + 20,pontoA.y,pontoB.x + 18,pontoB.y + 5);
    image(this.sling3,pontoA.x - 25,pontoA.y - 10,15,20)

    }else{

    stroke('#54270F');
    strokeWeight(10);
    line(pontoA.x + 20,pontoA.y,pontoB.x - 15,pontoB.y + 5);
    line(pontoA.x + 20,pontoA.y,pontoB.x + 18,pontoB.y + 5);
    image(this.sling3,pontoA.x + 25,pontoA.y - 10,15,20)

    }

    pop(); 
  }
   }
   prender(body){

    this.sling.bodyA = body;
   }



}