class Pig extends baseClass{
    constructor(x,y){
       super(x,y,50,50);
       this.image = loadImage('sprites/enemy.png')
       this.visible = 255
    }

    score(){

      if (this.visible < 0 && this.visible > -1005){

        score++
      }

    }

    display(){

     if (this.body.speed < 3){
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