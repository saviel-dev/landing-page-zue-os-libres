import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sleep.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary-foreground/70 uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in-up">
          Campaña de bienestar natural
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Recupera tu sueño.
          <br />
          <span className="font-light opacity-80">Recupera tu vida.</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.4s" }}>
          Más del 30% de la población sufre de insomnio. Descubre el poder de las plantas medicinales
          para volver a dormir profundamente, sin dependencia farmacológica.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#campana"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-all shadow-brand-lg"
          >
            Descubre los productos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:border-primary-foreground/60 transition-all"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#campana"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
