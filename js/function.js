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

  if (main.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (footer.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (pagos1.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (pagos2.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (pagos3.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (pagos4.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (pagos1Txt.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (pagos2Txt.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (pagos3Txt.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (pagos4Txt.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
}
if (localStorage.getItem("dark-mode") === "true") {
  main.classList.add("dark");
}
if (localStorage.getItem("dark-mode") === "true") {
  footer.classList.add("dark");
}
if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark");
}
if (localStorage.getItem("dark-mode") === "true") {
  pagos1.classList.add("dark");
}
if (localStorage.getItem("dark-mode") === "true") {
  pagos2.classList.add("dark");
}
if (localStorage.getItem("dark-mode") === "true") {
  pagos3.classList.add("dark");
}
if (localStorage.getItem("dark-mode") === "true") {
  pagos4.classList.add("dark");
}
if (localStorage.getItem("dark-mode") === "true") {
  pagos1Txt.classList.add("dark");
}
if (localStorage.getItem("dark-mode") === "true") {
  pagos2Txt.classList.add("dark");
}
if (localStorage.getItem("dark-mode") === "true") {
  pagos3Txt.classList.add("dark");
}
if (localStorage.getItem("dark-mode") === "true") {
  pagos4Txt.classList.add("dark");
} else {
  main.classList.remove("dark");
}

console.log(darkMode);
