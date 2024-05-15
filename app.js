const shareBtn = document.getElementById("share");
const shareBtns = document.getElementById("shareBtns");
const shareBtnsActive = document.getElementById("shareActive");

shareBtn.addEventListener("click", (e) => {
  shareBtns.style.zIndex = 1;
  shareBtns.style.opacity = 1;
  console.log("sss");
});

shareBtnsActive.addEventListener("click", () => {
  shareBtns.style.zIndex = -1;
  shareBtns.style.opacity = 1;
});
