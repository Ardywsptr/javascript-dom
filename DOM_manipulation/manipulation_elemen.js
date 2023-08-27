// manipulation elemen


// element.innerHTML -> meyisipkkan elemen html beserta isi pada elemen yg ditentukan -> bersifat menimpa (mengubah seluruh elemen di dalam nya)

const sectionA = document.getElementById("a");

sectionA.innerHTML = "<em>ditimpa oleh innerHTML</em>"

// element.innerText -> menyisipkan hanya teks pada elemen yg ditentukan -> bersifat menimpa (mengubah seluruh elemen di dalamnya)

const em = document.querySelector("em")
em.innerText = "ditimpa oleh innerText"

// element.style.<property> -> menyisipkan style css pada elemen yg ditentukan -> jika properti terdapat dua kata maka gunakan camelCase -> nilai dari properti menggunakan tanda petik seperti string

sectionA.style.textAlign = "center";
sectionA.style.fontWeight = "bold";
sectionA.style.textTransform = "uppercase";

// element.setAttribute(nama, nilai) - menyisipkan attribute

em.setAttribute("id", "teksMiring");
em.setAttribute("name", "teksMiring");

// element.getAttribute(nama, nilai) - mendapatkan attribute

em.getAttribute("id", "teksMiring")

// element.removeAttribute(nama, nilai) - menghapus attribute

em.removeAttribute("name", "teksMiring");

// element.classList.add() -> menambahkan class barru dan tidak menimpa class yg lain

em.setAttribute("class", "teksMiring");

em.classList.add("teksMiring2");
em.classList.add("teksMiring3");

// elemet.classList.remove() -> menghapus salah satu class

em.classList.remove("teksMiring3");

// element.classList.toggle() -> jika tidak maka tambahkan, dan jika ada maka hapus atau hilangkan

em.classList.toggle("darkMode");

// element.classList.contains() -> mencari class yg ditentukan apakah ada atau tidak -> mengambalikan boolean

em.classList.contains("teksMiring2"); /** true */

// element.classList.replace("lama", "baru") -> menggantikan class

em.classList.replace("teksMiring2", "teksMiringDua")