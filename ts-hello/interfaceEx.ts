function draw(x, y) {
    console.log(x, y);
}

let draw1 = (x, y) => { console.log(x, y); }

let draw2 = (x, y, z, a, b, c, e, f) => { console.log(x, y, z, a, b, c, e, f); }



let draw3 = (point:{ x: Number , y:Number}) => { console.log(point.x, point.y); }

draw3({
  x:1,
  y:2
});


interface Point{
    x: Number,
    y:Number
}

let draw4 = (point:Point) => { console.log(point.x, point.y); }

draw4({
    x:1,
    y:2
  });