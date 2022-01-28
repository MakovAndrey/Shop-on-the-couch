const toggle = document.getElementById("menu-btn");

const nav = document.getElementById("navigate");

toggle.addEventListener("click", () => {
    toggle.classList.add("display-block");
    nav.classList.toggle("display-block");
});

const headerSearchBtn = document.getElementById("header__search_btn");

const headerSearchInp = document.getElementById("header__search_inp");

headerSearchBtn.addEventListener("click", () => {
    // headerSearchBtn.classList.add("header__search_inp-on");
    headerSearchInp.classList.toggle("header__search_inp-on");
});
