import { Clock, AlertTriangle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="ml-64 pt-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">

            {/* CARD 1: Status Pakan */}
            <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-xl transition-all flex flex-col justify-between">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Status Pakan</h3>
              
              <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40">
                  <svg className="w-40 h-40 -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="16" fill="none" />
                    <circle
                      cx="80" cy="80" r="70"
                      stroke="#10b981"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="439.82"
                      strokeDashoffset="175.93"
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-2xl font-black text-green-600">450 g</span>
                      <p className="text-sm text-gray-500 mt-1">tersisa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-green-600 font-bold text-lg">Status: Aman</p>
                <p className="text-sm text-gray-400 mt-2">Update: 12:00</p>
              </div>
            </div>

            {/* CARD 2: Feeding Control */}
            <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-xl transition-all flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold text-gray-800 mb-8">Kontrol Pakan</h3>
              
              <div className="flex justify-center my-10">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl px-14 py-7 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95">
                  Feed Now
                </button>
              </div>

              <p className="text-center text-gray-600 text-lg">
                Terakhir: 09:00 • 0.5 g
              </p>
            </div>

            {/* CARD 3: Prediksi Pakan Harian */}
            <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition-all flex flex-col justify-between">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Prediksi Pakan Harian</h3>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 mb-5">
                <p className="text-sm text-gray-600">Rata-rata harian</p>
                <p className="text-3xl font-black text-gray-800">0.9 g</p>
                <p className="text-green-700 font-bold">Pola makan normal</p>
              </div>

              {/* BAR CHART */}
              <div className="flex items-end justify-center gap-4 h-28">
                {[110, 80, 95, 85, 55, 65, 40].map((height, i) => (
                  <div
                    key={i}
                    className="w-9 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-2xl shadow-md transition-all hover:from-blue-700"
                    style={{ height: `${height * 1.1}px` }}
                  />
                ))}
              </div>

              {/* PAKAI AlertTriangle DARI LUCIDE */}
              <button className="mt-6 w-full bg-amber-400 hover:bg-amber-500 text-amber-900 font-medium text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition-all"> {/* dari text-lg py-5 rounded-xl */}
                <AlertTriangle className="w-6 h-6" /> {/* dari w-8 h-8 */}
                <span>Isi ulang dalam &lt; 2 hari</span>
              </button>
            </div>

            {/* CARD 4: Time to Empty */}
            <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition-all flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Time to Empty (TTE)</h3>

              <div className="text-center py-6">
                <Clock className="w-16 motion-safe:animate-pulse h-16 text-blue-600 mx-auto mb-4"/>
                <p className="text-7xl font-black text-gray-800 leading-none">5</p>
                <p className="text-2xl text-gray-600 mt-2">Hari Lagi</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3 text-sm mt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sisa Pakan</span>
                  <span className="font-bold text-lg">2000 g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rata-rata</span>
                  <span className="font-bold text-lg">400 g/hari</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}