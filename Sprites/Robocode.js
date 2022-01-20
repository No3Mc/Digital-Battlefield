
//create the constructor for the class Robo
function Robot() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
        this.x = 150;
        this.y = 500;
        this.vx = 0;
        this.vy = 0;


        GlobeYellow = 1;
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
        //1
        context.lineTo (0, -46)
        //2
        context.lineTo (7, -46)
        //3
        context.lineTo (7, -45)
        //4
        context.lineTo (5, -45)
        //5
        context.lineTo (5, -44)
        //6
        context.lineTo (4, -44)
        //7
        context.lineTo (4, -35)
        //8
        context.lineTo (2, -35)
        //9
        context.lineTo (2, -36)
        // 10
        context.lineTo (2, -32)
        // 11
        context.lineTo (1, -32)
        // 12
        context.lineTo (1, -23)
        // 13
        context.lineTo (4, -23)
        // 14
        context.lineTo (4, -22)
        // 15
        context.lineTo (8, -22)
        // 16
        context.lineTo (8, -21)
        // 17
        context.lineTo (11, -21)
        // 18
        context.lineTo (11, -19)
        // 19
        context.lineTo (13, -19)
        // 20
        context.lineTo (13, -24)
        // 21
        context.lineTo (14, -24)
        // 22
        context.lineTo (14, -25)
        // 23
        context.lineTo (15, -25)
        // 24
        context.lineTo (15, -26)
        // 25
        context.lineTo (22, -26)
        // 26
        context.lineTo (22, -25)
        // 27
        context.lineTo (23, -25)
        // 28
        context.lineTo (23, -24)
        // 29
        context.lineTo (24, -24)
        // 30
        context.lineTo (24, -23)
        // 31
        context.lineTo (25, -23)
        // 32
        context.lineTo (25, -14)
        // 33
        context.lineTo (24, -14)
        // 34
        context.lineTo (24, -13)
        // 35
        context.lineTo (23, -13)
        // 36
        context.lineTo (23, -12)
        // 37
        context.lineTo (22, -12)
        // 38
        context.lineTo (22, -11)
        // 39
        context.lineTo (21, -11)
        // 40
        context.lineTo (21, -10)
        // 41
        context.lineTo (18, -10)
        // 42
        context.lineTo (18, -8)
        // 43
        context.lineTo (17, -8)
        // 44
        context.lineTo (17, -5)
        // 45
        context.lineTo (16, -5)
        // 46
        context.lineTo (16, -0)
        
        // 47
        context.lineTo (0, 0)
        // 48
        context.lineTo (16, 5)
        // 49
        context.lineTo (17, 5)
        // 50
        context.lineTo (17, 8)
        // 51
        context.lineTo (18, 8)
        // 52
        context.lineTo (18, 9)
        // 53
        context.lineTo (22, 9)
        // 54
        context.lineTo (22, 11)
        // 55
        context.lineTo (23, 11)
        // 56
        context.lineTo (24, 12)
        // 57
        context.lineTo (24, 24)
        // 58
        context.lineTo (23, 24)
        // 59
        context.lineTo (23, 25)
        // 60
        context.lineTo (22, 25)
        // 61
        context.lineTo (22, 26)
        // 62
        context.lineTo (15, 26)
        // 63
        context.lineTo (15, 25)
        // 64
        context.lineTo (13, 25)
        // 65
        context.lineTo (13, 25)
        // 67
        context.lineTo (13, 21)
        // 68
        context.lineTo (13, 19)
        // 69
        context.lineTo (11, 19)
        // 70
        context.lineTo (11, 17)
        // 71
        context.lineTo (9, 17)
        // 72
        context.lineTo (9, 18)
        // 73
        context.lineTo (8, 18)
        // 74
        context.lineTo (8, 19)
        // 75
        context.lineTo (0, 19)
        // 76
        context.lineTo (-0, 19)
        // 77
        context.lineTo (-8, 19)
        // 78
        context.lineTo (-8, 18)
        // 79
        context.lineTo (-9, 18)
        // 80
        context.lineTo (-9, 17)
        // 81
        context.lineTo (-11, 17)
        // 82
        context.lineTo (-11, 19)
        // 83
        context.lineTo (-13, 19)
        // 84
        context.lineTo (-13, 21)
        // 85
        context.lineTo (-13, 25)
        // 86
        context.lineTo (-13, 25)
        // 87
        context.lineTo (-15, 25)
        // 88
        context.lineTo (-15, 26)
        // 89
        context.lineTo (-22, 26)
        // 90
        context.lineTo (-22, 25)
        // 91
        context.lineTo (-23, 25)
        // 92
        context.lineTo (-23, 24)
        // 93
        context.lineTo (-24, 24)
        // 94
        context.lineTo (-24, 12)
        // 95
        context.lineTo (-23, 11)
        // 96
        context.lineTo (-22, 11)
        // 97
        context.lineTo (-22, 9)
        // 98
        context.lineTo (-18, 9)
        // 99
        context.lineTo (-18, 8)
        // 100
        context.lineTo (-17, 8)
        // 101
        context.lineTo (-17, 5)
        // 102
        context.lineTo (-16, 5)
        // 103
        context.lineTo (0, 0)
        
        // 104
        context.lineTo (-16, 0)
        // 105
        context.lineTo (-16, -5)
        // 106
        context.lineTo (-17, -5)
        // 107
        context.lineTo (-17, -8)
        // 108
        context.lineTo (-18, -8)
        // 109
        context.lineTo (-18, -10)
        // 110
        context.lineTo (-21, -10)
        // 111
        context.lineTo (-21, -11)
        // 112
        context.lineTo (-22, -11)
        // 113
        context.lineTo (-22, -12)
        // 114
        context.lineTo (-23, -12)
        // 115
        context.lineTo (-23, -13)
        // 116
        context.lineTo (-24, -13)
        // 117
        context.lineTo (-24, -14)
        // 118
        context.lineTo (-25, -14)
        // 119
        context.lineTo (-25, -23)
        // 120
        context.lineTo (-24, -23)
        // 121
        context.lineTo (-24, -24)
        // 122
        context.lineTo (-23, -24)
        // 123
        context.lineTo (-23, -25)
        // 124
        context.lineTo (-22, -25)
        // 125
        context.lineTo (-22, -26)
        // 126
        context.lineTo (-15, -26)
        // 127
        context.lineTo (-15, -25)
        // 128
        context.lineTo (-14, -25)
        // 129
        context.lineTo (-14, -24)
        // 130
        context.lineTo (-13, -24)
        // 131
        context.lineTo (-13, -19)
        // 132
        context.lineTo (-11, -19)
        // 133
        context.lineTo (-11, -21)
        // 134
        context.lineTo (-8, -21)
        // 135
        context.lineTo (-8, -22)
        // 136
        context.lineTo (-4, -22)
        // 137
        context.lineTo (-4, -23)
        // 138
        context.lineTo (-1, -23)
        // 139
        context.lineTo (-1, -32)
        // 140
        context.lineTo (-2, -32)
        // 141
        context.lineTo (-2, -36)
        // 142
        context.lineTo (-2, -35)
        // 143
        context.lineTo (-4, -35)
        // 144
        context.lineTo (-4, -44)
        // 145
        context.lineTo (-5, -44)
        // 146
        context.lineTo (-5, -45)
        // 147
        context.lineTo (-7, -45)
        // 148
        context.lineTo (-7, -46)
        // 149
        context.lineTo (0, -46)
        

        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();

        DrawGlobes(context);


        //restore the state of the context to what it was before our drawing
        context.restore();
    }


    function DrawGlobes(context) {
        //var to store the colour of the globe
        var colour = "";
        //if the value of GlobeYellow is less than 50
        if (GlobeYellow < 10) {
            //set the colour to yellow
            colour = "#ffff00";
        }
        else {
            //otherwise set it to red
            colour = "#ff0000";
        }

        Globe(context, -30, -40, colour);
        Globe(context, -30, 40, colour);//right
        GlobeYellow += 1;
        //if globe yellow is more than 100 
        if (GlobeYellow > 50) {
            //set it back to 1
            GlobeYellow = 1;
        }
    }
    function Globe(context, xposn, yposn, colour) {
        //begin the path
        context.beginPath();
        //set the fill colour
        context.fillStyle = colour;
        //move to the position to start the globe
        context.moveTo(xposn, yposn);
        //draw the curve from that position to +30px passing toward x+13, y+20
        // context.quadraticCurveTo(xposn + 15, yposn + 15, xposn + 15, yposn + 0);
        context.lineTo (10, 2)
        context.lineTo (-5, 2)
        
        //fill the globe
        context.fill();
        //draw the globe
        // context.stroke();
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
            return this.y - 10;
        }
    }
)

//create a public property called Bottom
Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the y posn plus the height
            return this.y + 10;
        }
    }
)

//create a public property called Left
Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the x posn less the width
            return this.x - 10;
        }
    }
)

//create a public property called Right
Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the x posn plus the width
            return this.x + 10;
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