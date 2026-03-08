import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-brand-magenta selection:text-white">
      <div className="aurora-bg" />
      <div className="noise-overlay" />
      <Navbar />
      <main className="flex-1 z-10 w-full relative">
        <Outlet />
      </main>
      <Footer className="z-10 relative" />
    </div>
  );
}
