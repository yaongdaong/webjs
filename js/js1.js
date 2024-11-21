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
const heading = document.querySelector("#heading");
const keyframes = {
    opacity: [0, 1],
    translate: ["0 50px", 0],
};
const options = {
    duration: 2000,
    easing: "ease",
};
heading.animate(keyframes, options  );

