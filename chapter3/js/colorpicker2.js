const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

// 컬러 피커 조작 시 일련의 동작
const colorBg = () => {
    // 선택한 색을 배경으로 설정
    document.body.style.backgroundColor = color.value;

    // 컬러 코드 표시
    if (color.value === "#fff") {
        text.textContent = `컬러 코드 : ${color.value} (white)`;
    } else if (color.value === "#000") {
        text.textContent = `컬러 코드 : ${color.value} (black)`;
    } else {
        text.textContent = `컬러 코드 : ${color.value}`;
    }
};

// 컬러 피커가 변경되면 colorBg 실행
color.addEventListner("input", colorBg);
