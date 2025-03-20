// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) { // Check if themeToggle exists
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    });
}

// Simulate Real-Time Data Updates
setInterval(() => {
    document.getElementById('totalEmployees').textContent = Math.floor(Math.random() * 200);
    document.getElementById('totalClients').textContent = Math.floor(Math.random() * 100);
    document.getElementById('monthlyRevenue').textContent = `₹${Math.floor(Math.random() * 500000).toLocaleString()}`;
    document.getElementById('payrollDue').textContent = `₹${Math.floor(Math.random() * 100000).toLocaleString()}`;
    document.getElementById('pendingComplaints').textContent = Math.floor(Math.random() * 10);
    document.getElementById('expiringContracts').textContent = Math.floor(Math.random() * 5);
}, 5000);

// Employee Performance Data
const bestRatedEmployees = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Charlie Davis'];
const worstRatedEmployees = ['Eve White', 'Frank Green', 'Grace Black', 'Hank Blue', 'Ivy Yellow'];

setInterval(() => {
    const bestRatedList = document.getElementById('bestRatedEmployees');
    const worstRatedList = document.getElementById('worstRatedEmployees');

    if (bestRatedList && worstRatedList) { // Check if elements exist
        bestRatedList.innerHTML = bestRatedEmployees.map(emp => `<li>${emp}</li>`).join('');
        worstRatedList.innerHTML = worstRatedEmployees.map(emp => `<li>${emp}</li>`).join('');
    }
}, 5000);

// Revenue Trends Chart
const revenueCtx = document.getElementById('revenueChart');
if (revenueCtx) { // Check if canvas element exists
    const revenueChart = new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue (₹)',
                data: [100000, 120000, 90000, 150000, 130000, 160000],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow chart to adjust to container size
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Employee Distribution by Site Chart
const siteCtx = document.getElementById('siteChart');
if (siteCtx) { // Check if canvas element exists
    const siteChart = new Chart(siteCtx, {
        type: 'pie',
        data: {
            labels: ['Mumbai', 'Hyderabad', 'Delhi'],
            datasets: [{
                label: 'Employees',
                data: [50, 40, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(75, 192, 192, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow chart to adjust to container size
        }
    });
}