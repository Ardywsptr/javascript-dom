// konfirmasi = true;
// while (konfirmasi) {
//     // menangkap pilihan player
//     let player = prompt("pilih: gajah, semut, orang!");

//     // menangkap pilihan player dengan bilangan random
//     let komputer = Math.random();

//     if (komputer < 0.34) {
//         komputer = "gajah";
//     } else if (komputer >= 0.4 && komputer < 0.67) {
//         komputer = "orang";
//     } else {
//         komputer = "semut";
//     }

//     // menentukan rules  
//     let hasil = "";
//     if (player == komputer) {
//         hasil = "SERI!";
//     } else if (player == "gajah") {
//         if (komputer == "orang") {
//             hasil = "kamu MENANG!";
//         } else {
//             hasil = "KALAH!";
//         }
//     } else if (player == "semut") {
//         if (komputer == "gajah") {
//             hasil = "kamu MENANG!";
//         } else {
//             hasil = "KALAH!";
//         }
//     } else if (player == "orang") {
//         if (komputer == "semut") {
//             hasil = "kamu MENANG!";
//         } else {
//             hasil = "kamu KALAH!";
//         }
//     } else {
//         hasil = "kata yang anda masukan salah";
//     }

//     alert(`kamu memilih: ${player} dan komputer memilih: ${komputer} \nmaka hasilnya: ${hasil}`)

//     konfirmasi = confirm("Apakah anda ingin main lagi?");
// }

// alert("terima kasih sudah bermain!")





// ========================================================================================================




function getPilihanComputer() {
    // menangkap pilihan player dengan bilangan random
    const Comp = Math.random();

    if (Comp < 0.34) return "gajah";
    if (Comp >= 0.4 && Comp < 0.67) return "orang";
    return "semut";
}

function getHasil(Comp, player) {
    // menentukan rules  
    if (player == Comp) return "SERI!";
    if (player == "gajah") return (Comp == "orang") ? "MENANG!" : "KALAH!";
    if (player == "semut") return (Comp == "gajah") ? "MENANG!" : "KALAH!";
    if (player == "orang") return (Comp == "semut") ? "MENANG!" : "KALAH!";
}

//===================================>
//== CARA BAR BAR, MENULIS 3x EVENT =>
//===================================>

// const pGajah = document.querySelector(".gajah");

// pGajah.addEventListener("click", () => {
//     const pilihanComp = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;

//     const hasil = getHasil(pilihanComp, pilihanPlayer);

//     const imgComputer = document.querySelector(".img-komputer");

//     imgComputer.setAttribute("src", `img/${pilihanComp}.png`)

//     const info = document.querySelector(".info");
//     info.innerHTML = `${hasil}`;

//     console.log(`comp: ${pilihanComp}, player: ${pilihanPlayer}`);
//     console.log(`hasil: ${hasil}`);

// })

// const pOrang = document.querySelector(".orang");

// pOrang.addEventListener("click", () => {
//     const pilihanComp = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;

//     const hasil = getHasil(pilihanComp, pilihanPlayer);

//     const imgComputer = document.querySelector(".img-komputer");

//     imgComputer.setAttribute("src", `img/${pilihanComp}.png`)

//     const info = document.querySelector(".info");
//     info.innerHTML = `${hasil}`;

//     console.log(`comp: ${pilihanComp}, player: ${pilihanPlayer}`);
//     console.log(`hasil: ${hasil}`);

// })

// const pSemut = document.querySelector(".semut");

// pSemut.addEventListener("click", () => {
//     const pilihanComp = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;

//     const hasil = getHasil(pilihanComp, pilihanPlayer);

//     const imgComputer = document.querySelector(".img-komputer");

//     imgComputer.setAttribute("src", `img/${pilihanComp}.png`)

//     const info = document.querySelector(".info");
//     info.innerHTML = `${hasil}`;

//     console.log(`comp: ${pilihanComp}, player: ${pilihanPlayer}`);
//     console.log(`hasil: ${hasil}`);

// })



//=================================>
//== CARA TERBAIK, DENGAN LOOPING =>
//=================================>

const pilihan = document.querySelectorAll("li img");

pilihan.forEach(function (pil) {
    pil.addEventListener("click", () => {
        const pilihanComp = getPilihanComputer();
        const pilihanPlayer = pil.className;

        const hasil = getHasil(pilihanComp, pilihanPlayer);

        putar();

        setTimeout(() => {
            const pilihanComp = getPilihanComputer();
            const pilihanPlayer = pil.className;

            const hasil = getHasil(pilihanComp, pilihanPlayer);

            const imgComputer = document.querySelector(".img-komputer");

            imgComputer.setAttribute("src", `img/${pilihanComp}.png`)

            const info = document.querySelector(".info");
            info.innerHTML = `${hasil}`;

            console.log(`comp: ${pilihanComp}, player: ${pilihanPlayer}`);
            console.log(`hasil: ${hasil}`);
        }, 1000);
    })
})

// gambar berputar

function putar() {
    const imgComputer = document.querySelector(".img-komputer");

    const gambar = ["gajah", "orang", "semut"];

    let i = 0;

    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute("src", `img/${gambar[i++]}.png`);
        if (i == gambar.length) i = 0;
    }, 100);
}