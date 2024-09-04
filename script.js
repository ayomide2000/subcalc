function calculateSavings() {
    const cost = parseFloat(document.getElementById('subscription-cost').value);
    const users = parseInt(document.getElementById('num-users').value);
    
    if (isNaN(cost) || isNaN(users) || users <= 0) {
        document.getElementById('result').innerText = 'Please enter valid values.';
        return;
    }
    
    const savings = (cost / users).toFixed(2);
    document.getElementById('result').innerText = `Each user saves ₦${savings} per month.`;
}

