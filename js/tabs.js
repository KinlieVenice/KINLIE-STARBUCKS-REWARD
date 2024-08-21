const rewardTabs = document.querySelectorAll(".rewardFav li");
const contents = document.querySelectorAll(".rewardFav__card");
const tabs = document.querySelector(".rewardFav ul:after");

rewardTabs.forEach((rewardTab) => {
  rewardTab.addEventListener("click", () => {
    removeActiverewardTab();
    rewardTab.classList.add("active");
    const activeContent = document.querySelector(`#${rewardTab.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
    // removeActiveTab();
    // tabs.classList.add("active");
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
// function removeActiveTab() {
//   tabs.forEach((tab) => {
//     tab.classList.remove("active");
//   });
// }
