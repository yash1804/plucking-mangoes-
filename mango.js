class Mango {
  constructor(x, y, r) {
    var options = {
       isStatic:true,
       restitution:0,
       friction:1,
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r=r;
    World.add(world, this.body);
    this.image = loadImage("mango.png");
  }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("green");
    //ellipse(pos.x, pos.y, this.r, this.r);
    imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r , this.r);
        pop();
    
  }
}
