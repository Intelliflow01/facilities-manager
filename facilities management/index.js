// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  }
});

// Attendance Chart
const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
const attendanceChart = new Chart(attendanceCtx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Attendance (%)',
      data: [85, 80, 90, 88, 92, 85, 80],
      borderColor: '#007bff',
      fill: false,
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  }
});

// Payroll Chart
const payrollCtx = document.getElementById('payrollChart').getContext('2d');
const payrollChart = new Chart(payrollCtx, {
  type: 'bar',
  data: {
    labels: ['Paid', 'Pending'],
    datasets: [{
      label: 'Payroll (₹)',
      data: [500000, 125000],
      backgroundColor: ['#28a745', '#dc3545'],
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  }
});

// Simulate Real-Time Data Updates
setInterval(() => {
  document.getElementById('activeEmployees').textContent = Math.floor(Math.random() * 200);
  document.getElementById('absentEmployees').textContent = `${Math.floor(Math.random() * 20)}%`;
}, 5000);