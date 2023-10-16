window.onload = () => {

    let kockica = document.getElementById("kockica");
    let dynamicLabel = document.getElementById("dynamicLabel");


    kockica.addEventListener("click", () => {
        if (kockica.style.backgroundColor === "orange") {
            kockica.style.backgroundColor = "";
        }
        else {
            kockica.style.backgroundColor = "orange";
        }
        dynamicLabel.innerHTML = "click";
    })

    kockica.addEventListener("mouseenter", () => {
        kockica.style.backgroundColor = "green";
        dynamicLabel.innerHTML = "mouseenter";
    })

    kockica.addEventListener("mouseleave", () => {
        kockica.style.backgroundColor = "";
        dynamicLabel.innerHTML = "mouseleave";
    })
}































//obaviti unutar window.onload događaja kako biste osigurali da svi elementi na stranici budu učitani 
//pre nego što se dodaju slušatelji događaja. 