const mainContainerEl = document.getElementById("main-container");

const btnEl = document.getElementById("btn");

const popupWindowEl = document.getElementById("popup-window");

const xMarkIconEl = document.getElementById("x-mark-icon");


btnEl.addEventListener("click",()=>{
    mainContainerEl.classList.add("active");
    popupWindowEl.classList.remove("active");
})

xMarkIconEl.addEventListener("click",()=>{
    mainContainerEl.classList.remove("active");
    popupWindowEl.classList.add("active");
})