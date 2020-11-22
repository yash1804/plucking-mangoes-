class Boy {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("boy.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      imageMode(CENTER);
      fill("cyan");
      rect(pos.x, pos.y, this.width, this.height);
      image(this.image, pos.x, pos.y, 250, 250);
      pop();
    }
  }