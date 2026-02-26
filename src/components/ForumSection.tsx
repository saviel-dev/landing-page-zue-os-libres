import { useState } from "react";
import { MessageCircle, User, Clock, X, Send, Star, CheckCircle } from "lucide-react";

interface ForumPost {
  id: number;
  author: string;
  role: string;
  title: string;
  preview: string;
  time: string;
  replies: number;
  stars: number;
  result: string;
  comments: { author: string; text: string }[];
}

const initialPosts: ForumPost[] = [
  {
    id: 1,
    author: "María G.",
    role: "Profesora, 42 años",
    title: "La valeriana cambió mis noches en 10 días",
    preview:
      "Después de 3 años con insomnio crónico, empecé a tomar infusión de valeriana cada noche. En exactamente 10 días dormí 6 horas seguidas por primera vez en mucho tiempo. Nunca pensé que algo tan simple pudiera funcionar tan rápido. Lo combino con manzanilla y ya forma parte de mi noche.",
    time: "Hace 2 horas",
    replies: 14,
    stars: 5,
    result: "6 horas seguidas en 10 días",
    comments: [
      { author: "Carlos R.", text: "¡A mí también me funcionó! La combino con pasiflora para los días de más estrés." },
      { author: "Ana L.", text: "¿Cuántas tazas tomas por noche? Yo estoy empezando y quiero hacerlo bien." },
    ],
  },
  {
    id: 2,
    author: "Dr. Ramón Pérez",
    role: "Especialista en Trastornos del Sueño",
    title: "5 reglas de higiene del sueño que cambian todo — evidencia real",
    preview:
      "Como especialista en medicina del sueño, veo cada semana pacientes que mejoran radicalmente con cambios de hábito + plantas medicinales antes de recurrir a fármacos. Las 5 reglas que comparto aquí son las mismas que aplico en consulta: horario fijo, cero pantallas 60 min antes, infusión de 30 a 60 min antes, respiración 4-7-8 y temperatura de habitación entre 18-20°C. El 80% de mis pacientes nota mejoría en la primera semana.",
    time: "Hace 5 horas",
    replies: 23,
    stars: 5,
    result: "80% mejora en primera semana (consulta médica)",
    comments: [
      { author: "Laura M.", text: "Excelente guía, doctor. La regla de los 20 minutos es clave para mí." },
    ],
  },
  {
    id: 3,
    author: "Roberto S.",
    role: "Emprendedor, 35 años",
    title: "Pasiflora vs Melatonina: un mes de cada uno, los resultados me sorprendieron",
    preview:
      "Probé la melatonina durante un mes y luego la pasiflora otro mes. Con melatonina sí me dormía antes, pero al día siguiente me notaba lento, con niebla mental. Con pasiflora tardé unos días más en notar el efecto, pero a la semana dormía profundo y me despertaba con energía real. Empecé a dormir 7 horas vs las 5 que promediaba antes. Sin habituación, sin efectos de 'resaca'. Sin duda me quedo con la opción natural.",
    time: "Hace 1 día",
    replies: 8,
    stars: 5,
    result: "De 5 a 7 horas de sueño real",
    comments: [
      { author: "Sofía T.", text: "Gracias por compartir la comparación honesta. Estaba dudando entre las dos opciones." },
    ],
  },
  {
    id: 4,
    author: "Elena M.",
    role: "Madre de 2 hijos, 38 años",
    title: "Lavanda en aromaterapia: de 2 horas a 20 minutos para dormirme",
    preview:
      "Con dos hijos pequeños, mi cabeza no paraba por la noche. Compré un difusor de aceite esencial de lavanda y empecé a usarlo 30 minutos antes de acostarme, combinado con una infusión de manzanilla. En la tercera semana reduje el tiempo que tardaba en dormirme de más de 2 horas a unos 20 minutos. Mis hijos dicen que llego de mejor humor por la mañana — eso lo dice todo.",
    time: "Hace 2 días",
    replies: 11,
    stars: 5,
    result: "De 2h a 20 min para dormirse",
    comments: [],
  },
];

const renderStars = (count: number) =>
  Array.from({ length: 5 }).map((_, i) => (
    <Star key={i} className={`h-3.5 w-3.5 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"}`} />
  ));

const ForumSection = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);
  const [commentText, setCommentText] = useState("");
  const [commentName, setCommentName] = useState("");

  const handleAddComment = () => {
    if (!commentText.trim() || !commentName.trim() || !selectedPost) return;

    setPosts((prev) =>
      prev.map((p) =>
        p.id === selectedPost.id
          ? {
            ...p,
            replies: p.replies + 1,
            comments: [...p.comments, { author: commentName, text: commentText }],
          }
          : p
      )
    );

    setSelectedPost((prev) =>
      prev
        ? {
          ...prev,
          replies: prev.replies + 1,
          comments: [...prev.comments, { author: commentName, text: commentText }],
        }
        : null
    );

    setCommentText("");
    setCommentName("");
  };

  return (
    <section id="foro" className="py-24 gradient-primary-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Comunidad
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Personas reales. Experiencias reales.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Más de 200 personas ya han recuperado su descanso con Sueños Libres. Estas son sus historias —
            con datos concretos, sin exageraciones.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-card rounded-xl p-6 border border-border hover:shadow-brand transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center shrink-0">
                      <User className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground">{post.author}</span>
                      <span className="text-xs text-muted-foreground ml-1.5">· {post.role}</span>
                    </div>
                  </div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-2">{renderStars(post.stars)}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{post.preview}</p>
                  {/* Result badge */}
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-accent text-primary text-xs font-bold rounded-full px-3 py-1">
                    <CheckCircle className="h-3 w-3" />
                    {post.result}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-xs font-medium">{post.replies}</span>
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-muted-foreground text-sm mb-4">
            ¿Ya lo probaste? Comparte tu experiencia y ayuda a otros a recuperar su sueño.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-brand text-sm"
          >
            Únete a la comunidad →
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-card rounded-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto shadow-brand-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-border flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1 mb-2">{renderStars(selectedPost.stars)}</div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {selectedPost.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Por {selectedPost.author} ({selectedPost.role}) · {selectedPost.time}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-accent text-primary text-xs font-bold rounded-full px-3 py-1">
                  <CheckCircle className="h-3 w-3" />
                  {selectedPost.result}
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-foreground leading-relaxed mb-6">{selectedPost.preview}</p>

              {/* Comments */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Comentarios ({selectedPost.comments.length})
                </h4>
                {selectedPost.comments.map((c, i) => (
                  <div key={i} className="bg-muted rounded-lg p-4">
                    <p className="text-xs font-semibold text-foreground mb-1">{c.author}</p>
                    <p className="text-sm text-muted-foreground">{c.text}</p>
                  </div>
                ))}
                {selectedPost.comments.length === 0 && (
                  <p className="text-sm text-muted-foreground italic">
                    Sé el primero en comentar.
                  </p>
                )}
              </div>

              {/* Add comment */}
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Comparte tu experiencia..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
                    className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <button
                    onClick={handleAddComment}
                    className="gradient-primary text-primary-foreground rounded-lg px-4 py-2.5 hover:opacity-90 transition-opacity"
                    aria-label="Enviar comentario"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ForumSection;
