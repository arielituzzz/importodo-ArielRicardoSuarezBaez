// Dark-Mode****************************************

function darkMode() {
  // document.footer.classList.toggle("dark");
  main.classList.toggle("dark");
  footer.classList.toggle("dark");
  body.classList.toggle("dark");

  if (main.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (footer.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  }
  if (body.classList.contains("dark")) {
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
} else {
  main.classList.remove("dark");
}
