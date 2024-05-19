const shareBtn = document.getElementById("share");
const btnList = document.getElementById("shareBtns");
const shareBtnsActive = document.getElementById("shareActive");
const shareBtnsDesktop = document.getElementById("shareBtnsDesktop");
const svgArrow = document.getElementById("arrow");

const viewportWidth = window.innerWidth;

if (viewportWidth < 600) {
  shareBtnsDesktop.style.display = "none";
  shareBtn.addEventListener("click", () => {
    btnList.style.zIndex = 1;
  });
  shareBtnsActive.addEventListener("click", () => {
    btnList.style.zIndex = -1;
  });
}

if (viewportWidth > 1000) {
  shareBtnsDesktop.style.display = "none";
  let clicked = 0;
  shareBtn.addEventListener("click", () => {
    clicked++;
    if (clicked % 2 === 0) {
      shareBtnsDesktop.style.display = "none";
      shareBtn.style.backgroundColor = "#ECF2F8";
      svgArrow.setAttribute("fill", "#6E8098");
    } else {
      shareBtnsDesktop.style.display = "block";
      shareBtn.style.backgroundColor = "#6E8098";
      svgArrow.setAttribute("fill", "white");
    }
  });
}
