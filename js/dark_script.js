const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (btn.textContent === "다크 모드로 만들기") {
        btn.textContent = "라이트 모드로 만들기";
    } else {
        btn.textContent = "다크 모드로 만들기";
    }
});
