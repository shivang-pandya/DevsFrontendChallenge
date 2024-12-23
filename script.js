const backToTopButton = document.createElement("button");
backToTopButton.id = "back-to-top";
backToTopButton.textContent = "⬆";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const countdownBox = document.createElement("div");
countdownBox.id = "countdown-box";
document.querySelector("#main-header").appendChild(countdownBox);

function updateCountdown() {
    const now = new Date();
    const nextSolstice = new Date(
        now.getMonth() === 11 && now.getDate() >= 21
            ? `${now.getFullYear() + 1}-12-21T00:00:00`
            : `${now.getFullYear()}-12-21T00:00:00`
    );
    const timeLeft = nextSolstice - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownBox.innerHTML = `Time until next Winter Solstice: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener("DOMContentLoaded", () => {
    const backToTopLink = document.querySelector("#main-footer a[href='#main-header']");
    
    if (backToTopLink) {
        backToTopLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

const sections = document.querySelectorAll("section");
sections.forEach((section, index) => {
    const delay = index * 0.5;
    section.style.animationDelay = `${delay}s`;
    section.style.animationName = index % 2 === 0 ? "slideIn" : "slideRight";
});

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes slideRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`, styleSheet.cssRules.length);

function createSnowflakes() {
    const snowflakeContainer = document.createElement("div");
    snowflakeContainer.id = "snowflake-container";
    document.body.appendChild(snowflakeContainer);

    setInterval(() => {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random();

        snowflakeContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }, 200);
}

createSnowflakes();