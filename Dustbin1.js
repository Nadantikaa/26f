class TrashCan1{
    constructor(x,y,width,height){
        var options = {
         isStatic:true,
         
        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("sprites/dustbin.png");
        this.width = width;
        this.height = height;

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}