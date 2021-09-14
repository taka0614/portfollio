
const targetElements = document.querySelectorAll(".animation-target");
window.addEventListener("scroll", () => {
    for(let i = 0; i < targetElements.length; i++) {
        const getTargetDistance = targetElements[i].getBoundingClientRect().top
        if(window.innerHeight > getTargetDistance) {
            targetElements[i].classList.add("move");
        }
    }
});