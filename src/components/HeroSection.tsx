import { ChevronDown, Moon, Star, ShieldCheck, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sleep.jpg";
import { useEffect, useRef } from "react";
import anime from "animejs";

const SleepParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const particles = containerRef.current.querySelectorAll(".sleep-particle");

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

  const elements = Array.from({ length: 25 }).map((_, i) => {
    const type = i % 3;
    const left = `${Math.random() * 100}%`;
    const bottom = `${Math.random() * -20}%`;

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
        {/* Urgency badge */}
        <div
          className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in-up"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          🌿 Oferta de lanzamiento · Solo 50 plazas disponibles
        </div>

        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Vuelve a dormir 7 horas seguidas
          <br />
          <span className="font-light opacity-80">sin pastillas, sin dependencia.</span>
        </h1>

        <p
          className="text-primary-foreground/70 text-sm uppercase tracking-[0.25em] mb-5 animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          Recupera tu sueño · Recupera tu vida · Sueños Libres
        </p>

        <p
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 animate-fade-in-up leading-relaxed"
          style={{ animationDelay: "0.35s" }}
        >
          Más del 30% de la población sufre insomnio. Nuestras plantas medicinales,
          avaladas por estudios clínicos, te devuelven el descanso profundo que mereces —
          desde la primera semana.
        </p>

        {/* Segmented micro-copy */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          {["Estrés laboral", "Noches de mamá", "Ansiedad estudiantil", "Cambios de edad"].map((tag) => (
            <span
              key={tag}
              className="text-xs bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground/70 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="#campana"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-all shadow-brand-lg"
          >
            <Moon className="h-4 w-4" />
            Quiero mi Pack de Inicio Gratis
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:border-primary-foreground/60 transition-all"
          >
            Habla con un especialista hoy
          </a>
        </div>

        {/* Trust line */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mt-6 animate-fade-in-up"
          style={{ animationDelay: "0.65s" }}
        >
          <span className="flex items-center gap-1.5 text-primary-foreground/60 text-xs">
            <ShieldCheck className="h-4 w-4 text-green-400" />
            Sin riesgo · Garantía 7 días
          </span>
          <span className="text-primary-foreground/30 text-xs">·</span>
          <span className="flex items-center gap-1.5 text-primary-foreground/60 text-xs">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            +200 personas ya duermen mejor
          </span>
          <span className="text-primary-foreground/30 text-xs">·</span>
          <span className="text-primary-foreground/60 text-xs">
            🌿 100% Plant-based · Sin dependencia
          </span>
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
