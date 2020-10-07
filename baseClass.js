class baseClass {
    constructor(x, y, width, height, angle) {
      var options = {
        'density':1.5023985071938457029,
        'friction': 1.528574293874698,
        'restitution':0.5
      };
      this.image = loadImage("sprites/base.png")
      this.body = Bodies.rectangle(x, y, width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
  var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
      pop();
    };
  };
  