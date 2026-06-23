const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(11,17,32,0.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";

    } else {

        header.style.background = "rgba(11,17,32,0.85)";
        header.style.boxShadow = "none";

    }

});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

function activeSection() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.style.color = "#cbd5e1";

        if (link.getAttribute("href") === `#${current}`) {

            link.style.color = "#60a5fa";

        }

    });

}

window.addEventListener("scroll", activeSection);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.animate(
                    [
                        {
                            opacity: 0,
                            transform: "translateY(30px)"
                        },
                        {
                            opacity: 1,
                            transform: "translateY(0)"
                        }
                    ],
                    {
                        duration: 800,
                        easing: "ease-out",
                        fill: "forwards"
                    }
                );

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll(".section").forEach(section => {

    observer.observe(section);

});

const subtitle = document.querySelector(".hero-text h2");

if (subtitle) {

    const originalText = subtitle.textContent;

    subtitle.textContent = "";

    let i = 0;

    function typeWriter() {

        if (i < originalText.length) {

            subtitle.textContent += originalText.charAt(i);

            i++;

            setTimeout(typeWriter, 50);

        }

    }

    setTimeout(typeWriter, 500);

}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

window.addEventListener('load', () => {

    document.body.animate(
        [
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ],
        {
            duration: 700,
            fill: 'forwards'
        }
    );

});

