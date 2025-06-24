console.log("Hello")
let boxes = document.getElementsByClassName("box")

function randomcolor(){
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e=>{e.style.color = randomcolor()
    e.style.backgroundColor= randomcolor()
})