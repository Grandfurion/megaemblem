class Unit{
    images = [];
    constructor(x, y, /*images,*/ hp){
        this.x = x;
        this.y = y;
        //this.images = images;
        this.hp = hp;
    }

    createLord(){
        let a = new Image; a.src = "images/units/lord1.png";
        console.log(a.height);
        console.log(a.width);
        console.log("PIDAR");
        this.images.push(a);
        let b = new Image; b.src = "images/units/lord2.png";
        this.images.push(b);
        let c = new Image; c.src = "images/units/lord3.png";
        this.images.push(c);
        let d = new Image; d.src = "images/units/lord4.png";
        this.images.push(d);
    }
}

export {Unit};