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
})

// 圖片自動輪播
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}


// 回到頂部的button
let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

document.addEventListener('DOMContentLoaded', function () {
    const goTopButton = document.querySelector('[data-action="gotop"]');
    const windowViewPortHeight = window.innerHeight; // browser viewport height
    let isRequestingAnimationFrame = false;

    if (!goTopButton) {
        return;
    }

    goTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        if (!isRequestingAnimationFrame) {
            requestAnimationFrame(filterGoTopButtonVisibility);
            isRequestingAnimationFrame = true;
        }
    });

    function filterGoTopButtonVisibility(timestamp) {
        let windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
        if (windowPageYOffset > windowViewPortHeight) {
            goTopButton.classList.add('show');
            isRequestingAnimationFrame = false;
        } else {
            goTopButton.classList.remove('show');
            requestAnimationFrame(filterGoTopButtonVisibility);
        }
    }
})