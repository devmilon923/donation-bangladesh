const historyButton = document.getElementById("history-button");
const donationButton = document.getElementById("donation-button");
const donationTab = document.getElementById("donation-tab");
const historyTab = document.getElementById("history-tab");
let myBalance = document.getElementById("my-balance");
const donationAmount1 = document.getElementById("donation-amount-1");
const donationAmount2 = document.getElementById("donation-amount-2");
const donationAmount3 = document.getElementById("donation-amount-3");

const noakhaliTittle = document.getElementById("noakhali-tittle").innerText;
const feniTittle = document.getElementById("feni-tittle").innerText;
const aidTittle = document.getElementById("aid-tittle").innerText;

const noakhaliInput = document.getElementById("noakhali-input");
const feniInput = document.getElementById("feni-input");
const aidInput = document.getElementById("aid-input");

const noakhaliBtn = document.getElementById("noakhali-donation-button");
const feniBtn = document.getElementById("feni-donation-button");
const aidBtn = document.getElementById("aid-donation-button");

function submitDonation(donationAmount, areaAmount, subject) {
  if (
    parseInt(myBalance.innerText) >= parseInt(donationAmount.value) &&
    parseInt(donationAmount.value) > 0
  ) {
    areaAmount.innerText =
      parseInt(donationAmount.value) + parseInt(areaAmount.innerText);
    myBalance.innerText =
      parseInt(myBalance.innerText) - parseInt(donationAmount.value);
    my_modal_1.showModal();


  } else {
    alert("Invalid amount");
  }
}

noakhaliBtn.addEventListener("click", function () {
  submitDonation(noakhaliInput, donationAmount1, noakhaliTittle);
});
feniBtn.addEventListener("click", function () {
  submitDonation(feniInput, donationAmount2, feniTittle);
});

aidBtn.addEventListener("click", function () {
  submitDonation(aidInput, donationAmount3, aidTittle);
});

historyButton.addEventListener("click", function () {
  historyButton.classList.add("bg-lime-300", "focus:bg-lime-300");
  donationButton.classList.remove("bg-lime-300", "focus:bg-lime-300");

  historyTab.classList.remove("hidden");
  donationTab.classList.add("hidden");
});
donationButton.addEventListener("click", function () {
  historyButton.classList.remove("bg-lime-300", "focus:bg-lime-300");

  donationButton.classList.add("bg-lime-300", "focus:bg-lime-300");
  historyTab.classList.add("hidden");
  donationTab.classList.remove("hidden");
});
