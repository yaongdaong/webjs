const images = document.querySelectorAll(".gallery img");
const text = document.querySelector(".text");
const body = document.body;
images.forEach((image) => {
    image.addEventListener("mouseover", (event) => {
        text.textContent = event.target.alt;
        event.target.animate({ opacity: [0, 1] }, 500);
    });
});

images.forEach((image) => {
    image.addEventListener("mouseover", (evnet) => {
        body.style.backgroundImage = `url(${event.target.src})`;
        event.target.animate({ opacity: [0, 1] }, 500);
    });
});
