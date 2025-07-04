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
    const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}원</p></div>`;
    menu.insertAdjacentHTML("beforeend", content);
    // 요소.insertAdjacentHTML('삽입위치',삽입 내용);
}

const lists_img = ["strawberry.jpg", "lime.jpg", "mango.jpg", "lemon.jpg", "fig.jpg", "apple.jpg"];
for (let i = 0; i < lists.length; i++) {
    const contents = `<div><img src='images/${lists_img[i]}'alt=""></div>`;
    menu.insertAdjacentHTML("beforeend", contents);
}

const strawberry = {
    name: "딸기",
    img: "strawberry.jpg",
    price: 4500,
};
console.log("1" + strawberry.name);
console.log("2" + strawberry["img"]);

const key = "name";
console.log("3" + strawberry.key);
console.log("4" + strawberry[key]);

const listss = [
    {
        name: "딸기",
        img: "strawberry.jpg",
        price: 4500,
    },
    {
        name: "라임",
        img: "lime.jpg",
        price: 4000,
    },
    {
        name: "망고",
        img: "mango.jpg",
        price: 5000,
    },
    {
        name: "레몬",
        img: "lemon.jpg",
        price: 4000,
    },
    {
        name: "무화과",
        img: "fig.jpg",
        price: 5000,
    },
    {
        name: "사과",
        img: "apple.jpg",
        price: 4000,
    },
];
console.log("5 " + listss[0].name);
for (let i = 0; i < listss.length; i++) {
    // const name = listss[i].name;
    // const img = listss[i].img;
    // const price = listss[i].price;
    const { name, img, price } = listss[i];
    const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}원</p></div>`;
    menu.insertAdjacentHTML("beforeend", content);
}
