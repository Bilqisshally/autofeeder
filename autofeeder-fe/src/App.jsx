import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { UserProvider } from "./contexts/user";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

import Dashboard from "./pages/dashboard";
import FeedingControl from "./pages/feedingcontrol";
import Login from "./pages/login";
import Opening from "./pages/opening";
import Settings from "./pages/settings";
import SignUp from "./pages/signup";
import Statistics from "./pages/statistics";

function AppContent() {
  const location = useLocation();

  // hanya sembunyikan navside opening
  const hideLayout = location.pathname === "/opening" || location.pathname === "/";

  return (
    <>
      {!hideLayout && <Sidebar />}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/opening" element={<Opening />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feeding" element={<FeedingControl />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </BrowserRouter>
  );
}
