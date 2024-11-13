const fs = require('fs')
let text=document.getElementById("click");
let a = 0;
function hi() {
    a+=1;
    text.innerHTML=a;
}
let data = fs.ReadFileSync("data.txt","utf-8");