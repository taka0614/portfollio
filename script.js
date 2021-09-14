
window.addEventListener("load", () => {
    setTimeout( () => {
        document.getElementById("loading").classList.remove("active");
    }, 2500)
});

const animationTextElements = document.querySelectorAll(".text-animation");
for(let i = 0; i < animationTextElements.length; i++) {
    const targetText = animationTextElements[i], 
    texts = targetText.textContent,
    textArray = [];

    targetText.textContent = "";

    for(let j = 0; j < texts.split("").length; j++) {
        const text = texts.split("")[j];
        if(text === "") {
            textsArray.push("");
        } else {
            textArray.push('<span style="animation-delay: ' + (j * .3) + 's;">' + text + '</span>');
        }
    }

    for (let k = 0; k < textArray.length; k++) {
        targetText.innerHTML += textArray[k];
    }
}

const showElements = document.querySelectorAll(".animation-screen");
window.addEventListener("scroll", () => {
    for(let i = 0; i < showElements.length; i++) {
        const getElementDistance = showElements[i].getBoundingClientRect().top + showElements[i].clientHeight * .5;
        if(window.innerHeight > getElementDistance) {
            showElements[i].classList.add("show");
        }
    }
});

const targetElements = document.querySelectorAll(".animation-target");
window.addEventListener("scroll", () => {
    for(let i = 0; i < targetElements.length; i++) {
        const getTargetDistance = targetElements[i].getBoundingClientRect().top
        if(window.innerHeight > getTargetDistance) {
            targetElements[i].classList.add("move");
        }
    }
});


