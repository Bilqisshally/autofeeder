import { useEffect, useState } from "react";

export default function Statistika() {
  const [logs] = useState([
    { date: "1 Des", count: 85, status: "ok" },
    { date: "2 Des", count: 70, status: "ok" },
    { date: "3 Des", count: 60, status: "ok" },
    { date: "4 Des", count: 65, status: "ok" },
    { date: "5 Des", count: 30, status: "error" },
  ]);

  const maxVal = Math.max(...logs.map(o => o.count), 1);

  return (
    <div className="min-h-screen bg-white">
      <main className="ml-64 pt-28 px-6 pb-12">
        <div className="max-w-2xl mx-auto bg-[#E3F2FD] rounded-[40px] p-10 shadow-sm border border-blue-50">
          <h2 className="text-xl font-bold text-center text-slate-800 mb-16">
            Ringkasan Aktivitas Mekanisme Servo
          </h2>

          <div className="relative flex flex-col items-center">
            <div className="flex items-end justify-center gap-6 h-64 w-full px-6">
              {logs.map((item, i) => (
                <div key={i} className="group relative flex flex-col items-center w-10">
                  <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-2 py-1 rounded">
                    {item.count}x
                  </div>
                  <div 
                    className={`w-full rounded-t-md transition-all duration-700 ${
                      item.status === 'error' ? 'bg-[#FF4D4D]' : 'bg-[#2ECC71]'
                    }`}
                    style={{ 
                        height: `${(item.count / maxVal) * 100}%`,
                        minHeight: '20px'
                    }}
                  />
                  <span className="text-slate-500 text-xs mt-4 font-medium">{item.date}</span>
                </div>
              ))}
            </div>
            <div className="w-[90%] h-1.5 bg-[#333] rounded-full -mt-[1px]" />
          </div>

          <div className="mt-16 px-6">
            <p className="text-slate-600 text-[12px] leading-relaxed text-center italic leading-6">
              Grafik menunjukkan aktivitas mekanisme servo dalam beberapa hari terakhir. 
              Secara umum, sistem bekerja stabil dengan mayoritas pakan berjalan normal 
              dan hanya sedikit kejadian error yang terdeteksi.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}