class baseWall
{
    constructor(x, y)
    {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 150, 20, options);
        this.width = 150;
        this.height = 20;
        World.add(world, this.body)
    }

    display() 
    {
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }

}