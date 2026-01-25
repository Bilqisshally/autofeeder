import { FaFish } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Opening = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center px-4">

      {/* CARD */}
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

        {/* Icon */}
        <div className="mb-10 flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-50 to-blue-100 text-blue-600 shadow-2xl ring-8 ring-white/30 animate-float">
            <FaFish className="h-16 w-16" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-3 text-center text-5xl font-black text-blue-900">
          AutoFeeder
        </h1>

        {/* Tagline */}
        <p className="mb-16 text-center text-lg font-medium text-blue-700 italic">
          “Smart Feeding, Better Growth”
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/login")}
          className="mx-auto block w-full max-w-xs rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 py-5 text-xl font-bold text-white shadow-xl transition-all hover:shadow-cyan-500/50 active:scale-95"
        >
          Mulai Sekarang
        </button>
      </div>

      {/* Animasi float */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Opening;