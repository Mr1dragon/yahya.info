document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Remove underline class from all links
            navLinks.forEach(link => link.classList.remove('underline'));

            // Add underline class to the clicked link
            event.currentTarget.classList.add('underline');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', () => {
        // URL to the existing PDF file on the server
        const pdfUrl = 'cv.pdf';  // Change this to the correct path to your PDF file

        // Create a link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'cv.pdf';  // The name of the file to be downloaded

        // Append the link to the body (not visible)
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card-container');

    const showCards = () => {
        const triggerHeight = window.innerHeight * 0.8;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerHeight) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', showCards);
    showCards();  // Pour s'assurer que les cartes visibles dès le début s'affichent
});

document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skill-bar .skill-level');
    const skillCircles = document.querySelectorAll('.professional-skills svg circle:nth-child(2)');
    const skillSections = document.querySelectorAll('.skill-circle, .technical-skills');

    const animateSkills = () => {
        const triggerHeight = window.innerHeight * 0.8;

        skillSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerHeight) {
                section.classList.add('show');

                // Pour les barres de progression
                skillBars.forEach(bar => {
                    const percent = bar.getAttribute('data-percent');
                    bar.style.width = percent + '%'; // Set width based on data-percent
                });

                // Pour les cercles
                skillCircles.forEach(circle => {
                    const percent = circle.getAttribute('data-percent');
                    const totalLength = circle.getTotalLength();
                    const offset = totalLength * (1 - percent / 100); // Calculate the stroke-dashoffset based on the percentage
                    circle.style.strokeDashoffset = offset;
                });
            } else {
                section.classList.remove('show');

                // Reset animation when out of view
                skillBars.forEach(bar => {
                    bar.style.width = '0%'; // Reset width
                });

                skillCircles.forEach(circle => {
                    circle.style.strokeDashoffset = '440'; // Reset circle
                });
            }
        });
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills();  // Trigger animation for visible elements on load
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.animate');

    const showSections = () => {
        const triggerHeight = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerHeight) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', showSections);
    showSections();  // Pour s'assurer que les éléments visibles dès le début s'affichent
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.animate');

    const showSections = () => {
        const triggerHeight = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerHeight) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', showSections);
    showSections();  // Pour s'assurer que les éléments visibles dès le début s'affichent
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.footer-section');

    const showSections = () => {
        const triggerHeight = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerHeight) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', showSections);
    showSections();  // Assure que les sections visibles dès le début s'affichent
});
