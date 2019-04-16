var count = 5;
/*Data types*/
var numbertype;
var booleanType;
var strinType;
var anyType;
var numberArray = [1, 2, 3, 4];
var stringArray = ['abc', 'def', 'ghi'];
var anyArray = ['abc', 1, true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backGround = Color.Green;
