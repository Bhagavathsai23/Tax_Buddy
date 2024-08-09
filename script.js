function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;

    const taxableIncome = income - deductions;

    let tax = 0;
    if (taxableIncome <= 250000) {
        tax = 0;
    } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
        tax = 12500 + (taxableIncome - 500000) * 0.2;
    } else {
        tax = 112500 + (taxableIncome - 1000000) * 0.3;
    }

    document.getElementById('result').textContent = `Your Income Tax: ₹${tax}`;
}
