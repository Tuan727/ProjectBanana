let text=document.getElementById("click");
let a = 0;
let img = document.getElementById("bnn");
if (window.location.href==="https://bananaclick.vercel.app/game-login.html") {
    a = Request.QueryString["a"] ?? string.Empty;
}
function hi() {
    a+=1;
    if (a==2000000000) {
        alert("Congratulation! You have wasted your time! Now enjoy clicking back");
        a=0;
    }
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