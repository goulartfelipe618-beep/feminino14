import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Início" },
    { to: "/grupos", label: "Frota" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      {/* Thin white bar — top, desktop */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-14 bg-card/95 backdrop-blur-sm border-b border-border items-center justify-between px-10">
        <Link to="/" className="text-foreground text-xl italic" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
          Rosé
        </Link>
        <div className="flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13px] tracking-wide transition-colors duration-200 ${
                location.pathname === l.to
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile header */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-foreground text-lg italic" style={{ fontFamily: 'Playfair Display, serif' }}>Rosé</Link>
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[57px] left-0 right-0 z-40 overflow-hidden bg-card/95 backdrop-blur-sm border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm py-2 ${
                    location.pathname === l.to ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Small pink circle anchor */}
      <a
        href="#cotacao"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        aria-label="Cotação"
      >
        <ArrowDown size={16} className="text-primary-foreground" />
      </a>
    </>
  );
};
