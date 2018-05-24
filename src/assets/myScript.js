// The Path.Circle constructor takes a Point(x, y), and a radius
var myBall = new Path.Circle(new Point(70, 70), 50);
myBall.fillColor = 'tomato';
 
// The Path.Rectangle constructor can take a Point and a Size object
var point = new Point(20, 150);
var size = new Size(100, 50);
var myRectangle = new Path.Rectangle(point, size);
myRectangle.fillColor = 'powderblue';
 
// The Path.Line constructor takes 2 points, defining the start and end of the line.
var from = new Point(160, 20);
var to = new Point(200, 80);
var straightLine = new Path.Line(from, to);
straightLine.strokeColor = 'black';
 
// The Path.Arc constructor takes 3 points, var names describing the obvious.
var from = new Point(170, 120);
var through = new Point(200, 180);
var to = new Point(170, 220);
var curvedPath = new Path.Arc(from, through, to);
curvedPath.strokeColor = 'black';