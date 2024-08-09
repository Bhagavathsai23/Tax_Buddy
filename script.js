function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
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

    // Simple tax calculation logic based on age category and financial year
    if (financialYear === '2024' && ageCategory === 'below60') {
        
        if (income <= 250000) {
            tax = 0; // No tax for income up to ₹2,50,000
        } else if (income <= 500000) {
            tax = (income - 250000) * 0.05; // 5% tax for income between ₹2,50,001 and ₹5,00,000
        } else if (income <= 750000) {
            tax = 12500 + (taxableIncome - 500000) * 0.1; // 10% tax for income between ₹5,00,001 and ₹7,50,000
        } else if (Income <= 1000000) {
            tax = 37500 + (income - 750000) * 0.15; // 15% tax for income between ₹7,50,001 and ₹10,00,000
        } else if (income <= 1250000) {
            tax = 75000 + (income - 1000000) * 0.2; // 20% tax for income between ₹10,00,001 and ₹12,50,000
        } else if (income <= 1500000) {
            tax = 125000 + (income - 1250000) * 0.25; // 25% tax for income between ₹12,50,001 and ₹15,00,000
        } else {
            tax = 187500 + (income - 1500000) * 0.3; // 30% tax for income above ₹15,00,000
        }

    // Tax slabs for senior citizens (60 to 79 years)
       } else if (age >= 60 && age < 80) {
        if iIncome <= 300000) {
            tax = 0; // No tax for income up to ₹3,00,000
        } else if (income <= 500000) {
            tax = (income - 300000) * 0.05; // 5% tax for income between ₹3,00,001 and ₹5,00,000
        } else if (income <= 750000) {
            tax = 10000 + (income - 500000) * 0.1; // 10% tax for income between ₹5,00,001 and ₹7,50,000
        } else {
            // Continue similar calculations for higher slabs
        }

    // Tax slabs for super senior citizens (80 years and above)
    } else {
        if (Income <= 500000) {
            tax = 0; // No tax for income up to ₹5,00,000
        } else if (income <= 750000) {
            tax = (income - 500000) * 0.1; // 10% tax for income between ₹5,00,001 and ₹7,50,000
        } else {
            // Continue similar calculations for higher slabs
        }
    }

    return tax;
}
// Additional conditions for other financial years and age categories
    // ...

    document.getElementById('result').innerHTML = `<h3>Your calculated tax is: ₹${tax.toFixed(2)}</h3>`;
}
 
