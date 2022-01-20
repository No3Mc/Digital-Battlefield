
//create the constructor for the class Robo
function Robot() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
        this.x = 150;
        this.y = 500;
        this.vx = 0;
        this.vy = 0;

        Boom = false;

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Robot.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(this.x, this.y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#d3d3d3";
        /*context.moveTo(30, 12);*/

        context.lineTo (0, 46)
        context.lineTo (7, 46)
        context.lineTo (7, 45)
        context.lineTo (5, 45)
        context.lineTo (5, 44)
        context.lineTo (4, 44)
        context.lineTo (4, 35)
        context.lineTo (2, 35)
        context.lineTo (2, 36)
        context.lineTo (2, 32)
        context.lineTo (1, 32)
        context.lineTo (1, 23)
        context.lineTo (4, 23)
        context.lineTo (4, 22)
        context.lineTo (8, 22)
        context.lineTo (8, 21)
        context.lineTo (11, 21)
        context.lineTo (11, 19)
        context.lineTo (13, 19)
        context.lineTo (13, 24)
        context.lineTo (14, 24)
        context.lineTo (14, 25)
        context.lineTo (15, 25)
        context.lineTo (15, 26)
        context.lineTo (22, 26)
        context.lineTo (22, 25)
        context.lineTo (23, 25)
        context.lineTo (23, 24)
        context.lineTo (24, 24)
        context.lineTo (24, 23)
        context.lineTo (25, 23)
        context.lineTo (25, 14)
        context.lineTo (24, 14)
        context.lineTo (24, 13)
        context.lineTo (23, 13)
        context.lineTo (23, 12)
        context.lineTo (22, 12)
        context.lineTo (22, 11)
        context.lineTo (21, 11)
        context.lineTo (21, 10)
        context.lineTo (18, 10)
        context.lineTo (18, 8)
        context.lineTo (17, 8)
        context.lineTo (17, 5)
        context.lineTo (16, 5)
        context.lineTo (16, 0)
        
        
        
        
        
        
        
        
        
        context.lineTo (0, 0)
        context.lineTo (-16, 5)
        context.lineTo (-17, 5)
        context.lineTo (-17, 8)
        context.lineTo (-18, 8)
        context.lineTo (-18, 9)
        context.lineTo (-22, 9)
        context.lineTo (-22, 11)
        context.lineTo (-23, 11)
        context.lineTo (-24, 12)
        context.lineTo (-24, 24)
        context.lineTo (-23, 24)
        context.lineTo (-23, 25)
        context.lineTo (-22, 25)
        context.lineTo (-22, 26)
        context.lineTo (-15, 26)
        context.lineTo (-15, 25)
        context.lineTo (-13, 25)
        context.lineTo (-13, 25)
        context.lineTo (-13, 21)
        context.lineTo (-13, 19)
        context.lineTo (-11, 19)
        context.lineTo (-11, 17)
        context.lineTo (-9, 17)
        context.lineTo (-9, 18)
        context.lineTo (-8, 18)
        context.lineTo (-8, 19)
        context.lineTo (0, 19)
        
        
        
        
        context.lineTo (-0, -19)
        context.lineTo (-8, -19)
        context.lineTo (-8, -18)
        context.lineTo (-9, -18)
        context.lineTo (-9, -17)
        context.lineTo (-11, -17)
        context.lineTo (-11, -19)
        context.lineTo (-13, -19)
        context.lineTo (-13, -21)
        context.lineTo (-13, -25)
        context.lineTo (-13, -25)
        context.lineTo (-15, -25)
        context.lineTo (-15, -26)
        context.lineTo (-22, -26)
        context.lineTo (-22, -25)
        context.lineTo (-23, -25)
        context.lineTo (-23, -24)
        context.lineTo (-24, -24)
        context.lineTo (-24, -12)
        context.lineTo (-23, -11)
        context.lineTo (-22, -11)
        context.lineTo (-22, -9)
        context.lineTo (-18, -9)
        context.lineTo (-18, -8)
        context.lineTo (-17, -8)
        context.lineTo (-17, -5)
        context.lineTo (-16, -5)
        context.lineTo (0, 0)
        
        
        
        
        
        
        
        
        context.lineTo (16, -0)
        context.lineTo (16, -5)
        context.lineTo (17, -5)
        context.lineTo (17, -8)
        context.lineTo (18, -8)
        context.lineTo (18, -10)
        context.lineTo (21, -10)
        context.lineTo (21, -11)
        context.lineTo (22, -11)
        context.lineTo (22, -12)
        context.lineTo (23, -12)
        context.lineTo (23, -13)
        context.lineTo (24, -13)
        context.lineTo (24, -14)
        context.lineTo (25, -14)
        context.lineTo (25, -23)
        context.lineTo (24, -23)
        context.lineTo (24, -24)
        context.lineTo (23, -24)
        context.lineTo (23, -25)
        context.lineTo (22, -25)
        context.lineTo (22, -26)
        context.lineTo (15, -26)
        context.lineTo (15, -25)
        context.lineTo (14, -25)
        context.lineTo (14, -24)
        context.lineTo (13, -24)
        context.lineTo (13, -19)
        context.lineTo (11, -19)
        context.lineTo (11, -21)
        context.lineTo (8, -21)
        context.lineTo (8, -22)
        context.lineTo (4, -22)
        context.lineTo (4, -23)
        context.lineTo (1, -23)
        context.lineTo (1, -32)
        context.lineTo (2, -32)
        context.lineTo (2, -36)
        context.lineTo (2, -35)
        context.lineTo (4, -35)
        context.lineTo (4, -44)
        context.lineTo (5, -44)
        context.lineTo (5, -45)
        context.lineTo (7, -45)
        context.lineTo (7, -46)
        context.lineTo (0, -46)
        
        
        
        
        
        
        
        
        





        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();




        //restore the state of the context to what it was before our drawing
        context.restore();
    }







    Robot.prototype.move = function () {
        //change the x axis by the x velocity
        this.x += this.vx;
        // change the y-axis by the y velocity
        this.y += this.vy;
        // stop ship from leaving canvas
        if (this.x < 100){
            this.vx = -this.vx
        }
        if (this.x > 1940){
            this.vx = -this.vx
        }
        if (this.y < 90){
            this.vy = -this.vy
        }
        if (this.y > 830){
            this.vy = -this.vy
        }
    }


    //public method to set the vector of the Robo
    Robot.prototype.accelerate = function (Acceleration) {
        //set vx
        this.vx += Acceleration.AX;
        //set vy
        this.vy += Acceleration.AY;
//adjust according to the sprite outer shape



    }


    // set ship velocity to zero
    Robot.prototype.halt = function () {
        this.vx = 0;
        this.vy = 0;
    }



    //public method to set the vector of the rocekt
    Robot.prototype.setVector = function (vector) {
        //set vx
        this.vx = vector.VX;
        //set vy
        this.vy = vector.VY;
    }

    //public property for X
    Object.defineProperty(this, 'X',
    {
    get: function () {
        return this.x;
    },
    set: function (value) {
        x = value;
    }
    }
    )

    //public property for Y
    Object.defineProperty(this, 'Y',
    {
        get: function () {
            return this.y;
        },
        set: function (value) {
            y = value;
        }
    }
    )




    Object.defineProperty(this, 'VX',
    {
        set: function (value) {
            // return the y posn
            this.vx = value;
        }
    }
)

// public read only propery for the x posn
Object.defineProperty(this, 'VY',
    {
        set: function (value) {
            // return the x posn
            this.vy = value;
        }
    }
)

//create a public property called Top
Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the y posn less the height
            return y - updwon;
        }
    }
)

//create a public property called Bottom
Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the y posn plus the height
            return y + updwon;
        }
    }
)

//create a public property called Left
Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the x posn less the width
            return x - rightleft;
        }
    }
)

//create a public property called Right
Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the x posn plus the width
            return x + rightleft;
        }
    }
)


    //public method to set the vector of the rocekt
    Robot.prototype.setVector = function (vector) {
        //set vx
        this.vx = vector.VX;
        //set vy
        this.vy = vector.VY;
    }




}