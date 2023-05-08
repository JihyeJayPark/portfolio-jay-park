const portfolio = {};

portfolio.hamMenuToggle = function() {
    const hamburger = document.querySelector(".hamburgerMenu");
    const navMenu = document.querySelector(".navMenu");
    // const h1Element = document.querySelector(".myName");
    hamburger.addEventListener("click", function(){
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        // h1Element.classList.toggle("active");
        }
    )
    document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        // h1Element.classList.remove("active");
        }
    ))
}

portfolio.titleChanger = function() {
    const title = document.querySelector(".headerBottom");

    const titleAnimation = function() {
        setTimeout(() => {
            title.textContent = "Dreamer"
        }, 0);
        setTimeout(() => {
            title.textContent = "Learner"
        }, 3000);
        setTimeout(() => {
            title.textContent = "Creator"
        }, 6000);
        setTimeout(() => {
            title.textContent = "Traveller"
        }, 9000);
        setTimeout(() => {
            title.textContent = "Cook"
        }, 12000);
    }
    titleAnimation();
    setInterval(titleAnimation, 15000);
};

portfolio.init = () => {
    portfolio.titleChanger();
    portfolio.hamMenuToggle();
}

portfolio.init();

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}