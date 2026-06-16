let url = "http://universities.hipolabs.com/search?name=";

let country = "delhi";
let btn = document.querySelector("button");

btn.addEventListener("click", async function () {
    let country = document.querySelector("input").value;
    console.log(country);
    let collArr = await getColleges(country);
    let cNames = Showcolleges(collArr);
})

function Showcolleges(collArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(coll of collArr){
        console.log(coll.name);
        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data
    }
    catch (err) {
        return "NO FACT FOUND"
    }
}