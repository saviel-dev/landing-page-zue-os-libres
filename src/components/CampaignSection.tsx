import { Leaf, Shield, Heart, Clock, Star, FlaskConical, Package, ArrowRight, CheckCircle } from "lucide-react";
import productValeriana from "@/assets/product-valeriana.jpg";
import productManzanilla from "@/assets/product-manzanilla.jpg";
import productPasiflora from "@/assets/product-pasiflora.jpg";
import productLavanda from "@/assets/product-lavanda.jpg";
import productMelisa from "@/assets/product-melisa.jpg";
import productAmapola from "@/assets/product-amapola.jpg";

const products = [
  {
    name: "Raíz de Valeriana",
    image: productValeriana,
    description:
      "El aliado número 1 contra el insomnio. Sus compuestos activos actúan sobre los receptores GABA del cerebro —el mismo mecanismo de los ansiolíticos— pero sin efectos secundarios ni riesgo de dependencia.",
    benefit: "Reduce el tiempo para dormirse hasta un 44% en 2 semanas",
    rating: 4.9,
    badge: "Más vendido",
  },
  {
    name: "Manzanilla",
    image: productManzanilla,
    description:
      "Usada por culturas de todo el mundo desde hace más de 3.000 años. La apigenina —su flavonoide principal— calma el sistema nervioso en minutos. Perfecta como señal nocturna para que tu cerebro sepa que es hora de descansar.",
    benefit: "Efecto calmante clínico en 20–30 min",
    rating: 4.8,
    badge: null,
  },
  {
    name: "Pasiflora",
    image: productPasiflora,
    description:
      "La solución para quienes no pueden 'apagar la mente'. Aumenta el GABA cerebral y reduce los despertares nocturnos. Ideal si tu insomnio viene del estrés laboral o la ansiedad.",
    benefit: "Reduce despertares nocturnos en un 36%",
    rating: 4.7,
    badge: "Para el estrés",
  },
  {
    name: "Lavanda",
    image: productLavanda,
    description:
      "Su linalool reduce el cortisol y la frecuencia cardíaca en solo 10 minutos. Úsala en aceite esencial o infusión. Los estudios muestran que mejora la profundidad del sueño sin efectos residuales al despertar.",
    benefit: "Mejora la profundidad del sueño REM",
    rating: 4.8,
    badge: null,
  },
  {
    name: "Melisa",
    image: productMelisa,
    description:
      "La planta del equilibrio nervioso. Especialmente efectiva para el insomnio leve a moderado asociado al estrés cotidiano. Actúa en aproximadamente 20 minutos y no genera somnolencia residual por la mañana.",
    benefit: "Equilibra el sistema nervioso en 20 min",
    rating: 4.6,
    badge: null,
  },
  {
    name: "Amapola de California",
    image: productAmapola,
    description:
      "Regula el ritmo circadiano de forma natural. Si tu problema es irse a dormir muy tarde o despertar antes de tiempo, esta planta reajusta tu reloj biológico sin sujetar tu cuerpo a una dependencia.",
    benefit: "Regula el ciclo circadiano naturalmente",
    rating: 4.5,
    badge: null,
  },
];

const benefits = [
  { icon: Leaf, title: "100% Natural", desc: "Sin químicos ni dependencia farmacológica" },
  { icon: Shield, title: "Avalado por la ciencia", desc: "Estudios clínicos respaldan cada planta" },
  { icon: Heart, title: "Sin efectos secundarios", desc: "Apto para uso prolongado sin riesgos" },
  { icon: Clock, title: "Resultados desde semana 1", desc: "La mayoría nota mejoras en los primeros 7 días" },
];

const scienceBlocks = [
  {
    science: "Estudios en PubMed demuestran que la valeriana reduce el tiempo de latencia del sueño hasta un 44% en comparación con placebo tras 2 semanas de uso.",
    daily: "En la práctica: pasas de dar vueltas en la cama durante 1 hora a quedarte dormido en menos de 20 minutos — sin pastillas.",
  },
  {
    science: "La apigenina de la manzanilla se une a los receptores de benzodiacepinas del cerebro, produciendo relajación muscular y sedación leve (Healthline, 2022).",
    daily: "En la práctica: una taza 30 minutos antes de dormir relaja tu cuerpo como si hubieras dado un paseo nocturno, pero desde tu sofá.",
  },
];

