alert("Desktop first website")

var skillsContainer = document.getElementsByClassName("skills-container")[0];

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
    document.getElementById("skills-label-a").style.width = "0%";
    document.getElementById("skills-label-b").style.width = "0%";
    document.getElementById("skills-label-c").style.width = "0%";
    document.getElementById("skills-label-d").style.width = "0%";
    document.getElementById("skills-label-e").style.width = "0%";
    document.getElementById("skills-label-f").style.width = "0%";

}
function skillsprogress() {
    document.getElementById("skills-label-a").style.width = "50%";
    document.getElementById("skills-label-b").style.width = "80%";
    document.getElementById("skills-label-c").style.width = "60%";
    document.getElementById("skills-label-d").style.width = "40%";
    document.getElementById("skills-label-e").style.width = "70%";
    document.getElementById("skills-label-f").style.width = "70%";

}


