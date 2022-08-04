let elBtn = document.querySelector(".open");
let elHeader = document.querySelector(".site-header");


elBtn.addEventListener("click", function(){
    elHeader.classList.toggle("open-hamburg")
})

function myFunction(x) {
    if (x.matches) { 
        elHeader.classList.remove("open-hamburg")
    } 
}

var x = window.matchMedia("(min-width: 700px)")
myFunction(x) 
x.addListener(myFunction) 