"use client";

import { useState, useEffect } from "react";
import { FiUsers, FiBox, FiShoppingCart, FiDollarSign } from "react-icons/fi";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // Dynamic state for stats
  const [stats, setStats] = useState({
    customers: 0,
    products: 0,
    ordersToday: 0,
    revenue: 0,
    customerTrend: [],
  });

  // Simulate fetching data
  useEffect(() => {
    // Replace with API fetch
    const fetchData = async () => {
      const data = {
        customers: 1245,
        products: 320,
        ordersToday: 87,
        revenue: 12345,
        customerTrend: [1000, 1050, 1100, 1150, 1200, 1245],
      };
      setStats(data);
    };
    fetchData();
  }, []);

  // Chart data
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Customers",
        data: stats.customerTrend,
        borderColor: "#06b6d4", // cyan-500
        backgroundColor: "rgba(6,182,212,0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  // Stats cards config
  const cards = [
    { title: "Total Customers", value: stats.customers, icon: <FiUsers className="text-3xl text-white" />, bgColor: "bg-cyan-500" },
    { title: "Active Products", value: stats.products, icon: <FiBox className="text-3xl text-white" />, bgColor: "bg-green-500" },
    { title: "Orders Today", value: stats.ordersToday, icon: <FiShoppingCart className="text-3xl text-white" />, bgColor: "bg-yellow-500" },
    { title: "Revenue", value: `$${stats.revenue.toLocaleString()}`, icon: <FiDollarSign className="text-3xl text-white" />, bgColor: "bg-purple-500" },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center p-6 rounded-2xl shadow-lg transition transform hover:scale-[1.02] bg-white"
          >
            <div className={`p-4 rounded-xl flex items-center justify-center mr-4 ${card.bgColor}`}>
              {card.icon}
            </div>
            <div>
              <p className="text-gray-500 font-medium">{card.title}</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Trend Chart */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Customer Growth</h2>
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Products Table */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top Products</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl shadow-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Product Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-center">Stock</th>
                <th className="py-3 px-6 text-center">Price</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {[
                { name: "Product A", category: "Category 1", stock: 120, price: "$99" },
                { name: "Product B", category: "Category 2", stock: 80, price: "$149" },
                { name: "Product C", category: "Category 3", stock: 50, price: "$199" },
              ].map((product, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="py-3 px-6 text-left">{product.name}</td>
                  <td className="py-3 px-6 text-left">{product.category}</td>
                  <td className="py-3 px-6 text-center">{product.stock}</td>
                  <td className="py-3 px-6 text-center">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
