const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tipPercent");
const splitInput = document.getElementById("splitCount");

const tipAmountText = document.getElementById("tipAmount");
const totalAmountText = document.getElementById("totalAmount");
const splitAmountText = document.getElementById("splitAmount");

const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const tipButtons = document.querySelectorAll(".tip-btn");

calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);
  const split = parseInt(splitInput.value);

  if (isNaN(bill) || bill <= 0 || isNaN(tipPercent) || tipPercent < 0 || isNaN(split) || split < 1) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const totalAmount = bill + tipAmount;
  const perPerson = totalAmount / split;

  tipAmountText.textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
  totalAmountText.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
  splitAmountText.textContent = `Amount per Person: $${perPerson.toFixed(2)}`;
});

clearBtn.addEventListener("click", () => {
  billInput.value = "";
  tipInput.value = "";
  splitInput.value = "1";
  tipAmountText.textContent = "Tip Amount: $0.00";
  totalAmountText.textContent = "Total Amount: $0.00";
  splitAmountText.textContent = "Amount per Person: $0.00";
});

tipButtons.forEach(button => {
  button.addEventListener("click", () => {
    tipInput.value = button.getAttribute("data-tip");
  });
});
