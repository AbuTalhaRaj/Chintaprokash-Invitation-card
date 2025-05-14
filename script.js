
document.getElementById("openBtn").addEventListener("click", function () {
  const flap = document.getElementById("flap");
  const letter = document.querySelector(".letter");
  flap.style.transform = "rotateX(-180deg)";
  letter.style.opacity = "1";
});
