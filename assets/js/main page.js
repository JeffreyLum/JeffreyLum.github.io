
//Scrolls to the about section when "About" is clicked
function about() {
    let element = document.getElementById("AboutSection");
    element.scrollIntoView();
}

//Scrolls to the contact me secion when "Contact" is clicked
function contact() {
    let element = document.getElementById("ContentSection");
    element.scrollIntoView();
}

function projects() {
    let element = document.getElementById("");
    element.scrollIntoView();
}

window.onload = function () {
    let button = document.getElementById("goTop");

    window.onscroll = function () {
        scroll()
    }

    function scroll() {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            button.style.display = "block"
        }
        else {
            button.style.display = "none"
        }
    }
}

function goToTop() {

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}