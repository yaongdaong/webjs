// 이미지마다 클래스 추가
// 1. 갤러리 클래스 찾기
const gallery = document.querySelector(".gallery");
// 2. div class="item" 12개 만들기
for (let i = 1; i <= 12; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
// img 12개 만들기
    const img = document.createElement("img");
    img.src = `images/img${i}.jpg`;
    img.alt = "";
// 이미지와 div추가
    itemDiv.appendChild(img);
    gallery.appendChild(itemDiv);
}

// 로딩 중인 이미지
const loading = document.querySelector("#loading");
// 화면 로드가 완료되면 #loading에 loaded 클래스 추가
// 로딩 이미지가 뜨다가 서서히 사라지게 처리
window.addEventListener("load", () => {
    loading.classList.add("loaded");
});
