const inputcolor1 = document.querySelector(".warna1 input");
const inputcolor2 = document.querySelector(".warna2 input");
const warna1 = document.querySelectorAll(".warna1-color");
const textwarna1 = document.querySelectorAll(".warna1-textcolor");
const warna2 = document.querySelectorAll(".warna2-color");
const textwarna2 = document.querySelectorAll(".warna2-textcolor");
inputcolor1.oninput = () => {
    warna1.forEach(warna => {
        warna.style.backgroundColor = inputcolor1.value;
    });
    textwarna1.forEach(textwarna => {
        textwarna.style.color = inputcolor1.value;
    })
}

inputcolor2.oninput = () => {
    warna2.forEach(warna => {
        warna.style.backgroundColor = inputcolor2.value;
    });
    textwarna2.forEach(textwarna => {
        textwarna.style.color = inputcolor2.value;
    })
}