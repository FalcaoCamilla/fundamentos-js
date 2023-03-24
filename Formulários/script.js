"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.name.value;
    const password = form.password.value;

    const formData = new FormData(form);

    formData.forEach((res) => {
        console.log(res)
    })

    if(formData.has("name") || formData.has("password")){
        console.log(formData.get("name"))
        console.log(formData.get("password"))
    }

    formData.delete("name")
    console.log(formData.has("name"))
})

form.addEventListener("submit", (event => {
    event.preventDefault();

    const name = form.name.value;

    const newDivElement = document.createElement("div");
    newDivElement.innerText = name;

    //antes de enviar um, ele remove o outro
    form.nextElementSibling.remove();
    form.after(newDivElement);
}))