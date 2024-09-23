

const historyButton = document.getElementById("history-button");
const donationButton = document.getElementById("donation-button");
const donationTab = document.getElementById("donation-tab");
const historyTab = document.getElementById("history-tab");

historyButton.addEventListener("click", function () {
  historyButton.classList.add("bg-lime-300", "focus:bg-lime-300");
  donationButton.classList.remove("bg-lime-300", "focus:bg-lime-300");

  historyTab.classList.remove('hidden')
  donationTab.classList.add('hidden')
});
donationButton.addEventListener("click", function () {
  historyButton.classList.remove("bg-lime-300", "focus:bg-lime-300");

  donationButton.classList.add("bg-lime-300", "focus:bg-lime-300");
  historyTab.classList.add('hidden')
  donationTab.classList.remove('hidden')
});
