class Ground{
constructor(x,y,w,h){
let options={
    isStatic:true
}
this.w=w
this.h=h
this.body=Bodies.rectangle(x,y,this.w,this.h,options)

World.add(world,this.body)
}
show(){
let pos=this.body.position
push()
rectMode(CENTER)
noStroke()
fill("black")
    rect(pos.x,pos.y,this.w,this.h)
    console.log(this.w)
pop()
}
}
































