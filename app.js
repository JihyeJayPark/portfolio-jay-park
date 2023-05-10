const portfolio = {};

portfolio.hamMenuToggle = function() {
    const hamburger = document.querySelector(".hamburgerMenu");
    const navMenu = document.querySelector(".navMenu");
    hamburger.addEventListener("click", function(){
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        }
    )
    document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        }
    ))
}

portfolio.titleChanger = function() {
    const title = document.querySelector(".secondText");

    const titleAnimation = function() {
        setTimeout(() => {
            title.textContent = "Dreamer"
        }, 0);
        setTimeout(() => {
            title.textContent = "Learner"
        }, 4000);
        setTimeout(() => {
            title.textContent = "Creator"
        }, 8000);
        setTimeout(() => {
            title.textContent = "Cook 👩‍🍳"
        }, 12000);
    }
    titleAnimation();
    setInterval(titleAnimation, 16000);
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