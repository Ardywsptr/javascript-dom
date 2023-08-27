const p3 = document.querySelector(".p3");

function gantibgp3() {
    p3.style.backgroundColor = "blue";
}

//==============================================================>
//== event handler - inline HTML attribute (TIDAK DISARANKAN) ==>
//==============================================================>

// .. sudah di tambahkan di HTML ..



//====================================>
//== event handler - element method ==>
//====================================>

const p2 = document.querySelector(".p2");
p2.onclick = gantibgp2;

function gantibgp2() {
    p2.style.backgroundColor = "red";
}



//===================================>
//== addEventListener (DISARANKAN) ==>
//===================================>

const p4 = document.querySelector("section#b p");

p4.addEventListener("click", function () {
    const ul = document.querySelector("section#b ul");

    const liBaru = document.createElement("li");
    const textLiBaru = document.createTextNode("item baru");

    liBaru.appendChild(textLiBaru);

    ul.appendChild(liBaru);
})