function calculateTax() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const income = parseFloat(document.getElementById('income').value);
    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } else if (income > 250000 && income <= 300000) {
        tax = (income - 250000) * 0.05;
    } else if (income > 300000 && income <= 700000) {
        tax = (income - 300000) * 0.05;
    } else if (income > 700000 && income <= 1000000) {
        tax = (400000 * 0.05) + (income - 700000) * 0.1;
    } else if (income > 1000000 && income <= 1200000) {
        tax = (400000 * 0.05) + (300000 * 0.1) + (income - 1000000) * 0.15;
    } else if (income > 1200000 && income <= 1500000) {
        tax = (400000 * 0.05) + (300000 * 0.1) + (200000 * 0.15) + (income - 1200000) * 0.2;
    } else {
        tax = (400000 * 0.05) + (300000 * 0.1) + (200000 * 0.15) + (300000 * 0.2) + (income - 1500000) * 0.3;
    }

    document.getElementById('result').innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Annual Income:</strong> INR ${income.toLocaleString('en-IN')}</p>
        <p><strong>The calculated tax is:</strong> INR ${tax.toFixed(2)}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('TaxBuddy is ready!');
});
