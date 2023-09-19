var skillsContainer = document.getElementsByClassName("containerB")[0];

window.addEventListener('scroll', checkScroll);

var count = true;

function checkScroll() {
    var coordinates = skillsContainer.getBoundingClientRect();
    if(count && coordinates.top < window.innerHeight){
        console.log("working");
        count = false;
        skillsprogress();
    }
    else if(coordinates.top > window.innerHeight) {
        count = true;
        initskillsprogress();
    }
}

function initskillsprogress() {
    document.getElementById("sa").style.width = "0%";
    document.getElementById("sb").style.width = "0%";
    document.getElementById("sc").style.width = "0%";
    document.getElementById("sd").style.width = "0%";
    document.getElementById("se").style.width = "0%";
    document.getElementById("sf").style.width = "0%";

}
function skillsprogress() {
    document.getElementById("sa").style.width = "50%";
    document.getElementById("sb").style.width = "80%";
    document.getElementById("sc").style.width = "60%";
    document.getElementById("sd").style.width = "40%";
    document.getElementById("se").style.width = "70%";
    document.getElementById("sf").style.width = "70%";

}

