/* window.alert("처음시작하는 자바스크립트");
객체.메서드(파라미터);
console.log("첨시작하는콘솔");
*/

// [컬러피커]
/* const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");


// 컬러 피커를 조작할 때의 일련의 동작
const colorBg = () => {
    // 선택한 색을 배경색으로 설정
    document.body.style.backgroundColor = color.value;

    // 컬러 코드 표시
    if (color.value === "#ffffff") {
        text.textContent === `컬러 코드 : ${color.value}(white)`;
    } else if (color.value === "#000000") {
        text.textContent === `컬러 코드 : ${color.value}(black)`;
    } else {
        text.textContent = `컬러 코드 : ${color.value}`;
    }
};
// 컬러 피커가 변경되면 colorBg 실행
color.addEventListener("input", colorBg);

console.log(document.querySelector("#colorPicker").value);
document.querySelector("#colorText").textContent = `컬러코드:${document.querySelector("#colorPicker").value}`;
document.querySelector("#colorText").style.fontSize = "3rem";
text.style.color = "green"; */
// document.querySelector("#colorText").innerHTML = "<h1>컬러코드짱:</h1>";

/* const message = (name,weather) => {
    return `${name}님,안녕하세요! 오늘은 ${weather}입니다.`;
};
console.log(message('Mana','좋은날씨'));
alert(message('타츠야'));
 */

// [로딩이미지]
/* const loading = document.querySelector("#loading");
window.addEventListener("load", () => {
    loading.classList.add("loaded");
}); */

// [다크모드]
/* const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    //혹시 버튼의 텍스트가 '다크 모드로 만들기'로 되어 있을 경우
    if (btn.textContent === "다크 모드로 만들기") {
        //클릭하면 '라이트 모드로 만들기'로 변경
        btn.textContent = "라이트 모드로 만들기";
        //그렇지 않은 경우('라이트 모드로 만들기'로 되어 있으면)
    } else {
        //클릭하면 '다크 모드로 만들기'로 돌아가기
        btn.textContent = "다크 모드로 만들기";
    }
});
*/

// [글자수세기]
/* const text = document.querySelector("#text");
const count = document.querySelector("#count");
text.addEventListener("keyup", () => {
    count.textContent = text.value.length;
    if (text.value.length > 100) {
        count.classList.add("alert");
    } else {
        count.classList.remove("alert");
    }
});
*/

// 버튼 상태 변경
/*const isAgreed = document.querySelector("#check");
const btn = document.querySelector("#btn");
isAgreed.addEventListener("change", () => {
    btn.disabled = !isAgreed.checked;
    console.log(isAgreed.checked);
});
*/

// 스크롤
/*const getScrollPercent = () => {
    // 스크롤 양
    const scrolled = window.scrollY;
    console.log(`${scrolled}스크롤했습니다.`);
    // 페이지 전체 높이
    const pageHeight = document.documentElement.scrollHeight;
    // 표시 영역 높이
    const viewHeight = document.documentElement.clientHeight;
    console.log(`페이지 높이 : ${pageHeight}, 표시 영역 높이 : ${viewHeight}`);
    // 스크롤한 비율
    const percentage = (scrolled / (pageHeight - viewHeight)) * 100;
    // 프로그래스 바의 폭 설정
    document.querySelector("#bar").style.width = `${percentage}%`;
};
window.addEventListener("scroll", getScrollPercent);
*/

//  5.1 이미지 메뉴 소개
/* menu라는 ID의 div를 menu라는 상수에 넣기
const menu = document.querySelector("#menu");
const lists = [
    { name: "딸기", img: "strawberry.jpg", price: 4500 },
    { name: "라임", img: "lime.jpg", price: 4000 },
    { name: "망고", img: "mango.jpg", price: 5000 },
    { name: "레몬", img: "lemon.jpg", price: 4000 },
    { name: "무화과", img: "fig.jpg", price: 5000 },
    { name: "사과", img: "apple.jpg", price: 4000 },
];
for (let i = 0; i < lists.length; i++) {
    const { name, img, price } = lists[i];
    // 삽입하고자 하는 콘텐츠를 상수 content에 넣기
    const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}원</p></div>`;
    menu.insertAdjacentHTML("beforeend", content);
}
*/

//  6.4 제목이 밑에서부터 떠오르는 것처럼 나타내기
/*const heading = document.querySelector("#heading");
const keyframes = {
    opacity: [0, 1],
    translate: ["0 50px", 0],
};
const options = {
    duration: 2000,
    easing: "ease",
};
heading.animate(keyframes, options);*/

// 6.8 제목에 사용할 수 있는 다양한 애니메이션
/*const heading = document.querySelector("#heading");
const keyframes = { opacity: [0, 1], rotate: ["x 360deg", 0] };
const options = { duration: 1000, easing: "ease" };
heading.animate(keyframes, options);*/

// 색이 변하는 제목 만들기
/* const heading = document.querySelector("#heading");
const keyframs = { color: ["#f66", "#fc2", "#0bd", "#0c6"] };
const options = { duration: 8000, direction: "alternate", iterations: Infinity };
heading.animate(keyframs, options); */

// 배경이 늘어나는 제목 만들기
/* const heading = document.querySelector("#heading");
const keyframes = { color: ["transparent", "#fff"], backgroundPosition: ["100% 0", "0 0"] };
const options = { duration: 1000, easing: "ease" };
heading.animate(keyframes, options); */

// 흐물흐물 움직이는 제목 만들기
/* const heading = document.querySelector("#heading");

const keyframes = { borderRadius: ["20% 50% 50% 70%/50% 50% 70% 50%", "50% 20% 50% 50%/40% 40% 60% 60%", "50% 40% 20% 40%/40% 50% 50% 80%", "50% 50% 50% 20%/40% 40% 60% 60%"] };
const options = {
    duration: 8000,
    direction: "alternate",
    iterations: Infinity,
};
heading.animate(keyframes, options); */

// 여러 이미지를 순서대로 표시하기
/* const items = document.querySelectorAll(".img-item");

for (let i = 0; i < items.length; i++) {
    const keyframes = {
        // 흐릿함이 사라지고 선명해지는 이미지 만들기
        filter: ["blur(20px)", "blur(0)"],
        // opacity: [0, 1],
        // 회전하는 이미지 만들기
        // rotate: ["x 90deg", 0],
        // 밑에서부터 떠오르는 것처럼 나타내는 이미지 만들기
        // translate: ['0 50px', 0],
        // 부드럽게 떨어지는 이미지 만들기
        // rotate: ['5deg', 0],
        // scale: [1.1, 1]
    };
    const options = {
        duration: 600,
        delay: i * 300,
        fill: "forwards",
    };
    items[i].animate(keyframes, options);
} */

// 6.13 스크롤과 애니메이션 조합하기
// 관찰 대상이 범위 안에 나타나면 실행하는 동작
const showKirin = (entries) => {
    const keyframes = {
        opacity: [0, 1],
        translate: ["200px 0", 0],
    };
    entries[0].target.animate(keyframes, 600);
};
// 관찰 로봇 설정
const kirinObserver = new IntersectionObserver(showKirin);

// #kirin을 관찰하도록 지시
kirinObserver.observe(document.querySelector("#kirin"));
