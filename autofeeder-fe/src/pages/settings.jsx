import { useState, useEffect } from "react";
import { Settings, Send, BarChart3, CheckCircle2 } from "lucide-react";
import { useUser } from "../contexts/user";

export default function Pengaturan() {
  const { token, user } = useUser();
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/settings`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setSettings(data);
      } catch (err) {
        console.error("Error fetch settings:", err);
      } finally {
        setLoading(false);
      }
    }
    if (user && token) fetchSettings();
  }, [user, token]);

  if (!user) return <div className="min-h-screen flex items-center justify-center">Silakan login</div>;
  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* PENTING: 
         - ml-64 agar konten tidak tertutup Sidebar (sesuaikan dengan lebar sidebar kamu)
         - pt-24 agar konten tidak tertutup Navbar atas yang berwarna putih
      */}
      <main className="ml-64 pt-24 p-8">
        
        {/* Header Title Section */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Pengaturan Sistem</h1>
          </div>
          <p className="text-gray-500">
            Kelola notifikasi Telegram dan pantau status koneksi Smart AutoFeeder
          </p>
        </div>

        {/* Container Utama Abu-abu Muda */}
        <div className="bg-gray-50 rounded-3xl p-8 max-w-5xl mx-auto shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kolom Kiri: Notifikasi Telegram */}
            <div className="bg-blue-100/50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500 rounded-full p-2">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-bold text-lg text-gray-800">Notifikasi Telegram</h2>
              </div>

              <div className="space-y-4 text-sm text-gray-600">
                <p>Status : <span className="text-green-500 font-medium">Terkoneksi (ID : {settings?.telegram_id || "12345"})</span></p>
                <div className="flex items-center gap-2">
                  <span>Token Bot :</span>
                  <input 
                    type="password" 
                    value="**********" 
                    readOnly 
                    className="bg-transparent border-none text-gray-500 text-xs w-24 focus:outline-none"
                  />
                </div>
                
                <div className="pt-2">
                  <p className="font-medium mb-3">Jenis Notifikasi</p>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={settings?.feed_done_notification} 
                        className="rounded text-blue-500 w-4 h-4" 
                        readOnly
                      />
                      <span>Pemberian Pakan Selesai</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={settings?.system_error_alert} 
                        className="rounded text-blue-500 w-4 h-4" 
                        readOnly
                      />
                      <span>Peringatan Servo Macet</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Status Sistem */}
            <div className="bg-blue-100/50 rounded-2xl p-6 border border-blue-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                  <h2 className="font-bold text-lg text-gray-800">Status Sistem</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-sm text-gray-600">
                    Koneksi Perangkat: <span className="text-green-500 font-bold ml-2 text-base">Online</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Broker MQTT: <span className="text-gray-800 font-medium ml-2 text-base italic">Tersambung</span>
                  </p>
                </div>
              </div>

              <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow-md transition-all self-center md:self-start">
                Kirim Pesan Test
              </button>
            </div>
          </div>

          {/* Status Footer */}
          <div className="mt-8 flex items-center gap-2 text-gray-700 bg-white/50 w-fit px-4 py-2 rounded-full border border-gray-100">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">Sistem dalam kondisi normal dan siap digunakan.</span>
          </div>
        </div>
      </main>
    </div>
  );
}