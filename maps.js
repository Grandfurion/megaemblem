class MapTiles{
    constructor(mapString, mapX, mapY){
        this.mapX = mapX;
        this.mapY = mapY;
        this.mapString = mapString;

        // TILES FIND
        this.t1 = new Image; this.t1.src = "images/t1.png"; //HOUSE
        this.t1.width *= 2; this.t1.height *= 2;
        this.t2 = new Image; this.t2.src = "images/t2.png"; //FORT
        this.t3 = new Image; this.t3.src = "images/t3.png"; //MOUNTAIN
        this.t4 = new Image; this.t4.src = "images/t4.png"; //RIVER VERTICAL
        this.t5 = new Image; this.t5.src = "images/t5.png"; //BRIDGE HORIZONTAL
        this.t6 = new Image; this.t6.src = "images/t6.png"; //GRASS
        this.t7 = new Image; this.t7.src = "images/t7.png"; //FOREST

        this.tiles = [];
        this.mapBuild(this.mapString, this.mapX, this.mapY, this.tiles);
    }



    mapBuild(mapString, mapX, mapY, tiles){
        for(let i = 0; i < mapY; i++){
            for(let j = 0; j < mapX; j++){
            switch(mapString.charAt(i*mapX + j)){
                case '-':
                    tiles.push(new Tile("grass", this.t6));
                    break;
                case '~':
                    tiles.push(new Tile("river", this.t4));
                    break;
                case '=':
                    tiles.push(new Tile("bridge", this.t5));
                    break;
                case '^':
                    tiles.push(new Tile("mountain", this.t3));
                    break;
                case '@':
                    tiles.push(new Tile("fort", this.t2));
                    break;
                case '$':
                    tiles.push(new Tile("forest", this.t7));
                    break;
                case '%':
                    tiles.push(new Tile("house", this.t1));
                    break;
    
                }
            }
        }
    }
}


class Tile{
    constructor(tileType, tileImage){
        this.tileType = tileType;
        this.tileImage = tileImage;
    }
}


/*
- grass
~ water (river)
= bridge (horizontal)
^ mountain
@ fort
$ forest
% house*/

export {MapTiles};
