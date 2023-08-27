// DOM selection

// 1. document.getElementById() -> mengembalikan element

const judul = document.getElementById("judul");

judul.style.color = "red";
judul.style.backgroundColor = "#ccc";

judul.innerHTML = "Ardy Wirasaputra"




// 2. document.getElementsByTagName() -> mengembalikan HTMLCollection -> berbentuk array -> tidak bisa langsung manipulation (harus dengan index seperti array)

const paragraphs = document.getElementsByTagName("p");

// jika manipulasi semua tag yang sama harus menggunakan loop

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = "lightblue";
}

// jika hanya ada 1 tag atau memang hanya menyeleksi 1 tag tetap harus dengan index

const heading1 = document.getElementsByTagName("h1")[0];

heading1.style.fontSize = "50px";




// 3. document.getElementsByClassName() -> mengembalikan HTMLCollection -> berbentuk array -> tidak bisa langsung manipulation (harus dengan index seperti array)

// jika hanya ada 1 tag atau memang hanya menyeleksi 1 tag tetap harus dengan index

const paragraph1 = document.getElementsByClassName("p1")[0];

paragraph1.innerText = "Ini diubah dari javascript";




// 4. document.querySelector() -> mengembalikan element node pertama

const p4 = document.querySelector("#b p")
p4.style.color = "red";
p4.style.fontSize = "2em";

const li2 = document.querySelector("section#b ul li:nth-child(2)")
li2.style.backgroundColor = "orange";




// 5. document.querySelectorAll() -> mengembalikan nodeList -> berbentuk array -> tidak bisa langsung dimanipulasi (harus dengan index seperti array)

const ul = document.querySelectorAll("ul");
for (let i = 0; i < ul.length; i++) {
    ul[i].style.color = "green";
    ul[i].style.fontWeight = "bold";
}




// CARA MENGUBAH NODE ROOT

const sectionB = document.getElementById("b");
const item1 = sectionB.querySelector("li");

item1.style.backgroundColor = "yellow";