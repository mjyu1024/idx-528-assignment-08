let box_1 = document.getElementById("box-1");

const boxOnClick = (event) => {
    event.target.style.backgroundColor = "red";
};

box_1.addEventListener("click", boxOnClick);

// ---------------------------------------------------

let box_2 = document.getElementById("box-2");

const boxOnDblclick = (event) => {
    let color = event.target.style.backgroundColor;

    if(color == "" || color == "green" ){
        event.target.style.backgroundColor = "blue";
    } else {
        event.target.style.backgroundColor = "green";
    } 
};

box_2.addEventListener("dblclick", boxOnDblclick);

// ---------------------------------------------------

let box_3 = document.getElementById("box-3");

const boxOnMousedown = (event) => {
    event.target.style.backgroundColor = "orange";
};

const boxOnMouseup = (event) => {
    event.target.style.backgroundColor = "pink";
};

box_3.addEventListener("mousedown", boxOnMousedown);
box_3.addEventListener("mouseup", boxOnMouseup);

// ---------------------------------------------------

let box_4 = document.getElementById("box-4");
let box_5 = document.getElementById("box-5");
let box_6 = document.getElementById("box-6");

const boxMouseover = (event) => {
    event.target.style.backgroundColor = "cyan";
};

const boxMouseout = (event) => {
    event.target.style.backgroundColor = "teal";
};

box_4.addEventListener("mouseover", boxMouseover);
box_4.addEventListener("mouseout", boxMouseout);
box_5.addEventListener("mouseover", boxMouseover);
box_5.addEventListener("mouseout", boxMouseout);
box_6.addEventListener("mouseover", boxMouseover);
box_6.addEventListener("mouseout", boxMouseout);

// ---------------------------------------------------

let box_7 = document.getElementById("box-7");
let box_8 = document.getElementById("box-8");
let box_9 = document.getElementById("box-9");

const boxMousemove = (event) => {
    let color = event.target.style.backgroundColor;

    if(color == "" || color == "gold" ){
        event.target.style.backgroundColor = "fuchsia";
    } else {
        event.target.style.backgroundColor = "gold";
    } 
};

box_7.addEventListener("mousemove", boxMousemove);
box_8.addEventListener("mousemove", boxMousemove);
box_9.addEventListener("mousemove", boxMousemove);