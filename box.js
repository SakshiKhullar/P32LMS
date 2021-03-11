class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.visibility = 255
    this.width = width;
    this.height = height;
    this.y = y;
    this.x = x;
    World.add(world, this.body);
  }
  
  display(){
   // console.log(this.visibility);
    if(this.body.speed < 5){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(random(0,255),random(0,255),random(0,255))
    rect(0,0,this.width, this.height);
    pop();
  }else{
    World.remove(world, this.body);
    push();
    this.visibility = this.visibility -5;
    pop();
    
  }
}
score(){

  if(this.visibility < 0 && this.visibility > -100) 
  {
    score = score + 5;



  }

}


}