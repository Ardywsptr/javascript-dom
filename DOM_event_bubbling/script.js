// event handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", () => {
//     card.style.display = "none";
// })


// DOM traversal
// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener("click", (e) => {
//         // close[i].parentElement.style.display = "none";
//         e.target.parentElement.style.display = "none";
//     })
// }

// DOM traversal best practice looping
// const close = document.querySelectorAll(".close");

// close.forEach((el) => {
//     el.addEventListener("click", (e) => {
//         e.target.parentElement.style.display = "none";
//         e.preventDefault();
//         console.log(e);
//     });
// });


// DOM Event Bubbling
// const close = document.querySelectorAll(".close");
// const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//     card.addEventListener("click", () => {
//         alert("ok");
//     })
// });

// close.forEach((el) => {
//     el.addEventListener("click", (e) => {
//         e.target.parentElement.style.display = "none";
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });


// cara memanfaatkan event bubbling ketika ada elemen baru yg ditambahkan tanpa script -> dengan cara tambahkan event nya pada parent pembungkusnya (container)

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    if (e.target.className == "close") {
        e.target.parentElement.style.display = "none";
    }
})