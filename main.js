let nav = document.querySelector(".nav");
let list = document.querySelector(".list");
let close_toggle = document.querySelector(".close-icon");
let open_toggle = document.querySelector(".menu-icon");

open_toggle.addEventListener("click" , ()=> {
    nav.classList.add("active");
    list.classList.add("active");
    close_toggle.style.display = "block";
    open_toggle.style.display = "none";
})

close_toggle.addEventListener("click" , ()=> {
    nav.classList.remove("active");
    list.classList.remove("active");
    close_toggle.style.display = "none";
    open_toggle.style.display = "block";

})