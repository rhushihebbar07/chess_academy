/*=========================================================
                PREMIUM LOADER
=========================================================*/

export function initializeLoader() {

    const loader = document.getElementById("loader");
    const progress = document.querySelector(".loader-bar span");

    if (!loader || !progress) return;

    let value = 0;

    const interval = setInterval(() => {

        value += Math.random() * 8;

        if (value >= 100) {

            value = 100;

            clearInterval(interval);

            progress.style.width = "100%";

            setTimeout(() => {

                hideLoader(loader);

            }, 500);

        }

        progress.style.width = value + "%";

    }, 90);

}

function hideLoader(loader) {

    loader.style.transition =
        "opacity .9s ease, visibility .9s ease";

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.pointerEvents = "none";

    revealHero();

}

function revealHero() {

    if (typeof gsap === "undefined") return;

    gsap.from(".header", {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });

    gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: .8,
        delay: .2
    });

    gsap.from(".hero h1", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: .4
    });

    gsap.from(".hero p", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: .6
    });

    gsap.from(".hero-buttons", {
        y: 30,
        opacity: 0,
        duration: .8,
        delay: .8
    });

    gsap.from(".hero-right img", {
        scale: .85,
        opacity: 0,
        duration: 1.4,
        delay: .5,
        ease: "power4.out"
    });

    gsap.from(".stats .stat-card", {
        y: 60,
        opacity: 0,
        duration: .8,
        stagger: .15,
        delay: 1
    });

}