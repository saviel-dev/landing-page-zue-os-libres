import { ChevronDown, Moon, Star } from "lucide-react";
import heroImage from "@/assets/hero-sleep.jpg";
import { useEffect, useRef } from "react";
import anime from "animejs";

const SleepParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const particles = containerRef.current.querySelectorAll(".sleep-particle");

    // Animación continua de flotación
    anime({
      targets: particles,
      translateY: () => [anime.random(-20, 100), anime.random(-300, -800)],
      translateX: () => [anime.random(-50, 50), anime.random(-150, 150)],
      scale: () => [anime.random(0.5, 1), anime.random(0.8, 1.5)],
      opacity: [
        { value: 0, duration: 0 },
        { value: () => anime.random(0.2, 0.6), duration: 2000 },
        { value: 0, duration: 1500, delay: () => anime.random(2000, 5000) }
      ],
      rotate: () => anime.random(-45, 45),
      easing: "linear",
      duration: () => anime.random(6000, 12000),
      delay: anime.stagger(200),
      loop: true,
    });
  }, []);

  // Generamos un mix de estrellas, lunas y "Zzz"
  const elements = Array.from({ length: 25 }).map((_, i) => {
    const type = i % 3; // 0 = Zzz, 1 = Star, 2 = Moon
    const left = `${Math.random() * 100}%`;
    const bottom = `${Math.random() * -20}%`; // Empiezan un poco debajo de la pantalla o muy abajo

    return (
      <div
        key={i}
        className="sleep-particle absolute text-primary-foreground/40 font-display select-none will-change-transform"
        style={{ left, bottom, fontSize: `${Math.max(14, Math.random() * 32)}px` }}
      >
        {type === 0 ? "Zzz" : type === 1 ? <Star className="w-[1em] h-[1em]" /> : <Moon className="w-[1em] h-[1em]" />}
      </div>
    );
  });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-[2] overflow-hidden pointer-events-none"
    >
      {elements}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-hero-overlay z-[1]" />

      {/* Sleep Particles Foreground */}
      <SleepParticles />

      {/* Content */}
      <div className="relative z-[3] container mx-auto px-4 text-center">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce z-[3]"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
