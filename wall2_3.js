class Wall
{
    constructor(x, y)
    {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 20, 100, options);
        this.width = 20;
        this.height = 100;
        World.add(world,this.body); 
    }

    display() 
    {
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}