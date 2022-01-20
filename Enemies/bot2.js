//create the constructor for the class square
function bot2() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    this.x = Math.random() * -1800;
    this.y = Math.random() * 400;
    //set the size of the bot2
    var size = 40;

    bot2.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        context.fillStyle = "#FFFFFF";
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(this.x, this.y);
        //bot2t the line (path)
        context.beginPath();
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
        
        
        //context.lineTo(0, 0);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();
        //restore the state of the context to what it was before our drawing
        context.restore();
    }

    bot2.prototype.move = function () {

        //if the bot2 has drifted off the left of the canvas

        this.y -= 4;
        // this.y -= 4;
        if (this.y < 100) {
            this.x = 1940;
            this.y = 800;
            // this.y = Math.random() * 400;
        }


    }
}
