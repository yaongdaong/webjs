// 관찰 대상이 범위 안에 나타나면 실행하는 동작
const showKirin = (entries) => {
    console.log("기린입니다");
    console.log(entries[0].targetv );
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
