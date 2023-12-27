
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

// 閃爍警告標語
var blinkElement = document.getElementById("blink");

function toggleColor() {
    var currentColor = blinkElement.style.color;
    blinkElement.style.color = (currentColor === "red") ? "white" : "red";
}

setInterval(toggleColor, 500); // 500 毫秒做轉換

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

// 左側展開快捷鍵
document.addEventListener("DOMContentLoaded", function () {
    var leftSidebar = document.querySelector(".left_sidebar");

    window.addEventListener("scroll", function () {
        // 如果滾動超過一定的閾值（例如 500px），顯示在左側欄
        if (window.scrollY > 500) {
            leftSidebar.style.display = "block";
        } else {
            leftSidebar.style.display = "none";
        }
    });

    var btnDrawer = document.querySelector("button.btn_drawer");
    btnDrawer.addEventListener("click", function () {
        leftSidebar.classList.toggle("-open");
    });
});