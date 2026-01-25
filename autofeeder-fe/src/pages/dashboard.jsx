import { useEffect, useState } from "react";
import { useUser } from "../contexts/user";
import Opening from "./opening";

export default function Dashboard() {
  const { user, token } = useUser();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feeding, setFeeding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchDashboard() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/dashboard", {
          signal: controller.signal,
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    }

    if (user && token) fetchDashboard();

    return () => controller.abort();
  }, [user, token]);

  const feedNow = async () => {
    if (!data?.feeder_id) return alert("Feeder tidak tersedia");

    setFeeding(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/feeding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          feeder_id: data.feeder_id,
          amount: 50, // default manual feed amount
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        console.error(error);
        alert("Gagal melakukan feed");
      } else {
        alert("Feed berhasil!");
        // refresh dashboard
        const refreshed = await fetch("http://127.0.0.1:8000/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await refreshed.json();
        setData(json);
      }
    } catch (err) {
      console.error("Feed error:", err);
      alert("Terjadi kesalahan saat feed");
    } finally {
      setFeeding(false);
    }
  };

  if (!user || !token) return <Opening />;
  if (loading) return <div className="mt-20 text-center text-gray-500">Menghubungkan ke perangkat...</div>;
  if (!data) return <div className="mt-20 text-center text-red-500">Gagal memuat informasi sistem.</div>;

  const { feed_status = {}, feed_now = {}, servo_status = {}, feed_history = [] } = data;

  return (
    <main className="ml-64 pt-20 px-10">
      <div className="grid grid-cols-2 gap-6 max-w-4xl">

        {/* STATUS PAKAN */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Status Pakan</h3>
          <div className="text-center py-2">
            <p className="text-4xl font-extrabold text-blue-600">
              {feed_status.percentage ?? 0}%
            </p>
            <p className="text-sm text-gray-400 font-medium">Sisa Pakan dalam Wadah</p>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600 border-t pt-4">
            <span>Berat: <strong>{feed_status.remaining ?? 0}g</strong></span>
            <span className={feed_status.status === 'Low' ? 'text-red-500 font-bold' : 'text-green-500'}>
              {feed_status.status ?? "-"}
            </span>
          </div>
        </div>

        {/* FEEDING CONTROL */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center flex flex-col justify-between">
          <h3 className="font-bold text-lg text-gray-800">Kontrol Pakan</h3>
          <div>
            <button
              disabled={feeding}
              onClick={feedNow}
              className={`bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 ${feeding ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {feeding ? 'Sedang memberi makan...' : 'Feed Now'}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Terakhir: {feed_now.last_feed_time ?? "-"} • {feed_now.amount ?? 0}g
          </p>
        </div>

        {/* STATUS SERVO */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-4 text-gray-800 text-center">Mekanisme Servo</h3>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${servo_status.condition === 'Normal' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
              <span className="font-bold text-gray-700">{servo_status.condition ?? "Unknown"}</span>
            </div>
            <span className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {servo_status.state ?? "Standby"}
            </span>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-6 italic">
            Aktif terakhir: {servo_status.last_move ?? "-"}
          </p>
        </div>

        {/* RIWAYAT PAKAN */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Aktivitas Terakhir</h3>
          <div className="overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-left text-gray-400 border-b">
                  <th className="pb-2 font-medium">Waktu</th>
                  <th className="pb-2 font-medium text-center">Jenis</th>
                  <th className="pb-2 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {feed_history.length > 0 ? feed_history.map((item, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-2 text-gray-600">{item.time}</td>
                    <td className="py-2 text-center text-gray-500">{item.type}</td>
                    <td className={`py-2 text-right font-medium ${item.status === 'Success' ? 'text-green-500' : 'text-red-400'}`}>
                      {item.status}
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan="3" className="py-4 text-center text-gray-300">Belum ada aktivitas</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
