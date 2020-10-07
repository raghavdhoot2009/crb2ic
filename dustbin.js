class dustbin {
    constructor(x,y,width,height){
    
    var options = {
    
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
    
    this.body=Bodies.rectangle(this.x,this.y,options);
    this.x=x;
    this.y=y;
    this.width=width
    this.height=height;
    this.image = loadImage("photos/dustbingreen.png");
    World.add(world,this.body);
    
    }
    display(){
     var dustbinpos=this.body.position;
     push();
     translate(dustbinpos.x,dustbinpos.y);
     imageMode(CENTER);
     image(this.image, this.x,this.y, this.width, this.height);
     pop();
    
    
    }
    
    }