import { Utensils, Clock, Plus } from "lucide-react";

export default function FeedingControl() {
  const schedules = [
    { id: 1, name: "Jadwal Pagi", time: "09:00", amount: "0.5 g", repeat: "Setiap hari" },
    { id: 2, name: "Jadwal Siang", time: "12:00", amount: "0.5 g", repeat: "Setiap hari" },
    { id: 3, name: "Jadwal Sore", time: "18:00", amount: "0.7 g", repeat: "Senin-Jumat" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="ml-64 pt-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto py-8">

          {/* Judul */}
          <div className="mb-10">
            <h1 className="text-4xl font-black text-gray-800 flex items-center gap-4">
              <Utensils className="w-12 h-12 text-blue-600" />
              Kontrol Pakan
            </h1>
            <p className="text-gray-600 mt-2">Atur pemberian pakan manual atau otomatis</p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* CARD 1: Kontrol Manual */}
            <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Kontrol Manual</h2>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 px-20 rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95">
                Feed Now
              </button>

              <div className="mt-8 flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <p className="text-sm">
                  Terakhir:{" "}
                  <span className="text-blue-600 font-semibold">09:00</span> • 0.5 g
                </p>
              </div>
            </div>

            {/* CARD 2: Jadwal Otomatis */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Jadwal Otomatis</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
                  <Plus className="w-5 h-5" />
                  Tambah Jadwal
                </button>
              </div>

              <div className="space-y-3 flex-1 overflow-y-auto max-h-80">
                {schedules.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100 hover:border-blue-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-base text-gray-800">
                          {schedule.name}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-gray-600 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span>{schedule.time}</span>
                          </div>
                          <span>•</span>
                          <span>{schedule.amount}</span>
                          <span>•</span>
                          <span className="text-blue-600">{schedule.repeat}</span>
                        </div>
                      </div>

                      <button className="text-gray-400 hover:text-gray-600 transition">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
