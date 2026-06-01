let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", function (){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    h1.innerText = color;
    div.style.backgroundColor = color;
})



