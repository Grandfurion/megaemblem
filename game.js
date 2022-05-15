// STARTING VARIABLES
var canvasWidth = /*480*/360;
var canvasHeight = /*320*/240;

// SETTING VARIABLES
var canvas = document.getElementById("canvas_main");
var ctx = canvas.getContext("2d");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var displayModifier = 2.5;
canvas.style.width = canvasWidth*displayModifier + "px";
canvas.style.height = canvasHeight*displayModifier + "px";

// VARIABLES TO KNOW CANVAS OFFSET FROM DOCUMENT EDGES
var canvasPosition = canvas.getBoundingClientRect();
var canvasMarginTop = canvasPosition.top -1;
var canvasMarginLeft = canvasPosition.left -1;

//PROCESS VARIABLES
var clickX;
var clickY;


// FILLING ONCE WITH WHITE
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvasWidth, canvasHeight);



canvas.addEventListener("mousedown", function(e){
    getClickCoordinates(e);
    checkClickOnTile();
})



// DRAWING A MAP
import {MapTiles} from './maps.js';

/*
- grass
~ water (river)
= bridge (horizontal)
^ mountain
@ fort
$ forest
% house*/
var mapString = 
"^^$---$---~----"+
"^---------~-$--"+
"-----$----~----"+
"$---------~----"+
"--%-%-----=---$"+
"---%------~--@-"+
"$$--------~---$";

// SIZE OF MAP TILES
var tileSize = 16;
var mapX = 15; var mapY = 7;
var map = new MapTiles(mapString, mapX, mapY);

function drawMap(x, y){
    var currentTile;
    for(let i=0; i < y; i++){
        for(let j = 0; j < x; j++){
            currentTile = map.tiles[(i*x) + j];
            ctx.drawImage(currentTile.tileImage, tileSize*j, tileSize*i, tileSize, tileSize);
        }
    }
}

//drawMap(map.mapX, map.mapY);
// END OF MAP DRAW

// UNITS CREATE AND DRAW
import {Unit} from './unit.js';
var units = [];
let lordToPush = new Unit(0, 0, 45); lordToPush.createLord();
units.push(lordToPush);
var animationFrame = 0;
function drawUnits(){
    units.forEach(element => {
        ctx.drawImage(element.images[animationFrame], element.x, element.y, element.images[0].width, element.images[0].height);
    });
    animationFrame++;
    if(animationFrame > 3) animationFrame = 0;
}

// METHODS
function getClickCoordinates(event){
    clickX = event.clientX - canvasMarginLeft;
    clickY = event.clientY - canvasMarginTop;
    console.log(clickX + ";" + clickY);
}

function checkClickOnTile(){
    var tileToCheck = Math.trunc(clickY/tileSize/displayModifier)*map.mapX + Math.trunc(clickX/tileSize/displayModifier);
    console.log(tileToCheck);
    console.log(map.tiles[tileToCheck].tileType);
}

// UPDATING WITH SET FPS
update();
function update(){
    drawMap(map.mapX, map.mapY);
    drawUnits();
    console.log("tick");

    setTimeout(function(){requestAnimationFrame(update);}, 300);    
}

//BETA MOVEMENT WITH WASD
document.addEventListener('keydown', keyPressed);
function keyPressed(e){
    if(e.key == "w"){
        units[0].y -= 1;        
    }
    if(e.key == "s"){
        units[0].y += 1;        
    }
    if(e.key == "a"){
        units[0].x -= 1;        
    }
    if(e.key == "d"){
        units[0].x += 1;        
    }
}