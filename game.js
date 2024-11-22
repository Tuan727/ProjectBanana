let text=document.getElementById("click");
let a = 0;
let img = document.getElementById("bnn");
console.log(window.location.href);
function hi() {
    a+=1;
    text.innerHTML=a;
}
function abc() {
    if (img.getAttribute("src") == "/resources/banana.png") {
        img.src = "/resources/banana2.png"
    }
    else {
        img.src = "/resources/banana.png"
    }
}