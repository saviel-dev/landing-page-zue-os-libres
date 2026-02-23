import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import anime from "animejs";
import logo from "../imgs/logo.png";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#wiki", label: "Wiki" },
  { href: "#campana", label: "Campaña" },
  { href: "#foro", label: "Foro" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Open animation
  useEffect(() => {
    if (!mobileOpen) return;

    // Mount first, then animate in
    setMenuMounted(true);
  }, [mobileOpen]);

  // Run enter animation once drawer is mounted
  useEffect(() => {
    if (!menuMounted || !drawerRef.current || !mobileOpen) return;

    isAnimatingRef.current = true;
    const links = drawerRef.current.querySelectorAll(".mobile-link");

    // Reset starting state
    anime.set(drawerRef.current, { opacity: 0, translateY: -12 });
    anime.set(links, { opacity: 0, translateX: -18 });

    anime
      .timeline({ easing: "easeOutExpo" })
      .add({
        targets: drawerRef.current,
        opacity: [0, 1],
        translateY: [-12, 0],
        duration: 320,
      })
      .add({
        targets: links,
        opacity: [0, 1],
        translateX: [-18, 0],
        duration: 260,
        delay: anime.stagger(60),
        complete: () => { isAnimatingRef.current = false; },
      }, "-=180");
  }, [menuMounted, mobileOpen]);

  const closeMenu = () => {
    if (!drawerRef.current) { setMobileOpen(false); setMenuMounted(false); return; }

    const links = drawerRef.current.querySelectorAll(".mobile-link");

    anime
      .timeline({ easing: "easeInQuad" })
      .add({
        targets: links,
        opacity: [1, 0],
        translateX: [0, -12],
        duration: 180,
        delay: anime.stagger(40, { direction: "reverse" }),
      })
      .add({
        targets: drawerRef.current,
        opacity: [1, 0],
        translateY: [0, -8],
        duration: 220,
        complete: () => {
          setMobileOpen(false);
          setMenuMounted(false);
        },
      }, "-=100");
  };

  const handleToggle = () => {
    if (mobileOpen) {
      closeMenu();
    } else {
      setMobileOpen(true);
    }
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "gradient-primary shadow-brand py-3" : "bg-transparent py-5"
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
          onClick={handleToggle}
          className="md:hidden text-primary-foreground transition-transform duration-200 active:scale-90"
          aria-label="Toggle menu"
        >
          <div className={`transition-all duration-300 ${mobileOpen ? "rotate-90" : "rotate-0"}`}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </div>
        </button>
      </div>

      {/* Mobile menu — always rendered while mounted so exit animation can run */}
      {menuMounted && (
        <div
          ref={drawerRef}
          className="md:hidden gradient-primary border-t border-primary-foreground/10"
          style={{ opacity: 0 }}
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="mobile-link block px-6 py-3.5 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-colors text-sm font-medium uppercase tracking-widest"
                  style={{ opacity: 0 }}
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="text-primary-foreground/30 text-xs tabular-nums">
                      0{i + 1}
                    </span>
                    {link.label}
                  </span>
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

