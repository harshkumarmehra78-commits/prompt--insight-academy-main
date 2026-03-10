import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";

const sidebarLinks = [
  { to: "/introduction", label: "Introduction to Prompt Engineering" },
  { to: "/introduction#what-is-a-prompt", label: "What is a Prompt" },
  { to: "/prompt-structure", label: "Prompt Structure" },
  { to: "/prompt-techniques", label: "Prompt Techniques" },
  { to: "/prompt-examples", label: "Prompt Examples" },
  { to: "/best-practices", label: "Best Practices" },
  { to: "/introduction#real-world-applications", label: "Real-world Applications" },
  { to: "/playground", label: "Prompt Playground" },
  { to: "/resources", label: "Resources" },
];

export default function Sidebar() {
  const location = useLocation();
  const [search, setSearch] = useState("");

  const filtered = sidebarLinks.filter((l) =>
    l.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="w-64 shrink-0 bg-background border-r border-border hidden lg:flex flex-col h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto">
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
          <input
            type="text"
            placeholder="Search topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 text-sm rounded-md bg-muted text-foreground border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="px-4 pb-1 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
        Documentation
      </div>

      <nav className="px-2 space-y-0.5 pb-6">
        {filtered.map((l) => {
          const isActive = location.pathname === l.to.split("#")[0];
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                isActive
                  ? "bg-accent text-primary font-medium border-l-2 border-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
        {filtered.length === 0 && (
          <p className="px-3 py-2 text-sm text-muted-foreground">No topics found.</p>
        )}
      </nav>
    </aside>
  );
}
