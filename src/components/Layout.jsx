import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="main-stage relative z-10 flex-1 pt-24 sm:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
