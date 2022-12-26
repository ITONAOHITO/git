let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
    btn.classList.toggle("open");
    mask.classList.toggle("open");
}

mask.onclick = () => {
    nav.classList.toggle("open");
    btn.classList.toggle("open");
    mask.classList.toggle("open");
}