// 防呆機制
document.addEventListener("DOMContentLoaded",
    function () {
        var form = document.forms["form1"]; form.addEventListener("submit", function (event) {
            var nameInput = form.elements["name"];
            var phoneInput = form.elements["phone"];
            var emailInput = form.elements["email"];
            var questionInput = form.elements["question"];
            if (nameInput.value === "" || phoneInput.value === "" || emailInput.value === "" || questionInput.value === "") {
                alert("內容不可為空，請填寫完整再送出!"); event.preventDefault();
            } else {
                alert("已收到您的來信，我們將盡快與您聯繫，謝謝！");
            }
        });
    });

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
// var inputname = document.getElementById("name");
// var inputphone = document.getElementById("phone");
// var inputmail = document.getElementById("mail");
// if (((length.inputname >=2) || (length.inputphone == 10) || (length.mail >=1 ))) {
//
// } else {
//     alert("請再次確認姓名與電話是否輸入正確!!!")
// }


// var btn = document.getElementById("btn");
// btn.onclick = function () {
//     alert("已收到您的來信，我們會盡快回覆，謝謝您！")
// }