import { BarChart3, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function Statistika() {
  const [activeTab, setActiveTab] = useState("harian");

  const dailyData = [
    { day: "Sen", amount: 2.8 },
    { day: "Sel", amount: 1.9 },
    { day: "Rab", amount: 2.4 },
    { day: "Kam", amount: 2.1 },
    { day: "Jum", amount: 3.2 },
    { day: "Sab", amount: 2.9 },
    { day: "Min", amount: 3.5 },
  ];

  const totalThisWeek = dailyData
    .reduce((a, b) => a + b.amount, 0)
    .toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="ml-64 pt-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto py-6">

          {/* PAGE TITLE */}
          <div className="mb-8">
            <h1 className="text-3xl font-black text-gray-800 flex items-center gap-3">
              <BarChart3 className="w-10 h-10 text-blue-600" />
              Statistika Pemberian Pakan
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">

            {/* HEADER */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">7 Hari Terakhir</h2>
              <div className="flex items-center justify-center gap-2 mt-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <span className="text-xl font-bold text-green-600">+12%</span>
                <span className="text-gray-600">vs minggu lalu</span>
              </div>
            </div>

            {/* CHART */}
            <div className="relative bg-gray-50 rounded-2xl p-5 border border-dashed border-gray-200">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dailyData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" name="Pakan (g)" fill="#3b82f6" >
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* TOTAL SUMMARY */}
            <div className="mt-6 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl py-6">
              <p className="text-base text-gray-700">Total pakan minggu ini</p>
              <p className="text-4xl font-black text-blue-600 mt-1">
                {totalThisWeek} g
              </p>

              <p className="text-gray-600 mt-3 text-sm">
                Tertinggi:{" "}
                <span className="font-bold text-green-600">Minggu</span> • Kedua:{" "}
                <span className="font-bold text-amber-600">Jumat</span>
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
