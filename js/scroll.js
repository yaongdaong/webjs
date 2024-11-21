const getScrollPercent = () => {
    // 스크롤 양
    const scrolled = window.scrollY;
    // 페이지 전체 높이
    const pageHeight = document.documentElement.scrollHeight;
    // 표시 영역 높이
    const viewHeight = document.documentElement.clientHeight;
    // 스크롤한 비율
    const percentage = scrolled / (pageHeight - viewHeight) * 100;
    // 프로그래스 바의 폭 설정
    document.querySelector("#bar").style.width = `${percentage}%`;
};
window.addEventListener("scroll", getScrollPercent);
