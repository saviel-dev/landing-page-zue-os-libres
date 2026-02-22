import { Moon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Moon className="h-5 w-5 text-primary-foreground" />
              <span className="font-display text-lg font-bold text-primary-foreground">
                SueñoNatural
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Soluciones naturales para un sueño reparador. Respaldados por la ciencia y la tradición herbal.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-3">Enlaces</h4>
            <ul className="space-y-2">
              {["Inicio", "Campaña", "Foro", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace("ñ", "n").replace("inicio", "inicio").replace("campaña", "campana")}`}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-primary-foreground/60 text-sm">Política de privacidad</span>
              </li>
              <li>
                <span className="text-primary-foreground/60 text-sm">Términos de uso</span>
              </li>
              <li>
                <span className="text-primary-foreground/60 text-sm">Aviso legal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} SueñoNatural. Todos los derechos reservados. Los productos
            mencionados son suplementos naturales y no sustituyen el consejo médico profesional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
