let horizontalUnderline =document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
console.log(horizontalUnderline);
console.log(horizontalMenus);

let verticalUnderline = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

horizontalUnderline.style.left = horizontalMenus[0].offsetLeft + "px";
horizontalUnderline.style.width = horizontalMenus[0].offsetWidth + "px";
horizontalUnderline.style.top = 
        horizontalMenus[0].offsetTop + horizontalMenus[0].offsetHeight + "px";

horizontalMenus.forEach(menu=>menu.addEventListener("click",(e)=>horizontalIndicator(e)));
verticalMenus.forEach(menu=>menu.addEventListener("click",(e)=>verticalIndicator(e)));

function horizontalIndicator(e){
    horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderline.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

function verticalIndicator(e){
    verticalUnderline.style.left = e.currentTarget.offsetLeft + "px";
    verticalUnderline.style.width = e.currentTarget.offsetWidth + "px";
    verticalUnderline.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}