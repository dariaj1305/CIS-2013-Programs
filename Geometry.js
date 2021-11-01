var $ = function (id)
{
    return document.getElementById(id);
};

var do_it = function ()
{

var floatRectWidth = parseFloat($("rect_width").value);
var floatRectHeight = parseFloat($("rect_height").value);
var floatTriSide1 = parseFloat($("tri_side1").value);
var floatTriSide2 = parseFloat($("tri_side2").value);
var floatTriSide3 = parseFloat($("tri_side3").value);
var floatRadius = parseFloat($("radius").value);
var floatRectArea = parseFloat($("calc_rect_area").value);
var floatRectPerim = parseFloat($("calc_rect_perim").value);
var floatS;
var floatTriangleArea = parseFloat($("calc_tri_area").value);
var floatTrianglePerim = parseFloat($("calc_tri_perim").value);
var floatCircleArea = parseFloat($("calc_circle_area").value);
var floatCircleCircum = parseFloat($("calc_circle_circum").value);

floatRectArea = floatRectWidth * floatRectHeight;
floatRectPerim = 2 * floatRectWidth + 2 * floatRectHeight;
floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3)/2;
floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)));
floatTrianglePerim = floatTriSide1 + floatTriSide2 + floatTriSide3;

floatCircleArea = Math.PI * Math.pow(floatRadius,2);
floatCircleCircum = 2 * Math.PI * floatRadius;

alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + " and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + "\n\n" +
"The Triangle area is " + triArea(floatTriSide1,floatTriSide2,floatTriSide3) + " and the perimeter is " + triPerim(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
"The Circle area is " + circleArea(floatRadius) + " and the circumference is " + circleCircum(floatRadius));

};

var calcCircleCircum = function()
{
var floatRadius = parseFloat($("radius").value);

alert ("The Circle circumference is " + circleCircum(floatRadius));
};

function circleCircum(floatRadius_par)
{
var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
return floatCircum.toFixed(2);
}

var calcCircleArea = function ()
{
    var floatRadius = parseFloat($("radius").value);
    alert("The Circle area is " + circleArea(floatRadius));
};

function circleArea(floatRadius_par)
{
   var floatCircleArea = Math.PI * Math.pow(floatRadius_par,2);
   return floatCircleArea.toFixed(2);
}
    var calcTriPerim = function ()
{
   var floatTriSide1 = parseFloat($("tri_side1").value);
   var floatTriSide2 = parseFloat($("tri_side2").value);
   var floatTriSide3 = parseFloat($("tri_side3").value);
   alert("The Triangle perimeter is " + triPerim(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triPerim (floatTriSide1, floatTriSide2, floatTriSide3)

{
   var floatTriPerim = floatTriSide1 + floatTriSide2 + floatTriSide3;
   return floatTriPerim.toFixed(2);
}

var calcTriArea = function ()
{
   var floatTriSide1 = parseFloat($("tri_side1").value);
   var floatTriSide2 = parseFloat($("tri_side2").value);
   var floatTriSide3 = parseFloat($("tri_side3").value);
   alert("The Triangle area is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triArea(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
   var floatS = parseFloat((floatTriSide1_par + floatTriSide2_par + floatTriSide3_par)/2);
   var floatTriArea = Math.sqrt((floatS*(floatS-floatTriSide1_par)*(floatS-floatTriSide2_par)*(floatS-floatTriSide3_par)));
   return floatTriArea.toFixed(2);
}
    var calcRectPerim = function ()
{
    var floatRectHeight = parseFloat($("rect_height").value);
    var floatRectWidth = parseFloat($("rect_width").value);
    alert("The Rectangle perimeter is " + rectPerim(floatRectWidth, floatRectHeight));
};

function rectPerim(floatRectWidth_par, floatRectHeight_par)
{
   var floatRectArea = floatRectWidth_par * 2 + floatRectHeight_par * 2;
   return floatRectArea.toFixed(2);
}
var calcRectArea = function ()
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    alert("The Rectangle area is " + rectArea(floatRectWidth, floatRectHeight));
};

function rectArea(floatRectWidth_par, floatRectHeight_par)
{
   var floatRectArea = floatRectWidth_par * floatRectHeight_par;
   return floatRectArea.toFixed(2);
}

window.onload = function ()
{
    $("rect_width").focus();
    $("calc_all").onclick = do_it;
    $("calc_circle_circum").onclick = calcCircleCircum;
    $("calc_circle_area").onclick = calcCircleArea;
    $("calc_rect_area").onclick = calcRectArea;
    $("calc_rect_perim").onclick = calcRectPerim;
    $("calc_tri_perim").onclick = calcTriPerim;
    $("calc_tri_area").onclick = calcTriArea;

};