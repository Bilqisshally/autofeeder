import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: e.target.name.value,
          phone: e.target.phone.value,
          password: e.target.password.value,
          password_confirmation: e.target.password_confirmation.value,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Akun berhasil dibuat, silakan login");
        navigate("/login");
      } else {
        alert(data.message || "Signup gagal");
      }
    } catch (err) {
      alert("Terjadi kesalahan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
      <main className="min-h-screen flex items-center justify-center px-4 md:ml-64 pt-16">
        <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-2xl">
          <h1 className="text-3xl font-black text-center text-blue-600 mb-8">
            Daftar
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="name"
              placeholder="Nama"
              required
              className="p-3 border rounded-xl"
            />

            <input
              name="phone"
              placeholder="Nomor HP"
              required
              className="p-3 border rounded-xl"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="p-3 border rounded-xl"
            />

            {/* INI YANG WAJIB UNTUK RULE `confirmed` */}
            <input
              name="password_confirmation"
              type="password"
              placeholder="Konfirmasi Password"
              required
              className="p-3 border rounded-xl"
            />

            <button
              disabled={loading}
              className="bg-blue-600 text-white py-3 rounded-xl font-bold disabled:opacity-70"
            >
              {loading ? "Memproses..." : "Daftar"}
            </button>
          </form>

          <p className="text-center mt-6">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-600 font-bold hover:underline">
              Masuk
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
