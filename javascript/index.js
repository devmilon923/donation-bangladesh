document.getElementById("toggle-icon").addEventListener("click", function () {
  document.getElementById("mobile-manu").classList.toggle("hidden");
});

const dt = document.querySelectorAll("dt");
for (let element of dt) {
  // console.log(element)
  element.addEventListener("click", function () {
    const dd = element.getAttribute("aria-controls");
    // console.log(dd)
    const ddElement = document.getElementById(dd);
    // console.log(ddElement)
    const icon = element.querySelectorAll("i")[0];

    ddElement.classList.toggle("hidden");
    icon.classList.toggle("-rotate-180");
  });
}
