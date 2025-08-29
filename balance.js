let balance = 0;

function deposit() {
  const depositInput = document.getElementById('depositAmount');
  const amount = parseFloat(depositInput.value);
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    depositInput.value = '';
    alert(`Deposited \u20B9${amount.toFixed(2)}`);
  } else {
    alert("Enter a valid deposit amount");
  }
}

function withdraw() {
  const withdrawInput = document.getElementById('withdrawAmount');
  const amount = parseFloat(withdrawInput.value);
  if (!isNaN(amount) && amount > 0) {
    if (amount <= balance) {
      balance -= amount;
      withdrawInput.value = '';
      alert(`Withdrew \u20B9${amount.toFixed(2)}`);
    } else {
      alert("Insufficient balance");
    }
  } else {
    alert("Enter a valid withdraw amount");
  }
}

function showBalance() {
  const display = document.getElementById('balanceDisplay');
  display.innerHTML = `\u20B9${balance.toFixed(2)}`;
}
