const heading = document.querySelector("#heading");

const keyframes = {
    // opacity: [0, 1],
    // translate: ["0 50px", 0],
    // rotate: ["x 360deg", 0],
    // color: ["#f66","#fc2","#0bd","#0c6"]
    // color:["transparent","#fff"]
    borderRadius: ["20% 50% 50% 70%/50% 50% 70% 50%", "50% 20% 50% 50%/40% 40% 60% 60%", "50% 40% 20% 40%/40% 50% 50% 80%", "50% 50% 50% 20%/40% 40% 60% 60%"],
};
// 재생시간2000, 애니메이션 변화속도 타이밍 시작과 끝은 느리게
const options = { duration: 2000, easing: "ease", diration: "alternate", iterations: Infinity };
heading.animate(keyframes, options);
