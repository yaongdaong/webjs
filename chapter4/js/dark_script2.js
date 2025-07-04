const btn = document.querySelector("#btn");
const content = document.querySelector("h1");

btn.addEventListener("click", () => {
  // btn이 클릭될 때마다 body에 dark-theme 클래스를 추가 / 제거
    document.body.classList.toggle("dark-theme");

    // 버튼 텍스트: '다크 모드'
    if (btn.textContent === "다크 모드") {
        // 클릭 후 '라이트 모드'로 변경
        btn.textContent = "라이트 모드";
        content.textContent = "라이트 모드로 변경됨";
    } else {
        // 버튼 텍스트: '라이트 모드'
        btn.textContent = "다크 모드";
        content.textContent = "다크 모드로 변경됨";
    }
});
