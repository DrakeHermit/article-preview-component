const shareBtn = document.getElementById("share");
const shareBtns = document.getElementById("shareBtns");
const shareBtnsActive = document.getElementById("shareActive");
const shareBtnsDesktop = document.getElementById("shareBtnsDesktop");

if (window.innerWidth > 1000) {
  shareBtnsDesktop.style.display = "none";
  console.log(window.innerWidth);
}

shareBtn.addEventListener("click", (e) => {
  shareBtns.style.zIndex = 1;
  shareBtns.style.opacity = 1;
  shareBtnsDesktop.style.display = "block";
  console.log("sss");
});

shareBtnsActive.addEventListener("click", () => {
  shareBtns.style.zIndex = -1;
  shareBtns.style.opacity = 1;
  shareBtnsDesktop.style.display = "none";
});
