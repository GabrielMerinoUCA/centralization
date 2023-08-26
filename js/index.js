let binary = document.getElementById("binary-101");
let number = "";
for(let i = 0; i < 10000; i++) {
    number += Math.floor(Math.random() * 2) + " ";
}
binary.textContent = number;