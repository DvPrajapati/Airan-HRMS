// Sample data for the attendance ratio donut chart
var attendanceData = {
    labels: ["Present", "Absent", "Late"],
    datasets: [{
        data: [70, 15, 15], // Replace with your actual attendance data
        backgroundColor: ["#28a745", "#dc3545", "#ffc107"],
    }]
};

// Get the canvas element
var ctxAttendance = document.getElementById('attendance-chart-canvas').getContext('2d');

// Create the donut chart
var attendanceChart = new Chart(ctxAttendance, {
    type: 'doughnut',
    data: attendanceData,
    options: {
        cutoutPercentage: 80, // Adjust the cutout percentage as needed
        legend: {
            display: false, // Hide legend if not needed
        }
    }
});