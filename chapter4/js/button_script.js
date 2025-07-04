const isAgreed = document.querySelector("#check");
const btn = document.querySelector("#btn");

// isAgreed.addEventListener("change", () => {
//     btn.disabled = !isAgreed.checked;
// });

isAgreed.addEventListener("change", () => {
    if (isAgreed.checked === true) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});
