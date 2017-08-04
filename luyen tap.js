var c = document.getElementById("hinhchunhat");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();

var c = document.getElementById("hinhtron");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100,50,40,0,2*Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

var c = document.getElementById("chuviet");
var ctx = c.getContext("2d");
ctx.font="30px Arial";
ctx.strokeText("Hell no",55,95);
