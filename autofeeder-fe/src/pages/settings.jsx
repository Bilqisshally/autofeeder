import { Settings, Bell, Scale, CheckCircle } from "lucide-react";

export default function Pengaturan() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="ml-64 pt-16 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto py-6">

          {/* Judul Halaman */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <Settings className="w-6 h-6 text-blue-600" />
              Pengaturan Perangkat
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Kelola notifikasi, kalibrasi, dan preferensi sistem
            </p>
          </div>
          <div className="space-y-8">

            {/* CARD 1: Notifikasi Telegram */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-green-100 rounded-xl">
                  <Bell className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Notifikasi Telegram
                  </h2>
                  <p className="text-green-600 text-sm flex items-center gap-1 mt-1">
                    <CheckCircle className="w-4 h-4" />
                    Terkoneksi • ID: 123456789
                  </p>
                </div>
              </div>

              <div className="max-w-sm">
                <div className="bg-gray-50 rounded-xl p-2 font-mono text-base tracking-wider">
                  ••••••••••••••••
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Token API Telegram terenkripsi dengan aman
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">
                    Pemberian Pakan Selesai
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">
                    Peringatan Level Pakan Rendah
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">
                    Error Sistem / Koneksi Terputus
                  </span>
                </label>
              </div>
            </div>

            {/* CARD 2: Kalibrasi Load Cell */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-xl">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Kalibrasi Load Cell
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Langkah 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 text-center border border-blue-200">
                  <h3 className="text-base font-semibold text-blue-900 mb-4">
                    Langkah 1: Kosongkan Wadah
                  </h3>
                  <p className="text-gray-700 text-sm mb-5">
                    Pastikan wadah benar-benar kosong.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-6 rounded-full shadow">
                    Nol-kan Timbangan
                  </button>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-green-800 text-sm font-semibold flex justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Koreksi Awal: 123,456
                    </p>
                  </div>
                </div>

                {/* Langkah 2 */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 text-center border border-indigo-200">
                  <h3 className="text-base font-semibold text-indigo-900 mb-4">
                    Langkah 2: Beban Terukur
                  </h3>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Masukkan berat (gram):
                    </label>
                    <input
                      type="number"
                      className="w-32 px-3 py-2 text-sm border rounded-lg text-center"
                      defaultValue="1000"
                    />
                  </div>

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-2 px-6 rounded-full shadow">
                    Kalibrasi
                  </button>

                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-green-800 text-sm font-semibold flex justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Nilai Koreksi Berat: 234.56
                    </p>
                  </div>
                </div>
              </div>

              {/* Tombol Simpan & Tes */}
              <div className="flex justify-center gap-6 mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-2 px-6 rounded-full shadow">
                  Simpan
                </button>
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm py-2 px-6 rounded-full shadow">
                  Tes Akurasi
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
