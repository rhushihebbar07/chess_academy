const counters = document.querySelectorAll(".stat-card h2");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.innerText);

        let current = 0;

        const increment = target / 80;

        const update = () => {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

        observer.unobserve(counter);

    });

});

counters.forEach(counter => observer.observe(counter));