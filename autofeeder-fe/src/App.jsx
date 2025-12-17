import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import FeedingControl from "./pages/feedingcontrol";
import Login from "./pages/login";
import Opening from "./pages/opening";
import Settings from "./pages/settings";
import SignUp from "./pages/signup";
import Statistics from "./pages/statistics";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/opening" element={<Opening />} />
        <Route path="/feeding" element={<FeedingControl />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}