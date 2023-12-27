// 導覽列下滑變透明
let header = document.querySelector("header");
let headerH1 = document.querySelector("header div.logo h1");
let dropdown = document.querySelector("header nav ul li.dropdown");
let dropdownContent = document.querySelector("header nav ul li ul.dropdown-content");
let headerAnchor = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
    if (window.pageYOffset != 0) {
        header.style = "background-color:rgba(1, 89, 88,0.5);";
        headerH1.style = "color:white;";
        dropdown.style = "color:white;";
        dropdownContent.style = "background-color:rgba(1, 89, 88,0.5);";
        headerAnchor.forEach((a) => {
            a.style = "color:white;";
        });
    } else {
        header.style = "";
        headerH1.style = "";
        dropdown.style = "";
        dropdownContent.style = "";
        headerAnchor.forEach((a) => {
            a.style = "";
        });
    }
});