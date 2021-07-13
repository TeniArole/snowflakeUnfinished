class Snow {
    constructor(x, y, width, height){
        var options = {
            isStatic: false
        }

    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width
    this.height = height
   //this.image=loadImage("snow4.webp")
    
    World.add(world, this.body)
   }

    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("red")
        rect(pos.x, pos.y, this.width, this.height)


    }
}