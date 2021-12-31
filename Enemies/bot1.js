//create the constructor for the class square
function bot1() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    this.x = Math.random() * 400;
    this.y = Math.random() * 200;
    //set the size of the bot1
    var size = 40;

    bot1.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        context.fillStyle = "#FFFFFF";
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(this.x, this.y);
        //bot1t the line (path)
        context.beginPath();
        context.moveTo(163, 24);
        //1
        context.lineTo(-35, -230);
        //2
        context.lineTo(-35, -225);
        //3
        context.lineTo(-25, -225);
        //4
        context.lineTo(-25, -220);
        //5
        context.lineTo(-20, -220);
        //6
        context.lineTo(-22, -185);
        //7
        context.lineTo(-15, -185);
        //8
        context.lineTo(-15, -180);
        //9
        context.lineTo(-10, -180);
        //10
        context.lineTo(-10, -160);
        //11
        context.lineTo(-5, -160);
        //12
        context.lineTo(-5, -115);
        //13
        context.lineTo(-20, -115);
        //14
        context.lineTo(-20, -110);
        //15
        context.lineTo(-40, -110);
        //16
        context.lineTo(-40, -105);
        //17
        context.lineTo(-55, -105);
        //18
        context.lineTo(-55, -95);
        //19
        context.lineTo(-65, -95);
        //20
        context.lineTo(-65, -120);
        //21
        context.lineTo(-70, -120);
        //22
        context.lineTo(-70, -125);
        //23
        context.lineTo(-75, -125);
        //24
        context.lineTo(-75, -130);
        //25
        context.lineTo(-110, -130);
        //26
        context.lineTo(-110, -125);
        //27
        context.lineTo(-115, -125);
        //28
        context.lineTo(-115, -120);
        //29
        context.lineTo(-120, -120);
        //30
        context.lineTo(-120, -115);
        //31
        context.lineTo(-125, -115);
        //32
        context.lineTo(-125, -70);
        //33
        context.lineTo(-120, -70);
        //34
        context.lineTo(-120, -65);
        //35
        context.lineTo(-115, -65);
        //36
        context.lineTo(-115, -60);
        //37
        context.lineTo(-110, -60);
        //38
        context.lineTo(-110, -55);
        //39
        context.lineTo(-105, -55);
        //40
        context.lineTo(-105, -50);
        //41
        context.lineTo(-90, -50);
        //42
        context.lineTo(-90, -40);
        //43
        context.lineTo(-85, -40);
        //44
        context.lineTo(-85, -25);
        //45
        context.lineTo(-80, -25);


        //46
        context.lineTo(-80, 0);
        //47
        context.lineTo(-80, 25);
        //48
        context.lineTo(-85, 25);
        //49
        context.lineTo(-85, 40);
        //50
        context.lineTo(-90, 40);
        //51
        context.lineTo(-90, 45);
        //52
        context.lineTo(-110, 45);
        //53
        context.lineTo(-110, 55);
        //54
        context.lineTo(-115, 55);
        //55
        context.lineTo(-115, 60);
        //56
        context.lineTo(-120, 60);
        //57
        context.lineTo(-120, 120);
        //58
        context.lineTo(-115, 120);
        //59
        context.lineTo(-115, 125);
        //60
        context.lineTo(-110, 125);
        //61
        context.lineTo(-110, 130);
        //62
        context.lineTo(-75, 130);
        //63
        context.lineTo(-75, 125);
        //64
        context.lineTo(-65, 125);
        //65
        context.lineTo(-65, 105);
        //66
        context.lineTo(-60, 105);
        //67
        context.lineTo(-60, 95);
        //68
        context.lineTo(-55, 95);
        //69
        context.lineTo(-55, 85);
        context.lineTo(-45, 85);
        //70
        context.lineTo(-45, 90);
        //71
        context.lineTo(-40, 90);
        //72
        context.lineTo(-40, 95);
        //73
        context.lineTo(0, 95);
        //right sidevale coordinates

       //73
       context.lineTo(0, 95);
       //72
       context.lineTo(40, 95);
       //71
       context.lineTo(40, 90);
       //70
       context.lineTo(45, 90);
       context.lineTo(45, 85);
       //69
       context.lineTo(55, 85);
       //68
       context.lineTo(55, 95);
       //67
       context.lineTo(60, 95);
       //66
       context.lineTo(60, 105);
       //65
       context.lineTo(65, 105);
       //64
       context.lineTo(65, 125);
       //63
       context.lineTo(75, 125);
       //62
       context.lineTo(75, 130);
       //61
       context.lineTo(110, 130);
       //60
       context.lineTo(110, 125);
       //59
       context.lineTo(115, 125);
       //58
       context.lineTo(115, 120);
       //57
       context.lineTo(120, 120);
       //56
       context.lineTo(120, 60);
       //55
       context.lineTo(115, 60);
       //54
       context.lineTo(115, 55);
       //53
       context.lineTo(110, 55);
       //52
       context.lineTo(110, 45);
       //51
       context.lineTo(90, 45);
       //50
       context.lineTo(90, 40);
       //49
       context.lineTo(85, 40);
       //48
       context.lineTo(85, 25);
       //47
       context.lineTo(80, 25);
      //46
      context.lineTo(80, 0);

        //45
        context.lineTo(80, -25);
        //44
        context.lineTo(85, -25);
        //43
        context.lineTo(85, -40);
        //42
        context.lineTo(90, -40);
        //41
        context.lineTo(90, -50);
        //40
        context.lineTo(105, -50);
        //39
        context.lineTo(105, -55);
        //38
        context.lineTo(110, -55);
        //37
        context.lineTo(110, -60);
        //36
        context.lineTo(115, -60);
        //35
        context.lineTo(115, -65);
        //34
        context.lineTo(120, -65);
        //33
        context.lineTo(120, -70);
        //32
        context.lineTo(125, -70);
        //31
        context.lineTo(125, -115);
        //30
        context.lineTo(120, -115);
        //29
        context.lineTo(120, -120);
        //28
        context.lineTo(115, -120);
        //27
        context.lineTo(115, -125);
        //26
        context.lineTo(110, -125);
        //25
        context.lineTo(110, -130);
        //24
        context.lineTo(75, -130);
        //23
        context.lineTo(75, -125);
        //22
        context.lineTo(70, -125);
        //21
        context.lineTo(70, -120);
        //20
        context.lineTo(65, -120);
        //19
        context.lineTo(65, -95);
        //18
        context.lineTo(55, -95);
        //17
        context.lineTo(55, -105);
        //16
        context.lineTo(40, -105);
        //15
        context.lineTo(40, -110);
        //14
        context.lineTo(20, -110);
        //13
        context.lineTo(20, -115);
        //12
        context.lineTo(5, -115);
        //11
        context.lineTo(5, -160);
        //10
        context.lineTo(10, -160);
        //9
        context.lineTo(10, -180);
        //8
        context.lineTo(15, -180);
        //7
        context.lineTo(15, -185);
        //6
        context.lineTo(22, -185);
        //5
        context.lineTo(20, -220);
        //4
        context.lineTo(25, -220);
        //3
        context.lineTo(25, -225);
        //2
        context.lineTo(35, -225);
        //1
        context.lineTo(35, -230);
        //context.lineTo(0, 0);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();
        //restore the state of the context to what it was before our drawing
        context.restore();
    }

    bot1.prototype.move = function () {
        //change the x axis
        this.x -= .5;
        //if the bot1 has drifted off the left of the canvas
        if (this.x < 0) {
            //place it at the right of the canvas
            this.x = 400;
            //set the y value to a random position
            this.y = Math.random() * 200;
        }
    }
}
