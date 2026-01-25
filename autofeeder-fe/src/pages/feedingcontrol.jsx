import { Calendar, Clock, Play, Plus } from "lucide-react";
import { useState } from "react";

export default function FeedingControl() {
  const [schedules] = useState([
    { name: "Pagi", time: "06:00", amount: "0.5g", repeat: "Harian" },
    { name: "Siang", time: "12:00", amount: "0.5g", repeat: "Harian" },
    { name: "Sore", time: "17:00", amount: "0.5g", repeat: "Harian" }
  ]);
  
  const [lastFeed] = useState({
    last_feed: "17:00",
    last_amount: "0.5g"
  });

  return (
    <div className="min-h-screen bg-white">
      <main className="ml-64 pt-28 px-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

          {/* KONTROL MANUAL - Tombol di Tengah */}
          <div className="bg-[#E3F2FD] rounded-[40px] p-10 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Play className="text-blue-600 fill-current w-6 h-6" />
              <h2 className="font-bold text-xl text-slate-800">Kontrol Manual</h2>
            </div>

            {/* Kontainer Flex Grow untuk memastikan tombol benar-benar di tengah secara vertikal dan horizontal */}
            <div className="flex-grow flex flex-col items-center justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-14 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-95 text-xl mb-8">
                Feed Now
              </button>
              
              <div className="flex items-center gap-2 text-xs text-slate-500 italic">
                <Clock className="w-4 h-4" />
                <span>Pemberian pakan terakhir: {lastFeed.last_feed}, {lastFeed.last_amount}</span>
              </div>
            </div>
          </div>

          {/* JADWAL FEEDING - Header Biru Tegas */}
          <div className="bg-[#E3F2FD] rounded-[40px] p-10 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-10">
              <Calendar className="text-blue-600 w-6 h-6" />
              <h2 className="font-bold text-xl text-slate-800">Pengaturan Jadwal Feeding</h2>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-xs border-collapse">
                {/* Header Biru Solid (Tanpa Blur/Transparan) */}
                <thead className="bg-[#82B1FF] text-slate-900 uppercase tracking-wider font-black">
                  <tr>
                    <th className="p-4 text-left border-b border-blue-200">Jadwal</th>
                    <th className="p-4 text-left border-b border-blue-200">Waktu</th>
                    <th className="p-4 text-left border-b border-blue-200">Jumlah</th>
                    <th className="p-4 text-left border-b border-blue-200">Repeat</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 font-medium bg-white">
                  {schedules.map((s, i) => (
                    <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-blue-50/50 transition-colors">
                      <td className="p-4">{s.name}</td>
                      <td className="p-4">{s.time}</td>
                      <td className="p-4">{s.amount}</td>
                      <td className="p-4">{s.repeat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:translate-x-1 transition-transform mt-auto">
              <Plus className="w-5 h-5" />
              Tambah Jadwal
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}