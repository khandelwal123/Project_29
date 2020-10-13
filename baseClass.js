class Base{
    constructor(x, y, width, height){

        var options = {
            restitution : 0.8,
            density : 1.0,
            friction : 0.3,
            isStatic : false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        push();
            var pos = this.body.position
            rectMode(CENTER);
            fill("rgb(52, 235, 210)");
            rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}