import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../imgs/logo.png";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#campana", label: "Campaña" },
  { href: "#wiki", label: "Wiki" },
  { href: "#foro", label: "Foro" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "gradient-primary shadow-brand py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Zueños Libres logo"
            className="h-9 w-9 object-contain drop-shadow-md"
          />
          <span className="font-display text-xl font-bold text-primary-foreground tracking-wide">
            Zueños Libres
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden gradient-primary border-t border-primary-foreground/10">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
