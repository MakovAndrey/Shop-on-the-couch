const toggle = document.getElementById("menu-btn");
const nav = document.getElementById("navigate");

toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-on");
});

const headerSearchBtn = document.getElementById("header__search_btn");
const headerSearchInp = document.getElementById("header__search_inp");

headerSearchBtn.addEventListener("click", () => {
    headerSearchInp.classList.toggle("header__search_inp-on");
});

const filterBtn = document.getElementById("filter-btn");
const filter = document.getElementById("filter");

filterBtn.addEventListener("click", () => {
    filter.classList.toggle("catalog__filter-list-on");
});