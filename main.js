/**
 * Calculate and display tip and total amount
 * @returns {boolean} Prevents form from submitting
 */
function calculateTip() {
  const bill = parseFloat(document.getElementById('billAmount').value);
  const rate = parseFloat(document.getElementById('tipRate').value);
  const resultEl = document.getElementById('tipResult');

  if (isNaN(bill) || isNaN(rate)) {
    resultEl.innerText = 'Please enter valid bill amount and tip percentage.';
  } else {
    const tip = bill * (rate / 100);
    const total = bill + tip;
    resultEl.innerText = `Tip: $${tip.toFixed(2)}  |  Total: $${total.toFixed(2)}`;
  }
  return false;
}
