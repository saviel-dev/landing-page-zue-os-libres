import logo from "../imgs/logo.png";

const Footer = () => {
  return (
    <footer style={{ background: "hsl(267, 70%, 10%)" }} className="relative text-white">
      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none" style={{ marginTop: "-1px" }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "80px" }}
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
            fill="hsl(260,30%,96%)"
          />
          <path
            d="M0,55 C300,90 600,20 900,55 C1100,80 1300,30 1440,55 L1440,0 L0,0 Z"
            fill="hsl(260,30%,96%)"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-12">
        {/* Brand centered at the top */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="Zueños Libres logo" className="h-10 w-10 object-contain drop-shadow-md" />
            <span className="font-display text-2xl font-bold text-white tracking-wide">
              Zueños Libres
            </span>
          </div>
          <p className="text-white/60 text-sm max-w-md leading-relaxed mb-5">
            Misión y campaña para concientizar sobre el insomnio y promover un descanso natural y reparador.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/zlibres.ve/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest text-center">Navegación</h4>
            <ul className="space-y-2 text-center">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Wiki", href: "#wiki" },
                { label: "Campaña", href: "#campana" },
                { label: "Foro", href: "#foro" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest text-center">Sobre Nosotros</h4>
            <ul className="space-y-2 text-center">
              {["Nuestra misión", "El equipo", "Recursos científicos"].map((item) => (
                <li key={item}>
                  <span className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest text-center">Legal</h4>
            <ul className="space-y-2 text-center">
              {["Política de privacidad", "Términos de uso", "Aviso legal"].map((item) => (
                <li key={item}>
                  <span className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Zueños Libres. Todos los derechos reservados.
            Información elaborada con fines educativos y de concientización.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
