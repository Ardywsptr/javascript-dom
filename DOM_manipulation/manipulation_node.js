// manipulation node


// node.appendChild() -> menyisipkan elemen baru ke urutan terakhir pada parent tanpa menimpa elemen lain

const pBaru = document.createElement("p")
const textPBaru = document.createTextNode("paragraph baru");

pBaru.appendChild(textPBaru);

const parentP = document.getElementById("a");
parentP.appendChild(pBaru);


// node.insertBefore() -> menyisipkan elemen baru ke urutan yang ditentukan tanpa menimpa elemen lain

const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("item baru");

liBaru.appendChild(textLiBaru);

const parentLi = document.getElementsByTagName("ul")[0];
const li2 = document.getElementsByTagName("li")[1];

parentLi.insertBefore(liBaru, li2);


// parentnode.removeChild() -> menghapus salah satu elemen child pada parent

const link = document.querySelector("a");
parentP.removeChild(link);


// parentnode.replaceChild() -> mengganti salah satu elemen child pada parent

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2 = document.createElement("h2");
const judulBaru = document.createTextNode("Judul Baru!");

h2.appendChild(judulBaru);

sectionB.replaceChild(h2, p4);