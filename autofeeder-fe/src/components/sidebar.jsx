import { Fish, BarChart3, Home, Settings, Utensils } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", icon: Home, label: "Beranda" },
  { to: "/feeding", icon: Utensils, label: "Kontrol Pakan" },
  { to: "/statistics", icon: BarChart3, label: "Statistika" },
  { to: "/settings", icon: Settings, label: "Pengaturan" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 h-full w-64 bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-2xl">
      <div className="p-6">
        {/* Logo dengan icon Fish dari Lucide */}
        <div className="mb-12 flex items-center gap-4">
          <Fish className="h-14 w-14 text-white" strokeWidth={1.8} />
          <div>
            <h1 className="text-3xl font-black tracking-tight">AutoFeeder</h1>
            <p className="text-blue-100 text-sm opacity-90">Smart Feeding System</p>
          </div>
        </div>

        {/* Navigasi */}
        <nav className="space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-2xl px-5 py-4 text-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-400/30 text-white shadow-lg ring-4 ring-blue-300/30 backdrop-blur-sm"
                    : "text-blue-50 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <item.icon className="h-6 w-6" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-8 left-6 right-6 text-center">
        <p className="text-blue-200 text-xs">© 2025 AutoFeeder</p>
      </div>
    </aside>
  );
}