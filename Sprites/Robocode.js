
//create the constructor for the class Robo
function Robot() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 750,//left right
        y = 550, //up down
        vx = 0,
        vy = 0,
        RedWindow = 1,
        GlobeYellow = 1,
        Boom = false;

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Robot.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#d3d3d3";
        /*context.moveTo(30, 12);*/

        context.moveTo(163, 24);




        
        //1
        context.lineTo(-35, 230);
        //2
        context.lineTo(-35, 225);
        //3
        context.lineTo(-25, 225);
        //4
        context.lineTo(-25, 220);
        //5
        context.lineTo(-20, 220);
        //6
        context.lineTo(-22, 185);
        //7
        context.lineTo(-15, 185);
        //8
        context.lineTo(-15, 180);
        //9
        context.lineTo(-10, 180);
        //10
        context.lineTo(-10, 160);
        //11
        context.lineTo(-5, 160);
        //12
        context.lineTo(-5, 115);
        //13
        context.lineTo(-20, 115);
        //14
        context.lineTo(-20, 110);
        //15
        context.lineTo(-40, 110);
        //16
        context.lineTo(-40, 105);
        //17
        context.lineTo(-55, 105);
        //18
        context.lineTo(-55, 95);
        //19
        context.lineTo(-65, 95);
        //20
        context.lineTo(-65, 120);
        //21
        context.lineTo(-70, 120);
        //22
        context.lineTo(-70, 125);
        //23
        context.lineTo(-75, 125);
        //24
        context.lineTo(-75, 130);
        //25
        context.lineTo(-110, 130);
        //26
        context.lineTo(-110, 125);
        //27
        context.lineTo(-115, 125);
        //28
        context.lineTo(-115, 120);
        //29
        context.lineTo(-120, 120);
        //30
        context.lineTo(-120, 115);
        //31
        context.lineTo(-125, 115);
        //32
        context.lineTo(-125, 70);
        //33
        context.lineTo(-120, 70);
        //34
        context.lineTo(-120, 65);
        //35
        context.lineTo(-115, 165);
        //36
        context.lineTo(-115, 60);
        //37
        context.lineTo(-110, 60);
        //38
        context.lineTo(-110, 55);
        //39
        context.lineTo(-105, 55);
        //40
        context.lineTo(-105, 50);
        //41
        context.lineTo(-90, 50);
        //42
        context.lineTo(-90, 40);
        //43
        context.lineTo(-85, 40);
        //44
        context.lineTo(-85, 25);
        //45
        context.lineTo(-80, 25);
        //46
        context.lineTo(-80, 0);
        //47
        context.lineTo(-80, -25);
        //48
        context.lineTo(-85, -25);
        //49
        context.lineTo(-85, -40);
        //50
        context.lineTo(-90, -40);
        //51
        context.lineTo(-90, -45);
        //52
        context.lineTo(-110, -45);
        //53
        context.lineTo(-110, -55);
        //54
        context.lineTo(-115, -55);
        //55
        context.lineTo(-115, -60);
        //56
        context.lineTo(-120, -60);
        //57
        context.lineTo(-120, -120);
        //58
        context.lineTo(-115, -120);
        //59
        context.lineTo(-115, -125);
        //60
        context.lineTo(-110, -125);
        //61
        context.lineTo(-110, -130);
        //62
        context.lineTo(-75, -130);
        //63
        context.lineTo(-75, -125);
        //64
        context.lineTo(-65, -125);
        //65
        context.lineTo(-65, -105);
        //66
        context.lineTo(-60, -105);
        //67
        context.lineTo(-60, -95);
        //68
        context.lineTo(-55, -95);
        //69
        context.lineTo(-55, -85);
        context.lineTo(-45, -85);
        //70
        context.lineTo(-45, -90);
        //71
        context.lineTo(-40, -90);
        //72
        context.lineTo(-40, -95);
        //73
        context.lineTo(0, -95);
        //right sidevale coordinates
        //74
        context.lineTo(35, 230);
        //75
        context.lineTo(35, 225);
        //76
        context.lineTo(25, 225);
        //77
        context.lineTo(25, 220);
        //78
        context.lineTo(20, 220);
        //79
        context.lineTo(22, 185);
        //80
        context.lineTo(15, 185);
        //81
        context.lineTo(15, 180);
        //82
        context.lineTo(10, 180);
        //83
        context.lineTo(10, 160);
        //84
        context.lineTo(5, 160);
        //85
        context.lineTo(5, 115);
        //86
        context.lineTo(20, 115);
        //87
        context.lineTo(20, 110);
        //88
        context.lineTo(40, 110);
        //89
        context.lineTo(40, 105);
        //89
        context.lineTo(55, 105);
        //90
        context.lineTo(55, 95);
        //91
        context.lineTo(65, 95);
        //92
        context.lineTo(65, 120);
        //93
        context.lineTo(70, 120);
        //94
        context.lineTo(70, 125);
        //95
        context.lineTo(75, 125);
        //96
        context.lineTo(75, 130);
        //97
        context.lineTo(110, 130);
        //98
        context.lineTo(110, 125);
        //99
        context.lineTo(115, 125);
        //100
        context.lineTo(115, 120);
        //101
        context.lineTo(120, 120);
        //102
        context.lineTo(120, 115);
        //103
        context.lineTo(125, 115);
        //104
        context.lineTo(125, 70);
        //105
        context.lineTo(120, 70);
        //106
        context.lineTo(120, 65);
        //107
        context.lineTo(115, 165);
        //108
        context.lineTo(115, 60);
        //109
        context.lineTo(110, 60);
        //110
        context.lineTo(110, 55);
        //111
        context.lineTo(105, 55);
        //112
        context.lineTo(105, 50);
        //113
        context.lineTo(90, 50);
        //114
        context.lineTo(90, 40);
        //115
        context.lineTo(85, 40);
        //116
        context.lineTo(85, 25);
        //117
        context.lineTo(80, 25);
        //118
        context.lineTo(80, 0);
        //119
        context.lineTo(80, -25);
        //120
        context.lineTo(85, -25);
        //121
        context.lineTo(85, -40);
        //122
        context.lineTo(90, -40);
        //123
        context.lineTo(90, -45);
        //124
        context.lineTo(110, -45);
        //125
        context.lineTo(110, -55);
        //126
        context.lineTo(115, -55);
        //127
        context.lineTo(115, -60);
        //128
        context.lineTo(120, -60);
        //129
        context.lineTo(120, -120);
        //130
        context.lineTo(115, -120);
        //131
        context.lineTo(115, -125);
        //132
        context.lineTo(110, -125);
        //133
        context.lineTo(110, -130);
        //134
        context.lineTo(75, -130);
        //135
        context.lineTo(75, -125);
        //136
        context.lineTo(65, -125);
        //137
        context.lineTo(65, -105);
        //138
        context.lineTo(60, -105);
        //139
        context.lineTo(60, -95);
        //140
        context.lineTo(55, -95);
        //141
        context.lineTo(55, -85);
        // 142
        context.lineTo(45, -85);
        //143
        context.lineTo(45, -90);
        //144
        context.lineTo(40, -90);
        //145
        context.lineTo(40, -95);
        //146
        context.lineTo(0, -95);






        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();




        //restore the state of the context to what it was before our drawing
        context.restore();
    }


    function DrawGlobes(context) {
        //var to store the colour of the globe
        var colour = "";
        //if the value of GlobeYellow is less than 50
        if (GlobeYellow < 50) {
            //set the colour to yellow
            colour = "#ffff00";
        }
        else {
            //otherwise set it to red
            colour = "#ff0000";
        }



    }




    Robot.prototype.move = function () {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;
    }

    Robot.prototype.setVector = function (vector) {
        //set the vx value based on this vector
        vx = vector.VX;
        //set the vy value based on this vector
        vy = vector.VY;
    }

    //public method to set the vector of the Robo
    Robot.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }

    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the value of y less height
                return y - 20;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the value of y plus height
                return y + 20;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the value of x less width
                return x - 30;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the value of x plus width
                return x + 30;
            }
        }
    )

    Robot.prototype.halt = function () {
        //temp variable to store the vy
        var temp = vy;
        //kill all velocity
        vx = 0;
        vy = 0;
        //set the ship as exploding
        if (temp > .4) {
            Boom = true;
        }
    }
}