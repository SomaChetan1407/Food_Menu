let btw = document.querySelector("#mode");
let mode = "dark";

btw.addEventListener("click", () => {
    if (mode === "dark") {
        mode = "light";
        let bg = document.querySelector(`body`);
        bg.style.backgroundcolor = "rgb(255, 255, 255)";
    }
    else {
        mode = "dark";
        let bg = document.querySelector(`body`);
        bg.style.backgroundColor = "rgb(20, 20, 20)";
    }
    console.log(mode);
})