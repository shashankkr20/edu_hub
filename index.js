let option=document.querySelector(".option")
let cross=document.querySelector(".cross")
let b=document.querySelector(".sidebarMenu")
let act_name=document.querySelector(".act-name")
let act_img=document.querySelector(".act-img")
let act_desc=document.querySelector(".act-desc")
let radio=[]
let currentPerson=0;
radio=document.querySelectorAll(".radio-btn")
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
const person = [
    {
        "image": "./images/plant.jpg",
        "Name": "Plantation drive 2K22",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero minus, veritatis consequatur ex enim officia in sequi quidem culpa sapiente temporibus commodi deserunt soluta perferendis ut rem quos iure!",
    },
    {
        "image": "./images/sport.webp",
        "Name": "Sports day 2K22", 
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero minus, veritatis consequatur ex enim officia in sequi quidem culpa sapiente temporibus",
    },
    {
        "image": "./images/cult.jpg",
        "Name": "Cultora(Cultural-fest) 2K22",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. enim officia in sequi quidem culpa sapiente temporibus",
    },
    {
        "image": "./images/sci.jpg",
        "Name": "Science exhibition 2K22",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero minus, veritatis consequatur ex enim officia in sequi quidem culpa sapiente temporibus commodi deserunt soluta perferendis ut rem quos iure! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, laboriosam?",
    }
];
for(let i = 0; i < radio.length; i++) {
    radio[i].addEventListener("click", function() {
        updateevent(i);
    });
}
function updateevent(presentPerson) {
    act_img.setAttribute("src", person[presentPerson].image);
    act_name.innerHTML = person[presentPerson].Name;
    act_desc.innerHTML = person[presentPerson].desc;

    // changing radio buttons
    for(let i = 0; i < person.length; i++) {
        radio[i].checked=false;
    }
    radio[presentPerson].checked=true;

    currentPerson = presentPerson;
}