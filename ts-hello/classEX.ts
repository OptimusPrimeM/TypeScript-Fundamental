class Point {


    constructor(private _x?: number, private _y?: number) {

    }

    draw() {
        console.log("X = " + this._x + " and Y =" + this._y);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0) {
            throw new Error("value cannot be less than 0");
        }

        this._x = value;
    }


}


let point = new Point(50, 20);
point.draw();
console.log(point.x);
point.x = 500;
console.log(point.x);


