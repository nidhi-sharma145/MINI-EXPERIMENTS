let btn = document.querySelector("button");
let ip = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function(){

    let item = document.createElement("li");
    item.innerText = ip.value;
    ul.appendChild(item);
    ip.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    delBtn.addEventListener("click", function(){
        item.remove();
    })
    
})

ul.addEventListener("click", function (event) {
    
    if (event.target.classList.contains("delete")) {
        let par = event.target.parentElement;
        par.remove();
    }
});
