/* 로딩에서 화면으로 이동====================================== */
const loadingAreaGrey = document.querySelector("#loading");
const loadingAreaGreen = document.querySelector("#loading-screen");
const loadingText = document.querySelector("#loading p");

window.addEventListener("load", () => {
    // 로딩 중(회색 스크린)
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: "hidden",
        },
        {
            duration: 2000,
            delay: 1200,
            easing: "ease",
            fill: "forwards",
        }
    );
    // 로딩 중(연녹색 스크린)
    loadingAreaGreen.animate({ translate: ["0 100vh", "0 0", "0 -100vh"] }, { duration: 2000, delay: 800, easing: "ease", fill: "forwards" });
    // 로딩 중 텍스트
    loadingText.animate(
        [
            { opacity: 1, offset: 0.8 },
            { opacity: 0, offset: 1 },
        ],
        { duration: 1200, easing: "ease", fill: "forwards" }
    );
});

/* 이미지 갤러리====================================== */
const mainImage = document.querySelector(".gallery-image img");
const thumbImages = document.querySelectorAll(".gallery-thumbnails img");

for (let i = 0; i < thumbImages.length; i++) {
    thumbImages[i].addEventListener("mouseover", (event) => {
        console.log(thumbImages[i]);
        console.log(event.target.src);
        mainImage.src = event.target.src;
        mainImage.animate({ opacity: [0, 1] }, 500);
    });
}
thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener("mouseover", (event) => {
        mainImage.src = event.target.src;
        mainImage.animate({ opacity: [0, 1] }, 500);
    });
});
/* 슬라이드 메뉴====================================== */
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector("#menu-panel");
const menuItems = document.querySelectorAll("#menu-panel li");
const menuOptions = {
    duration: 1400,
    easing: "ease",
    fill: "forwards",
};
// 메뉴열기
menuOpen.addEventListener("click", () => {
    console.log("메뉴열기");
    menuPanel.animate({ translate: ["100vw", 0] }, menuOptions);
    // 링크를 하나씩 순서대로 표시
    menuItems.forEach((menuItem, index) => {
        menuItem.animate({ opacity: [0, 1], translate: ["2rem", 0] }, { duration: 2400, delay: 300 * index, easing: "ease", fill: "forwards" });
    });
});
// 메뉴 닫기
menuClose.addEventListener("click", () => {
    menuPanel.animate({ translate: [0, "100vw"] }, menuOptions);
    menuItems.forEach((menuItem) => {
        menuItem.animate({ opacity: [1, 0] }, menuOptions);
    });
});
/* 스크롤로 요소 표시====================================== */
// 관찰 대상이 범위 안에 들어오면 실행하는 동작
const animateFade = (entries, obs) => {
    console.log("부드럽게");
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ["blur(.4rem)", "blur(0)"],
                },
                {
                    duration: 2000,
                    easing: "ease",
                    fill: "forwards",
                }
            );
            obs.unobserve(entry.target);
        }
    });
};
// 관찰 설정
const fadeObserver = new IntersectionObserver(animateFade);
// .fadein을 관찰하도록 지시
const fadeElements = document.querySelectorAll(".fadein");
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});
