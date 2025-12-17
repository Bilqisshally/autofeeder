import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const dataInput = Object.fromEntries(formData);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json", // <--- WAJIB: Supaya Laravel ngasih error JSON, bukan HTML
        },
        body: JSON.stringify(dataInput),
      });

      // Cek response JSON-nya dulu
      const data = await res.json();

      // Jika status tidak OK (misal 422 Validasi Error atau 500 Server Error)
      if (!res.ok) {
        // Gabungkan pesan error jika Laravel mengirim format array 'errors'
        const errorMessage = data.errors
          ? Object.values(data.errors).flat().join("\n")
          : data.message || "Terjadi kesalahan saat mendaftar";
        
        throw new Error(errorMessage);
      }

      // Jika Sukses (success: true)
      if (data.success) {
        alert("Pendaftaran berhasil! Silakan login.");
        navigate("/login");
      }
      
    } catch (err) {
      // Tampilkan alert error ke user
      alert(err.message);
      console.error("Signup Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
      <main className="ml-0 md:ml-64 min-h-screen flex items-center justify-center px-4 py-12">
        {/* Card daftar */}
        <div className="w-full max-w-md rounded-3xl bg-white px-12 py-16 shadow-2xl mt-8 md:mt-12">
          <h1 className="mb-8 text-center text-4xl font-black text-blue-600">
            Daftar
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="font-semibold text-gray-700">Nama Lengkap</label>
              <input
                name="name" // WAJIB ADA
                required
                className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none transition"
                placeholder="Nama kamu"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Nomor Telepon</label>
              <input
                name="phone" // WAJIB ADA
                required
                className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none transition"
                placeholder="0812345678"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Kata Sandi</label>
              <input
                name="password" // WAJIB ADA
                required
                type="password"
                className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none transition"
                placeholder="buat password kuat"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Konfirmasi Kata Sandi</label>
              <input
                name="password_confirmation" // WAJIB ADA
                required
                type="password"
                className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none transition"
                placeholder="ulangi password"
              />
            </div>

            {/* Gradient button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3.5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Mendaftar..." : "Daftar"}
            </button>
          </form>

          <p className="text-center mt-8 text-gray-600">
            Sudah punya akun?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-bold hover:underline"
            >
              Masuk
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}