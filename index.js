let option=document.querySelector(".option")
let cross=document.querySelector(".cross")
let b=document.querySelector(".sidebarMenu")
option.onclick = function(){opt_func()};
function opt_func()
{
    b.classList.add("slideleft");
    console.log("slided left")
    b.classList.remove("slideright");
}
cross.onclick = function(){cross_func()};
function cross_func()
{
    b.classList.add("slideright");
    console.log("slided right")
    b.classList.remove("slideleft");
}