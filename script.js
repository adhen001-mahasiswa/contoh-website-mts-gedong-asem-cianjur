// ================================
// REVEAL ANIMATION ON SCROLL
// ================================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

reveals.forEach((element) => {
    observer.observe(element);
});


// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const increment = Math.ceil(target / 80);

            const updateCounter = () => {

                count += increment;

                if (count < target) {

                    counter.innerText = count;

                    setTimeout(updateCounter, 20);

                } else {

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach((counter) => {
    counterObserver.observe(counter);
});