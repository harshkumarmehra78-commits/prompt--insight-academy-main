import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/introduction", label: "Topics" },
  { to: "/prompt-examples", label: "Examples" },
  { to: "/playground", label: "Playground" },
  { to: "/best-practices", label: "Best Practices" },
  { to: "/resources", label: "Resources" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-6 h-14">
        <Link to="/" className="font-bold text-lg tracking-tight flex items-center gap-2 text-foreground">
          <span className="text-primary text-2xl font-extrabold">&lt;/&gt;</span>
          <span>Prompt Engineering</span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 text-sm rounded-md transition-colors font-medium ${
                location.pathname === l.to
                  ? "text-primary bg-accent"
                  : "text-foreground/70 hover:text-primary hover:bg-accent"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-2 border-l border-border pl-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 rounded-md hover:bg-accent text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 text-sm rounded-md transition-colors font-medium ${
                location.pathname === l.to
                  ? "text-primary bg-accent"
                  : "text-foreground/70 hover:text-primary hover:bg-accent"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