const testimonials = [
  {
    name: "María G.",
    role: "Profesora, 42 años",
    text: "Después de 3 años con insomnio crónico, con la valeriana y la pasiflora dormí 6 horas seguidas por primera vez en semanas — en solo 10 días. No me lo podía creer.",
    result: "6 horas seguidas en 10 días",
    stars: 5,
  },
  {
    name: "Roberto S.",
    role: "Emprendedor, 35 años",
    text: "Comparé la pasiflora con la melatonina durante un mes. Con pasiflora me despertaba descansado, sin la 'niebla' de la mañana. Y sin habituación.",
    result: "Sueño profundo sin niebla matutina",
    stars: 5,
  },
  {
    name: "Elena M.",
    role: "Madre de 2 hijos, 38 años",
    text: "Con lavanda y manzanilla reduje el tiempo que tardaba en dormirme de más de 2 horas a unos 20 minutos en la tercera semana. Mis hijos lo notaron: llegué de mejor humor.",
    result: "De 2h a 20 min para dormirse",
    stars: 5,
  },
];

const packItems = [
  "Valeriana + Pasiflora + Manzanilla premium",
  "Guía Gratuita: 7 Pasos de Higiene del Sueño",
  "Acceso a comunidad de apoyo en el foro",
  "1 Consulta gratuita con especialista",
  "Garantía de satisfacción 7 días",
];

const renderStars = (count: number) =>
  Array.from({ length: 5 }).map((_, i) => (
    <Star key={i} className={`h-4 w-4 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"}`} />
  ));

const CampaignSection = () => {
  return (
    <section id="campana" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Benefits strip */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group reveal-delay-${i + 1} flex flex-col items-center text-center p-8 rounded-xl gradient-primary-soft border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 cursor-pointer`}
            >
              <b.icon className="h-10 w-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
              <h3 className="font-semibold text-foreground text-lg mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Nuestros productos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            6 plantas avaladas por la ciencia<br />
            <span className="text-primary">que transforman tus noches</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada planta ha sido seleccionada por su eficacia clínica demostrada. No son remedios de abuela:
            son soluciones naturales con respaldo científico real. Tómalas en infusión 30–60 minutos antes de dormir.
          </p>
        </div>

        {/* Science blocks */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-16 reveal">
          {scienceBlocks.map((block, i) => (
            <div key={i} className="rounded-xl border border-primary/20 bg-card p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <FlaskConical className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Lo dice la ciencia</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{block.science}</p>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-1">Lo sientes en tu vida</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{block.daily}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`reveal reveal-delay-${(i % 3) + 1} group bg-card rounded-xl overflow-hidden border border-border hover:shadow-brand-lg transition-all duration-500 relative`}
            >
              {product.badge && (
                <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow">
                  {product.badge}
                </div>
              )}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-semibold text-foreground">{product.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-primary bg-accent rounded-full px-3 py-1.5 w-fit">
                  <Leaf className="h-3.5 w-3.5" />
                  {product.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pack Offer */}
        <div className="reveal max-w-3xl mx-auto mb-20">
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/40 bg-card p-8 shadow-brand-lg">
            <div className="absolute inset-0 gradient-primary-soft opacity-40 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Package className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">Oferta especial · Lanzamiento</p>
                  <h3 className="font-display text-2xl font-bold text-foreground">Pack Inicio — Duerme Bien en 4 Semanas</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Combinamos las 3 plantas más eficaces para el insomnio (Valeriana + Pasiflora + Manzanilla)
                en un pack de inicio sin riesgo. Si en 7 días no notas ninguna diferencia, te devolvemos el dinero.
              </p>

              <ul className="space-y-2 mb-6">
                {packItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground line-through">Precio habitual: ~35€</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-primary">desde 24$</span>
                    <span className="text-sm text-muted-foreground">/ 4 semanas</span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 font-semibold mt-1">
                    ✅ Garantía de satisfacción 7 días — sin preguntas
                  </p>
                </div>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl gradient-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity shadow-brand whitespace-nowrap"
                >
                  Quiero el Pack Inicio
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Urgency line */}
              <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-4">
                ⏳ <strong>Oferta de lanzamiento:</strong> precio reducido para las primeras 50 personas. Solo quedan plazas limitadas.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="reveal mb-16">
          <div className="text-center mb-10">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-2">Prueba social</p>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Personas reales. Resultados reales.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`reveal-delay-${i + 1} bg-card border border-border rounded-xl p-6 flex flex-col gap-3 hover:shadow-brand transition-all duration-300`}
              >
                <div className="flex items-center gap-1">{renderStars(t.stars)}</div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
                <div className="border-t border-border pt-3">
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <div className="mt-2 inline-flex items-center gap-1.5 bg-accent text-primary text-xs font-bold rounded-full px-3 py-1">
                    <CheckCircle className="h-3 w-3" />
                    {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 reveal">
          <p className="text-muted-foreground mb-2 text-sm">
            ¿Listo para transformar tus noches? Empieza sin riesgo — garantía de 7 días incluida.
          </p>
          <p className="text-xs text-muted-foreground mb-6 italic">
            "No vendemos sueño. Devolvemos el tuyo."
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 justify-center px-8 py-4 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-brand"
          >
            Quiero el Pack Inicio — Garantía 7 días
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
