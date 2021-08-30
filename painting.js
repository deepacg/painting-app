
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'white'
ctx.fillRect(0,0,500,500)

ctx.fillStyle = 'black'
let brushColor = 'black'
let brushSize = 3

document.getElementById('color').addEventListener('change', function(){
    brushColor = this.value
})
document.getElementById('thickness').addEventListener('change', function() {
    brushSize = this.value
})

let painting = false        // to record mouse click

function paintingStart(e) {     // mouse down
    painting = true
    draw(e)
    if (e.target.nodeName == 'CANVAS') { 
        e.preventDefault(); 
    } 
}   
function paintingEnd(e){        // mouse up
    painting = false
    ctx.beginPath()
    if (e.target.nodeName == 'CANVAS') { 
        e.preventDefault(); 
    } 
}
function draw(e){
    if(!painting) return
    if (e.target.nodeName == 'CANVAS') { 
        e.preventDefault(); 
    } 

    let x = e.clientX
    let y = e.clientY - canvas.offsetTop
    
    ctx.lineWidth = brushSize
    ctx.lineCap = 'round'

    // ctx.beginPath()
    // ctx.moveTo(x, y)
    ctx.lineTo(x, y)
    ctx.strokeStyle = brushColor
    ctx.stroke()
}

canvas.addEventListener('mousedown', paintingStart)
canvas.addEventListener('mouseup', paintingEnd)
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('touchstart', paintingStart, false)
canvas.addEventListener('touchend', paintingEnd, false)
canvas.addEventListener('touchmove', draw, false)



