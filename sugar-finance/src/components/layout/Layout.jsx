import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile drawer on route change and scroll to top.
  useEffect(() => {
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [drawerOpen]);

  return (
    <div className="min-h-screen">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-line bg-surface lg:block">
        <Sidebar />
      </aside>

      {/* Mobile drawer */}
      <div className={`lg:hidden ${drawerOpen ? "" : "pointer-events-none"}`}>
        <div
          className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] border-r border-line bg-surface transition-transform duration-200 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-hidden={!drawerOpen}
        >
          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-lg border border-line2 bg-panel2 text-muted lg:hidden"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
          <Sidebar onNavigate={() => setDrawerOpen(false)} />
        </aside>
      </div>

      {/* Main column */}
      <div className="lg:pl-64">
        <Header onOpenMenu={() => setDrawerOpen(true)} />
        <main className="mx-auto w-full max-w-[1400px] px-4 py-5 sm:px-6">
          <Outlet />
        </main>
        <Footer />
      </div>

    </div>
  );
}
