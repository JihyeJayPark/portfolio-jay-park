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

// referred to https://www.youtube.com/watch?v=nxoHR9lltK0&list=PL4lGBtrrOMpGu8I1Xbklxuu39hJPonbPa&index=3&t=1s
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
    }
    titleAnimation();
    setInterval(titleAnimation, 12000);
};

portfolio.init = () => {
    portfolio.titleChanger();
    portfolio.hamMenuToggle();
}

portfolio.init();

// grabbed it from https://help.formspree.io/hc/en-us/articles/1500009404742-How-to-clear-a-form-after-submission
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}