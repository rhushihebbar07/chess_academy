gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach((section) => {

    gsap.from(section, {

        opacity: 0,

        y: 80,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: section,

            start: "top 80%"

        }

    });

});