class Bob {
    constructor(x, y, r) {
       var options = {
           isStatic:false,
           restitution:1,
           friction:0,
           density:1,
           frictionStatic:0,
           frictionAir:0,
       }

       this.x = x;
       this.y = y;
       this.r = 2*r;

     this.body = Bodies.circle(x, y, r, options);
     World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x, pos.y, this.r, this.r);

    }
}
