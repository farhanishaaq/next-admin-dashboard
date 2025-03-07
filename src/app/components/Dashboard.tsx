// pages/dashboard.js (or app/dashboard/page.js if using App Router)
'use client'; // Add this if using App Router

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

// Sample data (you can replace this with API data)
const sampleData = {
    usersByMonth: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        data: [65, 59, 80, 81, 56, 55],
    },
    userRoles: {
        labels: ['Admin', 'Editor', 'User', 'Guest'],
        data: [12, 19, 35, 8],
    },
};

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(sampleData);

    // Bar Chart Data
    const barChartData = {
        labels: dashboardData.usersByMonth.labels,
        datasets: [
            {
                label: 'New Users',
                data: dashboardData.usersByMonth.data,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Pie Chart Data
    const pieChartData = {
        labels: dashboardData.userRoles.labels,
        datasets: [
            {
                data: dashboardData.userRoles.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Chart Options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    // Fetch data (replace with your API call)
    useEffect(() => {
        // Simulating API call
        const fetchDashboardData = async () => {
            try {
                // const response = await fetch('your-api-endpoint');
                // const data = await response.json();
                // setDashboardData(data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };
        fetchDashboardData();
    }, []);

    return (
        <div className="container mt-4 mb-4">
            <h1 className="mb-4 fw-bold">Dashboard</h1>

            {/* Stats Cards */}
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Total Users</h5>
                            <p className="card-text fs-4">74</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Active Users</h5>
                            <p className="card-text fs-4">62</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-body">
                            <h5 className="card-title">New Users</h5>
                            <p className="card-text fs-4">15</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-info mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Guests</h5>
                            <p className="card-text fs-4">8</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="row">
                {/* Bar Chart */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            Users by Month
                        </div>
                        <div className="card-body" style={{ height: '300px' }}>
                            <Bar data={barChartData} options={chartOptions} />
                        </div>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            User Roles Distribution
                        </div>
                        <div className="card-body" style={{ height: '300px' }}>
                            <Pie data={pieChartData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;