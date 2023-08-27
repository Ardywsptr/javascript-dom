//====================================>
//== tambahkan bakcground color body =>
//====================================>

const tUbahWarna = document.getElementById("tUbahWarna");

tUbahWarna.addEventListener("click", () => {
    document.body.classList.toggle("yellowGreen");
});

//==============================================================>
//== tambahkan bakcground color body secara acak dengan tombol =>
//==============================================================>

const tAcakWarna = document.createElement("button");

const textTAcakWarna = document.createTextNode("acak warna");

tAcakWarna.appendChild(textTAcakWarna);

tAcakWarna.setAttribute("type", "button")

tUbahWarna.after(tAcakWarna);

tAcakWarna.onclick = function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    console.log(r, g, b);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

//===================================================================>
//== tambahkan bakcground color body secara acak dengan input range =>
//===================================================================>


const sMerah = document.getElementsByName("sMerah")[0];
const sHijau = document.getElementsByName("sHijau")[0];
const sBiru = document.getElementsByName("sBiru")[0];

sMerah.addEventListener("input", function () {
    let red = sMerah.value;
    let green = sHijau.value;
    let blue = sBiru.value;

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`

});

sHijau.addEventListener("input", function () {
    let red = sMerah.value;
    let green = sHijau.value;
    let blue = sBiru.value;

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`

});

sBiru.addEventListener("input", () => {
    let red = sMerah.value;
    let green = sHijau.value;
    let blue = sBiru.value;

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`

});

//===========================================================================>
//== tambahkan bakcground color body secara acak dengan posisi crusor mouse =>
//===========================================================================>


document.body.addEventListener("mousemove", (e) => {
    // posisi mouse -> clientX -> posisi mouse horizontal
    // posisi mouse -> clientY -> posisi mouse vertikal
    // console.log(e.clientX, e.clientY);

    // ukuran browser -> innerWidth -> ukuran lebar browser (document)
    // ukuran browser -> innerHeight -> ukuran tinggi browser (document)
    // console.log(window.innerWidth, window.innerHeight);

    const posisiX = Math.round((e.clientX /
        window.innerWidth) * 255);

    const posisiY = Math.round((e.clientY /
        window.innerHeight) * 255);

    console.log(posisiX, posisiY);

    document.body.style.backgroundColor = `rgb(${posisiX}, ${posisiY}, 100)`;

});