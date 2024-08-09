function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const financialYear = document.getElementById('financialYear').value;
    const ageCategory = document.getElementById('age').value;

    if (isNaN(income) || income <= 0) {
        alert("Please enter a valid income");
        return;
    }

    let tax = 0;

    // Tax calculations based on the financial year
    if (financialYear === '2023') {
        if (income <= 250000) tax = 0;
        else if (income <= 500000) tax = (income - 250000) * 0.05;
        else if (income <= 750000) tax = 12500 + (income - 500000) * 0.10;
        else if (income <= 1000000) tax = 37500 + (income - 750000) * 0.15;
        else if (income <= 1250000) tax = 75000 + (income - 1000000) * 0.20;
        else if (income <= 1500000) tax = 125000 + (income - 1250000) * 0.20 + 0.10 * (income - 1250000); // Surcharge for 12,50,001 to 15,00,000
        else tax = 187500 + (income - 1500000) * 0.30 + 0.10 * (income - 1500000); // Surcharge for above 15,00,000
    } else if (financialYear === '2024') {
        if (income <= 300000) tax = 0;
        else if (income <= 600000) tax = (income - 300000) * 0.05;
        else if (income <= 900000) tax = 15000 + (income - 600000) * 0.10;
        else if (income <= 1200000) tax = 45000 + (income - 900000) * 0.15;
        else if (income <= 1500000) tax = 90000 + (income - 1200000) * 0.20;
        else tax = 150000 + (income - 1500000) * 0.30;
    }

    // Apply standard deduction based on the regime
    const standardDeduction = financialYear === '2024' ? 75000 : 50000;
    tax = Math.max(tax - standardDeduction, 0); // Ensure tax doesn't go negative

    document.getElementById('result').innerHTML = `<h3>Your calculated tax is: ₹${tax.toFixed(2)}</h3>`;
}

 
