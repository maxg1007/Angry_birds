class Tronco extends baseClass{
    constructor(x,y,height,angle){
         
     super(x,y,20,height,angle);
     this.image = loadImage('sprites/wood2.png');
     Matter.Body.setAngle(this.body,angle);
     this.visible = 255
    }
    score(){

        if (this.visible < 0 && this.visible > -505){
  
          score++
        }
  
    }
  
      display(){
  
       if (this.body.speed < 2){
       super.display() 
       } else{
        World.remove(world,this.body)
        push()
        tint(255,this.visible)
        this.visible =  this.visible - 5;
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop()
        
      }
      }
    
}