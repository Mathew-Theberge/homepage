import "./style.css";

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    loader.classList.add("loader-hidden");
    setTimeout(() => {
        document.body.removeChild(loader);
    }, 500);
});
