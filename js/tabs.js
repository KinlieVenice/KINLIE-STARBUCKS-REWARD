const rewardTabs = document.querySelectorAll(".rewardFav li");
const contents = document.querySelectorAll(".rewardFav__card");
let botLine = document.querySelector(".reward__line");
let indexValue = 0;
let leftPos = 0;

// for bottom line
rewardTabs.forEach((rewardTab, index) => {
  rewardTab.addEventListener("click", () => {
    indexValue = index;
    console.log(indexValue);
    calcLeftPos();
    botLine.style.left = leftPos + "%";
    leftPos = 0;
  });
});

function calcLeftPos() {
  for (let x = 0; x < indexValue; x++) {
    leftPos += 20;
  }
  console.log(leftPos);
}

// for content
rewardTabs.forEach((rewardTab) => {
  rewardTab.addEventListener("click", () => {
    removeActiverewardTab();
    rewardTab.classList.add("active");
    const activeContent = document.querySelector(`#${rewardTab.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiverewardTab() {
  rewardTabs.forEach((rewardTab) => {
    rewardTab.classList.remove("active");
  });
}
function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
