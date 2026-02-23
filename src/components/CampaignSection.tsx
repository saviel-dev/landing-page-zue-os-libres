import { Leaf, Shield, Heart, Clock, Star } from "lucide-react";
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
      "El remedio más reconocido contra el insomnio. Reduce la ansiedad y mejora la calidad del sueño de forma natural.",
    benefit: "Reduce el tiempo para conciliar el sueño hasta en un 40%",
    rating: 4.9,
  },
  {
    name: "Manzanilla",
    image: productManzanilla,
    description:
      "Infusión suave y efectiva que calma el sistema nervioso. Ideal como ritual nocturno para preparar el descanso.",
    benefit: "Efecto calmante comprobado en estudios clínicos",
    rating: 4.8,
  },
  {
    name: "Pasiflora",
    image: productPasiflora,
    description:
      "Perfecta para quienes no pueden calmar sus pensamientos por la noche. Reduce significativamente los despertares nocturnos.",
    benefit: "Ideal para insomnio por estrés y ansiedad",
    rating: 4.7,
  },
  {
    name: "Lavanda",
    image: productLavanda,
    description:
      "Aromaterapia y relajación en un solo producto. Calma cuerpo y mente preparándote para un sueño reparador.",
    benefit: "Uso en aceite esencial o infusión",
    rating: 4.8,
  },
  {
    name: "Melisa",
    image: productMelisa,
    description:
      "Planta relajante que equilibra el sistema nervioso. Especialmente efectiva para el insomnio asociado al estrés.",
    benefit: "Equilibra el sistema nervioso en 20 min",
    rating: 4.6,
  },
  {
    name: "Amapola de California",
    image: productAmapola,
    description:
      "Regula el ciclo del sueño de forma natural, mejorando la conciliación sin efectos secundarios.",
    benefit: "Regula el ciclo circadiano naturalmente",
    rating: 4.5,
  },
];

const benefits = [
  { icon: Leaf, title: "100% Natural", desc: "Sin químicos ni dependencia farmacológica" },
  { icon: Shield, title: "Seguro", desc: "Avalado por estudios clínicos y tradición milenaria" },
  { icon: Heart, title: "Sin efectos secundarios", desc: "Apto para uso prolongado sin riesgos" },
  { icon: Clock, title: "Resultados rápidos", desc: "Mejoras desde la primera semana de uso" },
];

const CampaignSection = () => {
  return (
    <section id="campana" className="py-24 bg-background">
      <div className="container mx-auto px-4">
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
            Plantas medicinales para tu descanso
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada producto ha sido seleccionado por su eficacia comprobada en el tratamiento natural del
            insomnio. Tómalos en infusión 30-60 minutos antes de dormir.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`reveal reveal-delay-${(i % 3) + 1} group bg-card rounded-xl overflow-hidden border border-border hover:shadow-brand-lg transition-all duration-500`}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-3.5 w-3.5 text-primary fill-primary" />
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

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <p className="text-muted-foreground mb-4">
            ¿Listo para transformar tus noches? Consulta a tu especialista o contáctanos.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-brand"
          >
            Solicita información
          </a>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
