import { useState } from "react";
import { MessageCircle, User, Clock, X, Send } from "lucide-react";

interface ForumPost {
  id: number;
  author: string;
  title: string;
  preview: string;
  time: string;
  replies: number;
  comments: { author: string; text: string }[];
}

const initialPosts: ForumPost[] = [
  {
    id: 1,
    author: "María G.",
    title: "La valeriana cambió mis noches",
    preview:
      "Después de 3 años con insomnio crónico, empecé a tomar infusión de valeriana cada noche y en 2 semanas noté una diferencia increíble...",
    time: "Hace 2 horas",
    replies: 14,
    comments: [
      { author: "Carlos R.", text: "¡A mí también me funcionó! La combino con manzanilla." },
      { author: "Ana L.", text: "¿Cuántas tazas tomas por noche?" },
    ],
  },
  {
    id: 2,
    author: "Dr. Pérez",
    title: "Guía: Higiene del sueño básica",
    preview:
      "Como especialista en trastornos del sueño, quiero compartir las 5 reglas fundamentales que todo paciente con insomnio debería seguir...",
    time: "Hace 5 horas",
    replies: 23,
    comments: [
      { author: "Laura M.", text: "Excelente guía, doctor. La regla de los 20 minutos es clave." },
    ],
  },
  {
    id: 3,
    author: "Roberto S.",
    title: "Pasiflora vs Melatonina: Mi experiencia",
    preview:
      "Probé ambas opciones durante un mes cada una. La pasiflora me dio un sueño más profundo y natural, sin la sensación de somnolencia al despertar...",
    time: "Hace 1 día",
    replies: 8,
    comments: [
      { author: "Sofía T.", text: "Interesante comparación, gracias por compartir." },
    ],
  },
  {
    id: 4,
    author: "Elena M.",
    title: "Lavanda en aromaterapia: resultados reales",
    preview:
      "Compré un difusor de aceite esencial de lavanda y lo uso 30 minutos antes de dormir. Los resultados han sido sorprendentes...",
    time: "Hace 2 días",
    replies: 11,
    comments: [],
  },
];

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
            Foro de experiencias
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comparte tu experiencia y aprende de quienes ya encontraron la solución natural a sus
            problemas de sueño.
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
                    <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center">
                      <User className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{post.author}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.time}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.preview}</p>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground shrink-0">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs font-medium">{post.replies}</span>
                </div>
              </div>
            </div>
          ))}
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
                <h3 className="font-display text-xl font-bold text-foreground">
                  {selectedPost.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Por {selectedPost.author} · {selectedPost.time}
                </p>
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
                    placeholder="Escribe un comentario..."
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
