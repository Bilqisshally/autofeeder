import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/user";

export default function SignIn() {
  const navigate = useNavigate();
  const { save } = useUser();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: e.target[0].value,
          password: e.target[1].value,
        }),
      });

      const data = await res.json();

      if (data.success) {
        // Simpan token & user data menggunakan context
        save(data.user, data.token);

        // Redirect ke dashboard
        navigate("/dashboard");
      } else {
        alert(data.message || "Login gagal");
      }
    } catch (err) {
      alert("Terjadi kesalahan jaringan. Pastikan backend sudah berjalan.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
      <main className="ml-0 md:ml-64 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl bg-white px-12 py-16 shadow-2xl mt-8 md:mt-12">
          <h1 className="mb-8 text-center text-4xl font-black text-blue-600">
            Masuk
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="font-semibold text-gray-700">
                Email / Nomor Telepon
              </label>
              <input
                required
                className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none transition"
                placeholder="contoh: 0812345678"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Kata Sandi</label>
              <input
                required
                type="password" // ← perbaikan di sini
                className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3.5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition shadow-lg disabled:opacity-70"
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <p className="text-center mt-8 text-gray-600">
            Belum punya akun?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-bold hover:underline"
            >
              Daftar
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
