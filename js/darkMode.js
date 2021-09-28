// Dark-Mode****************************************
let body = document.getElementById("body");
let main = document.getElementById("main");
let footer = document.getElementById("footer");
let pagos1 = document.querySelector("#pagos_1");
let pagos2 = document.querySelector("#pagos_2");
let pagos3 = document.querySelector("#pagos_3");
let pagos4 = document.querySelector("#pagos_4");
let pagos1Txt = document.querySelector("#pagos_1_text");
let pagos2Txt = document.querySelector("#pagos_2_text");
let pagos3Txt = document.querySelector("#pagos_3_text");
let pagos4Txt = document.querySelector("#pagos_4_text");
let prodDest = document.querySelector("#productosDestacados");
let prodDestTitle = document.querySelector("#prodDestTitle");
let promociones = document.querySelector("#promociones");
let prodD1T = document.querySelector(".prodD1T");
let prodD1P = document.querySelector(".prodD1P");
let prodD2T = document.querySelector(".prodD2T");
let prodD2P = document.querySelector(".prodD2P");
let prodD3T = document.querySelector(".prodD3T");
let prodD3P = document.querySelector(".prodD3P");
let prodD4T = document.querySelector(".prodD4T");
let prodD4P = document.querySelector(".prodD4P");
let prodD5T = document.querySelector(".prodD5T");
let prodD5P = document.querySelector(".prodD5P");
let prodD6T = document.querySelector(".prodD6T");
let prodD6P = document.querySelector(".prodD6P");
let prodD7T = document.querySelector(".prodD7T");
let prodD7P = document.querySelector(".prodD7P");
let prodD8T = document.querySelector(".prodD8T");
let prodD8P = document.querySelector(".prodD8P");
let prodD9T = document.querySelector(".prodD9T");
let prodD9P = document.querySelector(".prodD9P");
let prodD10T = document.querySelector(".prodD10T");
let prodD10P = document.querySelector(".prodD10P");
let prodD11T = document.querySelector(".prodD11T");
let prodD11P = document.querySelector(".prodD11P");
let prodD12T = document.querySelector(".prodD12T");
let prodD12P = document.querySelector(".prodD12P");
let prodM1T = document.querySelector(".prodM1T");
let prodM1P = document.querySelector(".prodM1P");
let prodM2T = document.querySelector(".prodM2T");
let prodM2P = document.querySelector(".prodM2P");
let prodM3T = document.querySelector(".prodM3T");
let prodM3P = document.querySelector(".prodM3P");
let prodM4T = document.querySelector(".prodM4T");
let prodM4P = document.querySelector(".prodM4P");
let prodM5T = document.querySelector(".prodM5T");
let prodM5P = document.querySelector(".prodM5P");
let prodM6T = document.querySelector(".prodM6T");
let prodM6P = document.querySelector(".prodM6P");

function darkMode() {
  main.classList.toggle("dark");
  footer.classList.toggle("dark");
  body.classList.toggle("dark");
  pagos1.classList.toggle("dark");
  pagos2.classList.toggle("dark");
  pagos3.classList.toggle("dark");
  pagos4.classList.toggle("dark");
  pagos1Txt.classList.toggle("dark");
  pagos2Txt.classList.toggle("dark");
  pagos3Txt.classList.toggle("dark");
  pagos4Txt.classList.toggle("dark");
  prodDest.classList.toggle("dark");
  prodDestTitle.classList.toggle("dark");
  promociones.classList.toggle("dark");
  prodD1T.classList.toggle("dark");
  prodD1P.classList.toggle("dark");
  prodD2T.classList.toggle("dark");
  prodD2P.classList.toggle("dark");
  prodD3T.classList.toggle("dark");
  prodD3P.classList.toggle("dark");
  prodD4T.classList.toggle("dark");
  prodD4P.classList.toggle("dark");
  prodD5T.classList.toggle("dark");
  prodD5P.classList.toggle("dark");
  prodD6T.classList.toggle("dark");
  prodD6P.classList.toggle("dark");
  prodD7T.classList.toggle("dark");
  prodD7P.classList.toggle("dark");
  prodD8T.classList.toggle("dark");
  prodD8P.classList.toggle("dark");
  prodD9T.classList.toggle("dark");
  prodD9P.classList.toggle("dark");
  prodD10T.classList.toggle("dark");
  prodD10P.classList.toggle("dark");
  prodD11T.classList.toggle("dark");
  prodD11P.classList.toggle("dark");
  prodD12T.classList.toggle("dark");
  prodD12P.classList.toggle("dark");
  prodM1T.classList.toggle("dark");
  prodM1P.classList.toggle("dark");
  prodM2T.classList.toggle("dark");
  prodM2P.classList.toggle("dark");
  prodM3T.classList.toggle("dark");
  prodM3P.classList.toggle("dark");
  prodM4T.classList.toggle("dark");
  prodM4P.classList.toggle("dark");
  prodM5T.classList.toggle("dark");
  prodM5P.classList.toggle("dark");
  prodM6T.classList.toggle("dark");
  prodM6P.classList.toggle("dark");

  //   if (main.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   }
  //   if (footer.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   }
  //   if (body.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   }
  //   if (pagos1.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   }
  //   if (pagos2.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   }
  //   if (pagos3.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   }
  //   if (pagos4.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   }
  //   if (pagos1Txt.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   }
  //   if (pagos2Txt.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   }
  //   if (pagos3Txt.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   }
  //   if (pagos4Txt.classList.contains("dark")) {
  //     localStorage.setItem("dark-mode", "true");
  //   } else {
  //     localStorage.setItem("dark-mode", "false");
  //   }
}
// if (localStorage.getItem("dark-mode") === "true") {
//   main.classList.add("dark");
// }
// if (localStorage.getItem("dark-mode") === "true") {
//   footer.classList.add("dark");
// }
// if (localStorage.getItem("dark-mode") === "true") {
//   body.classList.add("dark");
// }
// if (localStorage.getItem("dark-mode") === "true") {
//   pagos1.classList.add("dark");
// }
// if (localStorage.getItem("dark-mode") === "true") {
//   pagos2.classList.add("dark");
// }
// if (localStorage.getItem("dark-mode") === "true") {
//   pagos3.classList.add("dark");
// }
// if (localStorage.getItem("dark-mode") === "true") {
//   pagos4.classList.add("dark");
// }
// if (localStorage.getItem("dark-mode") === "true") {
//   pagos1Txt.classList.add("dark");
// }
// if (localStorage.getItem("dark-mode") === "true") {
//   pagos2Txt.classList.add("dark");
// }
// if (localStorage.getItem("dark-mode") === "true") {
//   pagos3Txt.classList.add("dark");
// }
// if (localStorage.getItem("dark-mode") === "true") {
//   pagos4Txt.classList.add("dark");
// } else {
//   main.classList.remove("dark");
// }

console.log(darkMode());
