class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.SlingIMG1 = loadImage("sprites/sling1.png");
        this.SlingIMG2 = loadImage("sprites/sling2.png");
        this.SlingIMG3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    attach(body)
    {
      this.sling.bodyA = body;
    }

    display()
    {
       
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(48, 22, 8);
            if(pointA.x > 220)
            {
                line(pointA.x - 20, pointA.y + 5, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y + 5, pointB.x + 20, pointB.y - 5);
                image(this.SlingIMG3, pointA.x + 20, pointA.y, 10, 20);
            }
            else
            {
                line(pointA.x + 20, pointA.y - 5, pointB.x + 10, pointB.y);
                line(pointA.x + 20, pointA.y - 5, pointB.x - 20, pointB.y + 5);
                image(this.SlingIMG3, pointA.x - 20, pointA.y, 10, 20);
            }
            pop();
        }
        image(this.SlingIMG1, 150, 20);
        image(this.SlingIMG2, 125, 20);
    }
    
}