document.getElementById('tipPercentage').addEventListener('change', function() {
    const customTipInput = document.getElementById('customTip');
    if (this.value === 'custom') {
        customTipInput.style.display = 'block';
        customTipInput.value = '';
    } else {
        customTipInput.style.display = 'none';
    }
});

document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmountInput = document.getElementById('billAmount');
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = document.getElementById('tipPercentage').value;
    const customTipInput = document.getElementById('customTip');
    const customTip = parseFloat(customTipInput.value);
    const numPeople = parseInt(document.getElementById('numPeople').value) || 1;

    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount.');
        return;
    }

    let tip;
    if (tipPercentage === 'custom') {
        if (isNaN(customTip) || customTip < 0) {
            alert('Please enter a valid custom tip.');
            return;
        }
        tip = customTip;
    } else {
        tip = (billAmount * (parseFloat(tipPercentage) / 100));
    }

    const totalAmount = billAmount + tip;
    const amountPerPerson = (totalAmount / numPeople).toFixed(2);
    
    document.getElementById('tipAmount').innerText = `Tip Amount: $${tip.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
    document.getElementById('amountPerPerson').innerText = `Amount per Person: $${amountPerPerson}`;
    
    // Clear input values
    billAmountInput.value = '';
    customTipInput.value = '';
    document.getElementById('numPeople').value = 1;
    document.getElementById('tipPercentage').value = '15'; // Reset to default option
    customTipInput.style.display = 'none'; // Hide custom input
});
