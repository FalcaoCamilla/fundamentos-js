"use strict";

const acionarAlert = (value) => {
    let validador = false
    alert("Fundo branco")

    validador = true

    if(validador){
        btn.removeEventListener("click", acionarAlert)
    }
}

const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener('click', (event) => {
    console.log(event.clientX, event.clientY)
    body.style.background = "black"
})

btn.addEventListener('mouseover', (event) => {
    console.log(2)
    body.style.background = "white"
})

btn.addEventListener("click", acionarAlert);

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
    const { target } = event;
    //const target = event.target
    
    switch (target.getAttribute("class")){
        case "home":
            body.style.background = "blue";
            break;
        case "sobre":
            body.style.background = "red";
            break;
        case "contato":
            body.style.background = "green";
            break;
    }
})