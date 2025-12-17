import { ChevronDown, Edit2, LogOut, Settings, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deviceName, setDeviceName] = useState("Feeder Utama");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setOpen(false);
    navigate("/login"); // ← perbaikan: pakai navigate agar SPA tidak reload
  };

  if (!user) {
    return (
      <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-100 shadow-sm flex items-center justify-end px-8 z-50">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-gray-100 transition"
        >
          <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <User className="h-6 w-6 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-medium text-gray-500">Belum Login</span>
        </button>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-100 shadow-sm flex items-center justify-end px-8 z-50">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-gray-100 transition"
        >
          <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg font-bold text-white text-lg">
            {user.name?.[0]?.toUpperCase() || user.phone?.[0] || "U"}
          </div>
          {editing ? (
            <input
              type="text"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setEditing(false)}
              onBlur={() => setEditing(false)}
              className="px-3 py-1 border border-blue-400 rounded-lg text-gray-700 font-medium min-w-[180px]"
              autoFocus
            />
          ) : (
            <span className="font-medium text-gray-700 max-w-[180px] truncate">{deviceName}</span>
          )}
          <ChevronDown className={`h-4 w-4 text-gray-500 transition ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Nama Perangkat</p>
                  <p className="font-bold text-lg">{deviceName}</p>
                </div>
                <button onClick={() => setEditing(true)} className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Edit2 className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">ID: FD-001</p>
            </div>

            <div className="px-5 py-3 border-b border-gray-100">
              <p className="text-xs text-gray-500">Akun terhubung</p>
              <p className="font-semibold text-gray-800">{user.name || user.phone}</p>
              <p className="text-xs text-gray-400">{user.phone}</p>
            </div>

            <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition">
              <Settings className="h-5 w-5 text-gray-600" />
              <span>Pengaturan Perangkat</span>
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-50 text-red-600 font-medium transition"
            >
              <LogOut className="h-5 w-5" />
              <span>Keluar</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
