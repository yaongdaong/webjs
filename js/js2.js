/*
로딩에서 화면으로 이동
================================================ */
// const loadingAreaGrey = document.querySelector("#loading");
// const loadingAreaGreen = document.querySelector("#loading-screen");
// const loadingText = document.querySelector("#loading p");

// window.addEventListener("load", () => {
//     // 로딩 중(회색 스크린)
//     loadingAreaGrey.animate(
//         {
//             opacity: [1, 0],
//             visibility: "hidden",
//         },
//         {
//             duration: 2000,
//             delay: 1200,
//             easing: "ease",
//             fill: "forwards",
//         }
//     );
//     // 로딩 중(연녹색 스크린)
//     loadingAreaGreen.animate(
//         {
//             translate: ["0 100vh", "0 0", "0 -100vh"],
//         },
//         { duration: 2000, dealy: 800, easing: "ease", fill: "forwards" }
//     );
//     // 로딩 중 텍스트
//     loadingText.animate(
//         [
//             {
//                 opacity: 1,
//                 offset: 0.8,
//             },
//             {
//                 opacity: 0,
//                 offset: 1,
//             },
//         ],
//         {
//             duration: 1200,
//             easing: "ease",
//             fill: "forwards",
//         }
//     );
// });

// 흐릿한 화면을 서서히 선명하게 표시
// const loadingArea = document.querySelector("#loading");
// const loadingText1 = document.querySelector("#loading p");
// window.addEventListener("load", () => {
//     // 로딩 중(흐릿한 화면)
//     loadingArea.animate(
//         {
//             backdropFilter: ["blur(10px)", "blur(0)"],
//             background: ["rgba(238,221,136,1)", "rgba(238,221,136,0)"],
//             visibility: "hidden",
//         },
//         {
//             duration: 2000,
//             delay: 1200,
//             easing: "ease",
//             fill: "forwards",
//         }
//     );
//     // 로딩 중 텍스트
//     loadingText1.animate(
//         [
//             {
//                 opacity: 1,
//                 offset: 0.8,
//             },
//             {
//                 opacity: 0,
//                 offset: 1,
//             },
//         ],
//         {
//             duration: 1200,
//             easing: "ease",
//             fill: "forwards",
//         }
//     );
// });

// 로딩 겹치기 없앰
// document.addEventListener("DOMContentLoaded", () => {
//     const loadingElement = document.getElementById("loading");

//     // 2초 후 로딩 화면 숨기기 (예시)
//     setTimeout(() => {
//         loadingElement.classList.add("hidden");
//     }, 2000);
// });

// 화면 중앙에서 펼쳐짐
const loadingAreaLeft = document.querySelector("#loading-left");
const loadingAreaRight = document.querySelector("#loading-right");
const keyframes = {
    transform: ["scaleX(1)", "scaleX(0)"],
};
const options = {
    duration: 1000,
    easing: "ease",
    fill: "forwards",
};
window.addEventListener("load", () => {
    // 로딩 중(왼쪽)
    loadingAreaLeft.animate(keyframes, options);
    // 로딩 중(오른쪽)
    loadingAreaRight.animate(keyframes, options);
});

// 7.6 이미지 갤러리 - 커서를 갖다 댔을 때의 애니메이션
const mainImage = document.querySelector(".gallery-image img");
const thumbImages = document.querySelectorAll(".gallery-thumbnails img");
// console.log(thumbImages);
// for (let i = 0; i < thumbImages.length; i++) {
//     thumbImages[i].addEventListener("mouseover", (event) => {
//         mainImage.src = event.target.src;
//         mainImage.animate({ opacity: [0, 1] }, 500);
//     });
// }
// for문을 forEach로 변경
thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener("mouseover", (event) => {
        mainImage.src = event.target.src;
        mainImage.animate({ opacity: [0, 1] }, 500);
    });
});

// 커서를 갖다 댔을 때의 속성값 활용
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".picture img");
    const text = document.querySelector(".text");

    const newImagePaths = [
        "../images/col-hover-demo2_img1.jpg",
        "../images/col-hover-demo2_img2.jpg",
        "../images/col-hover-demo2_img3.jpg"
    ];

    // 이미지 경로 설정
    images.forEach((image, index) => {
        if (newImagePaths[index]) {
            console.log(`Setting src for image ${index}: ${newImagePaths[index]}`);
            image.src = newImagePaths[index];
        }
    });

    // 마우스 오버 이벤트 추가
    images.forEach((image) => {
        image.addEventListener("mouseover", (event) => {
            text.textContent = event.target.alt;
            event.target.animate({ opacity: [0.5, 1] }, { duration: 500 });
        });
    });
});