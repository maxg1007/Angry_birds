class Bird extends baseClass{
    
   constructor(x,y){

    super(x,y,50,50);
    this.image = loadImage('sprites/bird.png');
    this.smoke = loadImage('sprites/smoke.png');
    this.trajetoria = [];
}
display(){
    if(this.body.velocity.x > 15 && this.body.position.x > 240){
    var position = [this.body.position.x,this.body.position.y]
    this.trajetoria.push(position)
    }
    for(var i=0;i<this.trajetoria.length;i++){

     image(this.smoke,this.trajetoria[i][0],this.trajetoria[i][1])
     
    }
    
    super.display();
    
}
}